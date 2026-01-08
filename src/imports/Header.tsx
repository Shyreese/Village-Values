import imgImageVillageValuesLogo from "figma:asset/812e68f0e38eb12d17187ac3fd565ef3be28e713.png";

function ImageVillageValuesLogo() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative rounded-[2.23696e+07px] shrink-0" data-name="Image (Village Values Logo)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[2.23696e+07px] size-full" src={imgImageVillageValuesLogo} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[48px] w-full" />
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center relative size-[48px]">
        <ImageVillageValuesLogo />
      </div>
    </div>
  );
}

function Link1() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[67.594px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Programs</p>
    </div>
  );
}

function Link2() {
  return (
    <div className="absolute h-[24px] left-[99.59px] top-0 w-[43.583px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">About</p>
    </div>
  );
}

function Link3() {
  return (
    <div className="absolute h-[24px] left-[175.18px] top-0 w-[39.844px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Enroll</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[24px] left-[247.02px] top-0 w-[52.698px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Careers</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute h-[24px] left-[331.72px] top-0 w-[70.802px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Resources</p>
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute h-[24px] left-[434.52px] top-0 w-[54.719px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Contact</p>
    </div>
  );
}

function Navigation() {
  return (
    <div className="h-[24px] relative shrink-0 w-[489.24px]" data-name="Navigation">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[489.24px]">
        <Link1 />
        <Link2 />
        <Link3 />
        <Link4 />
        <Link5 />
        <Link6 />
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#149496] h-[44px] relative rounded-[2.23696e+07px] shrink-0 w-[149.802px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[44px] relative w-[149.802px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[16px] text-nowrap text-white top-[11.33px] tracking-[0.4px] uppercase whitespace-pre">Book a Visit</p>
      </div>
    </div>
  );
}

export default function Header() {
  return (
    <div className="bg-[#f5edda] relative size-full" data-name="Header">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center justify-between px-[567px] py-0 relative size-full">
          <Link />
          <Navigation />
          <Button />
        </div>
      </div>
    </div>
  );
}