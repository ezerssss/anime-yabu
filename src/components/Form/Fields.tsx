import { useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { FieldsStateInterface } from '../../interfaces/fields';
import classnames from 'classnames';
import * as EmailValidator from 'email-validator';
import Swal from 'sweetalert2';
import ClipLoader from 'react-spinners/ClipLoader';
import {
  registerAccountWithEmail,
  signInWithEmail,
} from '../../services/firebase';

interface FieldsProps {
  isLoggingIn: boolean;
}

function Fields(props: FieldsProps) {
  const { isLoggingIn } = props;

  const [fieldValues, setFieldValues] = useState<FieldsStateInterface>({
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputTypes, setInputTypes] = useState<Record<string, string>>({
    password: 'password',
    confirmPassword: 'password',
  });

  const renderFirstFieldText = isLoggingIn ? 'Login' : 'Email';
  const renderEmailInvalidText = !isEmailValid && (
    <p className="text-right text-sm mt-2 text-[#AD3C40]">Email Inválido</p>
  );
  const renderButtonText = !isLoading && (isLoggingIn ? 'Login' : 'Registrar');

  function handleTextChange(field: string, value: string): void {
    const newKeyValuePair: Record<string, string> = {};
    newKeyValuePair[field] = value;

    if (field === 'email') {
      setIsEmailValid(EmailValidator.validate(value));
    }

    setFieldValues({ ...fieldValues, ...newKeyValuePair });
  }

  function handleChangeInputType(field: string): void {
    const newKeyValuePair: Record<string, string> = {};

    if (inputTypes[field] === 'password') {
      newKeyValuePair[field] = 'text';
      setInputTypes({ ...inputTypes, ...newKeyValuePair });

      return;
    }

    newKeyValuePair[field] = 'password';
    setInputTypes({ ...inputTypes, ...newKeyValuePair });
  }

  function resetFieldValues(): void {
    setFieldValues({
      email: '',
      password: '',
      confirmPassword: '',
    });
  }

  async function handleRegister(): Promise<void> {
    setIsLoading(true);
    const { email, password } = fieldValues;
    const user = await registerAccountWithEmail(email, password);
    setIsLoading(false);
    Swal.fire(
      'Success!',
      `Created account ${user.user.email}, you can now log-in with your account`,
      'success',
    );
    resetFieldValues();
  }

  async function handleLogIn(): Promise<void> {
    setIsLoading(true);
    const { email, password } = fieldValues;
    const user = await signInWithEmail(email, password);
    setIsLoading(false);
    Swal.fire(
      'Success!',
      `Logged In with user id = ${user.user.uid}`,
      'success',
    );
    resetFieldValues();
  }

  async function handleSubmit(): Promise<void> {
    try {
      if (!isLoggingIn) {
        await handleRegister();

        return;
      }

      await handleLogIn();
    } catch (error: any) {
      console.error(error);
      setIsLoading(false);
      Swal.fire('Something went wrong!', error.message, 'error');
    }
  }

  const doesPasswordMatch = isLoggingIn
    ? true
    : fieldValues.password === fieldValues.confirmPassword;

  const renderPasswordDoesNotMatch = !doesPasswordMatch && (
    <p className="text-right text-sm mt-2 text-[#AD3C40]">
      Passwords does not match!
    </p>
  );

  const renderConfirmPassword = !isLoggingIn && (
    <div className="mb-6 ">
      <p className="text-sm">Confirmar Senha</p>
      <div className="relative">
        <input
          className="rounded-lg h-16 w-80 bg-[#574E5A] border-white border-[2px] p-[22px]"
          placeholder="• • • • • • •"
          type={inputTypes.confirmPassword}
          value={fieldValues.confirmPassword}
          onChange={(e) => handleTextChange('confirmPassword', e.target.value)}
        />
        <AiFillEye
          className="absolute right-[22px] bottom-[22px] cursor-pointer"
          onClick={() => handleChangeInputType('confirmPassword')}
        />
      </div>
      {renderPasswordDoesNotMatch}
    </div>
  );

  const isPasswordEmptyForRegister =
    !fieldValues.password.length || !fieldValues.confirmPassword?.length;

  const isPasswordEmpty = isLoggingIn
    ? !fieldValues.password.length
    : isPasswordEmptyForRegister;

  const isButtonDisabled =
    !isEmailValid ||
    !doesPasswordMatch ||
    isPasswordEmpty ||
    !fieldValues.email.length;

  const renderSpinner = isLoading && <ClipLoader />;

  return (
    <section className="mt-7">
      <div className="mb-6">
        <p className="text-sm">{renderFirstFieldText}</p>
        <input
          className={classnames(
            'rounded-lg h-16 w-80 bg-[#574E5A] border-[2px] p-[22px]',
            isEmailValid ? 'border-white' : 'border-[#AD3C40]',
          )}
          placeholder="usuario@"
          type="text"
          value={fieldValues.email}
          onChange={(e) => handleTextChange('email', e.target.value)}
        />
        {renderEmailInvalidText}
      </div>
      <div className="mb-6 relative">
        <p className="text-sm">Senha</p>
        <input
          className="rounded-lg h-16 w-80 bg-[#574E5A] border-white border-[2px] p-[22px]"
          placeholder="• • • • • • •"
          type={inputTypes.password}
          value={fieldValues.password}
          onChange={(e) => handleTextChange('password', e.target.value)}
        />
        <AiFillEye
          className="absolute right-[22px] bottom-[22px] cursor-pointer"
          onClick={() => handleChangeInputType('password')}
        />
      </div>
      {renderConfirmPassword}

      <button
        className="rounded-lg h-16 w-80 bg-[#E487FB] mt-2 mb-10 text-black font-bold"
        type="submit"
        disabled={isButtonDisabled}
        onClick={handleSubmit}
      >
        {renderButtonText}
        {renderSpinner}
      </button>
    </section>
  );
}

export default Fields;
