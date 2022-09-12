import { AiFillEye } from 'react-icons/ai';

interface FieldsProps {
  isLoggingIn: boolean;
}

function Fields(props: FieldsProps) {
  const { isLoggingIn } = props;

  const renderFirstFieldText = isLoggingIn ? 'Login' : 'Email';
  const renderConfirmPassword = !isLoggingIn && (
    <div className="mb-6 relative">
      <p className="text-sm">Confirmar Senha</p>
      <input
        className="rounded-lg h-16 w-80 bg-[#574E5A] border-white border-[2px] p-[22px]"
        placeholder="• • • • • • •"
        type="password"
      />
      <AiFillEye className="absolute right-[22px] bottom-[22px] cursor-pointer" />
    </div>
  );
  const renderButtonText = isLoggingIn ? 'Login' : 'Registrar';

  return (
    <section className="mt-7">
      <div className="mb-6">
        <p className="text-sm">{renderFirstFieldText}</p>
        <input
          className="rounded-lg h-16 w-80 bg-[#574E5A] border-white border-[2px] p-[22px]"
          placeholder="usuario@"
          type="text"
        />
      </div>
      <div className="mb-6 relative">
        <p className="text-sm">Senha</p>
        <input
          className="rounded-lg h-16 w-80 bg-[#574E5A] border-white border-[2px] p-[22px]"
          placeholder="• • • • • • •"
          type="password"
        />
        <AiFillEye className="absolute right-[22px] bottom-[22px] cursor-pointer" />
      </div>
      {renderConfirmPassword}

      <button
        className="rounded-lg h-16 w-80 bg-[#E487FB] mt-2 mb-10 text-black font-bold"
        type="submit"
      >
        {renderButtonText}
      </button>
    </section>
  );
}

export default Fields;
