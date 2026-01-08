import svgPaths from "./svg-cqjhf6dnru";
import imgImageVillageValuesLogo from "figma:asset/812e68f0e38eb12d17187ac3fd565ef3be28e713.png";
import imgImageWithFallback from "figma:asset/99280e67b5cc4b9be8bcb3ff8eecacca44d2b7ba.png";

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

function ResourcesHero2() {
  return (
    <div className="absolute bg-gradient-to-b from-[#f5edda] h-[913.729px] left-0 overflow-clip to-[#ffffff] top-0 w-[2174px]" data-name="ResourcesHero">
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

function ParentResources() {
  return (
    <div className="absolute h-[52px] left-0 top-0 w-[1040px]" data-name="ParentResources">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[52px] left-[519.74px] not-italic text-[#232e43] text-[40px] text-center text-nowrap top-[3.33px] translate-x-[-50%] whitespace-pre">Parent Resources</p>
    </div>
  );
}

function ParentResources1() {
  return (
    <div className="absolute h-[56px] left-[184px] top-[68px] w-[672px]" data-name="ParentResources">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-[336.24px] not-italic text-[#1e7872] text-[20px] text-center top-[1.67px] translate-x-[-50%] w-[657px]">{`Everything you need to support your child's growth and your family's well-being`}</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[124px] relative shrink-0 w-full" data-name="Container">
      <ParentResources />
      <ParentResources1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p12922f00} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M20 16H20.0133" id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2b75c580} id="Vector_3" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M12 16H12.0133" id="Vector_4" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function ParentResources2() {
  return (
    <div className="absolute bg-[rgba(20,148,150,0.1)] content-stretch flex items-center justify-center left-[32px] rounded-[16px] size-[64px] top-[32px]" data-name="ParentResources">
      <Icon1 />
    </div>
  );
}

function ParentResources3() {
  return <div className="absolute h-[39.198px] left-[32px] top-[112px] w-[266.667px]" data-name="ParentResources" />;
}

function ParentResources4() {
  return (
    <div className="absolute h-[45.5px] left-[32px] top-[112.27px] w-[266.667px]" data-name="ParentResources">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] top-px w-[189px]">Milestones, growth charts, and developmental stages</p>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[77.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[77.781px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#149496] text-[14px] top-[0.67px] w-[78px]">12 resources</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[13.813px]">
        <p className="absolute font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] leading-[24px] left-0 text-[#c49a3a] text-[16px] text-nowrap top-[1.33px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          →
        </p>
      </div>
    </div>
  );
}

function ParentResources5() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-between left-[32px] top-[220.7px] w-[266.667px]" data-name="ParentResources">
      <Text />
      <Text1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-[#f5edda] h-[315.896px] left-0 rounded-[16px] top-0 w-[330.667px]" data-name="Container">
      <ParentResources2 />
      <ParentResources3 />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-[110px] not-italic text-[#232e43] text-[28px] top-[27.27px] w-[221px]">Child Development</p>
      <ParentResources4 />
      <ParentResources5 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p9921600} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function ParentResources6() {
  return (
    <div className="absolute bg-[rgba(20,148,150,0.1)] content-stretch flex items-center justify-center left-[32px] rounded-[16px] size-[64px] top-[32px]" data-name="ParentResources">
      <Icon2 />
    </div>
  );
}

function ParentResources7() {
  return (
    <div className="absolute h-[39.198px] left-[110.33px] top-[32.27px] w-[266.667px]" data-name="ParentResources">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-0 not-italic text-[#232e43] text-[28px] text-nowrap top-[10px] whitespace-pre">Parenting Tips</p>
    </div>
  );
}

function ParentResources8() {
  return <div className="absolute h-[45.5px] left-[32px] top-[159.2px] w-[266.667px]" data-name="ParentResources" />;
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[77.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[77.781px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#149496] text-[14px] top-[0.67px] w-[78px]">18 resources</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[13.813px]">
        <p className="absolute font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] leading-[24px] left-0 text-[#c49a3a] text-[16px] text-nowrap top-[1.33px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          →
        </p>
      </div>
    </div>
  );
}

function ParentResources9() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-between left-[32px] top-[220.7px] w-[266.667px]" data-name="ParentResources">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-[#f5edda] h-[315.896px] left-[354.67px] rounded-[16px] top-0 w-[330.667px]" data-name="Container">
      <ParentResources6 />
      <ParentResources7 />
      <ParentResources8 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-[32.33px] not-italic text-[#1e7872] text-[14px] top-[104.27px] w-[226px]">Expert advice for everyday parenting challenges</p>
      <ParentResources9 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p186c1a00} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function ParentResources10() {
  return (
    <div className="absolute bg-[rgba(20,148,150,0.1)] content-stretch flex items-center justify-center left-[32px] rounded-[16px] size-[64px] top-[32px]" data-name="ParentResources">
      <Icon3 />
    </div>
  );
}

function ParentResources11() {
  return (
    <div className="absolute h-[45.5px] left-[-0.33px] top-[0.27px] w-[266.667px]" data-name="ParentResources">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] top-px w-[207px]">Schedules, routines, and nutrition resources</p>
    </div>
  );
}

function ParentResources12() {
  return (
    <div className="absolute h-[78.396px] left-[32px] top-[112px] w-[266.667px]" data-name="ParentResources">
      <ParentResources11 />
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[77.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[77.781px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#149496] text-[14px] top-[0.67px] w-[78px]">15 resources</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[13.813px]">
        <p className="absolute font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] leading-[24px] left-0 text-[#c49a3a] text-[16px] text-nowrap top-[1.33px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          →
        </p>
      </div>
    </div>
  );
}

function ParentResources13() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-between left-[32px] top-[259.9px] w-[266.667px]" data-name="ParentResources">
      <Text4 />
      <Text5 />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute bg-[#f5edda] h-[315.896px] left-[709.33px] rounded-[16px] top-0 w-[330.667px]" data-name="Container">
      <ParentResources10 />
      <ParentResources12 />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-[106.67px] not-italic text-[#232e43] text-[28px] top-[24.27px] w-[224px]">{`Sleep & Feeding Guides`}</p>
      <ParentResources13 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M16 24V6.66667" id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p10890b00} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2d575c00} id="Vector_3" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p15c192c0} id="Vector_4" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p6cab300} id="Vector_5" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p545e680} id="Vector_6" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p3ab63600} id="Vector_7" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.pa476500} id="Vector_8" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function ParentResources14() {
  return (
    <div className="absolute bg-[rgba(20,148,150,0.1)] content-stretch flex items-center justify-center left-[32px] rounded-[16px] size-[64px] top-[32px]" data-name="ParentResources">
      <Icon4 />
    </div>
  );
}

function ParentResources15() {
  return (
    <div className="absolute h-[39.198px] left-[110px] top-[28.38px] w-[266.667px]" data-name="ParentResources">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-0 not-italic text-[#232e43] text-[28px] top-0 w-[170px]">Behavior Tools</p>
    </div>
  );
}

function ParentResources16() {
  return <div className="absolute h-[45.5px] left-[32px] top-[159.2px] w-[266.667px]" data-name="ParentResources" />;
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[77.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[77.781px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#149496] text-[14px] top-[0.67px] w-[78px]">10 resources</p>
      </div>
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[13.813px]">
        <p className="absolute font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] leading-[24px] left-0 text-[#c49a3a] text-[16px] text-nowrap top-[1.33px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          →
        </p>
      </div>
    </div>
  );
}

function ParentResources17() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-between left-[32px] top-[220.7px] w-[266.667px]" data-name="ParentResources">
      <Text6 />
      <Text7 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[#f5edda] h-[315.896px] left-0 rounded-[16px] top-[339.9px] w-[330.667px]" data-name="Container">
      <ParentResources14 />
      <ParentResources15 />
      <ParentResources16 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-[32px] not-italic text-[#1e7872] text-[14px] top-[113.38px] w-[202px]">Positive discipline and emotional regulation strategies</p>
      <ParentResources17 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p27a3200} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p3c1b880} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p16bbf900} id="Vector_3" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2ee517c0} id="Vector_4" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function ParentResources18() {
  return (
    <div className="absolute bg-[rgba(20,148,150,0.1)] content-stretch flex items-center justify-center left-[32px] rounded-[16px] size-[64px] top-[32px]" data-name="ParentResources">
      <Icon5 />
    </div>
  );
}

function ParentResources19() {
  return <div className="absolute h-[39.198px] left-[32px] top-[112px] w-[266.667px]" data-name="ParentResources" />;
}

function ParentResources20() {
  return <div className="absolute h-[45.5px] left-[32px] top-[159.2px] w-[266.667px]" data-name="ParentResources" />;
}

function Text8() {
  return (
    <div className="h-[20px] relative shrink-0 w-[70.24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[70.24px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#149496] text-[14px] top-[0.67px] w-[71px]">8 resources</p>
      </div>
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[13.813px]">
        <p className="absolute font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] leading-[24px] left-0 text-[#c49a3a] text-[16px] text-nowrap top-[1.33px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          →
        </p>
      </div>
    </div>
  );
}

function ParentResources21() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-between left-[32px] top-[220.7px] w-[266.667px]" data-name="ParentResources">
      <Text8 />
      <Text9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[#f5edda] h-[315.896px] left-[354.67px] rounded-[16px] top-[339.9px] w-[330.667px]" data-name="Container">
      <ParentResources18 />
      <ParentResources19 />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-[110.33px] not-italic text-[#232e43] text-[28px] text-nowrap top-[44.38px] whitespace-pre">Local Events</p>
      <ParentResources20 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-[32.33px] not-italic text-[#1e7872] text-[14px] top-[113.38px] w-[249px]">Family-friendly activities and community gatherings</p>
      <ParentResources21 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M10.6667 2.66667V8" id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M21.3333 2.66667V8" id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p8d31b00} id="Vector_3" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M4 13.3333H28" id="Vector_4" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function ParentResources22() {
  return (
    <div className="absolute bg-[rgba(20,148,150,0.1)] content-stretch flex items-center justify-center left-[32px] rounded-[16px] size-[64px] top-[32px]" data-name="ParentResources">
      <Icon6 />
    </div>
  );
}

function ParentResources23() {
  return (
    <div className="absolute h-[78.396px] left-[32px] top-[112px] w-[266.667px]" data-name="ParentResources">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-[-3.33px] not-italic text-[#1e7872] text-[14px] top-[0.38px] w-[246px]">Extracurricular activities and enrichment options</p>
    </div>
  );
}

function ParentResources24() {
  return <div className="absolute h-[45.5px] left-[32px] top-[198.4px] w-[266.667px]" data-name="ParentResources" />;
}

function Text10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[77.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[77.781px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#149496] text-[14px] top-[0.67px] w-[78px]">14 resources</p>
      </div>
    </div>
  );
}

function Text11() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[13.813px]">
        <p className="absolute font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] leading-[24px] left-0 text-[#c49a3a] text-[16px] text-nowrap top-[1.33px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          →
        </p>
      </div>
    </div>
  );
}

function ParentResources25() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-between left-[32px] top-[259.9px] w-[266.667px]" data-name="ParentResources">
      <Text10 />
      <Text11 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[#f5edda] h-[315.896px] left-[709.33px] rounded-[16px] top-[339.9px] w-[330.667px]" data-name="Container">
      <ParentResources22 />
      <ParentResources23 />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-[117.67px] not-italic text-[#232e43] text-[28px] top-[27.38px] w-[183px]">After-School Programs</p>
      <ParentResources24 />
      <ParentResources25 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M16 9.33333V28" id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p308d0700} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function ParentResources26() {
  return (
    <div className="absolute bg-[rgba(20,148,150,0.1)] content-stretch flex items-center justify-center left-[32px] rounded-[16px] size-[64px] top-[32px]" data-name="ParentResources">
      <Icon7 />
    </div>
  );
}

function ParentResources27() {
  return (
    <div className="absolute h-[78.396px] left-[110px] top-[13.48px] w-[266.667px]" data-name="ParentResources">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-0 not-italic text-[#232e43] text-[28px] top-[10px] w-[201px]">Early Reading Resources</p>
    </div>
  );
}

function ParentResources28() {
  return (
    <div className="absolute h-[45.5px] left-[34px] top-[120.48px] w-[266.667px]" data-name="ParentResources">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] top-px w-[229px]">Literacy tools, book lists, and reading activities</p>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[20px] relative shrink-0 w-[77.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[77.781px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#149496] text-[14px] top-[0.67px] w-[78px]">20 resources</p>
      </div>
    </div>
  );
}

function Text13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[13.813px]">
        <p className="absolute font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] leading-[24px] left-0 text-[#c49a3a] text-[16px] text-nowrap top-[1.33px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          →
        </p>
      </div>
    </div>
  );
}

function ParentResources29() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-between left-[32px] top-[259.9px] w-[266.667px]" data-name="ParentResources">
      <Text12 />
      <Text13 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[#f5edda] h-[315.896px] left-0 rounded-[16px] top-[679.79px] w-[330.667px]" data-name="Container">
      <ParentResources26 />
      <ParentResources27 />
      <ParentResources28 />
      <ParentResources29 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.pbbd9800} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M26.6667 2.66667V8" id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M29.3333 5.33333H24" id="Vector_3" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.pecb2400} id="Vector_4" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function ParentResources30() {
  return (
    <div className="absolute bg-[rgba(20,148,150,0.1)] content-stretch flex items-center justify-center left-[32px] rounded-[16px] size-[64px] top-[32px]" data-name="ParentResources">
      <Icon8 />
    </div>
  );
}

function ParentResources31() {
  return (
    <div className="absolute h-[22.75px] left-[0.33px] top-[0.48px] w-[266.667px]" data-name="ParentResources">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] top-px w-[244px]">Resources for parent and child well-being</p>
    </div>
  );
}

function ParentResources32() {
  return (
    <div className="absolute h-[78.396px] left-[32px] top-[112px] w-[266.667px]" data-name="ParentResources">
      <ParentResources31 />
    </div>
  );
}

function Text14() {
  return (
    <div className="h-[20px] relative shrink-0 w-[77.781px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[77.781px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#149496] text-[14px] top-[0.67px] w-[78px]">11 resources</p>
      </div>
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[13.813px]">
        <p className="absolute font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] leading-[24px] left-0 text-[#c49a3a] text-[16px] text-nowrap top-[1.33px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          →
        </p>
      </div>
    </div>
  );
}

function ParentResources33() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-between left-[32px] top-[237.15px] w-[266.667px]" data-name="ParentResources">
      <Text14 />
      <Text15 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-[#f5edda] h-[315.896px] left-[354.67px] rounded-[16px] top-[679.79px] w-[330.667px]" data-name="Container">
      <ParentResources30 />
      <ParentResources32 />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-[112.33px] not-italic text-[#232e43] text-[28px] top-[27.48px] w-[213px]">Mental Health Support</p>
      <ParentResources33 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p13a8aa80} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.pf6f00} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p17d8f380} id="Vector_3" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p3b88f000} id="Vector_4" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p3c98a360} id="Vector_5" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function ParentResources34() {
  return (
    <div className="absolute bg-[rgba(20,148,150,0.1)] content-stretch flex items-center justify-center left-[32px] rounded-[16px] size-[64px] top-[32px]" data-name="ParentResources">
      <Icon9 />
    </div>
  );
}

function ParentResources35() {
  return (
    <div className="absolute h-[78.396px] left-[32px] top-[112px] w-[266.667px]" data-name="ParentResources">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-[-0.33px] not-italic text-[#1e7872] text-[14px] top-[2.48px] w-[255px]">Support for children with unique learning needs</p>
    </div>
  );
}

function ParentResources36() {
  return <div className="absolute h-[45.5px] left-[32px] top-[198.4px] w-[266.667px]" data-name="ParentResources" />;
}

function Text16() {
  return (
    <div className="h-[20px] relative shrink-0 w-[70.24px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[70.24px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#149496] text-[14px] top-[0.67px] w-[71px]">9 resources</p>
      </div>
    </div>
  );
}

function Text17() {
  return (
    <div className="h-[24px] relative shrink-0 w-[13.813px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[13.813px]">
        <p className="absolute font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] leading-[24px] left-0 text-[#c49a3a] text-[16px] text-nowrap top-[1.33px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
          →
        </p>
      </div>
    </div>
  );
}

function ParentResources37() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-between left-[32px] top-[259.9px] w-[266.667px]" data-name="ParentResources">
      <Text16 />
      <Text17 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute bg-[#f5edda] h-[315.896px] left-[709.33px] rounded-[16px] top-[679.79px] w-[330.667px]" data-name="Container">
      <ParentResources34 />
      <ParentResources35 />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-[108.67px] not-italic text-[#232e43] text-[28px] top-[27.48px] w-[205px]">Special Needs Services</p>
      <ParentResources36 />
      <ParentResources37 />
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[995.688px] relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
      <Container12 />
      <Container13 />
      <Container14 />
      <Container15 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Italic',sans-serif] italic leading-[24px] left-[520.21px] text-[#1e7872] text-[16px] text-center text-nowrap top-[1.33px] translate-x-[-50%] whitespace-pre">{`Can't find what your looking for or know a great resource to add to the list? Contact us!`}</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] h-[1255.69px] items-start left-[487px] px-[80px] py-0 top-[96px] w-[1200px]" data-name="Container">
      <Container6 />
      <Container16 />
      <Paragraph1 />
    </div>
  );
}

function ParentResources38() {
  return (
    <div className="absolute bg-white h-[1447.69px] left-0 overflow-clip top-[913.73px] w-[2174px]" data-name="ParentResources">
      <Container17 />
    </div>
  );
}

function ChildcareEducation() {
  return (
    <div className="absolute h-[52px] left-0 top-0 w-[1040px]" data-name="ChildcareEducation">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[52px] left-[519.86px] not-italic text-[#232e43] text-[40px] text-center text-nowrap top-[3.33px] translate-x-[-50%] whitespace-pre">Childcare Education</p>
    </div>
  );
}

function ChildcareEducation1() {
  return (
    <div className="absolute h-[28px] left-[184px] top-[68px] w-[672px]" data-name="ChildcareEducation">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-[336.39px] not-italic text-[#1e7872] text-[20px] text-center text-nowrap top-[1.67px] translate-x-[-50%] whitespace-pre">Training resources for our staff and interns</p>
    </div>
  );
}

function ChildcareEducation2() {
  return (
    <div className="absolute h-[24px] left-0 top-[108px] w-[1040px]" data-name="ChildcareEducation">
      <p className="absolute font-['Poppins:Italic',sans-serif] italic leading-[24px] left-[520.35px] text-[#149496] text-[16px] text-center text-nowrap top-[1.33px] translate-x-[-50%] whitespace-pre">{`We invest in our team's growth and professional development`}</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[132px] left-[80px] top-0 w-[1040px]" data-name="Container">
      <ChildcareEducation />
      <ChildcareEducation1 />
      <ChildcareEducation2 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p184ba090} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p182f3148} id="Vector_2" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p2f1426c0} id="Vector_3" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p5d36b00} id="Vector_4" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function ChildcareEducation3() {
  return (
    <div className="absolute bg-[rgba(196,154,58,0.1)] content-stretch flex items-center justify-center left-[24px] rounded-[16.4px] size-[56px] top-[24px]" data-name="ChildcareEducation">
      <Icon10 />
    </div>
  );
}

function ChildcareEducation4() {
  return <div className="absolute h-[56px] left-[24px] top-[96px] w-[194px]" data-name="ChildcareEducation" />;
}

function ChildcareEducation5() {
  return (
    <div className="absolute h-[68.25px] left-[24px] top-[95.58px] w-[194px]" data-name="ChildcareEducation">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] top-px w-[191px]">Strategies for creating positive, structured learning environments</p>
    </div>
  );
}

function ChildcareEducation6() {
  return (
    <div className="absolute h-[18.667px] left-[24px] top-[247.58px] w-[70.24px]" data-name="ChildcareEducation">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#c49a3a] text-[14px] top-0 w-[71px]">8 resources</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <ChildcareEducation3 />
      <ChildcareEducation4 />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-[92px] not-italic text-[#232e43] text-[20px] top-[27.58px] w-[148px]">Classroom Management</p>
      <ChildcareEducation5 />
      <ChildcareEducation6 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M14 21V5.83333" id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p3536b5c0} id="Vector_2" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.pf30d500} id="Vector_3" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p1baaa40} id="Vector_4" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p3fb109e0} id="Vector_5" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.pcb4cbe0} id="Vector_6" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p3edc4ae0} id="Vector_7" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p13ba1050} id="Vector_8" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function ChildcareEducation7() {
  return (
    <div className="absolute bg-[rgba(196,154,58,0.1)] content-stretch flex items-center justify-center left-[24px] rounded-[16.4px] size-[56px] top-[24px]" data-name="ChildcareEducation">
      <Icon11 />
    </div>
  );
}

function ChildcareEducation8() {
  return (
    <div className="absolute h-[56px] left-[90px] top-[23.58px] w-[194px]" data-name="ChildcareEducation">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] top-[-11px] w-[144px]">Early Childhood Development Basics</p>
    </div>
  );
}

function ChildcareEducation9() {
  return (
    <div className="absolute h-[68.25px] left-[24px] top-[129.58px] w-[194px]" data-name="ChildcareEducation">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] top-px w-[163px]">Core concepts in child development and learning theory</p>
    </div>
  );
}

function ChildcareEducation10() {
  return (
    <div className="absolute h-[18.667px] left-[24px] top-[247.58px] w-[77.781px]" data-name="ChildcareEducation">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#c49a3a] text-[14px] top-0 w-[78px]">12 resources</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <ChildcareEducation7 />
      <ChildcareEducation8 />
      <ChildcareEducation9 />
      <ChildcareEducation10 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p1a3063b0} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function ChildcareEducation11() {
  return (
    <div className="absolute bg-[rgba(196,154,58,0.1)] content-stretch flex items-center justify-center left-[24px] rounded-[16.4px] size-[56px] top-[24px]" data-name="ChildcareEducation">
      <Icon12 />
    </div>
  );
}

function ChildcareEducation12() {
  return (
    <div className="absolute h-[56px] left-[99px] top-[12.58px] w-[194px]" data-name="ChildcareEducation">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] top-[1.67px] w-[175px]">{`Safety & Mandated Reporting`}</p>
    </div>
  );
}

function ChildcareEducation13() {
  return (
    <div className="absolute h-[45.5px] left-[24px] top-[100.58px] w-[194px]" data-name="ChildcareEducation">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] top-px w-[172px]">Critical safety protocols and legal responsibilities</p>
    </div>
  );
}

