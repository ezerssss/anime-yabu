import { AiOutlineInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';

interface FormFooterProps {
  isLoggingIn: boolean;
  onChangeLogInState: () => void;
}

function FormFooter(props: FormFooterProps) {
  const { isLoggingIn, onChangeLogInState } = props;

  const renderFooterText = isLoggingIn ? (
    <p className="tracking-[.065em]">
      Não tem conta?{' '}
      <span
        className="text-[#E487FB] cursor-pointer"
        onClick={onChangeLogInState}
      >
        Registre-se
      </span>
    </p>
  ) : (
    <p className="tracking-[.065em]">
      Já é membro?{' '}
      <span
        className="text-[#E487FB] cursor-pointer"
        onClick={onChangeLogInState}
      >
        Faça Login
      </span>
    </p>
  );

  const renderAboveIconsText = isLoggingIn
    ? 'Usar Login Social'
    : 'Ou se registre com';

  return (
    <>
      <div className="flex w-[310px] justify-center items-center gap-5 mb-6">
        <hr className="w-[25%] border-t-4" />
        <p className="text-sm min-w-[120px]">{renderAboveIconsText}</p>
        <hr className="w-[25%] border-t-4" />
      </div>
      <div className="flex justify-center gap-10 mb-12">
        <div className="rounded-lg h-[51px] w-[51px] bg-[#574E5A] border-white border-[2px] flex justify-center items-center cursor-pointer">
          <AiOutlineInstagram size={36} />
        </div>
        <div className="rounded-lg h-[51px] w-[51px] bg-[#574E5A] border-white border-[2px] flex justify-center items-center cursor-pointer">
          <AiOutlineTwitter size={36} />
        </div>
        <div className="rounded-lg h-[51px] w-[51px] bg-[#574E5A] border-white border-[2px] flex justify-center items-center cursor-pointer">
          <GrFacebookOption size={36} />
        </div>
      </div>
      {renderFooterText}
    </>
  );
}

export default FormFooter;
