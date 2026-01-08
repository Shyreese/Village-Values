import svgPaths from "./svg-na88d9mshn";
import imgImageVillageValuesLogo from "figma:asset/812e68f0e38eb12d17187ac3fd565ef3be28e713.png";

function Container() {
  return <div className="absolute left-[48px] opacity-30 size-[110px] top-[128px]" data-name="Container" />;
}

function Container1() {
  return <div className="absolute left-[543.5px] opacity-30 size-[100px] top-[685.73px]" data-name="Container" />;
}

function Container2() {
  return <div className="absolute left-[2046px] opacity-30 size-[80px] top-[753.73px]" data-name="Container" />;
}

function Container3() {
  return (
    <div className="absolute bg-[#149496] h-[40px] left-[285.45px] rounded-[2.23696e+07px] top-0 w-[197.094px]" data-name="Container">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[99.5px] not-italic text-[16px] text-center text-nowrap text-white top-[9.33px] translate-x-[-50%] whitespace-pre">{`Resources & Support`}</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute font-['Poppins:Bold',sans-serif] h-[134.396px] leading-[67.2px] left-0 not-italic text-[#232e43] text-[56px] text-center text-nowrap top-[64px] w-[768px] whitespace-pre" data-name="Heading 1">
      <p className="absolute left-[383.71px] top-[5px] translate-x-[-50%]">Your Village of Support,</p>
      <p className="absolute left-[384.69px] top-[72.2px] translate-x-[-50%]">All in One Place</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[65px] left-0 top-[222.4px] w-[768px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[32.5px] left-[384.28px] not-italic text-[#1e7872] text-[20px] text-center top-[1.67px] translate-x-[-50%] w-[733px]">{`Resources collected by our Village Values Research & Resource Department to help your family grow, thrive, and feel supported every step of the way.`}</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-white h-[72px] left-0 rounded-[2.23696e+07px] top-0 w-[672px]" data-name="Text Input">
      <div className="content-stretch flex h-[72px] items-center overflow-clip pl-[64px] pr-[24px] py-[20px] relative rounded-[inherit] w-[672px]">
        <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[18px] text-[rgba(35,46,67,0.5)] text-nowrap whitespace-pre">Search resources...</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[rgba(20,148,150,0.2)] border-solid inset-0 pointer-events-none rounded-[2.23696e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[24px] size-[24px] top-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M21 21L16.66 16.66" id="Vector" stroke="var(--stroke-0, #1E7872)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p19568f00} id="Vector_2" stroke="var(--stroke-0, #1E7872)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function ResourcesHero() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="ResourcesHero">
      <TextInput />
      <Icon />
    </div>
  );
}

function ResourcesHero1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="ResourcesHero">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[335.66px] not-italic text-[14px] text-[rgba(30,120,114,0.7)] text-center text-nowrap top-[0.67px] translate-x-[-50%] whitespace-pre">{`Try searching: "sleep tips", "safety checklist", or "local services"`}</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[108px] items-start left-[48px] top-[335.4px] w-[672px]" data-name="Container">
      <ResourcesHero />
      <ResourcesHero1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[443.396px] left-[703px] top-[251.17px] w-[768px]" data-name="Container">
      <Container3 />
      <Heading />
      <Paragraph />
      <Container4 />
    </div>
  );
}

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

function Header() {
  return (
    <div className="absolute bg-[#f5edda] content-stretch flex h-[88px] items-center justify-between left-0 px-[567px] py-0 top-0 w-[2174px]" data-name="Header">
      <Link />
      <Navigation />
      <Button />
    </div>
  );
}

function VectorHouse() {
  return (
    <div className="absolute left-[140px] size-[252px] top-[641px]" data-name="Vector House 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector House 1" opacity="0.3">
          <path d={svgPaths.p2f98fdf0} fill="var(--fill-0, #E5795B)" id="Vector" />
          <path d={svgPaths.p14f1c380} fill="var(--fill-0, #E5795B)" id="Vector_2" />
          <path d={svgPaths.p244d6640} fill="var(--fill-0, #E5795B)" id="Vector_3" />
          <path d={svgPaths.p327f8e00} fill="var(--fill-0, #E5795B)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function VectorTree() {
  return (
    <div className="absolute h-[302.473px] left-[1775px] top-[591px] w-[309.281px]" data-name="Vector Tree 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 310 303">
        <g id="Vector Tree 3" opacity="0.3">
          <path d={svgPaths.p3c08cf00} fill="var(--fill-0, #149496)" id="Vector" />
          <path d={svgPaths.p20c6d400} fill="var(--fill-0, #149496)" id="Vector_2" />
          <path d={svgPaths.pd699f00} fill="var(--fill-0, #149496)" id="Vector_3" />
          <path d={svgPaths.p1e015c00} fill="var(--fill-0, #149496)" id="Vector_4" />
          <path d={svgPaths.pb2a9280} fill="var(--fill-0, #149496)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function VectorGrass() {
  return (
    <div className="absolute left-[1534px] size-[252px] top-[723px]" data-name="Vector Grass 4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector Grass 4">
          <path d={svgPaths.p15f51900} fill="var(--fill-0, #1E7872)" id="Vector" opacity="0.3" />
          <path d={svgPaths.p2b360600} fill="var(--fill-0, #1E7872)" id="Vector_2" opacity="0.3" />
          <path d={svgPaths.p3b3d4d00} fill="var(--fill-0, #1E7872)" id="Vector_3" opacity="0.3" />
          <path d={svgPaths.p2eb2a780} fill="var(--fill-0, #1E7872)" id="Vector_4" opacity="0.3" />
          <path d={svgPaths.p171c380} fill="var(--fill-0, #1E7872)" id="Vector_5" opacity="0.3" />
          <path d={svgPaths.p1030c600} fill="var(--fill-0, #1E7872)" id="Vector_6" opacity="0.3" />
          <path d={svgPaths.p26c23280} fill="var(--fill-0, #1E7872)" id="Vector_7" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

export default function ResourcesHero2() {
  return (
    <div className="bg-gradient-to-b from-[#f5edda] relative size-full to-[#ffffff]" data-name="ResourcesHero">
      <Container />
      <Container1 />
      <Container2 />
      <Container5 />
      <Header />
      <VectorHouse />
      <VectorTree />
      <VectorGrass />
    </div>
  );
}