function ChildcareEducation14() {
  return (
    <div className="absolute h-[18.667px] left-[24px] top-[224.83px] w-[70.24px]" data-name="ChildcareEducation">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#c49a3a] text-[14px] top-0 w-[71px]">6 resources</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="[grid-area:1_/_3] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <ChildcareEducation11 />
      <ChildcareEducation12 />
      <ChildcareEducation13 />
      <ChildcareEducation14 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p35802300} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p2c7af00} id="Vector_2" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M14 12.8333H18.6667" id="Vector_3" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M14 18.6667H18.6667" id="Vector_4" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M9.33333 12.8333H9.345" id="Vector_5" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M9.33333 18.6667H9.345" id="Vector_6" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function ChildcareEducation15() {
  return (
    <div className="absolute bg-[rgba(196,154,58,0.1)] content-stretch flex items-center justify-center left-[24px] rounded-[16.4px] size-[56px] top-[24px]" data-name="ChildcareEducation">
      <Icon13 />
    </div>
  );
}

function ChildcareEducation16() {
  return (
    <div className="absolute h-[45.5px] left-0 top-[9.58px] w-[194px]" data-name="ChildcareEducation">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] top-px w-[177px]">Templates, themes, and age-appropriate activity plans</p>
    </div>
  );
}

function ChildcareEducation17() {
  return (
    <div className="absolute h-[56px] left-[24px] top-[96px] w-[194px]" data-name="ChildcareEducation">
      <ChildcareEducation16 />
    </div>
  );
}

