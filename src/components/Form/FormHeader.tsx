import maskLogo from '../../images/maskLogo.png';
import formHeaderMobile from '../../images/formHeaderMobile.png';

function FormHeader() {
  return (
    <>
      <img
        alt="mask"
        className="hidden xl:block mr-7 mb-4"
        src={maskLogo}
        height={149}
        width={145}
      />
      <img
        alt="mask"
        className="block xl:hidden mr-7 mb-4 mt-12"
        src={formHeaderMobile}
        height={153}
        width={306}
      />
      <section className="tracking-[.065em] text-center">
        <p className="font-black text-4xl hidden xl:block">ようこそ!</p>
        <p className="font-black text-4xl xl:hidden">ひさしぶり!</p>
        <p className="mt-2">
          <i className="hidden xl:block">Bem-vindo(a)!</i>
          <i className="xl:hidden">Olá, sentimos sua falta!</i>
        </p>
      </section>
    </>
  );
}

export default FormHeader;
