import svgPaths from "./svg-v0v0r198aq";
import imgImageWithFallback from "figma:asset/63e301fbec260b5ace96d0f4cde75e071b58afd1.png";
import imgImageVillageValuesLogo from "figma:asset/812e68f0e38eb12d17187ac3fd565ef3be28e713.png";
import imgImageWithFallback1 from "figma:asset/40c81052a73fb88a1608e98df07b890338611765.png";
import imgImageWithFallback2 from "figma:asset/2c4d841bf9cc9df2bf98c494766e795cd8d967e0.png";
import imgImageWithFallback3 from "figma:asset/d18c5a1435a5c3802f7bfaac4a63c39da81a8929.png";

function Container() {
  return <div className="absolute left-[1974px] opacity-30 size-[120px] top-[128px]" data-name="Container" />;
}

function Container1() {
  return <div className="absolute left-[40px] opacity-30 size-[80px] top-[1097.33px]" data-name="Container" />;
}

function Container2() {
  return <div className="absolute left-[1914px] opacity-30 size-[100px] top-[652.67px]" data-name="Container" />;
}

function ProgramsHero() {
  return (
    <div className="absolute h-[201.594px] left-0 top-0 w-[496px]" data-name="ProgramsHero">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[67.2px] left-0 not-italic text-[#232e43] text-[56px] top-[5px] w-[463px]">Programs built to help your child grow</p>
    </div>
  );
}

function ProgramsHero1() {
  return (
    <div className="absolute h-[130px] left-0 top-[225.59px] w-[496px]" data-name="ProgramsHero">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[32.5px] left-0 not-italic text-[#1e7872] text-[20px] top-[1.67px] w-[468px]">From infants to preschoolers, each program supports learning, safety, and fun. We create nurturing environments where children thrive at every stage of development.</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[198.17px] size-[20px] top-[16.32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function ProgramsHero2() {
  return (
    <div className="absolute bg-[#149496] h-[56px] left-0 rounded-[2.23696e+07px] top-[387.59px] w-[250.167px]" data-name="ProgramsHero">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[32px] not-italic text-[16px] text-nowrap text-white top-[17.33px] tracking-[0.4px] uppercase whitespace-pre">Explore Programs</p>
      <Icon />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[443.594px] left-[80px] top-[28.2px] w-[496px]" data-name="Container">
      <ProgramsHero />
      <ProgramsHero1 />
      <ProgramsHero2 />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[500px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col h-[500px] items-start left-[624px] overflow-clip rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[496px]" data-name="Container">
      <ImageWithFallback />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[500px] left-[487px] top-[418.67px] w-[1200px]" data-name="Container">
      <Container3 />
      <Container4 />
    </div>
  );
}

function ImageVillageValuesLogo() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative rounded-[2.23696e+07px] shrink-0" data-name="Image (Village Values Logo)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[2.23696e+07px] size-full" src={imgImageVillageValuesLogo} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] w-full" />
    </div>
  );
}

function Link() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center relative size-[48px]">
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[489.24px]">
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[44px] relative w-[149.802px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[16px] text-nowrap text-white top-[11.33px] tracking-[0.4px] uppercase whitespace-pre">Book a Visit</p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <div className="absolute bg-[#f5edda] box-border content-stretch flex h-[88px] items-center justify-between left-0 px-[567px] py-0 top-0 w-[2174px]" data-name="Header">
      <Link />
      <Navigation />
      <Button />
    </div>
  );
}

function VectorFlower() {
  return (
    <div className="absolute left-[80px] size-[252px] top-[971px]" data-name="Vector Flower 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector Flower 1" opacity="0.3">
          <path d={svgPaths.p1d8cd880} fill="var(--fill-0, #E5795B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function VectorGrass() {
  return (
    <div className="absolute left-[1607px] size-[252px] top-[1029px]" data-name="Vector Grass 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector Grass 1" opacity="0.3">
          <path d={svgPaths.p15f51900} fill="var(--fill-0, #1E7872)" id="Vector" />
          <path d={svgPaths.p2b360600} fill="var(--fill-0, #1E7872)" id="Vector_2" />
          <path d={svgPaths.p3b3d4d00} fill="var(--fill-0, #1E7872)" id="Vector_3" />
          <path d={svgPaths.p2eb2a780} fill="var(--fill-0, #1E7872)" id="Vector_4" />
          <path d={svgPaths.p171c380} fill="var(--fill-0, #1E7872)" id="Vector_5" />
          <path d={svgPaths.p1030c600} fill="var(--fill-0, #1E7872)" id="Vector_6" />
          <path d={svgPaths.p26c23280} fill="var(--fill-0, #1E7872)" id="Vector_7" />
        </g>
      </svg>
    </div>
  );
}

function VectorTree1() {
  return (
    <div className="absolute h-[302.473px] left-[1795px] top-[899px] w-[309.281px]" data-name="Vector Tree 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 310 303">
        <g id="Vector Tree 2">
          <path d={svgPaths.p3c08cf00} fill="var(--fill-0, #C49A3A)" id="Vector" opacity="0.3" />
          <path d={svgPaths.p20c6d400} fill="var(--fill-0, #C49A3A)" id="Vector_2" opacity="0.3" />
          <path d={svgPaths.pd699f00} fill="var(--fill-0, #C49A3A)" id="Vector_3" opacity="0.3" />
          <path d={svgPaths.p1e015c00} fill="var(--fill-0, #C49A3A)" id="Vector_4" opacity="0.3" />
          <path d={svgPaths.pb2a9280} fill="var(--fill-0, #C49A3A)" id="Vector_5" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function VectorSun() {
  return (
    <div className="absolute left-[1826px] size-[252px] top-[66px]" data-name="Vector Sun 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector Sun 2">
          <path d={svgPaths.p2546c700} fill="var(--fill-0, #C49A3A)" id="Vector" opacity="0.3" />
          <path d={svgPaths.pa45b000} fill="var(--fill-0, #C49A3A)" id="Vector_2" opacity="0.3" />
          <path d={svgPaths.p13797080} fill="var(--fill-0, #C49A3A)" id="Vector_3" opacity="0.3" />
          <path d={svgPaths.p18f34d00} fill="var(--fill-0, #C49A3A)" id="Vector_4" opacity="0.3" />
          <path d={svgPaths.p32c2a0b0} fill="var(--fill-0, #C49A3A)" id="Vector_5" opacity="0.3" />
          <path d={svgPaths.p381a3a00} fill="var(--fill-0, #C49A3A)" id="Vector_6" opacity="0.3" />
          <path d={svgPaths.p13920100} fill="var(--fill-0, #C49A3A)" id="Vector_7" opacity="0.3" />
          <path d={svgPaths.p141dd4c0} fill="var(--fill-0, #C49A3A)" id="Vector_8" opacity="0.3" />
          <path d={svgPaths.p17c99440} fill="var(--fill-0, #C49A3A)" id="Vector_9" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function ProgramsHero3() {
  return (
    <div className="absolute h-[1305.33px] left-0 overflow-clip top-0 w-[2174px]" data-name="ProgramsHero">
      <Container />
      <Container1 />
      <Container2 />
      <Container5 />
      <Header />
      <VectorFlower />
      <VectorGrass />
      <VectorTree1 />
      <VectorSun />
    </div>
  );
}

function InfantProgram() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="InfantProgram">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[52px] left-0 not-italic text-[#232e43] text-[40px] text-nowrap top-[3.33px] whitespace-pre">Infant Program</p>
    </div>
  );
}

function InfantProgram1() {
  return (
    <div className="h-[146.25px] relative shrink-0 w-full" data-name="InfantProgram">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[29.25px] left-0 not-italic text-[#1e7872] text-[18px] top-px w-[468px]">{`Our infant program provides a calm, safe, and nurturing environment for your littlest ones. We follow each baby's unique development rate with personalized feeding schedules, gentle sleep routines, and plenty of loving interaction to support healthy growth rate.`}</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[214.25px] items-start left-0 top-0 w-[488px]" data-name="Container">
      <InfantProgram />
      <InfantProgram1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[24px] size-[32px] top-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p186c1a00} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function InfantProgram2() {
  return (
    <div className="absolute h-[28px] left-[24px] top-[68px] w-[188px]" data-name="InfantProgram">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] text-nowrap top-[1.67px] whitespace-pre">Sleep</p>
    </div>
  );
}

function InfantProgram3() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[100px] w-[188px]" data-name="InfantProgram">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">Personalized sleep schedules</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="[grid-area:1_/_1] bg-[#f5edda] place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <Icon1 />
      <InfantProgram2 />
      <InfantProgram3 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[24px] size-[32px] top-[24px]" data-name="Icon">
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

function InfantProgram4() {
  return (
    <div className="absolute h-[28px] left-[24px] top-[68px] w-[188px]" data-name="InfantProgram">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] text-nowrap top-[1.67px] whitespace-pre">Play</p>
    </div>
  );
}

function InfantProgram5() {
  return (
    <div className="absolute h-[40px] left-[24px] top-[100px] w-[188px]" data-name="InfantProgram">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] top-[0.67px] w-[154px]">Age-appropriate sensory activities</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="[grid-area:1_/_2] bg-[#f5edda] place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <Icon2 />
      <InfantProgram4 />
      <InfantProgram5 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[24px] size-[32px] top-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p9921600} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function InfantProgram6() {
  return (
    <div className="absolute h-[28px] left-[24px] top-[68px] w-[188px]" data-name="InfantProgram">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] text-nowrap top-[1.67px] whitespace-pre">Care</p>
    </div>
  );
}

function InfantProgram7() {
  return (
    <div className="absolute h-[20px] left-[24px] top-[100px] w-[188px]" data-name="InfantProgram">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">Attentive care and bonding</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="[grid-area:2_/_1] bg-[#f5edda] place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <Icon3 />
      <InfantProgram6 />
      <InfantProgram7 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[24px] size-[32px] top-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p110e8100} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p34392700} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function InfantProgram8() {
  return (
    <div className="absolute h-[28px] left-[24px] top-[68px] w-[188px]" data-name="InfantProgram">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] text-nowrap top-[1.67px] whitespace-pre">Monitoring</p>
    </div>
  );
}

function InfantProgram9() {
  return (
    <div className="absolute h-[40px] left-[24px] top-[100px] w-[188px]" data-name="InfantProgram">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] top-[0.67px] w-[157px]">Constant supervision and safety</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="[grid-area:2_/_2] bg-[#f5edda] place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <Icon4 />
      <InfantProgram8 />
      <InfantProgram9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute gap-[16px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[344px] left-0 top-[246.25px] w-[488px]" data-name="Container">
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute bg-[#149496] h-[56px] left-0 rounded-[2.23696e+07px] top-[614.25px] w-[165.802px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[32px] not-italic text-[16px] text-nowrap text-white top-[17.33px] tracking-[0.4px] uppercase whitespace-pre">Book a Visit</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute h-[670.25px] left-[552px] top-0 w-[488px]" data-name="Container">
      <Container6 />
      <Container11 />
      <Link7 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="h-[500px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-9.37%] max-w-none top-[-0.74%] w-[163.93%]" src={imgImageWithFallback1} />
      </div>
    </div>
  );
}

function InfantProgram10() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col h-[500px] items-start left-0 overflow-clip rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-[488px]" data-name="InfantProgram">
      <ImageWithFallback1 />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-0 not-italic text-[20px] text-nowrap text-white top-[1.67px] whitespace-pre">6 months– 12 months</p>
    </div>
  );
}

function InfantProgram11() {
  return (
    <div className="absolute bg-[#e5795b] box-border content-stretch flex flex-col h-[76px] items-start left-[294px] pb-0 pt-[24px] px-[24px] rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[-23.46px] w-[238px]" data-name="InfantProgram">
      <Paragraph />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute h-[500px] left-0 top-[85.13px] w-[488px]" data-name="Container">
      <InfantProgram10 />
      <InfantProgram11 />
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute h-[670.25px] left-[567px] top-[96px] w-[1040px]" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function VectorMoon() {
  return (
    <div className="absolute left-[-108.7px] size-[252px] top-[-86.65px]" data-name="Vector Moon 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector Moon 1">
          <path d={svgPaths.p26d94000} fill="var(--fill-0, #C49A3A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[100.6px] relative rounded-[2.23696e+07px] shrink-0 w-full" data-name="Container">
      <VectorMoon />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[2034px] opacity-30 size-[100px] top-[80px]" data-name="Container">
      <Container15 />
    </div>
  );
}

function VectorRabbit() {
  return <div className="absolute left-[-52.12px] size-[252px] top-[-52.2px]" data-name="Vector Rabbit 1" />;
}

function Container17() {
  return (
    <div className="h-[73.762px] relative rounded-tl-[2.23696e+07px] rounded-tr-[2.23696e+07px] shrink-0 w-full" data-name="Container">
      <VectorRabbit />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[80px] opacity-30 size-[70px] top-[632.25px]" data-name="Container">
      <Container17 />
    </div>
  );
}

function InfantProgram12() {
  return (
    <div className="absolute bg-white h-[862.25px] left-0 overflow-clip top-[1305.33px] w-[2174px]" data-name="InfantProgram">
      <Container14 />
      <Container16 />
      <Container18 />
      <div className="absolute inset-[67.92%_77.43%_8.61%_12.28%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 224 203">
          <path d={svgPaths.p172e0700} fill="var(--fill-0, #F6D33A)" id="Vector" opacity="0.3" />
        </svg>
      </div>
    </div>
  );
}

function ToddlerProgram() {
  return (
    <div className="absolute bg-[#f6d33a] h-[40px] left-0 rounded-[2.23696e+07px] top-0 w-[98.24px]" data-name="ToddlerProgram">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[16px] not-italic text-[#232e43] text-[16px] text-nowrap top-[9.33px] whitespace-pre">1–3 years</p>
    </div>
  );
}

function ToddlerProgram1() {
  return (
    <div className="absolute h-[52px] left-0 top-[56px] w-[488px]" data-name="ToddlerProgram">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[52px] left-0 not-italic text-[#232e43] text-[40px] text-nowrap top-[3.33px] whitespace-pre">Toddler Program</p>
    </div>
  );
}

function ToddlerProgram2() {
  return (
    <div className="absolute h-[146.25px] left-0 top-[124px] w-[488px]" data-name="ToddlerProgram">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[29.25px] left-0 not-italic text-[#1e7872] text-[18px] top-px w-[473px]">Our toddler program is designed for curious little explorers ready to move, discover, and learn. We provide a structured yet playful environment that encourages independence, builds social skills, and supports their growing need for movement and creativity.</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[270.25px] left-0 top-0 w-[488px]" data-name="Container">
      <ToddlerProgram />
      <ToddlerProgram1 />
      <ToddlerProgram2 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-0 size-[24px] top-[7.59px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g clipPath="url(#clip0_1_2267)" id="Icon">
          <path d={svgPaths.p3eebfc00} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M20 2V6" id="Vector_2" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M22 4H18" id="Vector_3" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p352890c0} id="Vector_4" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_1_2267">
            <rect fill="white" height="24" width="24" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ToddlerProgram3() {
  return (
    <div className="h-[39.198px] relative shrink-0 w-full" data-name="ToddlerProgram">
      <Icon5 />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-[32px] not-italic text-[#232e43] text-[28px] text-nowrap top-[2.67px] whitespace-pre">Daily Activities</p>
    </div>
  );
}

function ToddlerProgram4() {
  return <div className="absolute bg-[#149496] left-0 rounded-[2.23696e+07px] size-[8px] top-[8px]" data-name="ToddlerProgram" />;
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ToddlerProgram4 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[20px] not-italic text-[#1e7872] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Guided play and exploration</p>
    </div>
  );
}

function ToddlerProgram5() {
  return <div className="absolute bg-[#149496] left-0 rounded-[2.23696e+07px] size-[8px] top-[8px]" data-name="ToddlerProgram" />;
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ToddlerProgram5 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[20px] not-italic text-[#1e7872] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Social skills development</p>
    </div>
  );
}

function ToddlerProgram6() {
  return <div className="absolute bg-[#149496] left-0 rounded-[2.23696e+07px] size-[8px] top-[8px]" data-name="ToddlerProgram" />;
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ToddlerProgram6 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[20px] not-italic text-[#1e7872] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Motor skills activities</p>
    </div>
  );
}

function ToddlerProgram7() {
  return <div className="absolute bg-[#149496] left-0 rounded-[2.23696e+07px] size-[8px] top-[8px]" data-name="ToddlerProgram" />;
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ToddlerProgram7 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[20px] not-italic text-[#1e7872] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Music and movement</p>
    </div>
  );
}

function ToddlerProgram8() {
  return <div className="absolute bg-[#149496] left-0 rounded-[2.23696e+07px] size-[8px] top-[8px]" data-name="ToddlerProgram" />;
}

function ListItem4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ToddlerProgram8 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[20px] not-italic text-[#1e7872] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Creative arts and crafts</p>
    </div>
  );
}

function ToddlerProgram9() {
  return <div className="absolute bg-[#149496] left-0 rounded-[2.23696e+07px] size-[8px] top-[8px]" data-name="ToddlerProgram" />;
}

function ListItem5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <ToddlerProgram9 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[20px] not-italic text-[#1e7872] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Story time and language building</p>
    </div>
  );
}

function ToddlerProgram10() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[204px] items-start relative shrink-0 w-full" data-name="ToddlerProgram">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
      <ListItem4 />
      <ListItem5 />
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[24px] h-[331.198px] items-start left-0 pb-0 pt-[32px] px-[32px] rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[302.25px] w-[488px]" data-name="Container">
      <ToddlerProgram3 />
      <ToddlerProgram10 />
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute bg-[#149496] h-[56px] left-0 rounded-[2.23696e+07px] top-[657.45px] w-[163.969px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[32px] not-italic text-[16px] text-nowrap text-white top-[17.33px] tracking-[0.4px] uppercase whitespace-pre">Learn More</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute h-[713.448px] left-0 top-0 w-[488px]" data-name="Container">
      <Container19 />
      <Container20 />
      <Link8 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="h-[600px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col h-[600px] items-start left-[552px] overflow-clip rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-[56.72px] w-[488px]" data-name="Container">
      <ImageWithFallback2 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute h-[713.448px] left-[567px] top-[96px] w-[1040px]" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function VectorRainbow() {
  return <div className="absolute inset-[20.26%_81.42%_51.91%_1.66%]" data-name="Vector Rainbow 1" />;
}

function VectorButterfly() {
  return <div className="absolute left-[-83.73px] size-[252px] top-[-72.38px]" data-name="Vector Butterfly 1" />;
}

function Container24() {
  return (
    <div className="relative rounded-[2.23696e+07px] shrink-0 size-[90.54px]" data-name="Container">
      <VectorButterfly />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex flex-col h-[90px] items-start left-[2036px] opacity-30 top-[735.45px]" data-name="Container">
      <Container24 />
    </div>
  );
}

function ToddlerProgram11() {
  return (
    <div className="absolute bg-[#f5edda] h-[905.448px] left-0 overflow-clip top-[2167.58px] w-[2174px]" data-name="ToddlerProgram">
      <Container23 />
      <VectorRainbow />
      <div className="absolute inset-[11.1%_76.3%_68.97%_7.55%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 352 181">
          <path d={svgPaths.p272c0500} fill="var(--fill-0, #E5795B)" id="Vector" opacity="0.3" />
        </svg>
      </div>
      <Container25 />
      <div className="absolute inset-[16.83%_2.61%_65.41%_89.1%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 181 161">
          <path d={svgPaths.p19458980} fill="var(--fill-0, #F6D33A)" id="Vector" opacity="0.3" />
        </svg>
      </div>
      <div className="absolute inset-[20.93%_8.48%_76.86%_90.63%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p13c54480} fill="var(--fill-0, #F6D33A)" id="Vector" opacity="0.3" />
        </svg>
      </div>
      <div className="absolute inset-[20.74%_3.91%_77.05%_95.21%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p13c54480} fill="var(--fill-0, #F6D33A)" id="Vector" opacity="0.3" />
        </svg>
      </div>
    </div>
  );
}

function PreschoolProgram() {
  return (
    <div className="absolute bg-[#149496] h-[40px] left-[470.88px] rounded-[2.23696e+07px] top-0 w-[98.24px]" data-name="PreschoolProgram">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[49.5px] not-italic text-[16px] text-center text-nowrap text-white top-[9.33px] translate-x-[-50%] whitespace-pre">3–5 years</p>
    </div>
  );
}

function PreschoolProgram1() {
  return (
    <div className="absolute h-[52px] left-0 top-[56px] w-[1040px]" data-name="PreschoolProgram">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[52px] left-[520.59px] not-italic text-[#232e43] text-[40px] text-center text-nowrap top-[3.33px] translate-x-[-50%] whitespace-pre">Preschool Program</p>
    </div>
  );
}

function PreschoolProgram2() {
  return (
    <div className="absolute h-[84px] left-[136px] top-[124px] w-[768px]" data-name="PreschoolProgram">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-[384.04px] not-italic text-[#1e7872] text-[20px] text-center top-[1.67px] translate-x-[-50%] w-[687px]">Our preschool program prepares children for kindergarten through structured learning, creative exploration, and social development in a fun and engaging environment.</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[208px] relative shrink-0 w-full" data-name="Container">
      <PreschoolProgram />
      <PreschoolProgram1 />
      <PreschoolProgram2 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[39.198px] left-0 top-0 w-[488px]" data-name="Heading 3">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-0 not-italic text-[#232e43] text-[28px] text-nowrap top-[2.67px] whitespace-pre">Curriculum Highlights</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M12 7V21" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p38e00000} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function PreschoolProgram3() {
  return (
    <div className="bg-[#149496] relative rounded-[16.4px] shrink-0 size-[48px]" data-name="PreschoolProgram">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon6 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] text-nowrap top-[1.67px] whitespace-pre">{`Letters & Literacy`}</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">Pre-reading skills and letter recognition</p>
    </div>
  );
}

function PreschoolProgram4() {
  return (
    <div className="h-[56px] relative shrink-0 w-[243.458px]" data-name="PreschoolProgram">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[56px] items-start relative w-[243.458px]">
        <Heading2 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function Container27() {
  return (
    <div className="bg-[#f5edda] h-[104px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[104px] items-start pb-0 pl-[24px] pr-0 pt-[24px] relative w-full">
          <PreschoolProgram3 />
          <PreschoolProgram4 />
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.pd5bb600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 6H16" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 14V18" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 10H16.01" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 10H12.01" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 10H8.01" id="Vector_6" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 14H12.01" id="Vector_7" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 14H8.01" id="Vector_8" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 18H12.01" id="Vector_9" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 18H8.01" id="Vector_10" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function PreschoolProgram5() {
  return (
    <div className="bg-[#149496] relative rounded-[16.4px] shrink-0 size-[48px]" data-name="PreschoolProgram">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon7 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] text-nowrap top-[1.67px] whitespace-pre">{`Numbers & Math`}</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">Counting, patterns, and early math concepts</p>
    </div>
  );
}

function PreschoolProgram6() {
  return (
    <div className="h-[56px] relative shrink-0 w-[273.073px]" data-name="PreschoolProgram">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[56px] items-start relative w-[273.073px]">
        <Heading3 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="bg-[#f5edda] h-[104px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[104px] items-start pb-0 pl-[24px] pr-0 pt-[24px] relative w-full">
          <PreschoolProgram5 />
          <PreschoolProgram6 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1ea91d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 18H15" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 22H14" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function PreschoolProgram7() {
  return (
    <div className="bg-[#149496] relative rounded-[16.4px] shrink-0 size-[48px]" data-name="PreschoolProgram">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon8 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] text-nowrap top-[1.67px] whitespace-pre">{`Science & Discovery`}</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">Hands-on experiments and sensory learning</p>
    </div>
  );
}

function PreschoolProgram8() {
  return (
    <div className="h-[56px] relative shrink-0 w-[272.229px]" data-name="PreschoolProgram">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[56px] items-start relative w-[272.229px]">
        <Heading4 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="bg-[#f5edda] h-[104px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[104px] items-start pb-0 pl-[24px] pr-0 pt-[24px] relative w-full">
          <PreschoolProgram7 />
          <PreschoolProgram8 />
        </div>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p91a73b0} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2476dfc0} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.pf6f2500} fill="var(--fill-0, white)" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p7aea480} fill="var(--fill-0, white)" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2f047a30} fill="var(--fill-0, white)" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function PreschoolProgram9() {
  return (
    <div className="bg-[#149496] relative rounded-[16.4px] shrink-0 size-[48px]" data-name="PreschoolProgram">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon9 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] text-nowrap top-[1.67px] whitespace-pre">{`Arts & Creativity`}</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">Self-expression through art, music, and drama</p>
    </div>
  );
}

function PreschoolProgram10() {
  return (
    <div className="h-[56px] relative shrink-0 w-[283.99px]" data-name="PreschoolProgram">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex flex-col gap-[8px] h-[56px] items-start relative w-[283.99px]">
        <Heading5 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-[#f5edda] h-[104px] relative rounded-[16px] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex gap-[16px] h-[104px] items-start pb-0 pl-[24px] pr-0 pt-[24px] relative w-full">
          <PreschoolProgram9 />
          <PreschoolProgram10 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-0 size-[488px] top-[71.2px]" data-name="Container">
      <Container27 />
      <Container28 />
      <Container29 />
      <Container30 />
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute bg-[#e5795b] h-[56px] left-0 rounded-[2.23696e+07px] top-[599.2px] w-[165.802px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[32px] not-italic text-[16px] text-nowrap text-white top-[17.33px] tracking-[0.4px] uppercase whitespace-pre">Book a Visit</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute h-[655.198px] left-0 top-0 w-[488px]" data-name="Container">
      <Heading1 />
      <Container31 />
      <Link9 />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="h-[600px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback3} />
    </div>
  );
}

function PreschoolProgram11() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col h-[600px] items-start left-0 overflow-clip rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-[488px]" data-name="PreschoolProgram">
      <ImageWithFallback3 />
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-0 not-italic text-[20px] text-nowrap text-white top-[1.67px] whitespace-pre">Kindergarten Ready!</p>
    </div>
  );
}

function PreschoolProgram12() {
  return (
    <div className="absolute bg-[#c49a3a] box-border content-stretch flex flex-col h-[76px] items-start left-[-24px] pb-0 pt-[24px] px-[24px] rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[548px] w-[227.052px]" data-name="PreschoolProgram">
      <Paragraph5 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute h-[600px] left-[552px] top-[27.59px] w-[488px]" data-name="Container">
      <PreschoolProgram11 />
      <PreschoolProgram12 />
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[655.198px] relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[64px] h-[927.198px] items-start left-[487px] px-[80px] py-0 top-[96px] w-[1200px]" data-name="Container">
      <Container26 />
      <Container34 />
    </div>
  );
}

function Container36() {
  return <div className="h-[100.105px] rounded-tl-[2.23696e+07px] rounded-tr-[2.23696e+07px] shrink-0 w-full" data-name="Container" />;
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[2015px] opacity-30 size-[95px] top-[80px]" data-name="Container">
      <Container36 />
    </div>
  );
}

function VectorStar() {
  return (
    <div className="absolute left-[1922px] size-[252px] top-[54.97px]" data-name="Vector Star 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector Star 1" opacity="0.3">
          <path d={svgPaths.p148b37b0} fill="var(--fill-0, #149496)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container38() {
  return <div className="h-[85.51px] rounded-[2.23696e+07px] shrink-0 w-full" data-name="Container" />;
}

function Container39() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[48px] opacity-30 size-[85px] top-[970.2px]" data-name="Container">
      <Container38 />
    </div>
  );
}

function VectorTree() {
  return (
    <div className="absolute h-[302.473px] left-[17px] top-[838.97px] w-[309.281px]" data-name="Vector Tree 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 310 303">
        <g id="Vector Tree 1" opacity="0.3">
          <path d={svgPaths.p3c08cf00} fill="var(--fill-0, #C49A3A)" id="Vector" />
          <path d={svgPaths.p20c6d400} fill="var(--fill-0, #C49A3A)" id="Vector_2" />
          <path d={svgPaths.pd699f00} fill="var(--fill-0, #C49A3A)" id="Vector_3" />
          <path d={svgPaths.p1e015c00} fill="var(--fill-0, #C49A3A)" id="Vector_4" />
          <path d={svgPaths.pb2a9280} fill="var(--fill-0, #C49A3A)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function PreschoolProgram13() {
  return (
    <div className="absolute bg-white h-[1183.2px] left-0 overflow-clip top-[3073.03px] w-[2174px]" data-name="PreschoolProgram">
      <Container35 />
      <Container37 />
      <VectorStar />
      <Container39 />
      <VectorTree />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute bg-[#e5795b] h-[40px] left-[387.35px] rounded-[2.23696e+07px] top-0 w-[121.281px]" data-name="Container">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[61px] not-italic text-[16px] text-center text-nowrap text-white top-[9.33px] translate-x-[-50%] whitespace-pre">Flexible Care</p>
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[52px] left-0 top-[56px] w-[896px]" data-name="Heading 2">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[52px] left-[448.25px] not-italic text-[#232e43] text-[40px] text-center text-nowrap top-[3.33px] translate-x-[-50%] whitespace-pre">Drop-In Care</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[84px] left-[112px] top-[124px] w-[672px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-[336.14px] not-italic text-[#1e7872] text-[20px] text-center top-[1.67px] translate-x-[-50%] w-[645px]">{`Life happens, and we're here for you. Our drop-in care provides a safe and structured environment to busy families with flexible childcare solutions.`}</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute h-[208px] left-0 top-0 w-[896px]" data-name="Container">
      <Container40 />
      <Heading />
      <Paragraph6 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M16 8V16L21.3333 18.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p1dee4500} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function DropInCare() {
  return (
    <div className="absolute bg-[#149496] content-stretch flex items-center justify-center left-[109.33px] rounded-[2.23696e+07px] size-[64px] top-[32px]" data-name="DropInCare">
      <Icon10 />
    </div>
  );
}

function DropInCare1() {
  return (
    <div className="absolute h-[28px] left-[32px] top-[112px] w-[218.667px]" data-name="DropInCare">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-[110.32px] not-italic text-[#232e43] text-[20px] text-center text-nowrap top-[1.67px] translate-x-[-50%] whitespace-pre">Flexible Hours</p>
    </div>
  );
}

function DropInCare2() {
  return (
    <div className="absolute h-[40px] left-[32px] top-[148px] w-[218.667px]" data-name="DropInCare">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[109.63px] not-italic text-[#1e7872] text-[14px] text-center top-[0.67px] translate-x-[-50%] w-[217px]">Available Monday–Friday, 7 AM – 6 PM</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute bg-white h-[220px] left-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[282.667px]" data-name="Container">
      <DropInCare />
      <DropInCare1 />
      <DropInCare2 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M10.6667 2.66667V8" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M21.3333 2.66667V8" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p8d31b00} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M4 13.3333H28" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function DropInCare3() {
  return (
    <div className="absolute bg-[#149496] content-stretch flex items-center justify-center left-[109.33px] rounded-[2.23696e+07px] size-[64px] top-[32px]" data-name="DropInCare">
      <Icon11 />
    </div>
  );
}

function DropInCare4() {
  return (
    <div className="absolute h-[28px] left-[32px] top-[112px] w-[218.667px]" data-name="DropInCare">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-[109.25px] not-italic text-[#232e43] text-[20px] text-center text-nowrap top-[1.67px] translate-x-[-50%] whitespace-pre">Book Ahead</p>
    </div>
  );
}

function DropInCare5() {
  return (
    <div className="absolute h-[40px] left-[32px] top-[148px] w-[218.667px]" data-name="DropInCare">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[109.45px] not-italic text-[#1e7872] text-[14px] text-center top-[0.67px] translate-x-[-50%] w-[183px]">Reserve your spot 24 hours in advance</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute bg-white h-[220px] left-[306.67px] rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[282.667px]" data-name="Container">
      <DropInCare3 />
      <DropInCare4 />
      <DropInCare5 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p13d00d80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p1adb0100} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function DropInCare6() {
  return (
    <div className="absolute bg-[#149496] content-stretch flex items-center justify-center left-[109.33px] rounded-[2.23696e+07px] size-[64px] top-[32px]" data-name="DropInCare">
      <Icon12 />
    </div>
  );
}

function DropInCare7() {
  return (
    <div className="absolute h-[28px] left-[32px] top-[112px] w-[218.667px]" data-name="DropInCare">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-[109.1px] not-italic text-[#232e43] text-[20px] text-center text-nowrap top-[1.67px] translate-x-[-50%] whitespace-pre">Same Quality Care</p>
    </div>
  );
}

function DropInCare8() {
  return (
    <div className="absolute h-[40px] left-[32px] top-[148px] w-[218.667px]" data-name="DropInCare">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[109.66px] not-italic text-[#1e7872] text-[14px] text-center top-[0.67px] translate-x-[-50%] w-[186px]">All our programs maintain the same high standards</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute bg-white h-[220px] left-[613.33px] rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[282.667px]" data-name="Container">
      <DropInCare6 />
      <DropInCare7 />
      <DropInCare8 />
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute h-[220px] left-0 top-[256px] w-[896px]" data-name="Container">
      <Container42 />
      <Container43 />
      <Container44 />
    </div>
  );
}

function DropInCare9() {
  return (
    <div className="h-[39.198px] relative shrink-0 w-full" data-name="DropInCare">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-0 not-italic text-[#232e43] text-[28px] text-nowrap top-[2.67px] whitespace-pre">What You Need to Know</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_2219)" id="Icon">
          <path d={svgPaths.p35700380} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_2219">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Icon13 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[32px] not-italic text-[#1e7872] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Children must be between 6 months and 5 years old</p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_2219)" id="Icon">
          <path d={svgPaths.p35700380} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_2219">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Icon14 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[32px] not-italic text-[#1e7872] text-[16px] text-nowrap top-[1.33px] whitespace-pre">All required forms and immunization records must be on file</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_2219)" id="Icon">
          <path d={svgPaths.p35700380} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_2219">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Icon15 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[32px] not-italic text-[#1e7872] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Limited spots available each day — reserve early</p>
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_2219)" id="Icon">
          <path d={svgPaths.p35700380} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3fe63d80} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_2219">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Icon16 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[32px] not-italic text-[#1e7872] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Snacks and meals provided</p>
    </div>
  );
}

function DropInCare10() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[132px] items-start relative shrink-0 w-full" data-name="DropInCare">
      <ListItem6 />
      <ListItem7 />
      <ListItem8 />
      <ListItem9 />
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute bg-[#f5edda] box-border content-stretch flex flex-col gap-[16px] h-[255.198px] items-start left-0 pb-[2px] pt-[34px] px-[34px] rounded-[16px] top-[524px] w-[896px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#c49a3a] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <DropInCare9 />
      <DropInCare10 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="absolute left-[32px] size-[20px] top-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_2210)" id="Icon">
          <path d={svgPaths.p24c7c480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_2210">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute bg-[#149496] h-[56px] left-[296.6px] rounded-[2.23696e+07px] top-[811.2px] w-[302.792px]" data-name="Link">
      <Icon17 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[165px] not-italic text-[16px] text-center text-nowrap text-white top-[17.33px] tracking-[0.4px] translate-x-[-50%] uppercase whitespace-pre">Contact for Availability</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute h-[867.198px] left-[639px] top-[96px] w-[896px]" data-name="Container">
      <Container41 />
      <Container45 />
      <Container46 />
      <Link10 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[133.753px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[30%_10%]" data-name="Vector">
        <div className="absolute inset-[-3.75%_-1.88%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 112 58">
            <path d={svgPaths.p3dd50480} id="Vector" stroke="var(--stroke-0, #F6D33A)" strokeLinecap="round" strokeWidth="4.0126" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[40px] opacity-30 size-[100px] top-[80px]" data-name="Container">
      <Icon18 />
    </div>
  );
}

function Container49() {
  return <div className="absolute left-[2023px] opacity-30 size-[95px] top-[868.2px]" data-name="Container" />;
}

function VectorBoat() {
  return (
    <div className="absolute left-[158px] size-[252px] top-[758.77px]" data-name="Vector Boat 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector Boat 1">
          <path d={svgPaths.p18ab700} fill="var(--fill-0, #E5795B)" id="Vector" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function VectorWaves() {
  return (
    <div className="absolute h-[209px] left-[350px] top-[849.77px] w-[232px]" data-name="Vector Waves 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 232 209">
        <g id="Vector Waves 1" opacity="0.3">
          <path d={svgPaths.p24e79400} fill="var(--fill-0, #149496)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function DropInCare11() {
  return (
    <div className="absolute bg-gradient-to-b from-[#f5edda] h-[1059.2px] left-0 overflow-clip to-[#ffffff] top-[4256.23px] w-[2174px]" data-name="DropInCare">
      <Container47 />
      <Container48 />
      <Container49 />
      <div className="absolute inset-[34.82%_3.7%_42.05%_86.75%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 208 246">
          <path d={svgPaths.pf851d80} fill="var(--fill-0, #1E7872)" id="Vector" opacity="0.3" />
        </svg>
      </div>
      <div className="absolute inset-[39.7%_10.52%_58.41%_88.59%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p13c54480} fill="var(--fill-0, #1E7872)" id="Vector" opacity="0.3" />
        </svg>
      </div>
      <div className="absolute inset-[42.7%_9.43%_55.41%_89.68%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p13c54480} fill="var(--fill-0, #1E7872)" id="Vector" opacity="0.3" />
        </svg>
      </div>
      <div className="absolute inset-[45.68%_8.43%_52.43%_90.69%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
          <path d={svgPaths.p13c54480} fill="var(--fill-0, #1E7872)" id="Vector" opacity="0.3" />
        </svg>
      </div>
      <VectorBoat />
      <VectorWaves />
    </div>
  );
}

function ComparePrograms() {
  return (
    <div className="absolute h-[52px] left-0 top-0 w-[1040px]" data-name="ComparePrograms">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[52px] left-[520.67px] not-italic text-[#232e43] text-[40px] text-center text-nowrap top-[3.33px] translate-x-[-50%] whitespace-pre">Compare Programs</p>
    </div>
  );
}

function ComparePrograms1() {
  return (
    <div className="absolute h-[28px] left-[184px] top-[68px] w-[672px]" data-name="ComparePrograms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-[336.18px] not-italic text-[#1e7872] text-[20px] text-center text-nowrap top-[1.67px] translate-x-[-50%] whitespace-pre">{`Find the perfect fit for your child's age and developmental stage.`}</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Container">
      <ComparePrograms />
      <ComparePrograms1 />
    </div>
  );
}

function HeaderCell() {
  return <div className="absolute h-[80px] left-0 top-0 w-[152.99px]" data-name="Header Cell" />;
}

function Container51() {
  return (
    <div className="absolute bg-[#e5795b] h-[40px] left-[114px] rounded-[2.23696e+07px] top-[16px] w-[77.406px]" data-name="Container">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[24px] left-[39px] not-italic text-[16px] text-center text-nowrap text-white top-[9.33px] translate-x-[-50%] whitespace-pre">Infant</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute h-[80px] left-[152.99px] top-0 w-[305.406px]" data-name="Header Cell">
      <Container51 />
    </div>
  );
}

function Container52() {
  return (
    <div className="absolute bg-[#f6d33a] h-[40px] left-[112.96px] rounded-[2.23696e+07px] top-[16px] w-[89.104px]" data-name="Container">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[24px] left-[45.5px] not-italic text-[16px] text-center text-nowrap text-white top-[9.33px] translate-x-[-50%] whitespace-pre">Toddler</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute h-[80px] left-[458.4px] top-0 w-[315.031px]" data-name="Header Cell">
      <Container52 />
    </div>
  );
}

function Container53() {
  return (
    <div className="absolute bg-[#149496] h-[40px] left-[80.66px] rounded-[2.23696e+07px] top-[16px] w-[105.25px]" data-name="Container">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[24px] left-[53px] not-italic text-[16px] text-center text-nowrap text-white top-[9.33px] translate-x-[-50%] whitespace-pre">Preschool</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute h-[80px] left-[773.43px] top-0 w-[266.573px]" data-name="Header Cell">
      <Container53 />
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-[#232e43] h-[80px] left-0 top-0 w-[1040px]" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[80px] left-0 top-0 w-[1040px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function ComparePrograms2() {
  return (
    <div className="absolute h-[56.333px] left-0 top-0 w-[152.99px]" data-name="ComparePrograms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[#232e43] text-[16px] text-nowrap top-[17.33px] whitespace-pre">Age Range</p>
    </div>
  );
}

function ComparePrograms3() {
  return (
    <div className="absolute h-[56.333px] left-[152.99px] top-0 w-[305.406px]" data-name="ComparePrograms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[153.33px] not-italic text-[#1e7872] text-[16px] text-center text-nowrap top-[17.33px] translate-x-[-50%] whitespace-pre">6 months–12 months</p>
    </div>
  );
}

function ComparePrograms4() {
  return (
    <div className="absolute h-[56.333px] left-[458.4px] top-0 w-[315.031px]" data-name="ComparePrograms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[157.4px] not-italic text-[#1e7872] text-[16px] text-center text-nowrap top-[17.33px] translate-x-[-50%] whitespace-pre">1–3 years</p>
    </div>
  );
}

function ComparePrograms5() {
  return (
    <div className="absolute h-[56.333px] left-[773.43px] top-0 w-[266.573px]" data-name="ComparePrograms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[133.67px] not-italic text-[#1e7872] text-[16px] text-center text-nowrap top-[17.33px] translate-x-[-50%] whitespace-pre">3–5 years</p>
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute border-[#f5edda] border-[0px_0px_0.667px] border-solid h-[56.333px] left-0 top-0 w-[1040px]" data-name="Table Row">
      <ComparePrograms2 />
      <ComparePrograms3 />
      <ComparePrograms4 />
      <ComparePrograms5 />
    </div>
  );
}

function ComparePrograms6() {
  return (
    <div className="absolute h-[56.667px] left-0 top-0 w-[152.99px]" data-name="ComparePrograms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[#232e43] text-[16px] text-nowrap top-[17.67px] whitespace-pre">Daily Schedule</p>
    </div>
  );
}

function ComparePrograms7() {
  return (
    <div className="absolute h-[56.667px] left-[152.99px] top-0 w-[305.406px]" data-name="ComparePrograms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[152.8px] not-italic text-[#1e7872] text-[16px] text-center text-nowrap top-[17.67px] translate-x-[-50%] whitespace-pre">7 AM – 6 PM</p>
    </div>
  );
}

function ComparePrograms8() {
  return (
    <div className="absolute h-[56.667px] left-[458.4px] top-0 w-[315.031px]" data-name="ComparePrograms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[157.61px] not-italic text-[#1e7872] text-[16px] text-center text-nowrap top-[17.67px] translate-x-[-50%] whitespace-pre">7 AM – 6 PM</p>
    </div>
  );
}

function ComparePrograms9() {
  return (
    <div className="absolute h-[56.667px] left-[773.43px] top-0 w-[266.573px]" data-name="ComparePrograms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[133.39px] not-italic text-[#1e7872] text-[16px] text-center text-nowrap top-[17.67px] translate-x-[-50%] whitespace-pre">7 AM – 6 PM</p>
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[#f5edda] border-[0px_0px_0.667px] border-solid h-[56.667px] left-0 top-[56.33px] w-[1040px]" data-name="Table Row">
      <ComparePrograms6 />
      <ComparePrograms7 />
      <ComparePrograms8 />
      <ComparePrograms9 />
    </div>
  );
}

function ComparePrograms10() {
  return (
    <div className="absolute h-[81px] left-0 top-[8.57px] w-[153px]" data-name="ComparePrograms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[#232e43] text-[16px] text-nowrap top-[17.67px] whitespace-pre">Learning Focus</p>
    </div>
  );
}

function ComparePrograms11() {
  return (
    <div className="absolute h-[80.667px] left-[152.99px] top-0 w-[305.406px]" data-name="ComparePrograms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[152.98px] not-italic text-[#1e7872] text-[16px] text-center top-[17.67px] translate-x-[-50%] w-[228px]">Bonding, sleep routines, sensory play</p>
    </div>
  );
}

function ComparePrograms12() {
  return (
    <div className="absolute h-[80.667px] left-[458.4px] top-0 w-[315.031px]" data-name="ComparePrograms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[157.59px] not-italic text-[#1e7872] text-[16px] text-center top-[17.67px] translate-x-[-50%] w-[166px]">Social skills, movement, independence</p>
    </div>
  );
}

function ComparePrograms13() {
  return (
    <div className="absolute h-[80.667px] left-[773.43px] top-0 w-[266.573px]" data-name="ComparePrograms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[133.77px] not-italic text-[#1e7872] text-[16px] text-center top-[17.67px] translate-x-[-50%] w-[181px]">School readiness, literacy, math</p>
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute border-[#f5edda] border-[0px_0px_0.667px] border-solid h-[80.667px] left-0 top-[113px] w-[1040px]" data-name="Table Row">
      <ComparePrograms10 />
      <ComparePrograms11 />
      <ComparePrograms12 />
      <ComparePrograms13 />
    </div>
  );
}

function ComparePrograms14() {
  return (
    <div className="absolute h-[56.667px] left-0 top-0 w-[152.99px]" data-name="ComparePrograms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[#232e43] text-[16px] text-nowrap top-[17.67px] whitespace-pre">Group Size</p>
    </div>
  );
}

function ComparePrograms15() {
  return (
    <div className="absolute h-[56.667px] left-[152.99px] top-0 w-[305.406px]" data-name="ComparePrograms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[152.21px] not-italic text-[#1e7872] text-[16px] text-center text-nowrap top-[17.67px] translate-x-[-50%] whitespace-pre">4–6 infants</p>
    </div>
  );
}

function ComparePrograms16() {
  return (
    <div className="absolute h-[56.667px] left-[458.4px] top-0 w-[315.031px]" data-name="ComparePrograms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[157.76px] not-italic text-[#1e7872] text-[16px] text-center text-nowrap top-[17.67px] translate-x-[-50%] whitespace-pre">8–10 toddlers</p>
    </div>
  );
}

function ComparePrograms17() {
  return (
    <div className="absolute h-[56.667px] left-[773.43px] top-0 w-[266.573px]" data-name="ComparePrograms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[133.54px] not-italic text-[#1e7872] text-[16px] text-center text-nowrap top-[17.67px] translate-x-[-50%] whitespace-pre">12–15 children</p>
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute border-[#f5edda] border-[0px_0px_0.667px] border-solid h-[56.667px] left-0 top-[193.67px] w-[1040px]" data-name="Table Row">
      <ComparePrograms14 />
      <ComparePrograms15 />
      <ComparePrograms16 />
      <ComparePrograms17 />
    </div>
  );
}

function ComparePrograms18() {
  return (
    <div className="absolute h-[56.667px] left-0 top-0 w-[152.99px]" data-name="ComparePrograms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[24px] not-italic text-[#232e43] text-[16px] text-nowrap top-[17.67px] whitespace-pre">What to Bring</p>
    </div>
  );
}

function ComparePrograms19() {
  return (
    <div className="absolute h-[56.667px] left-[152.99px] top-0 w-[305.406px]" data-name="ComparePrograms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[153.6px] not-italic text-[#1e7872] text-[16px] text-center text-nowrap top-[17.67px] translate-x-[-50%] whitespace-pre">Bottles, diapers, extra clothes</p>
    </div>
  );
}

function ComparePrograms20() {
  return (
    <div className="absolute h-[56.667px] left-[458.4px] top-0 w-[315.031px]" data-name="ComparePrograms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[157.61px] not-italic text-[#1e7872] text-[16px] text-center text-nowrap top-[17.67px] translate-x-[-50%] whitespace-pre">Lunch, change of clothes</p>
    </div>
  );
}

function ComparePrograms21() {
  return (
    <div className="absolute h-[56.667px] left-[773.43px] top-0 w-[266.573px]" data-name="ComparePrograms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[132.84px] not-italic text-[#1e7872] text-[16px] text-center text-nowrap top-[17.67px] translate-x-[-50%] whitespace-pre">Lunch, backpack, water bottle</p>
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute border-[#f5edda] border-[0px_0px_0.667px] border-solid h-[56.667px] left-0 top-[250.33px] w-[1040px]" data-name="Table Row">
      <ComparePrograms18 />
      <ComparePrograms19 />
      <ComparePrograms20 />
      <ComparePrograms21 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[307px] left-0 top-[80px] w-[1040px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
    </div>
  );
}

function ComparePrograms22() {
  return (
    <div className="h-[387.333px] overflow-clip relative shrink-0 w-full" data-name="ComparePrograms">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container54() {
  return (
    <div className="bg-white box-border content-stretch flex flex-col h-[387.333px] items-start overflow-clip relative rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <ComparePrograms22 />
    </div>
  );
}

function ComparePrograms23() {
  return (
    <div className="absolute h-[28px] left-0 top-0 w-[1040px]" data-name="ComparePrograms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-[520.23px] not-italic text-[#1e7872] text-[18px] text-center text-nowrap top-[2px] translate-x-[-50%] whitespace-pre">Not sure which program is right for you?</p>
    </div>
  );
}

function ComparePrograms24() {
  return (
    <div className="absolute bg-[#c49a3a] h-[56px] left-[437.09px] rounded-[2.23696e+07px] top-[52px] w-[165.802px]" data-name="ComparePrograms">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[83.5px] not-italic text-[16px] text-center text-nowrap text-white top-[17.33px] tracking-[0.4px] translate-x-[-50%] uppercase whitespace-pre">Book a Visit</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="h-[108px] relative shrink-0 w-full" data-name="Container">
      <ComparePrograms23 />
      <ComparePrograms24 />
    </div>
  );
}

function Container56() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[64px] h-[703.333px] items-start left-[487px] px-[80px] py-0 top-[96px] w-[1200px]" data-name="Container">
      <Container50 />
      <Container54 />
      <Container55 />
    </div>
  );
}

function Container57() {
  return <div className="absolute left-[2034px] opacity-30 size-[100px] top-[80px]" data-name="Container" />;
}

function Container58() {
  return <div className="absolute left-[64px] opacity-30 size-[90px] top-[677.33px]" data-name="Container" />;
}

function VectorCloud() {
  return (
    <div className="absolute left-[1850px] size-[252px] top-[39.57px]" data-name="Vector Cloud 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector Cloud 1" opacity="0.3">
          <path d={svgPaths.p250d980} fill="var(--fill-0, #149496)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function VectorCat() {
  return (
    <div className="absolute left-[1882px] size-[252px] top-[603.57px]" data-name="Vector Cat 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector Cat 1">
          <path d={svgPaths.p156b1300} fill="var(--fill-0, #E5795B)" id="Vector" opacity="0.3" />
          <path d={svgPaths.pe857400} fill="var(--fill-0, #E5795B)" id="Vector_2" opacity="0.3" />
          <path d={svgPaths.p3194ecb0} fill="var(--fill-0, #E5795B)" id="Vector_3" opacity="0.3" />
          <path d={svgPaths.p30229880} fill="var(--fill-0, #E5795B)" id="Vector_4" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function VectorDog() {
  return (
    <div className="absolute left-[40px] size-[252px] top-[590.57px]" data-name="Vector Dog 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector Dog 1">
          <path d={svgPaths.p1e18c500} fill="var(--fill-0, #149496)" id="Vector" opacity="0.3" />
          <path d={svgPaths.p2f4bb180} fill="var(--fill-0, #149496)" id="Vector_2" opacity="0.3" />
          <path d={svgPaths.p21b1dc00} fill="var(--fill-0, #149496)" id="Vector_3" opacity="0.3" />
          <path d={svgPaths.p25364100} fill="var(--fill-0, #149496)" id="Vector_4" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function ComparePrograms25() {
  return (
    <div className="absolute bg-[#f5edda] h-[895.333px] left-0 overflow-clip top-[5315.43px] w-[2174px]" data-name="ComparePrograms">
      <Container56 />
      <Container57 />
      <Container58 />
      <VectorCloud />
      <VectorCat />
      <VectorDog />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[52px] left-[384.45px] not-italic text-[40px] text-center text-nowrap text-white top-[3.33px] translate-x-[-50%] whitespace-pre">Book a Visit</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-[383.83px] not-italic text-[20px] text-[rgba(255,255,255,0.9)] text-center text-nowrap top-[1.67px] translate-x-[-50%] whitespace-pre">Ready to see our programs in action? Schedule a tour and meet our team!</p>
    </div>
  );
}

function Container59() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[96px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Paragraph7 />
    </div>
  );
}

function Label() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Your Name</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute h-[52px] left-0 rounded-[16.4px] top-0 w-[672px]" data-name="Text Input">
      <div className="box-border content-stretch flex h-[52px] items-center overflow-clip pl-[48px] pr-[16px] py-[12px] relative rounded-[inherit] w-[672px]">
        <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(35,46,67,0.5)] text-nowrap whitespace-pre">Enter your full name</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f5edda] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
    </div>
  );
}

function Icon19() {
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

function Container60() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <TextInput />
      <Icon19 />
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-0 top-0 w-[672px]" data-name="Container">
      <Label />
      <Container60 />
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Email Address</p>
    </div>
  );
}

function EmailInput() {
  return (
    <div className="absolute h-[52px] left-0 rounded-[16.4px] top-0 w-[672px]" data-name="Email Input">
      <div className="box-border content-stretch flex h-[52px] items-center overflow-clip pl-[48px] pr-[16px] py-[12px] relative rounded-[inherit] w-[672px]">
        <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(35,46,67,0.5)] text-nowrap whitespace-pre">you@example.com</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f5edda] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
    </div>
  );
}

function Icon20() {
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

function Container62() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <EmailInput />
      <Icon20 />
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-0 top-[108px] w-[672px]" data-name="Container">
      <Label1 />
      <Container62 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">{`Child's Age`}</p>
    </div>
  );
}

function Option() {
  return <div className="absolute left-[-753px] size-0 top-[-402.76px]" data-name="Option" />;
}

function Dropdown() {
  return (
    <div className="absolute bg-white border-2 border-[#f5edda] border-solid h-[52px] left-0 rounded-[16.4px] top-0 w-[672px]" data-name="Dropdown">
      {[...Array(5).keys()].map((_, i) => (
        <Option key={i} />
      ))}
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p180c3300} id="Vector" stroke="var(--stroke-0, #1E7872)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M12.5 10H12.5083" id="Vector_2" stroke="var(--stroke-0, #1E7872)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.pf8c46e0} id="Vector_3" stroke="var(--stroke-0, #1E7872)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M7.5 10H7.50833" id="Vector_4" stroke="var(--stroke-0, #1E7872)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <Dropdown />
      <Icon21 />
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-0 top-[216px] w-[672px]" data-name="Container">
      <Label2 />
      <Container64 />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Program of Interest</p>
    </div>
  );
}

function Option1() {
  return (
    <div className="absolute left-[-751px] size-0 top-[-508.76px]" data-name="Option">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] top-0 w-0">Select a program</p>
    </div>
  );
}

function Option2() {
  return (
    <div className="absolute left-[-751px] size-0 top-[-508.76px]" data-name="Option">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] top-0 w-0">Infant Program</p>
    </div>
  );
}

function Option3() {
  return (
    <div className="absolute left-[-751px] size-0 top-[-508.76px]" data-name="Option">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] top-0 w-0">Toddler Program</p>
    </div>
  );
}

function Option4() {
  return <div className="absolute left-[-751px] size-0 top-[-508.76px]" data-name="Option" />;
}

function Dropdown1() {
  return (
    <div className="bg-white h-[52px] relative rounded-[16.4px] shrink-0 w-full" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border-2 border-[#f5edda] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
      <Option1 />
      <Option2 />
      <Option3 />
      {[...Array(3).keys()].map((_, i) => (
        <Option4 key={i} />
      ))}
    </div>
  );
}

function Container66() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-0 top-[324px] w-[672px]" data-name="Container">
      <Label3 />
      <Dropdown1 />
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Preferred Visit Date</p>
    </div>
  );
}

function DatePicker() {
  return <div className="absolute border-2 border-[#f5edda] border-solid h-[52px] left-0 rounded-[16.4px] top-0 w-[672px]" data-name="Date Picker" />;
}

function Icon22() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M6.66667 1.66667V5" id="Vector" stroke="var(--stroke-0, #1E7872)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 1.66667V5" id="Vector_2" stroke="var(--stroke-0, #1E7872)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1da67b80} id="Vector_3" stroke="var(--stroke-0, #1E7872)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M2.5 8.33333H17.5" id="Vector_4" stroke="var(--stroke-0, #1E7872)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container67() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <DatePicker />
      <Icon22 />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-0 top-[432px] w-[672px]" data-name="Container">
      <Label4 />
      <Container67 />
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#e5795b] h-[56px] left-0 rounded-[16.4px] top-[540px] w-[672px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[17.33px] tracking-[0.4px] uppercase whitespace-pre">Book Your Visit</p>
    </div>
  );
}

function Form() {
  return (
    <div className="h-[596px] relative shrink-0 w-full" data-name="Form">
      <Container61 />
      <Container63 />
      <Container65 />
      <Container66 />
      <Container68 />
      <Button1 />
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-white h-[692px] relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[692px] items-start pb-0 pt-[48px] px-[48px] relative w-full">
          <Form />
        </div>
      </div>
    </div>
  );
}

function Container70() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[48px] h-[836px] items-start left-[703px] top-[96px] w-[768px]" data-name="Container">
      <Container59 />
      <Container69 />
    </div>
  );
}

function Container71() {
  return <div className="absolute left-[2020px] opacity-30 size-[90px] top-[80px]" data-name="Container" />;
}

function Container72() {
  return <div className="absolute left-[48px] opacity-30 size-[100px] top-[832px]" data-name="Container" />;
}

function VectorHeart() {
  return (
    <div className="absolute left-[67px] size-[252px] top-[775.24px]" data-name="Vector Heart 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector Heart 2">
          <path d={svgPaths.p1cc37670} fill="var(--fill-0, #F5EDDA)" id="Vector" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function VectorPaperAirplane() {
  return (
    <div className="relative size-[252px]" data-name="Vector Paper Airplane 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector Paper Airplane 1" opacity="0.3">
          <path d={svgPaths.p1756200} fill="var(--fill-0, #F5EDDA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ProgramsBookVisit() {
  return (
    <div className="absolute bg-gradient-to-b from-[#149496] h-[1028px] left-0 overflow-clip to-[#1e7872] top-[6211px] w-[2174px]" data-name="ProgramsBookVisit">
      <div className="absolute inset-[24.83%_2.97%_9.22%_20.52%]">
        <div className="absolute inset-[-1.18%_-0.46%_-1.17%_-0.48%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1679 694">
            <path d={svgPaths.p4278d00} id="Vector 1" opacity="0.3" stroke="var(--stroke-0, #F5EDDA)" strokeDasharray="32 32" strokeLinecap="round" strokeWidth="16" />
          </svg>
        </div>
      </div>
      <Container70 />
      <Container71 />
      <Container72 />
      <VectorHeart />
      <div className="absolute flex items-center justify-center left-[257.93px] size-[318.144px] top-[406.17px]" style={{ "--transform-inner-width": "252", "--transform-inner-height": "252" } as React.CSSProperties}>
        <div className="flex-none rotate-[161.785deg] scale-y-[-100%]">
          <VectorPaperAirplane />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="absolute h-[7238.76px] left-0 top-0 w-[2174px]" data-name="Main Content">
      <ProgramsHero3 />
      <InfantProgram12 />
      <ToddlerProgram11 />
      <PreschoolProgram13 />
      <DropInCare11 />
      <ComparePrograms25 />
      <ProgramsBookVisit />
    </div>
  );
}

function ImageVillageValuesLogo1() {
  return (
    <div className="relative rounded-[2.23696e+07px] shrink-0 size-[40px]" data-name="Image (Village Values Logo)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[2.23696e+07px] size-full" src={imgImageVillageValuesLogo} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[40px]" />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[96.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[96.875px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[1.33px] whitespace-pre">Village Values</p>
      </div>
    </div>
  );
}

function Container73() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center relative shrink-0 w-full" data-name="Container">
      <ImageVillageValuesLogo1 />
      <Text />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.7)] top-[1.33px] w-[193px]">Licensed in-home childcare built on trust, learning, and community.</p>
    </div>
  );
}

function Container74() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container73 />
      <Paragraph8 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[20px] text-nowrap text-white top-[1.67px] whitespace-pre">Quick Links</p>
    </div>
  );
}

function Link11() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[67.594px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Programs</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[224px]" data-name="List Item">
      <Link11 />
    </div>
  );
}

function Link12() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[43.583px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">About</p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="absolute h-[24px] left-0 top-[32px] w-[224px]" data-name="List Item">
      <Link12 />
    </div>
  );
}

function Link13() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[39.844px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Enroll</p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="absolute h-[24px] left-0 top-[64px] w-[224px]" data-name="List Item">
      <Link13 />
    </div>
  );
}

function Link14() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[52.698px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Careers</p>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="absolute h-[24px] left-0 top-[96px] w-[224px]" data-name="List Item">
      <Link14 />
    </div>
  );
}

function List() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="List">
      <ListItem10 />
      <ListItem11 />
      <ListItem12 />
      <ListItem13 />
    </div>
  );
}

function Container75() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading7 />
      <List />
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[20px] text-nowrap text-white top-[1.67px] whitespace-pre">Resources</p>
    </div>
  );
}

function Link15() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[123.438px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Parent Handbook</p>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[224px]" data-name="List Item">
      <Link15 />
    </div>
  );
}

function Link16() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[103.271px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Daily Schedule</p>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="absolute h-[24px] left-0 top-[32px] w-[224px]" data-name="List Item">
      <Link16 />
    </div>
  );
}

function Link17() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[36.052px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">FAQs</p>
    </div>
  );
}

function ListItem16() {
  return (
    <div className="absolute h-[24px] left-0 top-[64px] w-[224px]" data-name="List Item">
      <Link17 />
    </div>
  );
}

function Link18() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[76.875px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Contact Us</p>
    </div>
  );
}

function ListItem17() {
  return (
    <div className="absolute h-[24px] left-0 top-[96px] w-[224px]" data-name="List Item">
      <Link18 />
    </div>
  );
}

function List1() {
  return (
    <div className="h-[120px] relative shrink-0 w-full" data-name="List">
      <ListItem14 />
      <ListItem15 />
      <ListItem16 />
      <ListItem17 />
    </div>
  );
}

function Container76() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading8 />
      <List1 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[20px] text-nowrap text-white top-[1.67px] whitespace-pre">Contact</p>
    </div>
  );
}

function Icon23() {
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

function Text1() {
  return (
    <div className="absolute h-[24px] left-[28px] top-0 w-[192px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap top-[1.33px] whitespace-pre">Rancho Cordova, CA 95742</p>
    </div>
  );
}

function ListItem18() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Icon23 />
      <Text1 />
    </div>
  );
}

function Icon24() {
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

function Link19() {
  return (
    <div className="h-[24px] relative shrink-0 w-[106.688px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[106.688px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap top-[1.33px] whitespace-pre">(916) 761-0211</p>
      </div>
    </div>
  );
}

function ListItem19() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="List Item">
      <Icon24 />
      <Link19 />
    </div>
  );
}

function Icon25() {
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

function Link20() {
  return (
    <div className="h-[24px] relative shrink-0 w-[158.021px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[158.021px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap top-[1.33px] whitespace-pre">info@villagevalues.net</p>
      </div>
    </div>
  );
}

function ListItem20() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="List Item">
      <Icon25 />
      <Link20 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[96px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem18 />
      <ListItem19 />
      <ListItem20 />
    </div>
  );
}

function Container77() {
  return (
    <div className="[grid-area:1_/_4] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading9 />
      <List2 />
    </div>
  );
}

function Container78() {
  return (
    <div className="gap-[48px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[164px] relative shrink-0 w-full" data-name="Container">
      <Container74 />
      <Container75 />
      <Container76 />
      <Container77 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[20px] relative shrink-0 w-[381.052px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[381.052px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.6)] text-nowrap top-[0.67px] whitespace-pre">{`© 2024 Village Values. All rights reserved. Licensed & Insured.`}</p>
      </div>
    </div>
  );
}

function Icon26() {
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

function Link21() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[2.23696e+07px] shrink-0 size-[40px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon26 />
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_2188)" id="Icon">
          <path d={svgPaths.p4b98700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p1b89e780} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M14.5833 5.41667H14.5917" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_2188">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Link22() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[2.23696e+07px] shrink-0 size-[40px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon27 />
      </div>
    </div>
  );
}

function Icon28() {
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

function Link23() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.1)] grow h-[40px] min-h-px min-w-px relative rounded-[2.23696e+07px] shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[40px] items-center justify-center relative w-full">
        <Icon28 />
      </div>
    </div>
  );
}

function Container79() {
  return (
    <div className="h-[40px] relative shrink-0 w-[152px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[40px] items-start relative w-[152px]">
        <Link21 />
        <Link22 />
        <Link23 />
      </div>
    </div>
  );
}

function Container80() {
  return (
    <div className="box-border content-stretch flex h-[72.667px] items-center justify-between pb-0 pt-[0.667px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px_0px_0px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Paragraph9 />
      <Container79 />
    </div>
  );
}

function Footer() {
  return (
    <div className="absolute bg-[#232e43] box-border content-stretch flex flex-col gap-[48px] h-[412.667px] items-start left-0 pb-0 pt-[64px] px-[567px] top-[7238.76px] w-[2174px]" data-name="Footer">
      <Container78 />
      <Container80 />
    </div>
  );
}

function Programs() {
  return (
    <div className="absolute bg-[#f5edda] h-[7651.43px] left-0 top-0 w-[2174px]" data-name="Programs2">
      <MainContent />
      <Footer />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[36px] left-[92.66px] rounded-[2.23696e+07px] top-[12px] w-[124.865px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#232e43] text-[14px] text-nowrap top-[8.67px] whitespace-pre">Infant Program</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[36px] left-[229.52px] rounded-[2.23696e+07px] top-[12px] w-[135.281px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#232e43] text-[14px] text-nowrap top-[8.67px] whitespace-pre">Toddler Program</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[36px] left-[376.8px] rounded-[2.23696e+07px] top-[12px] w-[149.198px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#232e43] text-[14px] text-nowrap top-[8.67px] whitespace-pre">Preschool Program</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[36px] left-[538px] rounded-[2.23696e+07px] top-[12px] w-[112.188px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#232e43] text-[14px] text-nowrap top-[8.67px] whitespace-pre">Drop-In Care</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[36px] left-[662.19px] rounded-[2.23696e+07px] top-[12px] w-[151.458px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#232e43] text-[14px] text-nowrap top-[8.67px] whitespace-pre">Compare Programs</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[#e5795b] h-[36px] left-[825.65px] rounded-[2.23696e+07px] top-[12px] w-[104.354px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[14px] text-nowrap text-white top-[8.67px] whitespace-pre">Book a Visit</p>
    </div>
  );
}

function Container81() {
  return (
    <div className="h-[60px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
      <Button7 />
    </div>
  );
}

function ProgramsBottomDock() {
  return (
    <div className="absolute bg-[rgba(196,154,58,0.95)] box-border content-stretch flex flex-col h-[61.333px] items-start left-[575px] p-[0.667px] rounded-[32px] top-[7566px] w-[1024px]" data-name="ProgramsBottomDock">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(35,46,67,0.1)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <Container81 />
    </div>
  );
}

function Container82() {
  return <div className="absolute bg-[#e5795b] left-[55.2px] rounded-[2.23696e+07px] size-[17.596px] top-[-12.79px]" data-name="Container" />;
}

function Container83() {
  return <div className="absolute bg-[#f6d33a] left-[-4.22px] rounded-[2.23696e+07px] size-[12.435px] top-[56.51px]" data-name="Container" />;
}

function Container84() {
  return <div className="absolute bg-[#149496] left-[-12px] opacity-70 rounded-[2.23696e+07px] size-[8px] top-[4px]" data-name="Container" />;
}

function Container85() {
  return <div className="absolute left-0 opacity-0 rounded-[2.23696e+07px] size-[62.667px] top-0" data-name="Container" />;
}

function Icon29() {
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

function Button8() {
  return (
    <div className="absolute bg-[rgba(196,154,58,0.9)] border-[0.667px] border-[rgba(196,154,58,0.2)] border-solid left-0 overflow-clip rounded-[2.23696e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[64px] top-[-0.19px]" data-name="Button">
      <Container85 />
      <Icon29 />
    </div>
  );
}

function ScrollToTop() {
  return (
    <div className="absolute left-[2078px] size-[64px] top-[7475.33px]" data-name="ScrollToTop">
      <Container82 />
      <Container83 />
      <Container84 />
      <Button8 />
    </div>
  );
}

export default function ProgramsPage() {
  return (
    <div className="bg-[#f5edda] relative size-full" data-name="Programs Page">
      <Programs />
      <ProgramsBottomDock />
      <ScrollToTop />
    </div>
  );
}