function ChildcareEducation18() {
  return (
    <div className="absolute h-[18.667px] left-[24px] top-[224.83px] w-[77.781px]" data-name="ChildcareEducation">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#c49a3a] text-[14px] top-0 w-[78px]">15 resources</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="[grid-area:1_/_4] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <ChildcareEducation15 />
      <ChildcareEducation17 />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-[95px] not-italic text-[#232e43] text-[20px] top-[11.58px] w-[147px]">Lesson Planning Ideas</p>
      <ChildcareEducation18 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p294c6200} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M10.5 21H17.5" id="Vector_2" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M11.6667 25.6667H16.3333" id="Vector_3" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function ChildcareEducation19() {
  return (
    <div className="absolute bg-[rgba(196,154,58,0.1)] content-stretch flex items-center justify-center left-[24px] rounded-[16.4px] size-[56px] top-[24px]" data-name="ChildcareEducation">
      <Icon14 />
    </div>
  );
}

function ChildcareEducation20() {
  return <div className="absolute h-[28px] left-[24px] top-[96px] w-[194px]" data-name="ChildcareEducation" />;
}

function ChildcareEducation21() {
  return (
    <div className="absolute h-[45.5px] left-[24px] top-[96.33px] w-[194px]" data-name="ChildcareEducation">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] top-px w-[186px]">Creative activities for learning, play, and exploration</p>
    </div>
  );
}

function ChildcareEducation22() {
  return (
    <div className="absolute h-[18.667px] left-[24px] top-[196.83px] w-[77.781px]" data-name="ChildcareEducation">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#c49a3a] text-[14px] top-0 w-[78px]">20 resources</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="[grid-area:2_/_1] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <ChildcareEducation19 />
      <ChildcareEducation20 />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-[102px] not-italic text-[#232e43] text-[20px] top-[26.33px] w-[134px]">Activity Guides</p>
      <ChildcareEducation21 />
      <ChildcareEducation22 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p25e06300} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function ChildcareEducation23() {
  return (
    <div className="absolute bg-[rgba(196,154,58,0.1)] content-stretch flex items-center justify-center left-[24px] rounded-[16.4px] size-[56px] top-[24px]" data-name="ChildcareEducation">
      <Icon15 />
    </div>
  );
}

function ChildcareEducation24() {
  return <div className="absolute h-[28px] left-[24px] top-[96px] w-[194px]" data-name="ChildcareEducation" />;
}

function ChildcareEducation25() {
  return <div className="absolute h-[45.5px] left-[24px] top-[132px] w-[194px]" data-name="ChildcareEducation" />;
}

function ChildcareEducation26() {
  return (
    <div className="absolute h-[18.667px] left-[24px] top-[196.83px] w-[77.781px]" data-name="ChildcareEducation">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#c49a3a] text-[14px] top-0 w-[78px]">10 resources</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="[grid-area:2_/_2] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <ChildcareEducation23 />
      <ChildcareEducation24 />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-[91px] not-italic text-[#232e43] text-[20px] top-[24.33px] w-[176px]">Behavior Strategies</p>
      <ChildcareEducation25 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-[24px] not-italic text-[#1e7872] text-[14px] top-[92.33px] w-[179px]">Positive guidance techniques and conflict resolution</p>
      <ChildcareEducation26 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p38e02680} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p394f8700} id="Vector_2" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M11.6667 10.5H9.33333" id="Vector_3" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M18.6667 15.1667H9.33333" id="Vector_4" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M18.6667 19.8333H9.33333" id="Vector_5" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function ChildcareEducation27() {
  return (
    <div className="absolute bg-[rgba(196,154,58,0.1)] content-stretch flex items-center justify-center left-[24px] rounded-[16.4px] size-[56px] top-[24px]" data-name="ChildcareEducation">
      <Icon16 />
    </div>
  );
}

function ChildcareEducation28() {
  return (
    <div className="absolute h-[45.5px] left-0 top-[-10.67px] w-[194px]" data-name="ChildcareEducation">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] top-px w-[184px]">State regulations, certification info, and compliance guides</p>
    </div>
  );
}

function ChildcareEducation29() {
  return (
    <div className="absolute h-[56px] left-[24px] top-[96px] w-[194px]" data-name="ChildcareEducation">
      <ChildcareEducation28 />
    </div>
  );
}

function ChildcareEducation30() {
  return (
    <div className="absolute h-[18.667px] left-[24px] top-[224.83px] w-[70.24px]" data-name="ChildcareEducation">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#c49a3a] text-[14px] top-0 w-[71px]">5 resources</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="[grid-area:2_/_4] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <ChildcareEducation27 />
      <ChildcareEducation29 />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-[88px] not-italic text-[#232e43] text-[20px] top-[25.33px] w-[148px]">Licensing Requirements</p>
      <ChildcareEducation30 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p275e0300} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p3997a780} id="Vector_2" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function ChildcareEducation31() {
  return (
    <div className="absolute bg-[rgba(196,154,58,0.1)] content-stretch flex items-center justify-center left-[24px] rounded-[16.4px] size-[56px] top-[24px]" data-name="ChildcareEducation">
      <Icon17 />
    </div>
  );
}

function ChildcareEducation32() {
  return <div className="absolute h-[28px] left-[24px] top-[96px] w-[194px]" data-name="ChildcareEducation" />;
}

function ChildcareEducation33() {
  return (
    <div className="absolute h-[45.5px] left-[24px] top-[89.33px] w-[194px]" data-name="ChildcareEducation">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] top-px w-[189px]">Career development resources and continuing education</p>
    </div>
  );
}

function ChildcareEducation34() {
  return (
    <div className="absolute h-[18.667px] left-[24px] top-[196.83px] w-[70.24px]" data-name="ChildcareEducation">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#c49a3a] text-[14px] top-0 w-[71px]">7 resources</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="[grid-area:2_/_3] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <ChildcareEducation31 />
      <ChildcareEducation32 />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-[94px] not-italic text-[#232e43] text-[20px] top-[24.33px] w-[140px]">Professional Growth</p>
      <ChildcareEducation33 />
      <ChildcareEducation34 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute gap-[24px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[292.25px_minmax(0px,_1fr)] h-[585.75px] left-[80px] top-[196px] w-[1040px]" data-name="Container">
      <Container19 />
      <Container20 />
      <Container21 />
      <Container22 />
      <Container23 />
      <Container24 />
      <Container25 />
      <Container26 />
    </div>
  );
}

function ChildcareEducation35() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="ChildcareEducation">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-[352px] not-italic text-[18px] text-center text-white top-[-14.17px] translate-x-[-50%] w-[668px]">All staff members have access to our comprehensive training library. We believe that investing in our educators creates the best experience for children.</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#149496] h-[120px] items-start left-[216px] pb-0 pt-[32px] px-[32px] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] to-[#1e7872] top-[829.75px] w-[768px]" data-name="Container">
      <ChildcareEducation35 />
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute h-[949.75px] left-[487px] top-[96px] w-[1200px]" data-name="Container">
      <Container18 />
      <Container27 />
      <Container28 />
    </div>
  );
}

function Container30() {
  return <div className="absolute left-[40px] opacity-30 size-[95px] top-[80px]" data-name="Container" />;
}

function VectorBee() {
  return (
    <div className="absolute left-[119px] size-[252px] top-[60.58px]" data-name="Vector Bee 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector Bee 1" opacity="0.3">
          <path d={svgPaths.p3b491b80} fill="var(--fill-0, #C49A3A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function VectorStar() {
  return (
    <div className="absolute left-[1863px] size-[252px] top-[562.58px]" data-name="Vector Star 6">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector Star 6">
          <path d={svgPaths.p52c5200} fill="var(--fill-0, #149496)" id="Vector" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function ChildcareEducation36() {
  return (
    <div className="absolute bg-[#f5edda] h-[1141.75px] left-0 overflow-clip top-[2361.42px] w-[2174px]" data-name="ChildcareEducation">
      <Container29 />
      <div className="absolute inset-[75.46%_86.27%_7.34%_5.47%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 180 197">
          <path d={svgPaths.p3c515872} fill="var(--fill-0, #E5795B)" id="Vector" opacity="0.3" />
        </svg>
      </div>
      <Container30 />
      <VectorBee />
      <VectorStar />
    </div>
  );
}

function LocalCommunityServices() {
  return (
    <div className="absolute h-[52px] left-0 top-0 w-[1040px]" data-name="LocalCommunityServices">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[52px] left-[520.66px] not-italic text-[#232e43] text-[40px] text-center text-nowrap top-[3.33px] translate-x-[-50%] whitespace-pre">Local Community Services</p>
    </div>
  );
}

function LocalCommunityServices1() {
  return (
    <div className="absolute h-[28px] left-[184px] top-[68px] w-[672px]" data-name="LocalCommunityServices">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-[335.94px] not-italic text-[#1e7872] text-[20px] text-center text-nowrap top-[1.67px] translate-x-[-50%] whitespace-pre">{`Trusted partners and resources to support your family's needs`}</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Container">
      <LocalCommunityServices />
      <LocalCommunityServices1 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p1fee7820} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p248d9680} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M21 5.83333V25.6667" id="Vector_3" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.pbbf1600} id="Vector_4" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M7 5.83333V25.6667" id="Vector_5" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p10d45c00} id="Vector_6" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container32() {
  return (
    <div className="bg-[rgba(20,148,150,0.1)] relative rounded-[16.4px] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[56px]">
        <Icon18 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] text-nowrap top-[1.67px] whitespace-pre">Local Elementary Schools</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-px whitespace-pre">Public and private schools in the area for future planning</p>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[93.354px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#149496] text-[14px] text-nowrap top-[0.67px] whitespace-pre">(555) 123-4567</p>
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute h-[20px] left-[109.35px] top-0 w-[86.542px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-0 text-[#c49a3a] text-[14px] text-nowrap top-[0.67px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        Learn More →
      </p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Link7 />
      <Link8 />
    </div>
  );
}

function Container34() {
  return (
    <div className="basis-0 grow h-[90.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-[90.75px] items-start relative w-full">
        <Heading2 />
        <Paragraph2 />
        <Container33 />
      </div>
    </div>
  );
}

function LocalCommunityServices2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[90.75px] items-start relative shrink-0 w-full" data-name="LocalCommunityServices">
      <Container32 />
      <Container34 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-[#f5edda] content-stretch flex flex-col h-[138.75px] items-start left-0 pb-0 pt-[24px] px-[24px] rounded-[16px] top-0 w-[508px]" data-name="Container">
      <LocalCommunityServices2 />
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M14 8.16667V12.8333" id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p170c8c00} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M16.3333 10.5H11.6667" id="Vector_3" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p3cb00800} id="Vector_4" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p324b0f80} id="Vector_5" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="bg-[rgba(20,148,150,0.1)] relative rounded-[16.4px] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[56px]">
        <Icon19 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] text-nowrap top-[1.67px] whitespace-pre">Pediatric Healthcare Network</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-px whitespace-pre">{`Trusted pediatricians and children's hospitals nearby`}</p>
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[93.354px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#149496] text-[14px] text-nowrap top-[0.67px] whitespace-pre">(555) 234-5678</p>
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute h-[20px] left-[109.35px] top-0 w-[86.542px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-[13.65px] text-[#c49a3a] text-[14px] text-nowrap top-[0.08px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        Learn More →
      </p>
    </div>
  );
}

function Container37() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Link9 />
      <Link10 />
    </div>
  );
}

function Container38() {
  return (
    <div className="basis-0 grow h-[90.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-[90.75px] items-start relative w-full">
        <Heading3 />
        <Paragraph3 />
        <Container37 />
      </div>
    </div>
  );
}

function LocalCommunityServices3() {
  return (
    <div className="content-stretch flex gap-[16px] h-[90.75px] items-start relative shrink-0 w-full" data-name="LocalCommunityServices">
      <Container36 />
      <Container38 />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute bg-[#f5edda] content-stretch flex flex-col h-[138.75px] items-start left-[532px] pb-0 pt-[24px] px-[24px] rounded-[16px] top-0 w-[508px]" data-name="Container">
      <LocalCommunityServices3 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M14 21V5.83333" id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p3536b5c0} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.pf30d500} id="Vector_3" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p1baaa40} id="Vector_4" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p3fb109e0} id="Vector_5" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p336fc840} id="Vector_6" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p3edc4ae0} id="Vector_7" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p13ba1050} id="Vector_8" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container40() {
  return (
    <div className="bg-[rgba(20,148,150,0.1)] relative rounded-[16.4px] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[56px]">
        <Icon20 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] text-nowrap top-[1.67px] whitespace-pre">{`Child & Family Therapy Center`}</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-px whitespace-pre">Licensed therapists specializing in children and families</p>
    </div>
  );
}

function Link11() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[93.354px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#149496] text-[14px] text-nowrap top-[0.67px] whitespace-pre">(555) 345-6789</p>
    </div>
  );
}

function Link12() {
  return (
    <div className="absolute h-[20px] left-[109.35px] top-0 w-[86.542px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-[6.65px] text-[#c49a3a] text-[14px] text-nowrap top-[0.33px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        Learn More →
      </p>
    </div>
  );
}

function Container41() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Link11 />
      <Link12 />
    </div>
  );
}

function Container42() {
  return (
    <div className="basis-0 grow h-[90.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-[90.75px] items-start relative w-full">
        <Heading4 />
        <Paragraph4 />
        <Container41 />
      </div>
    </div>
  );
}

function LocalCommunityServices4() {
  return (
    <div className="content-stretch flex gap-[16px] h-[90.75px] items-start relative shrink-0 w-full" data-name="LocalCommunityServices">
      <Container40 />
      <Container42 />
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bg-[#f5edda] content-stretch flex flex-col h-[138.75px] items-start left-0 pb-0 pt-[24px] px-[24px] rounded-[16px] top-[162.75px] w-[508px]" data-name="Container">
      <LocalCommunityServices4 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p11690d80} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p2d18cb00} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-[rgba(20,148,150,0.1)] relative rounded-[16.4px] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[56px]">
        <Icon21 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] text-nowrap top-[1.67px] whitespace-pre">Family Support Services</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-px whitespace-pre">Crisis support, counseling, and family resource programs</p>
    </div>
  );
}

function Link13() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[93.354px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#149496] text-[14px] text-nowrap top-[0.67px] whitespace-pre">(555) 456-7890</p>
    </div>
  );
}

function Link14() {
  return (
    <div className="absolute h-[20px] left-[109.35px] top-0 w-[86.542px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-[11.65px] text-[#c49a3a] text-[14px] text-nowrap top-[0.33px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        Learn More →
      </p>
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Link13 />
      <Link14 />
    </div>
  );
}

function Container46() {
  return (
    <div className="basis-0 grow h-[90.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-[90.75px] items-start relative w-full">
        <Heading5 />
        <Paragraph5 />
        <Container45 />
      </div>
    </div>
  );
}

function LocalCommunityServices5() {
  return (
    <div className="content-stretch flex gap-[16px] h-[90.75px] items-start relative shrink-0 w-full" data-name="LocalCommunityServices">
      <Container44 />
      <Container46 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bg-[#f5edda] content-stretch flex flex-col h-[138.75px] items-start left-[532px] pb-0 pt-[24px] px-[24px] rounded-[16px] top-[162.75px] w-[508px]" data-name="Container">
      <LocalCommunityServices5 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p17847d80} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M3.6202 7.03966H24.3799" id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p116a4300} id="Vector_3" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container48() {
  return (
    <div className="bg-[rgba(20,148,150,0.1)] relative rounded-[16.4px] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[56px]">
        <Icon22 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] text-nowrap top-[1.67px] whitespace-pre">Community Food Bank</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-px whitespace-pre">Food assistance and nutrition programs for families</p>
    </div>
  );
}

function Link15() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[93.354px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#149496] text-[14px] text-nowrap top-[0.67px] whitespace-pre">(555) 567-8901</p>
    </div>
  );
}

