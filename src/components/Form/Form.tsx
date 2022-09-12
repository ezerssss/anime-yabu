import { useState } from 'react';
import CompanyTextLogo from './CompanyTextLogo';
import Fields from './Fields';
import FormFooter from './FormFooter';
import FormHeader from './FormHeader';

function Form() {
  const [isLoggingIn, setIsLoggingIn] = useState<boolean>(true);

  function handleIsLoggingInState(): void {
    setIsLoggingIn(!isLoggingIn);
  }

  return (
    <div className="w-full xl:w-1/2 xl:bg-black p-6 pb-20 text-white">
      <CompanyTextLogo />
      <div className="flex items-center flex-col mt-4">
        <FormHeader />
        <Fields isLoggingIn={isLoggingIn} />
        <FormFooter
          isLoggingIn={isLoggingIn}
          onChangeLogInState={handleIsLoggingInState}
        />
      </div>
    </div>
  );
}

export default Form;
