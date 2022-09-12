import tanjiro from '../../images/tanjiro.png';

function SideBanner() {
  return (
    <div className="hidden xl:flex items-center w-1/2 bg-[#3E1149] relative flex-col">
      <div className="mt-20 w-[400px] h-[400px] lg:w-[548px] lg:h-[548px] rounded-full bg-[#E487FB]" />
      <img
        alt="tanjiro"
        className="absolute top-[13%] 2xl:right-[50px]"
        src={tanjiro}
        height={625}
        width={622}
      />
      <p className="text-white mt-28 font-black tracking-[.065em] text-[80px]">
        anime<span className="text-[#CA38ED]">yabu.</span>
      </p>
      <p className="max-w-[463px] text-center text-white">
        Assista animes online em HD, legendado ou dublado, no seu celular ou
        computador. <br />{' '}
        <strong>Animeyabu, o seu portal de animes online!</strong>
      </p>
      <section className="flex gap-2 mt-5">
        <div className="bg-[#C4C4C4] w-[39px] h-[6px] rounded-xl cursor-pointer" />
        <div className="bg-[#C4C4C4] w-[39px] h-[6px] rounded-xl opacity-50 cursor-pointer" />
        <div className="bg-[#C4C4C4] w-[39px] h-[6px] rounded-xl opacity-50 cursor-pointer" />
      </section>
    </div>
  );
}

export default SideBanner;
