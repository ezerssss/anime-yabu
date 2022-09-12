import { AiOutlineRollback } from 'react-icons/ai';

import textLogo from '../../images/textLogo.png';

function CompanyTextLogo() {
  return (
    <>
      <span className="hidden xl:inline-flex items-center">
        <img alt="text-logo" height={46} width={46} src={textLogo} />
        <span className="ml-2 text-xl font-black">
          anime
          <span className="text-[#CA38ED]">yabu.</span>
        </span>
      </span>
      <AiOutlineRollback
        className="absolute top-10 xl:top-24 cursor-pointer"
        size={40}
      />
    </>
  );
}

export default CompanyTextLogo;