function Link16() {
  return (
    <div className="absolute h-[20px] left-[109.35px] top-0 w-[86.542px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-[11.65px] text-[#c49a3a] text-[14px] text-nowrap top-[-0.42px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        Learn More →
      </p>
    </div>
  );
}

function Container49() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Link15 />
      <Link16 />
    </div>
  );
}

function Container50() {
  return (
    <div className="basis-0 grow h-[90.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-[90.75px] items-start relative w-full">
        <Heading6 />
        <Paragraph6 />
        <Container49 />
      </div>
    </div>
  );
}

function LocalCommunityServices6() {
  return (
    <div className="content-stretch flex gap-[16px] h-[90.75px] items-start relative shrink-0 w-full" data-name="LocalCommunityServices">
      <Container48 />
      <Container50 />
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute bg-[#f5edda] content-stretch flex flex-col h-[138.75px] items-start left-0 pb-0 pt-[24px] px-[24px] rounded-[16px] top-[325.5px] w-[508px]" data-name="Container">
      <LocalCommunityServices6 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p36e3b00} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p2dd4eb80} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M9.33333 7H9.345" id="Vector_3" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M18.6667 7H18.6783" id="Vector_4" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M14 7H14.0117" id="Vector_5" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M14 11.6667H14.0117" id="Vector_6" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M14 16.3333H14.0117" id="Vector_7" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M18.6667 11.6667H18.6783" id="Vector_8" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M18.6667 16.3333H18.6783" id="Vector_9" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M9.33333 11.6667H9.345" id="Vector_10" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M9.33333 16.3333H9.345" id="Vector_11" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container52() {
  return (
    <div className="bg-[rgba(20,148,150,0.1)] relative rounded-[16.4px] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[56px]">
        <Icon23 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] text-nowrap top-[1.67px] whitespace-pre">Dental Care for Kids</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-px whitespace-pre">Pediatric dentistry with family-friendly approach</p>
    </div>
  );
}

function Link17() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[93.354px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#149496] text-[14px] text-nowrap top-[0.67px] whitespace-pre">(555) 678-9012</p>
    </div>
  );
}

function Link18() {
  return (
    <div className="absolute h-[20px] left-[109.35px] top-0 w-[86.542px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-[10.65px] text-[#c49a3a] text-[14px] text-nowrap top-[-0.42px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        Learn More →
      </p>
    </div>
  );
}

function Container53() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Link17 />
      <Link18 />
    </div>
  );
}

function Container54() {
  return (
    <div className="basis-0 grow h-[90.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-[90.75px] items-start relative w-full">
        <Heading7 />
        <Paragraph7 />
        <Container53 />
      </div>
    </div>
  );
}

function LocalCommunityServices7() {
  return (
    <div className="content-stretch flex gap-[16px] h-[90.75px] items-start relative shrink-0 w-full" data-name="LocalCommunityServices">
      <Container52 />
      <Container54 />
    </div>
  );
}

function Container55() {
  return (
    <div className="absolute bg-[#f5edda] content-stretch flex flex-col h-[138.75px] items-start left-[532px] pb-0 pt-[24px] px-[24px] rounded-[16px] top-[325.5px] w-[508px]" data-name="Container">
      <LocalCommunityServices7 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M9.33333 7V14" id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M17.5 7V14" id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M2.33333 14H25.2" id="Vector_3" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p8249a00} id="Vector_4" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p26ea4300} id="Vector_5" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M10.5 21H16.3333" id="Vector_6" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p1b26d000} id="Vector_7" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container56() {
  return (
    <div className="bg-[rgba(20,148,150,0.1)] relative rounded-[16.4px] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[56px]">
        <Icon24 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] text-nowrap top-[1.67px] whitespace-pre">Public Transportation Resources</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-px whitespace-pre">Routes, schedules, and family passes for local transit</p>
    </div>
  );
}

function Link19() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[93.354px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#149496] text-[14px] text-nowrap top-[0.67px] whitespace-pre">(555) 789-0123</p>
    </div>
  );
}

function Link20() {
  return (
    <div className="absolute h-[20px] left-[116px] top-[-0.17px] w-[86.542px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-0 text-[#c49a3a] text-[14px] text-nowrap top-[0.67px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        Learn More →
      </p>
    </div>
  );
}

function Container57() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Link19 />
      <Link20 />
    </div>
  );
}

function Container58() {
  return (
    <div className="basis-0 grow h-[90.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-[90.75px] items-start relative w-full">
        <Heading8 />
        <Paragraph8 />
        <Container57 />
      </div>
    </div>
  );
}

function LocalCommunityServices8() {
  return (
    <div className="content-stretch flex gap-[16px] h-[90.75px] items-start relative shrink-0 w-full" data-name="LocalCommunityServices">
      <Container56 />
      <Container58 />
    </div>
  );
}

function Container59() {
  return (
    <div className="absolute bg-[#f5edda] content-stretch flex flex-col h-[138.75px] items-start left-0 pb-0 pt-[24px] px-[24px] rounded-[16px] top-[488.25px] w-[508px]" data-name="Container">
      <LocalCommunityServices8 />
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p228bd600} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container60() {
  return (
    <div className="bg-[rgba(20,148,150,0.1)] relative rounded-[16.4px] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[56px]">
        <Icon25 />
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] text-nowrap top-[1.67px] whitespace-pre">{`Speech & Occupational Therapy`}</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[22.75px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-px whitespace-pre">Early intervention and developmental support services</p>
    </div>
  );
}

function Link21() {
  return (
    <div className="absolute h-[20px] left-0 top-0 w-[93.354px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#149496] text-[14px] text-nowrap top-[0.67px] whitespace-pre">(555) 890-1234</p>
    </div>
  );
}

function Link22() {
  return (
    <div className="absolute h-[20px] left-[119px] top-[-0.17px] w-[86.542px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] leading-[20px] left-0 text-[#c49a3a] text-[14px] text-nowrap top-[0.67px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        Learn More →
      </p>
    </div>
  );
}

function Container61() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Link21 />
      <Link22 />
    </div>
  );
}

function Container62() {
  return (
    <div className="basis-0 grow h-[90.75px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] h-[90.75px] items-start relative w-full">
        <Heading9 />
        <Paragraph9 />
        <Container61 />
      </div>
    </div>
  );
}

function LocalCommunityServices9() {
  return (
    <div className="content-stretch flex gap-[16px] h-[90.75px] items-start relative shrink-0 w-full" data-name="LocalCommunityServices">
      <Container60 />
      <Container62 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute bg-[#f5edda] content-stretch flex flex-col h-[138.75px] items-start left-[532px] pb-0 pt-[24px] px-[24px] rounded-[16px] top-[488.25px] w-[508px]" data-name="Container">
      <LocalCommunityServices9 />
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[627px] relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Container39 />
      <Container43 />
      <Container47 />
      <Container51 />
      <Container55 />
      <Container59 />
      <Container63 />
    </div>
  );
}

function LocalCommunityServices10() {
  return (
    <div className="absolute h-[24px] left-px top-[-12.17px] w-[1040px]" data-name="LocalCommunityServices">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[520.08px] not-italic text-[#1e7872] text-[16px] text-center text-nowrap top-[1.33px] translate-x-[-50%] whitespace-pre">{`Need help finding a specific service? We're here to connect you with the right resources.`}</p>
    </div>
  );
}

function LocalCommunityServices11() {
  return (
    <div className="absolute bg-[#149496] h-[48px] left-[424.36px] rounded-[2.23696e+07px] top-[40px] w-[191.271px]" data-name="LocalCommunityServices">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[96.5px] not-italic text-[16px] text-center text-nowrap text-white top-[13.33px] translate-x-[-50%] whitespace-pre">Contact Our Team</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="h-[88px] relative shrink-0 w-full" data-name="Container">
      <LocalCommunityServices10 />
      <LocalCommunityServices11 />
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] h-[923px] items-start left-[487px] px-[80px] py-0 top-[96px] w-[1200px]" data-name="Container">
      <Container31 />
      <Container64 />
      <Container65 />
    </div>
  );
}

function Container67() {
  return <div className="absolute left-[2036px] opacity-30 size-[90px] top-[80px]" data-name="Container" />;
}

function VectorStickmanStanding() {
  return (
    <div className="absolute left-[24px] size-[219px] top-[768.83px]" data-name="Vector Stickman Standing 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 219 219">
        <g id="Vector Stickman Standing 1" opacity="0.3">
          <path d={svgPaths.p206c7f00} fill="var(--fill-0, #1E7872)" id="Vector" />
          <path d={svgPaths.p32c8b900} fill="var(--fill-0, #1E7872)" id="Vector_2" />
          <path d={svgPaths.p283040e0} fill="var(--fill-0, #1E7872)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function VectorStickmanStanding2() {
  return (
    <div className="absolute left-[271px] size-[216px] top-[766.83px]" data-name="Vector Stickman Standing 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 216 216">
        <g id="Vector Stickman Standing 3" opacity="0.3">
          <path d={svgPaths.p37f20d00} fill="var(--fill-0, #1E7872)" id="Vector" />
          <path d={svgPaths.p57db6c0} fill="var(--fill-0, #1E7872)" id="Vector_2" />
          <path d={svgPaths.p3ee8ec00} fill="var(--fill-0, #1E7872)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function VectorStickmanStanding1() {
  return (
    <div className="absolute left-[133px] size-[252px] top-[738.83px]" data-name="Vector Stickman Standing 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector Stickman Standing 2" opacity="0.3">
          <path d={svgPaths.p16161c80} fill="var(--fill-0, #1E7872)" id="Vector" />
          <path d={svgPaths.p31994680} fill="var(--fill-0, #1E7872)" id="Vector_2" />
          <path d={svgPaths.p1cd71400} fill="var(--fill-0, #1E7872)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function LocalCommunityServices12() {
  return (
    <div className="absolute bg-white h-[1115px] left-0 overflow-clip top-[3503.17px] w-[2174px]" data-name="LocalCommunityServices">
      <Container66 />
      <Container67 />
      <VectorStickmanStanding />
      <VectorStickmanStanding2 />
      <VectorStickmanStanding1 />
    </div>
  );
}

function HealthSafety() {
  return (
    <div className="absolute h-[52px] left-0 top-0 w-[1040px]" data-name="HealthSafety">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[52px] left-[520.43px] not-italic text-[#232e43] text-[40px] text-center text-nowrap top-[3.33px] translate-x-[-50%] whitespace-pre">{`Health & Safety Resources`}</p>
    </div>
  );
}

function HealthSafety1() {
  return (
    <div className="absolute h-[28px] left-[184px] top-[68px] w-[672px]" data-name="HealthSafety">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-[336.75px] not-italic text-[#1e7872] text-[20px] text-center text-nowrap top-[1.67px] translate-x-[-50%] whitespace-pre">Credible information to keep your family healthy and safe</p>
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute h-[96px] left-[80px] top-0 w-[1040px]" data-name="Container">
      <HealthSafety />
      <HealthSafety1 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M24 2.66667L29.3333 8" id="Vector" stroke="var(--stroke-0, #E5795B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2c453d80} id="Vector_2" stroke="var(--stroke-0, #E5795B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p1852ca80} id="Vector_3" stroke="var(--stroke-0, #E5795B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M12 14.6667L17.3333 20" id="Vector_4" stroke="var(--stroke-0, #E5795B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2e8e97f0} id="Vector_5" stroke="var(--stroke-0, #E5795B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2daa7680} id="Vector_6" stroke="var(--stroke-0, #E5795B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function HealthSafety2() {
  return (
    <div className="absolute bg-[rgba(229,121,91,0.1)] content-stretch flex items-center justify-center left-[32px] rounded-[16px] size-[64px] top-[32px]" data-name="HealthSafety">
      <Icon26 />
    </div>
  );
}

function HealthSafety3() {
  return (
    <div className="absolute h-[78.396px] left-[137px] top-[22.83px] w-[266.667px]" data-name="HealthSafety">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-[-17px] not-italic text-[#232e43] text-[28px] top-[9px] w-[192px]">Vaccination Information</p>
    </div>
  );
}

function HealthSafety4() {
  return (
    <div className="absolute h-[45.5px] left-[32px] top-[130.83px] w-[266.667px]" data-name="HealthSafety">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] top-px w-[210px]">CDC guidelines and immunization schedules for children</p>
    </div>
  );
}

function Container69() {
  return (
    <div className="absolute bg-white h-[279.896px] left-0 rounded-[16px] top-0 w-[330.667px]" data-name="Container">
      <HealthSafety2 />
      <HealthSafety3 />
      <HealthSafety4 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p5e65600} id="Vector" stroke="var(--stroke-0, #E5795B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function HealthSafety5() {
  return (
    <div className="absolute bg-[rgba(229,121,91,0.1)] content-stretch flex items-center justify-center left-[32px] rounded-[16px] size-[64px] top-[32px]" data-name="HealthSafety">
      <Icon27 />
    </div>
  );
}

function HealthSafety6() {
  return (
    <div className="absolute h-[78.396px] left-[32px] top-[112px] w-[266.667px]" data-name="HealthSafety">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-[0.33px] not-italic text-[#1e7872] text-[14px] top-[15.83px] w-[236px]">Home and outdoor safety tips to keep children protected</p>
    </div>
  );
}

function HealthSafety7() {
  return <div className="absolute h-[45.5px] left-[32px] top-[202.4px] w-[266.667px]" data-name="HealthSafety" />;
}

function Container70() {
  return (
    <div className="absolute bg-white h-[279.896px] left-[354.67px] rounded-[16px] top-0 w-[330.667px]" data-name="Container">
      <HealthSafety5 />
      <HealthSafety6 />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-[121.33px] not-italic text-[#232e43] text-[28px] top-[26.83px] w-[177px]">Child Safety Checklists</p>
      <HealthSafety7 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p222b52f0} id="Vector" stroke="var(--stroke-0, #E5795B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function HealthSafety8() {
  return (
    <div className="absolute bg-[rgba(229,121,91,0.1)] content-stretch flex items-center justify-center left-[32px] rounded-[16px] size-[64px] top-[32px]" data-name="HealthSafety">
      <Icon28 />
    </div>
  );
}

function HealthSafety9() {
  return <div className="absolute h-[39.198px] left-[32px] top-[112px] w-[266.667px]" data-name="HealthSafety" />;
}

function HealthSafety10() {
  return (
    <div className="absolute h-[45.5px] left-[31.67px] top-[127.83px] w-[266.667px]" data-name="HealthSafety">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] top-px w-[256px]">Free and paid courses for infant and child CPR certification</p>
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute bg-white h-[279.896px] left-[709.33px] rounded-[16px] top-0 w-[330.667px]" data-name="Container">
      <HealthSafety8 />
      <HealthSafety9 />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] h-[79px] leading-[39.2px] left-[110.67px] not-italic text-[#232e43] text-[28px] top-[26.83px] w-[202px]">CPR Training Links</p>
      <HealthSafety10 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1dee4500} id="Vector" stroke="var(--stroke-0, #E5795B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M16 10.6667V16" id="Vector_2" stroke="var(--stroke-0, #E5795B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M16 21.3333H16.0133" id="Vector_3" stroke="var(--stroke-0, #E5795B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function HealthSafety11() {
  return (
    <div className="absolute bg-[rgba(229,121,91,0.1)] content-stretch flex items-center justify-center left-[32px] rounded-[16px] size-[64px] top-[32px]" data-name="HealthSafety">
      <Icon29 />
    </div>
  );
}

function HealthSafety12() {
  return <div className="absolute h-[39.198px] left-[32px] top-[112px] w-[266.667px]" data-name="HealthSafety" />;
}

function HealthSafety13() {
  return <div className="absolute h-[45.5px] left-[32px] top-[163.2px] w-[266.667px]" data-name="HealthSafety" />;
}

function Container72() {
  return (
    <div className="absolute bg-white h-[279.896px] left-0 rounded-[16px] top-[303.9px] w-[330.667px]" data-name="Container">
      <HealthSafety11 />
      <HealthSafety12 />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] h-[61px] leading-[39.2px] left-[130px] not-italic text-[#232e43] text-[28px] top-[26.94px] w-[233px]">Health Guidelines</p>
      <HealthSafety13 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-[32px] not-italic text-[#1e7872] text-[14px] top-[115.94px] w-[234px]">When to keep sick children home and symptom guides</p>
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p20e95100} id="Vector" stroke="var(--stroke-0, #E5795B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p22839960} id="Vector_2" stroke="var(--stroke-0, #E5795B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function HealthSafety14() {
  return (
    <div className="absolute bg-[rgba(229,121,91,0.1)] content-stretch flex items-center justify-center left-[32px] rounded-[16px] size-[64px] top-[32px]" data-name="HealthSafety">
      <Icon30 />
    </div>
  );
}

function HealthSafety15() {
  return (
    <div className="absolute h-[78.396px] left-[131.33px] top-[24.94px] w-[266.667px]" data-name="HealthSafety">
      <div className="absolute font-['Poppins:SemiBold',sans-serif] h-[105px] leading-[39.2px] left-0 not-italic text-[#232e43] text-[28px] top-[-14px] w-[190px]">
        <p className="mb-0">{`Allergy & `}</p>
        <p>Nutrition Resources</p>
      </div>
    </div>
  );
}

function HealthSafety16() {
  return <div className="absolute h-[45.5px] left-[32px] top-[202.4px] w-[266.667px]" data-name="HealthSafety" />;
}

function Container73() {
  return (
    <div className="absolute bg-white h-[279.896px] left-[354.67px] rounded-[16px] top-[303.9px] w-[330.667px]" data-name="Container">
      <HealthSafety14 />
      <HealthSafety15 />
      <HealthSafety16 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-[32.33px] not-italic text-[#1e7872] text-[14px] top-[139.94px] w-[232px]">Managing food allergies and building healthy eating habits</p>
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M14.6667 2.66667V5.33333" id="Vector" stroke="var(--stroke-0, #E5795B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M6.66667 2.66667V5.33333" id="Vector_2" stroke="var(--stroke-0, #E5795B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p20043300} id="Vector_3" stroke="var(--stroke-0, #E5795B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2b3f2e00} id="Vector_4" stroke="var(--stroke-0, #E5795B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p13a53f80} id="Vector_5" stroke="var(--stroke-0, #E5795B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function HealthSafety17() {
  return (
    <div className="absolute bg-[rgba(229,121,91,0.1)] content-stretch flex items-center justify-center left-[32px] rounded-[16px] size-[64px] top-[32px]" data-name="HealthSafety">
      <Icon31 />
    </div>
  );
}

function HealthSafety18() {
  return <div className="absolute h-[39.198px] left-[32px] top-[112px] w-[266.667px]" data-name="HealthSafety" />;
}

function HealthSafety19() {
  return (
    <div className="absolute h-[45.5px] left-[32.67px] top-[127.94px] w-[266.667px]" data-name="HealthSafety">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] top-px w-[243px]">Quick reference for common childhood injuries and illnesses</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute bg-white h-[279.896px] left-[709.33px] rounded-[16px] top-[303.9px] w-[330.667px]" data-name="Container">
      <HealthSafety17 />
      <HealthSafety18 />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-[125.67px] not-italic text-[#232e43] text-[28px] top-[30.94px] w-[205px]">First Aid Guides</p>
      <HealthSafety19 />
    </div>
  );
}

function Container75() {
  return (
    <div className="absolute h-[583.792px] left-[80px] top-[160px] w-[1040px]" data-name="Container">
      <Container69 />
      <Container70 />
      <Container71 />
      <Container72 />
      <Container73 />
      <Container74 />
    </div>
  );
}

function HealthSafety20() {
  return (
    <div className="h-[39.198px] relative shrink-0 w-full" data-name="HealthSafety">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-[352.63px] not-italic text-[28px] text-center text-nowrap text-white top-[2.67px] translate-x-[-50%] whitespace-pre">{`Your Child's Safety is Our Priority`}</p>
    </div>
  );
}

function HealthSafety21() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="HealthSafety">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[352.43px] not-italic text-[16px] text-[rgba(255,255,255,0.9)] text-center top-[1.33px] translate-x-[-50%] w-[699px]">All health and safety resources are sourced from trusted organizations like the CDC, AAP (American Academy of Pediatrics), and local health departments.</p>
    </div>
  );
}

function Container76() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[163.198px] items-start left-[216px] pb-0 pt-[32px] px-[32px] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-[791.79px] w-[768px]" data-name="Container">
      <HealthSafety20 />
      <HealthSafety21 />
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute h-[954.99px] left-[487px] top-[96px] w-[1200px]" data-name="Container">
      <Container68 />
      <Container75 />
      <Container76 />
    </div>
  );
}

function Container78() {
  return <div className="absolute left-[40px] opacity-30 size-[100px] top-[80px]" data-name="Container" />;
}

function VectorHeart() {
  return (
    <div className="relative size-[252px]" data-name="Vector Heart 6">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector Heart 6">
          <path d={svgPaths.p1cc37670} fill="var(--fill-0, #E5795B)" id="Vector" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function HealthSafety22() {
  return (
    <div className="absolute bg-[#f5edda] h-[1146.99px] left-0 overflow-clip top-[4618.17px] w-[2174px]" data-name="HealthSafety">
      <Container77 />
      <Container78 />
      <div className="absolute flex items-center justify-center left-[1855.37px] size-[297.252px] top-[29.21px]" style={{ "--transform-inner-width": "252", "--transform-inner-height": "252" } as React.CSSProperties}>
        <div className="flex-none rotate-[348.48deg]">
          <VectorHeart />
        </div>
      </div>
    </div>
  );
}

function ResearchDepartment() {
  return (
    <div className="h-[104px] relative shrink-0 w-full" data-name="ResearchDepartment">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[52px] left-0 not-italic text-[#232e43] text-[40px] top-[-0.16px] w-[475px]">{`Research & Resource Department`}</p>
    </div>
  );
}

function ResearchDepartment1() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="ResearchDepartment">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[26px] left-0 not-italic text-[#1e7872] text-[16px] top-[-13.16px] w-[491px]">{`Our dedicated Research & Resource team works behind the scenes to curate, verify, and organize the best resources for families, staff, and community partners.`}</p>
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M21 21L16.66 16.66" id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p19568f00} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container79() {
  return (
    <div className="bg-[rgba(20,148,150,0.1)] relative rounded-[16.4px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[48px]">
        <Icon32 />
      </div>
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] text-nowrap top-[1.67px] whitespace-pre">How We Gather Resources</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] top-[0.67px] w-[378px]">We research evidence-based practices, partner with local organizations, and stay updated on the latest early childhood research.</p>
    </div>
  );
}

function Container80() {
  return (
    <div className="basis-0 grow h-[92px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] h-[92px] items-start relative w-full">
        <Heading10 />
        <Paragraph10 />
      </div>
    </div>
  );
}

function Container81() {
  return (
    <div className="content-stretch flex gap-[16px] h-[92px] items-start relative shrink-0 w-full" data-name="Container">
      <Container79 />
      <Container80 />
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M12 7V21" id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p38e00000} id="Vector_2" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container82() {
  return (
    <div className="bg-[rgba(196,154,58,0.1)] relative rounded-[16.4px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[48px]">
        <Icon33 />
      </div>
    </div>
  );
}

function Heading11() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] text-nowrap top-[1.67px] whitespace-pre">What We Do</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] top-[0.67px] w-[403px]">We create accessible, organized resource libraries for parents and educators, ensuring everyone has the information they need.</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="basis-0 grow h-[72px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] h-[72px] items-start relative w-full">
        <Heading11 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Container84() {
  return (
    <div className="content-stretch flex gap-[16px] h-[72px] items-start relative shrink-0 w-full" data-name="Container">
      <Container82 />
      <Container83 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1d820380} id="Vector" stroke="var(--stroke-0, #E5795B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p27451300} id="Vector_2" stroke="var(--stroke-0, #E5795B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2981fe00} id="Vector_3" stroke="var(--stroke-0, #E5795B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p161d4800} id="Vector_4" stroke="var(--stroke-0, #E5795B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container85() {
  return (
    <div className="bg-[rgba(229,121,91,0.1)] relative rounded-[16.4px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[48px]">
        <Icon34 />
      </div>
    </div>
  );
}

function Heading12() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] text-nowrap top-[1.67px] whitespace-pre">How We Support Families</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] top-[0.67px] w-[423px]">We connect families with community services, answer questions, and provide personalized resource recommendations.</p>
    </div>
  );
}

function Container86() {
  return (
    <div className="basis-0 grow h-[72px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] h-[72px] items-start relative w-full">
        <Heading12 />
        <Paragraph12 />
      </div>
    </div>
  );
}

function Container87() {
  return (
    <div className="content-stretch flex gap-[16px] h-[72px] items-start relative shrink-0 w-full" data-name="Container">
      <Container85 />
      <Container86 />
    </div>
  );
}

function ResearchDepartment2() {
  return (
    <div className="content-stretch flex flex-col gap-[33px] h-[268px] items-start relative shrink-0 w-full" data-name="ResearchDepartment">
      <Container81 />
      <Container84 />
      <Container87 />
    </div>
  );
}

function Container88() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[578px] items-start left-[544px] top-[-15.16px] w-[496px]" data-name="Container">
      <ResearchDepartment />
      <ResearchDepartment1 />
      <ResearchDepartment2 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="absolute h-[500px] left-0 top-0 w-[496px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container89() {
  return <div className="absolute bg-gradient-to-t from-[rgba(35,46,67,0.3)] h-[500px] left-0 to-[rgba(0,0,0,0)] top-0 w-[496px]" data-name="Container" />;
}

function ResearchDepartment3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[500px] left-0 overflow-clip rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[496px]" data-name="ResearchDepartment">
      <ImageWithFallback />
      <Container89 />
    </div>
  );
}

function ResearchDepartment4() {
  return (
    <div className="h-[20px] opacity-90 relative shrink-0 w-full" data-name="ResearchDepartment">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-[0.67px] whitespace-pre">Committed to</p>
    </div>
  );
}

function ResearchDepartment5() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="ResearchDepartment">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-0 not-italic text-[20px] text-nowrap text-white top-[1.67px] whitespace-pre">Family Support</p>
    </div>
  );
}

function Container90() {
  return (
    <div className="absolute bg-[#c49a3a] content-stretch flex flex-col h-[96px] items-start left-[323.76px] pb-0 pt-[24px] px-[32px] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-[428px] w-[196.24px]" data-name="Container">
      <ResearchDepartment4 />
      <ResearchDepartment5 />
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute h-[500px] left-0 top-[39px] w-[496px]" data-name="Container">
      <ResearchDepartment3 />
      <Container90 />
    </div>
  );
}

function Container92() {
  return (
    <div className="absolute h-[578px] left-[567px] top-[96px] w-[1040px]" data-name="Container">
      <Container88 />
      <Container91 />
    </div>
  );
}

function Icon35() {
  return (
    <div className="absolute left-[22px] size-[20px] top-[14px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p24d83580} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pd919a80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link23() {
  return (
    <div className="bg-[#149496] h-[48px] relative rounded-[2.23696e+07px] shrink-0 w-[219.271px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[48px] relative w-[219.271px]">
        <Icon35 />
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[49px] not-italic text-[16px] text-nowrap text-white top-[11.84px] whitespace-pre">Contact Our Team</p>
      </div>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[20px] relative shrink-0 w-[114.01px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[114.01px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[16px] text-nowrap top-[0.67px] whitespace-pre">{`We're here to help!`}</p>
      </div>
    </div>
  );
}

function ResearchDepartment6() {
  return (
    <div className="absolute content-stretch flex gap-[16px] h-[48px] items-center left-[1111px] top-[665px] w-[496px]" data-name="ResearchDepartment">
      <Link23 />
      <Paragraph13 />
    </div>
  );
}

function ResearchDepartment7() {
  return (
    <div className="absolute bg-white h-[770px] left-0 overflow-clip top-[5765.16px] w-[2174px]" data-name="ResearchDepartment">
      <Container92 />
      <ResearchDepartment6 />
    </div>
  );
}

function DownloadsForms() {
  return (
    <div className="absolute h-[52px] left-0 top-0 w-[1040px]" data-name="DownloadsForms">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[52px] left-[519.53px] not-italic text-[#232e43] text-[40px] text-center text-nowrap top-[3.33px] translate-x-[-50%] whitespace-pre">{`Downloads & Forms`}</p>
    </div>
  );
}

function DownloadsForms1() {
  return (
    <div className="absolute h-[28px] left-[184px] top-[68px] w-[672px]" data-name="DownloadsForms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-[336.04px] not-italic text-[#1e7872] text-[20px] text-center text-nowrap top-[1.67px] translate-x-[-50%] whitespace-pre">Important documents and forms for families and staff</p>
    </div>
  );
}

function Container93() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Container">
      <DownloadsForms />
      <DownloadsForms1 />
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p38e02680} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p394f8700} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M11.6667 10.5H9.33333" id="Vector_3" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M18.6667 15.1667H9.33333" id="Vector_4" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M18.6667 19.8333H9.33333" id="Vector_5" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container94() {
  return (
    <div className="bg-[rgba(20,148,150,0.1)] relative rounded-[16.4px] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[56px]">
        <Icon36 />
      </div>
    </div>
  );
}

function Icon37() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/2 right-1/2 top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 12">
            <path d="M0.833333 10.8333V0.833333" id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 7">
            <path d={svgPaths.p3e05ba00} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-20%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
            <path d={svgPaths.p2dc3c480} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-[20px]">
        <Icon37 />
      </div>
    </div>
  );
}

function DownloadsForms2() {
  return (
    <div className="absolute content-stretch flex h-[56px] items-start justify-between left-[24px] top-[24px] w-[194px]" data-name="DownloadsForms">
      <Container94 />
      <Button1 />
    </div>
  );
}

function DownloadsForms3() {
  return (
    <div className="absolute h-[28px] left-[24px] top-[96px] w-[194px]" data-name="DownloadsForms">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] text-nowrap top-[-2.33px] whitespace-pre">Parent Handbook</p>
    </div>
  );
}

function DownloadsForms4() {
  return (
    <div className="absolute h-[45.5px] left-[24px] top-[132px] w-[194px]" data-name="DownloadsForms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] top-[-7px] w-[194px]">Complete guide to our policies, procedures, and programs</p>
    </div>
  );
}

function DownloadsForms5() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[24px] top-[204.84px] w-[36.49px]" data-name="DownloadsForms">
      <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(20,148,150,0.7)] text-nowrap whitespace-pre">2.4 MB</p>
    </div>
  );
}

function Container95() {
  return (
    <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <DownloadsForms2 />
      <DownloadsForms3 />
      <DownloadsForms4 />
      <DownloadsForms5 />
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p35802300} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p2c7af00} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p3c8b2c0} id="Vector_3" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container96() {
  return (
    <div className="bg-[rgba(20,148,150,0.1)] relative rounded-[16.4px] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[56px]">
        <Icon38 />
      </div>
    </div>
  );
}

function Icon39() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/2 right-1/2 top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 12">
            <path d="M0.833333 10.8333V0.833333" id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 7">
            <path d={svgPaths.p3e05ba00} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-20%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
            <path d={svgPaths.p2dc3c480} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-[20px]">
        <Icon39 />
      </div>
    </div>
  );
}

function DownloadsForms6() {
  return (
    <div className="absolute content-stretch flex h-[56px] items-start justify-between left-[24px] top-[24px] w-[194px]" data-name="DownloadsForms">
      <Container96 />
      <Button2 />
    </div>
  );
}

function DownloadsForms7() {
  return (
    <div className="absolute h-[28px] left-[24px] top-[93px] w-[194px]" data-name="DownloadsForms">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] text-nowrap top-[1.67px] whitespace-pre">Enrollment Forms</p>
    </div>
  );
}

function DownloadsForms8() {
  return (
    <div className="absolute h-[45.5px] left-[24px] top-[125px] w-[194px]" data-name="DownloadsForms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] top-px w-[176px]">Required paperwork for new family enrollment</p>
    </div>
  );
}

function DownloadsForms9() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[24px] top-[195.5px] w-[36.49px]" data-name="DownloadsForms">
      <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(20,148,150,0.7)] text-nowrap whitespace-pre">1.8 MB</p>
    </div>
  );
}

function Container97() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <DownloadsForms6 />
      <DownloadsForms7 />
      <DownloadsForms8 />
      <DownloadsForms9 />
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p1a3063b0} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container98() {
  return (
    <div className="bg-[rgba(20,148,150,0.1)] relative rounded-[16.4px] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[56px]">
        <Icon40 />
      </div>
    </div>
  );
}

function Icon41() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/2 right-1/2 top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 12">
            <path d="M0.833333 10.8333V0.833333" id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 7">
            <path d={svgPaths.p3e05ba00} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-20%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
            <path d={svgPaths.p2dc3c480} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-[20px]">
        <Icon41 />
      </div>
    </div>
  );
}

function DownloadsForms10() {
  return (
    <div className="absolute content-stretch flex h-[56px] items-start justify-between left-[24px] top-[24px] w-[194px]" data-name="DownloadsForms">
      <Container98 />
      <Button3 />
    </div>
  );
}

function DownloadsForms11() {
  return (
    <div className="absolute h-[28px] left-[24px] top-[96px] w-[194px]" data-name="DownloadsForms">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] text-nowrap top-[-2.33px] whitespace-pre">Safety Checklists</p>
    </div>
  );
}

function DownloadsForms12() {
  return (
    <div className="absolute h-[45.5px] left-[24px] top-[120px] w-[194px]" data-name="DownloadsForms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] top-px w-[159px]">Home and outdoor safety guidelines for families</p>
    </div>
  );
}

function DownloadsForms13() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[24px] top-[199.84px] w-[36.542px]" data-name="DownloadsForms">
      <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(20,148,150,0.7)] text-nowrap whitespace-pre">850 KB</p>
    </div>
  );
}

function Container99() {
  return (
    <div className="[grid-area:1_/_3] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <DownloadsForms10 />
      <DownloadsForms11 />
      <DownloadsForms12 />
      <DownloadsForms13 />
    </div>
  );
}

function Icon42() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M9.33333 2.33333V7" id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M18.6667 2.33333V7" id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p57f3600} id="Vector_3" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M3.5 11.6667H24.5" id="Vector_4" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container100() {
  return (
    <div className="bg-[rgba(20,148,150,0.1)] relative rounded-[16.4px] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[56px]">
        <Icon42 />
      </div>
    </div>
  );
}

function Icon43() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/2 right-1/2 top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 12">
            <path d="M0.833333 10.8333V0.833333" id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 7">
            <path d={svgPaths.p3e05ba00} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-20%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
            <path d={svgPaths.p2dc3c480} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-[20px]">
        <Icon43 />
      </div>
    </div>
  );
}

function DownloadsForms14() {
  return (
    <div className="absolute content-stretch flex h-[56px] items-start justify-between left-[24px] top-[24px] w-[194px]" data-name="DownloadsForms">
      <Container100 />
      <Button4 />
    </div>
  );
}

function DownloadsForms15() {
  return (
    <div className="absolute h-[28px] left-[24px] top-[92px] w-[194px]" data-name="DownloadsForms">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] text-nowrap top-[1.67px] whitespace-pre">Activity Calendars</p>
    </div>
  );
}

function DownloadsForms16() {
  return (
    <div className="absolute h-[45.5px] left-[24px] top-[120px] w-[194px]" data-name="DownloadsForms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] top-px w-[178px]">Monthly themes, events, and learning activities</p>
    </div>
  );
}

function DownloadsForms17() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[24px] top-[200.84px] w-[36.49px]" data-name="DownloadsForms">
      <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(20,148,150,0.7)] text-nowrap whitespace-pre">1.2 MB</p>
    </div>
  );
}

function Container101() {
  return (
    <div className="[grid-area:1_/_4] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <DownloadsForms14 />
      <DownloadsForms15 />
      <DownloadsForms16 />
      <DownloadsForms17 />
    </div>
  );
}

function Icon44() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M14 23.3333V11.6667" id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M21 23.3333V4.66667" id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M7 23.3333V18.6667" id="Vector_3" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container102() {
  return (
    <div className="bg-[rgba(20,148,150,0.1)] relative rounded-[16.4px] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[56px]">
        <Icon44 />
      </div>
    </div>
  );
}

function Icon45() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/2 right-1/2 top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 12">
            <path d="M0.833333 10.8333V0.833333" id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 7">
            <path d={svgPaths.p3e05ba00} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-20%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
            <path d={svgPaths.p2dc3c480} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-[20px]">
        <Icon45 />
      </div>
    </div>
  );
}

function DownloadsForms18() {
  return (
    <div className="absolute content-stretch flex h-[56px] items-start justify-between left-[24px] top-[24px] w-[194px]" data-name="DownloadsForms">
      <Container102 />
      <Button5 />
    </div>
  );
}

function DownloadsForms19() {
  return (
    <div className="absolute h-[28px] left-[24px] top-[96px] w-[194px]" data-name="DownloadsForms">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] text-nowrap top-[1.67px] whitespace-pre">Behavior Charts</p>
    </div>
  );
}

function DownloadsForms20() {
  return (
    <div className="absolute h-[45.5px] left-[24px] top-[132px] w-[194px]" data-name="DownloadsForms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] top-px w-[193px]">Positive behavior tracking tools for home use</p>
    </div>
  );
}

function DownloadsForms21() {
  return <div className="absolute h-[16px] left-[24px] top-[195.5px] w-[36.542px]" data-name="DownloadsForms" />;
}

function Container103() {
  return (
    <div className="[grid-area:2_/_1] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <DownloadsForms18 />
      <DownloadsForms19 />
      <DownloadsForms20 />
      <DownloadsForms21 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[16px] left-[20px] not-italic text-[12px] text-[rgba(20,148,150,0.7)] text-nowrap top-[229.34px] whitespace-pre">650 KB</p>
    </div>
  );
}

function Icon46() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p228bd600} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container104() {
  return (
    <div className="bg-[rgba(20,148,150,0.1)] relative rounded-[16.4px] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[56px]">
        <Icon46 />
      </div>
    </div>
  );
}

function Icon47() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/2 right-1/2 top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 12">
            <path d="M0.833333 10.8333V0.833333" id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 7">
            <path d={svgPaths.p3e05ba00} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-20%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
            <path d={svgPaths.p2dc3c480} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-[20px]">
        <Icon47 />
      </div>
    </div>
  );
}

function DownloadsForms22() {
  return (
    <div className="absolute content-stretch flex h-[56px] items-start justify-between left-[24px] top-[24px] w-[194px]" data-name="DownloadsForms">
      <Container104 />
      <Button6 />
    </div>
  );
}

function DownloadsForms23() {
  return (
    <div className="absolute h-[56px] left-[24px] top-[96px] w-[194px]" data-name="DownloadsForms">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] top-[0.34px] w-[153px]">Daily Report Templates</p>
    </div>
  );
}

function DownloadsForms24() {
  return (
    <div className="absolute h-[45.5px] left-[24px] top-[160px] w-[194px]" data-name="DownloadsForms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] top-[-7px] w-[171px]">Track meals, naps, activities, and milestones</p>
    </div>
  );
}

function DownloadsForms25() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[24px] top-[228.34px] w-[36.542px]" data-name="DownloadsForms">
      <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(20,148,150,0.7)] text-nowrap whitespace-pre">720 KB</p>
    </div>
  );
}

function Container105() {
  return (
    <div className="[grid-area:2_/_2] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <DownloadsForms22 />
      <DownloadsForms23 />
      <DownloadsForms24 />
      <DownloadsForms25 />
    </div>
  );
}

function Icon48() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p353d5e80} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container106() {
  return (
    <div className="bg-[rgba(20,148,150,0.1)] relative rounded-[16.4px] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[56px]">
        <Icon48 />
      </div>
    </div>
  );
}

function Icon49() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/2 right-1/2 top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 12">
            <path d="M0.833333 10.8333V0.833333" id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 7">
            <path d={svgPaths.p3e05ba00} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-20%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
            <path d={svgPaths.p2dc3c480} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-[20px]">
        <Icon49 />
      </div>
    </div>
  );
}

function DownloadsForms26() {
  return (
    <div className="absolute content-stretch flex h-[56px] items-start justify-between left-[24px] top-[24px] w-[194px]" data-name="DownloadsForms">
      <Container106 />
      <Button7 />
    </div>
  );
}

function DownloadsForms27() {
  return (
    <div className="absolute h-[56px] left-[24px] top-[96px] w-[194px]" data-name="DownloadsForms">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] top-[1.67px] w-[176px]">Emergency Contact Sheets</p>
    </div>
  );
}

function DownloadsForms28() {
  return (
    <div className="absolute h-[45.5px] left-[24px] top-[160px] w-[194px]" data-name="DownloadsForms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] top-[-6px] w-[146px]">Keep important contact information organized</p>
    </div>
  );
}

function DownloadsForms29() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[24px] top-[232.34px] w-[36.542px]" data-name="DownloadsForms">
      <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(20,148,150,0.7)] text-nowrap whitespace-pre">450 KB</p>
    </div>
  );
}

function Container107() {
  return (
    <div className="[grid-area:2_/_3] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <DownloadsForms26 />
      <DownloadsForms27 />
      <DownloadsForms28 />
      <DownloadsForms29 />
    </div>
  );
}

function Icon50() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p38e02680} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p394f8700} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M11.6667 10.5H9.33333" id="Vector_3" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M18.6667 15.1667H9.33333" id="Vector_4" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M18.6667 19.8333H9.33333" id="Vector_5" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container108() {
  return (
    <div className="bg-[rgba(20,148,150,0.1)] relative rounded-[16.4px] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[56px]">
        <Icon50 />
      </div>
    </div>
  );
}

function Icon51() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[37.5%] left-1/2 right-1/2 top-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-8.33%_-0.83px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 12">
            <path d="M0.833333 10.8333V0.833333" id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[62.5%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 7">
            <path d={svgPaths.p3e05ba00} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_29.17%_37.5%_29.17%]" data-name="Vector">
        <div className="absolute inset-[-20%_-10%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
            <path d={svgPaths.p2dc3c480} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-[20px]">
        <Icon51 />
      </div>
    </div>
  );
}

function DownloadsForms30() {
  return (
    <div className="absolute content-stretch flex h-[56px] items-start justify-between left-[24px] top-[24px] w-[194px]" data-name="DownloadsForms">
      <Container108 />
      <Button8 />
    </div>
  );
}

function DownloadsForms31() {
  return (
    <div className="absolute h-[28px] left-[24px] top-[96px] w-[194px]" data-name="DownloadsForms">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] text-nowrap top-[1.67px] whitespace-pre">Medical Forms</p>
    </div>
  );
}

function DownloadsForms32() {
  return (
    <div className="absolute h-[45.5px] left-[24px] top-[126px] w-[194px]" data-name="DownloadsForms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] top-px w-[183px]">Medication authorization and health information forms</p>
    </div>
  );
}

function DownloadsForms33() {
  return (
    <div className="absolute content-stretch flex h-[16px] items-start left-[24px] top-[229.34px] w-[36.542px]" data-name="DownloadsForms">
      <p className="font-['Poppins:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(20,148,150,0.7)] text-nowrap whitespace-pre">980 KB</p>
    </div>
  );
}

function Container109() {
  return (
    <div className="[grid-area:2_/_4] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <DownloadsForms30 />
      <DownloadsForms31 />
      <DownloadsForms32 />
      <DownloadsForms33 />
    </div>
  );
}

function Container110() {
  return (
    <div className="gap-[24px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[237.5px_minmax(0px,_1fr)] h-[527px] relative shrink-0 w-full" data-name="Container">
      <Container95 />
      <Container97 />
      <Container99 />
      <Container101 />
      <Container103 />
      <Container105 />
      <Container107 />
      <Container109 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="font-['Poppins:Regular',sans-serif] h-[24px] leading-[24px] not-italic relative shrink-0 text-[#1e7872] text-[16px] text-center text-nowrap w-full whitespace-pre" data-name="Paragraph">
      <p className="absolute left-[520px] top-[5.84px] translate-x-[-50%]">All forms are available in PDF format. Need help filling them out?</p>
      <p className="absolute left-[788.48px] top-[1.33px] translate-x-[-50%]">.</p>
    </div>
  );
}

function Container111() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] h-[759px] items-start left-[487px] px-[80px] py-0 top-[96px] w-[1200px]" data-name="Container">
      <Container93 />
      <Container110 />
      <Paragraph14 />
    </div>
  );
}

function Link24() {
  return (
    <div className="absolute content-stretch flex h-[21px] items-start left-[1043px] top-[886.84px] w-[88px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#149496] text-[16px] text-center text-nowrap whitespace-pre">Contact us</p>
    </div>
  );
}

function Container112() {
  return <div className="absolute left-[40px] opacity-30 size-[95px] top-[80px]" data-name="Container" />;
}

function VectorIconEMail() {
  return (
    <div className="relative size-[219.458px]" data-name="Vector Icon EMail 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 220 220">
        <g id="Vector Icon EMail 1" opacity="0.3">
          <path d={svgPaths.p16506f80} fill="var(--fill-0, #C49A3A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function VectorIconGlobe() {
  return (
    <div className="relative size-[252px]" data-name="Vector Icon Globe 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector Icon Globe 1">
          <path d={svgPaths.p395883f0} fill="var(--fill-0, #1E7872)" id="Vector" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function DownloadsForms34() {
  return (
    <div className="absolute bg-[#f5edda] h-[951px] left-0 overflow-clip top-[6535.16px] w-[2174px]" data-name="DownloadsForms">
      <Container111 />
      <Link24 />
      <Container112 />
      <div className="absolute flex items-center justify-center left-[1837.82px] size-[260.478px] top-[569.84px]" style={{ "--transform-inner-width": "219.453125", "--transform-inner-height": "219.453125" } as React.CSSProperties}>
        <div className="flex-none rotate-[347.936deg]">
          <VectorIconEMail />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[46px] size-[324.58px] top-[51.84px]" style={{ "--transform-inner-width": "252", "--transform-inner-height": "252" } as React.CSSProperties}>
        <div className="flex-none rotate-[20.611deg]">
          <VectorIconGlobe />
        </div>
      </div>
    </div>
  );
}

function ResourcesContact() {
  return (
    <div className="absolute h-[52px] left-0 top-0 w-[1040px]" data-name="ResourcesContact">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[52px] left-[520.29px] not-italic text-[#232e43] text-[40px] text-center text-nowrap top-[3.33px] translate-x-[-50%] whitespace-pre">Need Help Finding Resources?</p>
    </div>
  );
}

function ResourcesContact1() {
  return (
    <div className="absolute h-[28px] left-[184px] top-[68px] w-[672px]" data-name="ResourcesContact">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-[336.55px] not-italic text-[#1e7872] text-[20px] text-center text-nowrap top-[1.67px] translate-x-[-50%] whitespace-pre">Our team is here to connect you with the information you need</p>
    </div>
  );
}

function Container113() {
  return (
    <div className="absolute h-[96px] left-[80px] top-0 w-[1040px]" data-name="Container">
      <ResourcesContact />
      <ResourcesContact1 />
    </div>
  );
}

function Label() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Your Name *</p>
    </div>
  );
}

function TextInput1() {
  return (
    <div className="absolute bg-white h-[52px] left-0 rounded-[16.4px] top-0 w-[576px]" data-name="Text Input">
      <div className="content-stretch flex h-[52px] items-center overflow-clip pl-[48px] pr-[16px] py-[12px] relative rounded-[inherit] w-[576px]">
        <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(35,46,67,0.5)] text-nowrap whitespace-pre">Enter your name</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[16.4px]" />
    </div>
  );
}

function Icon52() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p1beb9580} id="Vector" stroke="var(--stroke-0, #1E7872)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p32ab0300} id="Vector_2" stroke="var(--stroke-0, #1E7872)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container114() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <TextInput1 />
      <Icon52 />
    </div>
  );
}

function Container115() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[84px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <Container114 />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Email Address *</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="absolute bg-white h-[52px] left-0 rounded-[16.4px] top-0 w-[576px]" data-name="Email Input">
      <div className="content-stretch flex h-[52px] items-center overflow-clip pl-[48px] pr-[16px] py-[12px] relative rounded-[inherit] w-[576px]">
        <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(35,46,67,0.5)] text-nowrap whitespace-pre">you@example.com</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[16.4px]" />
    </div>
  );
}

function Icon53() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p24d83580} id="Vector" stroke="var(--stroke-0, #1E7872)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pd919a80} id="Vector_2" stroke="var(--stroke-0, #1E7872)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container116() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <EmailInput />
      <Icon53 />
    </div>
  );
}

function Container117() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[84px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Container116 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Who are you seeking resources for? *</p>
    </div>
  );
}

function Option() {
  return (
    <div className="absolute left-[-799px] size-0 top-[-3522.16px]" data-name="Option">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] top-0 w-0">Select an option</p>
    </div>
  );
}

function Option1() {
  return (
    <div className="absolute left-[-799px] size-0 top-[-3522.16px]" data-name="Option">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] top-0 w-0">Parent / Guardian</p>
    </div>
  );
}

function Option2() {
  return (
    <div className="absolute left-[-799px] size-0 top-[-3522.16px]" data-name="Option">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] top-0 w-0">Educator / Staff</p>
    </div>
  );
}

function Option3() {
  return (
    <div className="absolute left-[-799px] size-0 top-[-3522.16px]" data-name="Option">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] top-0 w-0">Intern / Student</p>
    </div>
  );
}

function Option4() {
  return (
    <div className="absolute left-[-799px] size-0 top-[-3522.16px]" data-name="Option">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] top-0 w-0">Community Partner</p>
    </div>
  );
}

function Option5() {
  return (
    <div className="absolute left-[-799px] size-0 top-[-3522.16px]" data-name="Option">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] top-0 w-0">Other</p>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="bg-white h-[52px] relative rounded-[16.4px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[16.4px]" />
      <Option />
      <Option1 />
      <Option2 />
      <Option3 />
      <Option4 />
      <Option5 />
    </div>
  );
}

function Container118() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[84px] items-start relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Dropdown />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">How can we help? *</p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="absolute bg-white h-[148px] left-0 rounded-[16.4px] top-0 w-[576px]" data-name="Text Area">
      <div className="content-stretch flex h-[148px] items-start overflow-clip pl-[48px] pr-[16px] py-[12px] relative rounded-[inherit] w-[576px]">
        <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(35,46,67,0.5)] text-nowrap whitespace-pre">{`Tell us what resources or information you're looking for...`}</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[16.4px]" />
    </div>
  );
}

function Icon54() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p12dcd500} id="Vector" stroke="var(--stroke-0, #1E7872)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container119() {
  return (
    <div className="h-[153.333px] relative shrink-0 w-full" data-name="Container">
      <TextArea />
      <Icon54 />
    </div>
  );
}

function Container120() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[185.333px] items-start relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <Container119 />
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[#149496] h-[56px] relative rounded-[16.4px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[227px] not-italic text-[16px] text-nowrap text-white top-[15.51px] tracking-[0.4px] uppercase whitespace-pre">Send Message</p>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[589.333px] items-start relative shrink-0 w-full" data-name="Form">
      <Container115 />
      <Container117 />
      <Container118 />
      <Container120 />
      <Button9 />
    </div>
  );
}

function Container121() {
  return (
    <div className="absolute bg-[#f5edda] content-stretch flex flex-col h-[685.333px] items-start left-[264px] pb-0 pt-[48px] px-[48px] rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-[144px] w-[672px]" data-name="Container">
      <Form />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[39.198px] left-[32px] top-[32px] w-[608px]" data-name="Heading 3">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-[303.9px] not-italic text-[#232e43] text-[28px] text-center text-nowrap top-[2.67px] translate-x-[-50%] whitespace-pre">Get New Resources Every Month</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="absolute h-[48px] left-[32px] top-[83.2px] w-[608px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[304.42px] not-italic text-[16px] text-[rgba(35,46,67,0.8)] text-center top-[1.33px] translate-x-[-50%] w-[572px]">Subscribe to our newsletter for curated resources, parenting tips, and community updates.</p>
    </div>
  );
}

function EmailInput1() {
  return (
    <div className="basis-0 grow h-[52px] min-h-px min-w-px relative rounded-[2.23696e+07px] shrink-0" data-name="Email Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[52px] items-center px-[16px] py-[12px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(35,46,67,0.5)] text-nowrap whitespace-pre">Enter your email</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[2.23696e+07px]" />
    </div>
  );
}

function Button10() {
  return (
    <div className="bg-[#232e43] h-[52px] relative rounded-[2.23696e+07px] shrink-0 w-[132.354px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[52px] relative w-[132.354px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[26.35px] not-italic text-[16px] text-nowrap text-white top-[14.31px] whitespace-pre">Subscribe</p>
      </div>
    </div>
  );
}

function Container122() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[52px] items-start left-[112px] top-[155.2px] w-[448px]" data-name="Container">
      <EmailInput1 />
      <Button10 />
    </div>
  );
}

function Container123() {
  return (
    <div className="absolute bg-gradient-to-b from-[#c49a3a] h-[239.198px] left-[264px] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] to-[#f6d33a] top-[877.33px] w-[672px]" data-name="Container">
      <Heading1 />
      <Paragraph15 />
      <Container122 />
    </div>
  );
}

function Container124() {
  return (
    <div className="absolute h-[1116.53px] left-[487px] top-[96px] w-[1200px]" data-name="Container">
      <Container113 />
      <Container121 />
      <Container123 />
    </div>
  );
}

function Container125() {
  return <div className="absolute left-[64px] opacity-30 size-[85px] top-[1127.53px]" data-name="Container" />;
}

function VectorIconLocationPin() {
  return (
    <div className="relative size-[252px]" data-name="Vector Icon Location Pin 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector Icon Location Pin 1">
          <path d={svgPaths.p330d0e80} fill="var(--fill-0, #149496)" id="Vector" opacity="0.3" />
          <path d={svgPaths.p5247f00} fill="var(--fill-0, #149496)" id="Vector_2" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function VectorPaperAirplane() {
  return (
    <div className="relative size-[252px]" data-name="Vector Paper Airplane 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector Paper Airplane 3">
          <path d={svgPaths.p1756200} fill="var(--fill-0, #C49A3A)" id="Vector" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function ResourcesContact2() {
  return (
    <div className="absolute bg-white h-[1308.53px] left-0 overflow-clip top-[7486.16px] w-[2174px]" data-name="ResourcesContact">
      <Container124 />
      <Container125 />
      <div className="absolute flex items-center justify-center left-[1845px] size-[291.411px] top-[45.84px]" style={{ "--transform-inner-width": "252", "--transform-inner-height": "252" } as React.CSSProperties}>
        <div className="flex-none rotate-[350.145deg]">
          <VectorIconLocationPin />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[64px] size-[317.902px] top-[945.84px]" style={{ "--transform-inner-width": "252", "--transform-inner-height": "252" } as React.CSSProperties}>
        <div className="flex-none rotate-[341.871deg]">
          <VectorPaperAirplane />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="h-[8794.69px] relative shrink-0 w-full" data-name="Main Content">
      <ResourcesHero2 />
      <ParentResources38 />
      <ChildcareEducation36 />
      <LocalCommunityServices12 />
      <HealthSafety22 />
      <ResearchDepartment7 />
      <DownloadsForms34 />
      <ResourcesContact2 />
    </div>
  );
}

function ImageVillageValuesLogo1() {
  return (
    <div className="relative rounded-[2.23696e+07px] shrink-0 size-[40px]" data-name="Image (Village Values Logo)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[2.23696e+07px] size-full" src={imgImageVillageValuesLogo} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-[40px]" />
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[24px] relative shrink-0 w-[96.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[96.875px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[1.33px] whitespace-pre">Village Values</p>
      </div>
    </div>
  );
}

function Container126() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center relative shrink-0 w-full" data-name="Container">
      <ImageVillageValuesLogo1 />
      <Text18 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.7)] top-[1.33px] w-[193px]">Licensed in-home childcare built on trust, learning, and community.</p>
    </div>
  );
}

function Container127() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container126 />
      <Paragraph16 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[20px] text-nowrap text-white top-[1.67px] whitespace-pre">Quick Links</p>
    </div>
  );
}

function Link25() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[67.594px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Programs</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link25 />
    </div>
  );
}

function Link26() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[43.583px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">About</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link26 />
    </div>
  );
}

function Link27() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[39.844px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Enroll</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link27 />
    </div>
  );
}

function Link28() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[52.698px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Careers</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link28 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[120px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function Container128() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading13 />
      <List />
    </div>
  );
}

function Heading14() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[20px] text-nowrap text-white top-[1.67px] whitespace-pre">Resources</p>
    </div>
  );
}

function Link29() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[123.438px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Parent Handbook</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link29 />
    </div>
  );
}

function Link30() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[103.271px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Daily Schedule</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link30 />
    </div>
  );
}

function Link31() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[36.052px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">FAQs</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link31 />
    </div>
  );
}

function Link32() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[76.875px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Contact Us</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link32 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[120px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
    </div>
  );
}

function Container129() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading14 />
      <List1 />
    </div>
  );
}

function Heading15() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[20px] text-nowrap text-white top-[1.67px] whitespace-pre">Contact</p>
    </div>
  );
}

function Icon55() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p26ddc800} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p35ba4680} id="Vector_2" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute h-[24px] left-[28px] top-0 w-[192px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap top-[1.33px] whitespace-pre">Rancho Cordova, CA 95742</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Icon55 />
      <Text19 />
    </div>
  );
}

function Icon56() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_574)" id="Icon">
          <path d={svgPaths.p24c7c480} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_574">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link33() {
  return (
    <div className="h-[24px] relative shrink-0 w-[106.688px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[106.688px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap top-[1.33px] whitespace-pre">(916) 761-0211</p>
      </div>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="List Item">
      <Icon56 />
      <Link33 />
    </div>
  );
}

function Icon57() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p24d83580} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pd919a80} id="Vector_2" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link34() {
  return (
    <div className="h-[24px] relative shrink-0 w-[158.021px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[158.021px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap top-[1.33px] whitespace-pre">info@villagevalues.net</p>
      </div>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="List Item">
      <Icon57 />
      <Link34 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[96px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem8 />
      <ListItem9 />
      <ListItem10 />
    </div>
  );
}

function Container130() {
  return (
    <div className="[grid-area:1_/_4] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading15 />
      <List2 />
    </div>
  );
}

function Container131() {
  return (
    <div className="gap-[48px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[164px] relative shrink-0 w-full" data-name="Container">
      <Container127 />
      <Container128 />
      <Container129 />
      <Container130 />
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[20px] relative shrink-0 w-[381.052px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[381.052px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.6)] text-nowrap top-[0.67px] whitespace-pre">{`© 2024 Village Values. All rights reserved. Licensed & Insured.`}</p>
      </div>
    </div>
  );
}

function Icon58() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p30c8d680} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link35() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[2.23696e+07px] shrink-0 size-[40px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[40px]">
        <Icon58 />
      </div>
    </div>
  );
}

function Icon59() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_710)" id="Icon">
          <path d={svgPaths.p4b98700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2b0d6500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M14.5833 5.41667H14.5917" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_710">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link36() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[2.23696e+07px] shrink-0 size-[40px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[40px]">
        <Icon59 />
      </div>
    </div>
  );
}

function Icon60() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p188b5880} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Link37() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.1)] grow h-[40px] min-h-px min-w-px relative rounded-[2.23696e+07px] shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[40px] items-center justify-center relative w-full">
        <Icon60 />
      </div>
    </div>
  );
}

function Container132() {
  return (
    <div className="h-[40px] relative shrink-0 w-[152px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] h-[40px] items-start relative w-[152px]">
        <Link35 />
        <Link36 />
        <Link37 />
      </div>
    </div>
  );
}

function Container133() {
  return (
    <div className="content-stretch flex h-[72.667px] items-center justify-between pb-0 pt-[0.667px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px_0px_0px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Paragraph17 />
      <Container132 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#232e43] h-[412.667px] relative shrink-0 w-full" data-name="Footer">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[48px] h-[412.667px] items-start pb-0 pt-[64px] px-[567px] relative w-full">
          <Container131 />
          <Container133 />
        </div>
      </div>
    </div>
  );
}

function Resources() {
  return (
    <div className="absolute bg-[#f5edda] content-stretch flex flex-col h-[9207.35px] items-start left-0 top-0 w-[2174px]" data-name="Resources">
      <MainContent />
      <Footer />
    </div>
  );
}

function Button11() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[36px] left-[68.77px] rounded-[2.23696e+07px] top-[12px] w-[137.125px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[7.56px] not-italic text-[#232e43] text-[14px] text-nowrap top-[8.33px] whitespace-pre">Parent Resources</p>
    </div>
  );
}

function Button12() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[36px] left-[217.9px] rounded-[2.23696e+07px] top-[12px] w-[154.333px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[6.44px] not-italic text-[#232e43] text-[14px] text-nowrap top-[8.33px] whitespace-pre">Childcare Education</p>
    </div>
  );
}

function Button13() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[36px] left-[384.23px] rounded-[2.23696e+07px] top-[12px] w-[157.031px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[5.1px] not-italic text-[#232e43] text-[14px] text-nowrap top-[8.33px] whitespace-pre">Community Services</p>
    </div>
  );
}

function Button14() {
  return (
    <div className="absolute bg-[rgba(35,46,67,0.9)] h-[36px] left-[553.26px] rounded-[2.23696e+07px] top-[12px] w-[127.479px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[10.07px] not-italic text-[14px] text-nowrap text-white top-[8.33px] whitespace-pre">Health + Safety</p>
    </div>
  );
}

function Button15() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[36px] left-[692.74px] rounded-[2.23696e+07px] top-[12px] w-[164.917px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[4.59px] not-italic text-[#232e43] text-[14px] text-nowrap top-[8.33px] whitespace-pre">Research Department</p>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[36px] left-[869.66px] rounded-[2.23696e+07px] top-[12px] w-[100.969px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[11.68px] not-italic text-[#232e43] text-[14px] text-nowrap top-[8.33px] whitespace-pre">Downloads</p>
    </div>
  );
}

function Button17() {
  return (
    <div className="absolute bg-[#e5795b] h-[36px] left-[982.63px] rounded-[2.23696e+07px] top-[12px] w-[99.271px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[10.71px] not-italic text-[14px] text-nowrap text-white top-[8.33px] whitespace-pre">Contact Us</p>
    </div>
  );
}

function Container134() {
  return (
    <div className="h-[60px] overflow-clip relative rounded-[61px] shrink-0 w-[1150.67px]" data-name="Container">
      <Button11 />
      <Button12 />
      <Button13 />
      <Button14 />
      <Button15 />
      <Button16 />
      <Button17 />
    </div>
  );
}

function ResourcesBottomDock() {
  return (
    <div className="absolute bg-[rgba(196,154,58,0.95)] content-stretch flex flex-col h-[61.333px] items-start left-[512px] p-[0.667px] rounded-[32px] top-[5693px]" data-name="ResourcesBottomDock">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(35,46,67,0.1)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <Container134 />
    </div>
  );
}

function Container135() {
  return <div className="absolute bg-[#e5795b] left-[55.68px] rounded-[2.23696e+07px] size-[16.639px] top-[-9.92px]" data-name="Container" />;
}

function Container136() {
  return <div className="absolute bg-[#f6d33a] left-[-5.19px] rounded-[2.23696e+07px] size-[14.388px] top-[58.79px]" data-name="Container" />;
}

function Container137() {
  return <div className="absolute bg-[#149496] left-[-12.05px] opacity-[0.705] rounded-[2.23696e+07px] size-[8.091px] top-[3.95px]" data-name="Container" />;
}

function Container138() {
  return <div className="absolute left-0 opacity-0 rounded-[2.23696e+07px] size-[62.667px] top-0" data-name="Container" />;
}

function Icon61() {
  return (
    <div className="absolute left-[17.33px] size-[28px] top-[17.33px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p3ab0ee00} id="Vector" stroke="var(--stroke-0, #F5EDDA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.33" />
          <path d="M14 22.1667V5.83333" id="Vector_2" stroke="var(--stroke-0, #F5EDDA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4.33" />
        </g>
      </svg>
    </div>
  );
}

function Button18() {
  return (
    <div className="absolute bg-[rgba(196,154,58,0.9)] border-[0.667px] border-[rgba(196,154,58,0.2)] border-solid left-0 overflow-clip rounded-[2.23696e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[64px] top-[-0.93px]" data-name="Button">
      <Container138 />
      <Icon61 />
    </div>
  );
}

function ScrollToTop() {
  return (
    <div className="absolute left-[2078px] size-[64px] top-[5629.33px]" data-name="ScrollToTop">
      <Container135 />
      <Container136 />
      <Container137 />
      <Button18 />
    </div>
  );
}

export default function ResourcePage() {
  return (
    <div className="bg-[#f5edda] relative size-full" data-name="Resource Page">
      <Resources />
      <ResourcesBottomDock />
      <ScrollToTop />
    </div>
  );
}