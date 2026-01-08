import svgPaths from "./svg-34qkhcxsxe";
import imgContainer from "figma:asset/8702622d69c2aceacd807bbafaed4805316594ff.png";
import imgImageVillageValuesLogo from "figma:asset/812e68f0e38eb12d17187ac3fd565ef3be28e713.png";
import imgImageWithFallback from "figma:asset/347b311a3d012570027ac5697e8b83493099d0b0.png";

function Container() {
  return <div className="absolute left-[2004px] opacity-30 size-[90px] top-[369.83px]" data-name="Container" />;
}

function Container1() {
  return (
    <div className="absolute bg-[#149496] h-[40px] left-0 rounded-[2.23696e+07px] top-[0.44px] w-[237px]" data-name="Container">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[21px] not-italic text-[16px] text-nowrap text-white top-[9.33px] whitespace-pre">Careers at Village Values</p>
    </div>
  );
}

function CareersHero() {
  return (
    <div className="absolute font-['Poppins:Bold',sans-serif] h-[134.396px] leading-[67.2px] left-0 not-italic text-[#232e43] text-[56px] text-nowrap top-[64px] w-[496px] whitespace-pre" data-name="CareersHero">
      <p className="absolute left-0 top-[5px]">Join the Village.</p>
      <p className="absolute left-0 top-[72.2px]">Make an impact.</p>
    </div>
  );
}

function CareersHero1() {
  return (
    <div className="absolute h-[130px] left-0 top-[222.4px] w-[496px]" data-name="CareersHero">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[32.5px] left-0 not-italic text-[#1e7872] text-[20px] top-[1.67px] w-[484px]">{`We're building a childcare environment where children feel loved and staff feel supported. If you're passionate about early childhood education and community, we'd love to meet you.`}</p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[221.65px] size-[20px] top-[17.7px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M5 7.5L10 12.5L15 7.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function CareersHero2() {
  return (
    <div className="absolute bg-[#e5795b] h-[64px] left-0 rounded-[2.23696e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[416.4px] w-[281.646px]" data-name="CareersHero">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[40px] not-italic text-[16px] text-nowrap text-white top-[21.33px] tracking-[0.4px] uppercase whitespace-pre">View Open Positions</p>
      <Icon />
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[448.396px] left-0 top-[25.8px] w-[496px]" data-name="Container">
      <Container1 />
      <CareersHero />
      <CareersHero1 />
      <CareersHero2 />
    </div>
  );
}

function ImageErrorLoadingImage() {
  return <div className="absolute left-[204px] size-[88px] top-[206px]" data-name="Image (Error loading image)" />;
}

function ImageWithFallback() {
  return (
    <div className="absolute bg-gray-100 h-[500px] left-0 top-0 w-[496px]" data-name="ImageWithFallback">
      <ImageErrorLoadingImage />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[500px] left-0 top-0 w-[496px]" data-name="Container">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[176.36%] left-[0.34%] max-w-none top-[-32%] w-full" src={imgContainer} />
      </div>
    </div>
  );
}

function CareersHero3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[500px] left-0 overflow-clip rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[496px]" data-name="CareersHero">
      <ImageWithFallback />
      <Container3 />
    </div>
  );
}

function CareersHero4() {
  return (
    <div className="h-[20px] opacity-90 relative shrink-0 w-full" data-name="CareersHero">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-[0.67px] whitespace-pre">Join Our Team</p>
    </div>
  );
}

function CareersHero5() {
  return (
    <div className="content-stretch flex h-[32px] items-start relative shrink-0 w-full" data-name="CareersHero">
      <p className="font-['Poppins:Regular',sans-serif] leading-[32px] not-italic relative shrink-0 text-[24px] text-nowrap text-white whitespace-pre">{`We're Hiring!`}</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute bg-[#c49a3a] content-stretch flex flex-col h-[100px] items-start left-[-24px] pb-0 pt-[24px] px-[32px] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-[424px] w-[202.563px]" data-name="Container">
      <CareersHero4 />
      <CareersHero5 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute h-[500px] left-[544px] top-0 w-[496px]" data-name="Container">
      <CareersHero3 />
      <Container4 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute h-[500px] left-[567px] top-[320.76px] w-[1040px]" data-name="Container">
      <Container2 />
      <Container5 />
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

function VectorSun() {
  return (
    <div className="absolute left-[84px] size-[252px] top-[88px]" data-name="Vector Sun 5">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector Sun 3" opacity="0.3">
          <path d={svgPaths.p2546c700} fill="var(--fill-0, #C49A3A)" id="Vector" />
          <path d={svgPaths.pa45b000} fill="var(--fill-0, #C49A3A)" id="Vector_2" />
          <path d={svgPaths.p13797080} fill="var(--fill-0, #C49A3A)" id="Vector_3" />
          <path d={svgPaths.p18f34d00} fill="var(--fill-0, #C49A3A)" id="Vector_4" />
          <path d={svgPaths.p32c2a0b0} fill="var(--fill-0, #C49A3A)" id="Vector_5" />
          <path d={svgPaths.p381a3a00} fill="var(--fill-0, #C49A3A)" id="Vector_6" />
          <path d={svgPaths.p13920100} fill="var(--fill-0, #C49A3A)" id="Vector_7" />
          <path d={svgPaths.p141dd4c0} fill="var(--fill-0, #C49A3A)" id="Vector_8" />
          <path d={svgPaths.p17c99440} fill="var(--fill-0, #C49A3A)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function VectorStickman() {
  return (
    <div className="relative size-[156px]" data-name="Vector Stickman 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 156 156">
        <g id="Vector Stickman 2" opacity="0.3">
          <path d={svgPaths.p7af3200} fill="var(--fill-0, #1E7872)" id="Vector" />
          <path d={svgPaths.p1d78e900} fill="var(--fill-0, #1E7872)" id="Vector_2" />
          <path d={svgPaths.p16dd3780} fill="var(--fill-0, #1E7872)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function VectorBubble() {
  return (
    <div className="absolute left-[65px] size-[106px] top-[715px]" data-name="Vector Bubble 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 106 106">
        <g id="Vector Bubble 1" opacity="0.3">
          <path d={svgPaths.p16ddbc00} fill="var(--fill-0, #149496)" id="Vector" />
          <path d={svgPaths.p33f45100} fill="var(--fill-0, #149496)" id="Vector_2" />
          <path d={svgPaths.p3a2fe400} fill="var(--fill-0, #149496)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function VectorBike() {
  return (
    <div className="absolute left-[1810px] size-[150px] top-[909px]" data-name="Vector Bike 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 150 150">
        <g id="Vector Bike 2">
          <path d={svgPaths.p2657e700} fill="var(--fill-0, #1E7872)" id="Vector" opacity="0.3" />
          <path d={svgPaths.p19a61300} fill="var(--fill-0, #1E7872)" id="Vector_2" opacity="0.3" />
          <path d={svgPaths.p117b2b90} fill="var(--fill-0, #1E7872)" id="Vector_3" opacity="0.3" />
          <path d={svgPaths.p1aedbd80} fill="var(--fill-0, #1E7872)" id="Vector_4" opacity="0.3" />
          <path d={svgPaths.p12f36580} fill="var(--fill-0, #1E7872)" id="Vector_5" opacity="0.3" />
          <path d={svgPaths.p12406a00} fill="var(--fill-0, #1E7872)" id="Vector_6" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function VectorCloud() {
  return (
    <div className="absolute left-[1759px] size-[252px] top-[214px]" data-name="Vector Cloud 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector Cloud 2">
          <path d={svgPaths.p250d980} fill="var(--fill-0, #C49A3A)" id="Vector" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function VectorBird() {
  return (
    <div className="absolute left-[1850px] size-[195px] top-[448px]" data-name="Vector Bird 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 195 195">
        <g id="Vector Bird 1">
          <g id="Group" opacity="0.3">
            <path d={svgPaths.p2c9642f1} fill="var(--fill-0, #E5795B)" id="Vector" />
            <path d={svgPaths.pb6c2000} fill="var(--fill-0, #E5795B)" id="Vector_2" />
            <path d={svgPaths.p2bb62b80} fill="var(--fill-0, #E5795B)" id="Vector_3" />
            <path d={svgPaths.p2caff500} fill="var(--fill-0, #E5795B)" id="Vector_4" />
          </g>
          <path d={svgPaths.p2fc91100} fill="var(--fill-0, #E5795B)" id="Vector_5" opacity="0.3" />
          <path d={svgPaths.p3fb80a00} fill="var(--fill-0, #E5795B)" id="Vector_6" opacity="0.3" />
          <path d={svgPaths.p3588a00} fill="var(--fill-0, #E5795B)" id="Vector_7" opacity="0.3" />
          <path d={svgPaths.p12e55580} fill="var(--fill-0, #E5795B)" id="Vector_8" opacity="0.3" />
          <path d={svgPaths.p1aff5a80} fill="var(--fill-0, #E5795B)" id="Vector_9" opacity="0.3" />
          <path d={svgPaths.p2a8080} fill="var(--fill-0, #E5795B)" id="Vector_10" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function VectorBubble1() {
  return (
    <div className="relative size-[160px]" data-name="Vector Bubble 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 160 160">
        <g id="Vector Bubble 2">
          <path d={svgPaths.p2b507930} fill="var(--fill-0, #149496)" id="Vector" opacity="0.3" />
          <path d={svgPaths.p30434c80} fill="var(--fill-0, #149496)" id="Vector_2" opacity="0.3" />
          <path d={svgPaths.p538ce30} fill="var(--fill-0, #149496)" id="Vector_3" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function CareersHero6() {
  return (
    <div className="absolute bg-gradient-to-b from-[#f5edda] h-[1109.53px] left-0 overflow-clip to-[#ffffff] top-0 w-[2174px]" data-name="CareersHero">
      <Container />
      <Container6 />
      <Header />
      <VectorSun />
      <div className="absolute flex items-center justify-center left-[152px] size-[156px] top-[901px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <VectorStickman />
        </div>
      </div>
      <VectorBubble />
      <VectorBike />
      <VectorCloud />
      <VectorBird />
      <div className="absolute flex items-center justify-center left-[99px] size-[223.194px] top-[572px]" style={{ "--transform-inner-width": "160", "--transform-inner-height": "160" } as React.CSSProperties}>
        <div className="flex-none rotate-[324.464deg]">
          <VectorBubble1 />
        </div>
      </div>
    </div>
  );
}

function WhyWorkHere() {
  return (
    <div className="absolute h-[52px] left-0 top-0 w-[1040px]" data-name="WhyWorkHere">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[52px] left-[520.79px] not-italic text-[#232e43] text-[40px] text-center text-nowrap top-[3.33px] translate-x-[-50%] whitespace-pre">Why Work Here</p>
    </div>
  );
}

function WhyWorkHere1() {
  return (
    <div className="absolute h-[28px] left-[184px] top-[68px] w-[672px]" data-name="WhyWorkHere">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-[336.33px] not-italic text-[#1e7872] text-[20px] text-center text-nowrap top-[1.67px] translate-x-[-50%] whitespace-pre">Here is your opportunity to build yourself and your community</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Container">
      <WhyWorkHere />
      <WhyWorkHere1 />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.pae2ff80} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[rgba(20,148,150,0.1)] relative rounded-[16px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[64px]">
        <Icon1 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[78.396px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-0 not-italic text-[#232e43] text-[28px] top-[2.47px] w-[243px]">{`Safe & Licensed Environment`}</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[26px] left-0 not-italic text-[#1e7872] text-[16px] top-[-5px] w-[347px]">Work in a fully licensed, regulation-compliant facility that prioritizes safety and professionalism.</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 grow h-[142.396px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] h-[142.396px] items-start relative w-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function WhyWorkHere2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[142.396px] items-start relative shrink-0 w-full" data-name="WhyWorkHere">
      <Container8 />
      <Container9 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[#f5edda] content-stretch flex flex-col h-[206.396px] items-start left-0 pb-0 pt-[32px] px-[32px] rounded-[24px] top-0 w-[504px]" data-name="Container">
      <WhyWorkHere2 />
    </div>
  );
}

function Icon2() {
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

function Container11() {
  return (
    <div className="bg-[rgba(20,148,150,0.1)] relative rounded-[16px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[64px]">
        <Icon2 />
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[39.198px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-0 not-italic text-[#232e43] text-[28px] text-nowrap top-[2.67px] whitespace-pre">Supportive Leadership</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[26px] left-0 not-italic text-[#1e7872] text-[16px] top-px w-[337px]">Our leadership team is invested in your success, well-being, and professional growth.</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="basis-0 grow h-[103.198px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] h-[103.198px] items-start relative w-full">
        <Heading2 />
        <Paragraph1 />
      </div>
    </div>
  );
}

function WhyWorkHere3() {
  return (
    <div className="content-stretch flex gap-[16px] h-[103.198px] items-start relative shrink-0 w-full" data-name="WhyWorkHere">
      <Container11 />
      <Container12 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[#f5edda] content-stretch flex flex-col h-[206.396px] items-start left-[536px] pb-0 pt-[32px] px-[32px] rounded-[24px] top-0 w-[504px]" data-name="Container">
      <WhyWorkHere3 />
    </div>
  );
}

function Icon3() {
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

function Container14() {
  return (
    <div className="bg-[rgba(20,148,150,0.1)] relative rounded-[16px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[64px]">
        <Icon3 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[39.198px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-0 not-italic text-[#232e43] text-[28px] text-nowrap top-[2.67px] whitespace-pre">Small Group Ratios</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[26px] left-0 not-italic text-[#1e7872] text-[16px] top-[-6px] w-[342px]">Work with manageable class sizes that allow you to build real connections and impact with each child.</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] items-start relative w-full">
        <Heading3 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function WhyWorkHere4() {
  return (
    <div className="content-stretch flex gap-[16px] h-[103.198px] items-start relative shrink-0 w-full" data-name="WhyWorkHere">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[#f5edda] content-stretch flex flex-col h-[167.198px] items-start left-0 pb-0 pt-[32px] px-[32px] rounded-[24px] top-[238.4px] w-[504px]" data-name="Container">
      <WhyWorkHere4 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p3b973d80} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p1603b400} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="bg-[rgba(20,148,150,0.1)] relative rounded-[16px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[64px]">
        <Icon4 />
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[39.198px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-0 not-italic text-[#232e43] text-[28px] text-nowrap top-[2.67px] whitespace-pre">Real Family Culture</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[26px] left-0 not-italic text-[#1e7872] text-[16px] top-px w-[358px]">Experience a workplace that feels like home, where staff and families are valued equally.</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="basis-0 grow h-[103.198px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] h-[103.198px] items-start relative w-full">
        <Heading4 />
        <Paragraph3 />
      </div>
    </div>
  );
}

function WhyWorkHere5() {
  return (
    <div className="content-stretch flex gap-[16px] h-[103.198px] items-start relative shrink-0 w-full" data-name="WhyWorkHere">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[#f5edda] content-stretch flex flex-col h-[167.198px] items-start left-[536px] pb-0 pt-[32px] px-[32px] rounded-[24px] top-[238.4px] w-[504px]" data-name="Container">
      <WhyWorkHere5 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[405.594px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container13 />
      <Container16 />
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] h-[565.594px] items-start left-[487px] px-[80px] py-0 top-[96px] w-[1200px]" data-name="Container">
      <Container7 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return <div className="absolute left-[64px] opacity-30 size-[85px] top-[592.59px]" data-name="Container" />;
}

function WhyWorkHere6() {
  return (
    <div className="absolute bg-white h-[757.594px] left-0 overflow-clip top-[1109.53px] w-[2174px]" data-name="WhyWorkHere">
      <Container21 />
      <Container22 />
    </div>
  );
}

function CultureMission() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="CultureMission">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[52px] left-0 not-italic text-[#232e43] text-[40px] text-nowrap top-[3.33px] whitespace-pre">{`Our Culture & Mission`}</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[96px] left-0 top-0 w-[496px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#1e7872] text-[16px] top-[1.33px] w-[495px]">{`At Village Values, we believe that great childcare starts with great people. That's why we invest deeply in creating an environment where educators feel valued, supported, and empowered to do their best work.`}</p>
    </div>
  );
}

function BoldText() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-[24px] top-[25.33px] w-[413.177px]" data-name="Bold Text">
      <p className="font-['Poppins:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#232e43] text-[16px] text-nowrap whitespace-pre">We care about children AND the staff who guide them.</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="absolute h-[72px] left-[24px] top-[60px] w-[444px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#1e7872] text-[16px] top-[1.33px] w-[443px]">{`You can't pour from an empty cup. We make sure our team feels fulfilled, appreciated, and equipped to create magic every day.`}</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute bg-white border-[#149496] border-[0px_0px_0px_4px] border-solid h-[156px] left-0 rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[120px] w-[496px]" data-name="Container">
      <BoldText />
      <Paragraph5 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="absolute h-[72px] left-0 top-[300px] w-[496px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#1e7872] text-[16px] top-[-8.67px] w-[470px]">We build a home environment that feels safe and intentional. Our small group ratios, warm spaces, and thoughtful approach create a workplace where you can truly connect with children and families.</p>
    </div>
  );
}

function Paragraph7() {
  return <div className="absolute h-[72px] left-0 top-[396px] w-[496px]" data-name="Paragraph" />;
}

function CultureMission1() {
  return (
    <div className="h-[468px] relative shrink-0 w-full" data-name="CultureMission">
      <Paragraph4 />
      <Container23 />
      <Paragraph6 />
      <Paragraph7 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[544px] items-start left-0 top-[3px] w-[496px]" data-name="Container">
      <CultureMission />
      <CultureMission1 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute h-[550px] left-0 top-0 w-[496px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback} />
    </div>
  );
}

function Container25() {
  return <div className="absolute bg-gradient-to-t from-[rgba(35,46,67,0.3)] h-[550px] left-0 to-[rgba(0,0,0,0)] top-0 w-[496px]" data-name="Container" />;
}

function CultureMission2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[550px] left-0 overflow-clip rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-0 w-[496px]" data-name="CultureMission">
      <ImageWithFallback1 />
      <Container25 />
    </div>
  );
}

function CultureMission3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="CultureMission">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#149496] text-[14px] text-nowrap top-[0.67px] whitespace-pre">Staff Member</p>
    </div>
  );
}

function CultureMission4() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="CultureMission">
      <p className="absolute font-['Poppins:Italic',sans-serif] italic leading-[24px] left-0 text-[#232e43] text-[16px] top-[-7.69px] w-[228px]">{`"This is the first place I've worked where I truly feel supported."`}</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col gap-[8px] h-[124px] items-start left-[200px] pb-0 pt-[24px] px-[32px] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-[450px] w-[320px]" data-name="Container">
      <CultureMission3 />
      <CultureMission4 />
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute h-[550px] left-[544px] top-0 w-[496px]" data-name="Container">
      <CultureMission2 />
      <Container26 />
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[550px] left-[567px] top-[96px] w-[1040px]" data-name="Container">
      <Container24 />
      <Container27 />
    </div>
  );
}

function BoldText1() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-[567px] top-[678.88px] w-[426.458px]" data-name="Bold Text">
      <p className="font-['Poppins:Bold',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#1e7872] text-[16px] text-nowrap whitespace-pre">We believe childcare is heart work and community work.</p>
    </div>
  );
}

function VectorButterfly() {
  return (
    <div className="relative size-[206.453px]" data-name="Vector Butterfly 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 207 207">
        <g id="Vector Butterfly 2">
          <path d={svgPaths.p2d196dc0} fill="var(--fill-0, #E5795B)" id="Vector" opacity="0.3" />
          <path d={svgPaths.p363f4100} fill="var(--fill-0, #E5795B)" id="Vector_2" opacity="0.3" />
          <path d={svgPaths.p7f5280} fill="var(--fill-0, #E5795B)" id="Vector_3" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function VectorBird1() {
  return (
    <div className="relative size-[252px]" data-name="Vector Bird 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector Bird 2">
          <g id="Group" opacity="0.3">
            <path d={svgPaths.p2ad8e880} fill="var(--fill-0, #C49A3A)" id="Vector" />
            <path d={svgPaths.p23689700} fill="var(--fill-0, #C49A3A)" id="Vector_2" />
            <path d={svgPaths.p183d5200} fill="var(--fill-0, #C49A3A)" id="Vector_3" />
            <path d={svgPaths.p247d2600} fill="var(--fill-0, #C49A3A)" id="Vector_4" />
          </g>
          <path d={svgPaths.p3ca92d00} fill="var(--fill-0, #C49A3A)" id="Vector_5" opacity="0.3" />
          <path d={svgPaths.p3390b500} fill="var(--fill-0, #C49A3A)" id="Vector_6" opacity="0.3" />
          <path d={svgPaths.p17c88400} fill="var(--fill-0, #C49A3A)" id="Vector_7" opacity="0.3" />
          <path d={svgPaths.pfe07580} fill="var(--fill-0, #C49A3A)" id="Vector_8" opacity="0.3" />
          <path d={svgPaths.p1f875600} fill="var(--fill-0, #C49A3A)" id="Vector_9" opacity="0.3" />
          <path d={svgPaths.p1f414400} fill="var(--fill-0, #C49A3A)" id="Vector_10" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function VectorLadybug() {
  return (
    <div className="absolute left-[97px] size-[173px] top-[514.88px]" data-name="Vector Ladybug 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 173 173">
        <g id="Vector Ladybug 3" opacity="0.3">
          <path d={svgPaths.p1a066900} fill="var(--fill-0, #E5795B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function CultureMission5() {
  return (
    <div className="absolute bg-[#f5edda] h-[742px] left-0 overflow-clip top-[1867.13px] w-[2174px]" data-name="CultureMission">
      <Container28 />
      <BoldText1 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[567px] not-italic text-[#1e7872] text-[16px] top-[572.88px] w-[489px]">{`If you're looking for a place where your passion for early childhood education is matched by leadership that supports you, you've found it.`}</p>
      <div className="absolute flex items-center justify-center left-[1822.38px] size-[235.033px] top-[462.28px]" style={{ "--transform-inner-width": "206.4375", "--transform-inner-height": "206.4375" } as React.CSSProperties}>
        <div className="flex-none rotate-[351.39deg]">
          <VectorButterfly />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[83.15px] size-[303.693px] top-[-23.97px]" style={{ "--transform-inner-width": "252", "--transform-inner-height": "252" } as React.CSSProperties}>
        <div className="flex-none rotate-[346.553deg]">
          <VectorBird1 />
        </div>
      </div>
      <VectorLadybug />
    </div>
  );
}

function OpenPositions() {
  return (
    <div className="absolute h-[52px] left-0 top-0 w-[1040px]" data-name="OpenPositions">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[52px] left-[520px] not-italic text-[#232e43] text-[40px] text-center text-nowrap top-[3.33px] translate-x-[-50%] whitespace-pre">Open Positions</p>
    </div>
  );
}

function OpenPositions1() {
  return (
    <div className="absolute h-[28px] left-[184px] top-[68px] w-[672px]" data-name="OpenPositions">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-[336.07px] not-italic text-[#1e7872] text-[20px] text-center text-nowrap top-[1.67px] translate-x-[-50%] whitespace-pre">Join our team and start making an impact today</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[96px] relative shrink-0 w-full" data-name="Container">
      <OpenPositions />
      <OpenPositions1 />
    </div>
  );
}

function OpenPositions2() {
  return (
    <div className="absolute h-[39.198px] left-[32px] top-[32px] w-[444px]" data-name="OpenPositions">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-0 not-italic text-[#232e43] text-[28px] text-nowrap top-[2.67px] whitespace-pre">Lead Educator</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M10 1.66667V18.3333" id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3055a600} id="Vector_2" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-full">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#1e7872] text-[16px] text-nowrap top-[1.33px] whitespace-pre">$18 - $22/hour</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-0 top-0 w-[134.198px]" data-name="Container">
      <Icon5 />
      <Text />
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_14_3043)" id="Icon">
          <path d="M10 5V10L13.3333 11.6667" id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p14d24500} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_14_3043">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text1() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-full">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#1e7872] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Full-time</p>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[150.2px] top-0 w-[90.469px]" data-name="Container">
      <Icon6 />
      <Text1 />
    </div>
  );
}

function OpenPositions3() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[87.2px] w-[444px]" data-name="OpenPositions">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Requirements:</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14_3008)" id="Icon">
          <path d={svgPaths.p3eaa2980} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14_3008">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[389.979px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">{`Associate's degree in Early Childhood Education or related field`}</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Icon7 />
      <Text2 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14_3008)" id="Icon">
          <path d={svgPaths.p3eaa2980} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14_3008">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[243.729px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">2+ years experience in childcare setting</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Icon8 />
      <Text3 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14_3008)" id="Icon">
          <path d={svgPaths.p3eaa2980} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14_3008">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[232.521px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">Current CPR and First Aid certification</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Icon9 />
      <Text4 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14_3008)" id="Icon">
          <path d={svgPaths.p3eaa2980} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14_3008">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[268.24px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">Strong communication and leadership skills</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Icon10 />
      <Text5 />
    </div>
  );
}

function List() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[104px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem />
      <ListItem1 />
      <ListItem2 />
      <ListItem3 />
    </div>
  );
}

function OpenPositions4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[140px] items-start left-[32px] top-[135.2px] w-[444px]" data-name="OpenPositions">
      <Paragraph8 />
      <List />
    </div>
  );
}

function OpenPositions5() {
  return (
    <div className="absolute bg-[#149496] h-[48px] left-[32px] rounded-[16.4px] top-[299.2px] w-[444px]" data-name="OpenPositions">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[120px] not-italic text-[16px] text-nowrap text-white top-[11.68px] tracking-[0.4px] uppercase whitespace-pre">Apply for this Position</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-[#f5edda] h-[379.198px] left-0 rounded-[16px] top-0 w-[508px]" data-name="Container">
      <OpenPositions2 />
      <OpenPositions3 />
      <OpenPositions4 />
      <OpenPositions5 />
    </div>
  );
}

function OpenPositions6() {
  return (
    <div className="absolute h-[39.198px] left-[32px] top-[32px] w-[444px]" data-name="OpenPositions">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-0 not-italic text-[#232e43] text-[28px] text-nowrap top-[2.67px] whitespace-pre">Assistant Educator</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M10 1.66667V18.3333" id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3055a600} id="Vector_2" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-full">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#1e7872] text-[16px] text-nowrap top-[1.33px] whitespace-pre">$15 - $18/hour</p>
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-0 top-0 w-[134.198px]" data-name="Container">
      <Icon11 />
      <Text6 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_14_3043)" id="Icon">
          <path d="M10 5V10L13.3333 11.6667" id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p14d24500} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_14_3043">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text7() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-full">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#1e7872] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Full-time or Part-time</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[150.2px] top-0 w-[179.552px]" data-name="Container">
      <Icon12 />
      <Text7 />
    </div>
  );
}

function OpenPositions7() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[87.2px] w-[444px]" data-name="OpenPositions">
      <Container33 />
      <Container34 />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Requirements:</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14_3008)" id="Icon">
          <path d={svgPaths.p3eaa2980} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14_3008">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[212.771px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">High school diploma or equivalent</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Icon13 />
      <Text8 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14_3008)" id="Icon">
          <path d={svgPaths.p3eaa2980} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14_3008">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[200.844px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">1+ year experience with children</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Icon14 />
      <Text9 />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14_3008)" id="Icon">
          <path d={svgPaths.p3eaa2980} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14_3008">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[218.333px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">Patience, creativity, and enthusiasm</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Icon15 />
      <Text10 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14_3008)" id="Icon">
          <path d={svgPaths.p3eaa2980} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14_3008">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[258.76px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">Willingness to complete childcare training</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Icon16 />
      <Text11 />
    </div>
  );
}

function List1() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[104px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem4 />
      <ListItem5 />
      <ListItem6 />
      <ListItem7 />
    </div>
  );
}

function OpenPositions8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[140px] items-start left-[32px] top-[135.2px] w-[444px]" data-name="OpenPositions">
      <Paragraph9 />
      <List1 />
    </div>
  );
}

function OpenPositions9() {
  return (
    <div className="absolute bg-[#149496] h-[48px] left-[32px] rounded-[16.4px] top-[299.2px] w-[444px]" data-name="OpenPositions">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[120px] not-italic text-[16px] text-nowrap text-white top-[11.68px] tracking-[0.4px] uppercase whitespace-pre">Apply for this Position</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute bg-[#f5edda] h-[379.198px] left-[532px] rounded-[16px] top-0 w-[508px]" data-name="Container">
      <OpenPositions6 />
      <OpenPositions7 />
      <OpenPositions8 />
      <OpenPositions9 />
    </div>
  );
}

function OpenPositions10() {
  return (
    <div className="absolute h-[39.198px] left-[32px] top-[32px] w-[444px]" data-name="OpenPositions">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-0 not-italic text-[#232e43] text-[28px] text-nowrap top-[2.67px] whitespace-pre">Infant Specialist</p>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M10 1.66667V18.3333" id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3055a600} id="Vector_2" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-full">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#1e7872] text-[16px] text-nowrap top-[1.33px] whitespace-pre">$17 - $21/hour</p>
      </div>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-0 top-0 w-[134.198px]" data-name="Container">
      <Icon17 />
      <Text12 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_14_3043)" id="Icon">
          <path d="M10 5V10L13.3333 11.6667" id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p14d24500} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_14_3043">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text13() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-full">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#1e7872] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Full-time</p>
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[150.2px] top-0 w-[90.469px]" data-name="Container">
      <Icon18 />
      <Text13 />
    </div>
  );
}

function OpenPositions11() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[87.2px] w-[444px]" data-name="OpenPositions">
      <Container36 />
      <Container37 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Requirements:</p>
    </div>
  );
}

function Icon19() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14_3008)" id="Icon">
          <path d={svgPaths.p3eaa2980} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14_3008">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[265.906px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">Experience caring for infants (0-12 months)</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Icon19 />
      <Text14 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14_3008)" id="Icon">
          <path d={svgPaths.p3eaa2980} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14_3008">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[280px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">Knowledge of infant development milestones</p>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Icon20 />
      <Text15 />
    </div>
  );
}

function Icon21() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14_3008)" id="Icon">
          <path d={svgPaths.p3eaa2980} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14_3008">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[160.094px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">CPR and First Aid certified</p>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Icon21 />
      <Text16 />
    </div>
  );
}

function Icon22() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14_3008)" id="Icon">
          <path d={svgPaths.p3eaa2980} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14_3008">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[245.146px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">Nurturing and detail-oriented approach</p>
    </div>
  );
}

function ListItem11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Icon22 />
      <Text17 />
    </div>
  );
}

function List2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[104px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem8 />
      <ListItem9 />
      <ListItem10 />
      <ListItem11 />
    </div>
  );
}

function OpenPositions12() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[140px] items-start left-[32px] top-[135.2px] w-[444px]" data-name="OpenPositions">
      <Paragraph10 />
      <List2 />
    </div>
  );
}

function OpenPositions13() {
  return (
    <div className="absolute bg-[#149496] h-[48px] left-[32px] rounded-[16.4px] top-[299.2px] w-[444px]" data-name="OpenPositions">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[120px] not-italic text-[16px] text-nowrap text-white top-[12.48px] tracking-[0.4px] uppercase whitespace-pre">Apply for this Position</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute bg-[#f5edda] h-[379.198px] left-0 rounded-[16px] top-[403.2px] w-[508px]" data-name="Container">
      <OpenPositions10 />
      <OpenPositions11 />
      <OpenPositions12 />
      <OpenPositions13 />
    </div>
  );
}

function OpenPositions14() {
  return (
    <div className="absolute h-[39.198px] left-[32px] top-[32px] w-[444px]" data-name="OpenPositions">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-0 not-italic text-[#232e43] text-[28px] text-nowrap top-[2.67px] whitespace-pre">Toddler Guide</p>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M10 1.66667V18.3333" id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3055a600} id="Vector_2" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text18() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-full">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#1e7872] text-[16px] text-nowrap top-[1.33px] whitespace-pre">$16 - $20/hour</p>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-0 top-0 w-[134.198px]" data-name="Container">
      <Icon23 />
      <Text18 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_14_3043)" id="Icon">
          <path d="M10 5V10L13.3333 11.6667" id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p14d24500} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_14_3043">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text19() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-full">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#1e7872] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Full-time</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[150.2px] top-0 w-[90.469px]" data-name="Container">
      <Icon24 />
      <Text19 />
    </div>
  );
}

function OpenPositions15() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[87.2px] w-[444px]" data-name="OpenPositions">
      <Container39 />
      <Container40 />
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Requirements:</p>
    </div>
  );
}

function Icon25() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14_3008)" id="Icon">
          <path d={svgPaths.p3eaa2980} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14_3008">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[219.99px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">Experience with toddlers (1-3 years)</p>
    </div>
  );
}

function ListItem12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Icon25 />
      <Text20 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14_3008)" id="Icon">
          <path d={svgPaths.p3eaa2980} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14_3008">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[326.802px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">Understanding of toddler behavior and development</p>
    </div>
  );
}

function ListItem13() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Icon26 />
      <Text21 />
    </div>
  );
}

function Icon27() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14_3008)" id="Icon">
          <path d={svgPaths.p3eaa2980} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14_3008">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[203.542px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">Energetic and patient personality</p>
    </div>
  );
}

function ListItem14() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Icon27 />
      <Text22 />
    </div>
  );
}

function Icon28() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14_3008)" id="Icon">
          <path d={svgPaths.p3eaa2980} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14_3008">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[207.719px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">Ability to manage group activities</p>
    </div>
  );
}

function ListItem15() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Icon28 />
      <Text23 />
    </div>
  );
}

function List3() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[104px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem12 />
      <ListItem13 />
      <ListItem14 />
      <ListItem15 />
    </div>
  );
}

function OpenPositions16() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[140px] items-start left-[32px] top-[135.2px] w-[444px]" data-name="OpenPositions">
      <Paragraph11 />
      <List3 />
    </div>
  );
}

function OpenPositions17() {
  return (
    <div className="absolute bg-[#149496] h-[48px] left-[32px] rounded-[16.4px] top-[299.2px] w-[444px]" data-name="OpenPositions">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[120px] not-italic text-[16px] text-nowrap text-white top-[12.48px] tracking-[0.4px] uppercase whitespace-pre">Apply for this Position</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute bg-[#f5edda] h-[379.198px] left-[532px] rounded-[16px] top-[403.2px] w-[508px]" data-name="Container">
      <OpenPositions14 />
      <OpenPositions15 />
      <OpenPositions16 />
      <OpenPositions17 />
    </div>
  );
}

function OpenPositions18() {
  return (
    <div className="absolute h-[39.198px] left-[32px] top-[32px] w-[444px]" data-name="OpenPositions">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-0 not-italic text-[#232e43] text-[28px] text-nowrap top-[2.67px] whitespace-pre">Preschool Assistant</p>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M10 1.66667V18.3333" id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3055a600} id="Vector_2" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text24() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-full">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#1e7872] text-[16px] text-nowrap top-[1.33px] whitespace-pre">$15 - $19/hour</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-0 top-0 w-[134.198px]" data-name="Container">
      <Icon29 />
      <Text24 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_14_3043)" id="Icon">
          <path d="M10 5V10L13.3333 11.6667" id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p14d24500} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_14_3043">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text25() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-full">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#1e7872] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Part-time</p>
      </div>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[150.2px] top-0 w-[93.385px]" data-name="Container">
      <Icon30 />
      <Text25 />
    </div>
  );
}

function OpenPositions19() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[87.2px] w-[444px]" data-name="OpenPositions">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Requirements:</p>
    </div>
  );
}

function Icon31() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14_3008)" id="Icon">
          <path d={svgPaths.p3eaa2980} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14_3008">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text26() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[311.229px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">Experience with preschool-age children (3-5 years)</p>
    </div>
  );
}

function ListItem16() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Icon31 />
      <Text26 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14_2954)" id="Icon">
          <path d={svgPaths.p26b84380} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14_2954">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text27() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[142.75px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">Creative and organized</p>
    </div>
  );
}

function ListItem17() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Icon32 />
      <Text27 />
    </div>
  );
}

function Icon33() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14_2954)" id="Icon">
          <path d={svgPaths.p26b84380} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14_2954">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text28() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[280.333px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">Supports lead educator in curriculum delivery</p>
    </div>
  );
}

function ListItem18() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Icon33 />
      <Text28 />
    </div>
  );
}

function Icon34() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14_2954)" id="Icon">
          <path d={svgPaths.p26b84380} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14_2954">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text29() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[173.292px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">Flexible schedule availability</p>
    </div>
  );
}

function ListItem19() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Icon34 />
      <Text29 />
    </div>
  );
}

function List4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[104px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem16 />
      <ListItem17 />
      <ListItem18 />
      <ListItem19 />
    </div>
  );
}

function OpenPositions20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[140px] items-start left-[32px] top-[135.2px] w-[444px]" data-name="OpenPositions">
      <Paragraph12 />
      <List4 />
    </div>
  );
}

function OpenPositions21() {
  return (
    <div className="absolute bg-[#149496] h-[48px] left-[32px] rounded-[16.4px] top-[299.2px] w-[444px]" data-name="OpenPositions">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[120px] not-italic text-[16px] text-nowrap text-white top-[12.28px] tracking-[0.4px] uppercase whitespace-pre">Apply for this Position</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute bg-[#f5edda] h-[379.198px] left-0 rounded-[16px] top-[806.4px] w-[508px]" data-name="Container">
      <OpenPositions18 />
      <OpenPositions19 />
      <OpenPositions20 />
      <OpenPositions21 />
    </div>
  );
}

function OpenPositions22() {
  return (
    <div className="absolute h-[39.198px] left-[32px] top-[32px] w-[444px]" data-name="OpenPositions">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-0 not-italic text-[#232e43] text-[28px] text-nowrap top-[2.67px] whitespace-pre">Intern / Apprentice</p>
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M10 1.66667V18.3333" id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3055a600} id="Vector_2" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text30() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-full">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#1e7872] text-[16px] text-nowrap top-[1.33px] whitespace-pre">$13 - $15/hour</p>
      </div>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-0 top-0 w-[134.198px]" data-name="Container">
      <Icon35 />
      <Text30 />
    </div>
  );
}

function Icon36() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_14_3043)" id="Icon">
          <path d="M10 5V10L13.3333 11.6667" id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p14d24500} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_14_3043">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text31() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-full">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#1e7872] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Part-time</p>
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[24px] items-center left-[150.2px] top-0 w-[93.385px]" data-name="Container">
      <Icon36 />
      <Text31 />
    </div>
  );
}

function OpenPositions23() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[87.2px] w-[444px]" data-name="OpenPositions">
      <Container45 />
      <Container46 />
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Requirements:</p>
    </div>
  );
}

function Icon37() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14_3008)" id="Icon">
          <path d={svgPaths.p3eaa2980} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14_3008">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text32() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[349.583px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">Currently enrolled in Early Childhood Education program</p>
    </div>
  );
}

function ListItem20() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Icon37 />
      <Text32 />
    </div>
  );
}

function Icon38() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14_2954)" id="Icon">
          <path d={svgPaths.p26b84380} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14_2954">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text33() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[148.281px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">Eager to learn and grow</p>
    </div>
  );
}

function ListItem21() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Icon38 />
      <Text33 />
    </div>
  );
}

function Icon39() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14_2954)" id="Icon">
          <path d={svgPaths.p26b84380} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14_2954">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text34() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[256.792px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">Available for minimum 15 hours per week</p>
    </div>
  );
}

function ListItem22() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Icon39 />
      <Text34 />
    </div>
  );
}

function Icon40() {
  return (
    <div className="absolute left-0 size-[16px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_14_2954)" id="Icon">
          <path d={svgPaths.p26b84380} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p1f2c5400} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_14_2954">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute h-[20px] left-[24px] top-0 w-[178.51px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[#1e7872] text-[14px] text-nowrap top-[0.67px] whitespace-pre">No prior experience required</p>
    </div>
  );
}

function ListItem23() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="List Item">
      <Icon40 />
      <Text35 />
    </div>
  );
}

function List5() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[104px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem20 />
      <ListItem21 />
      <ListItem22 />
      <ListItem23 />
    </div>
  );
}

function OpenPositions24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[12px] h-[140px] items-start left-[32px] top-[135.2px] w-[444px]" data-name="OpenPositions">
      <Paragraph13 />
      <List5 />
    </div>
  );
}

function OpenPositions25() {
  return (
    <div className="absolute bg-[#149496] h-[48px] left-[32px] rounded-[16.4px] top-[299.2px] w-[444px]" data-name="OpenPositions">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[120px] not-italic text-[16px] text-nowrap text-white top-[12.28px] tracking-[0.4px] uppercase whitespace-pre">Apply for this Position</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute bg-[#f5edda] h-[379.198px] left-[532px] rounded-[16px] top-[806.4px] w-[508px]" data-name="Container">
      <OpenPositions22 />
      <OpenPositions23 />
      <OpenPositions24 />
      <OpenPositions25 />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[1185.59px] relative shrink-0 w-full" data-name="Container">
      <Container32 />
      <Container35 />
      <Container38 />
      <Container41 />
      <Container44 />
      <Container47 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[64px] h-[1489.59px] items-start left-[487px] px-[80px] py-0 top-[96px] w-[1200px]" data-name="Container">
      <Container29 />
      <Container48 />
    </div>
  );
}

function Container50() {
  return <div className="absolute left-[64px] opacity-30 size-[85px] top-[1500.59px]" data-name="Container" />;
}

function OpenPositions26() {
  return (
    <div className="absolute bg-white h-[1681.59px] left-0 overflow-clip top-[2609.13px] w-[2174px]" data-name="OpenPositions">
      <Container49 />
      <Container50 />
    </div>
  );
}

function WhatWeOfferStaff() {
  return (
    <div className="absolute h-[52px] left-0 top-0 w-[1040px]" data-name="WhatWeOfferStaff">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[52px] left-[519.51px] not-italic text-[#232e43] text-[40px] text-center text-nowrap top-[3.33px] translate-x-[-50%] whitespace-pre">What We Offer Staff</p>
    </div>
  );
}

function WhatWeOfferStaff1() {
  return (
    <div className="absolute h-[28px] left-[184px] top-[68px] w-[672px]" data-name="WhatWeOfferStaff">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-[336.33px] not-italic text-[#1e7872] text-[20px] text-center text-nowrap top-[1.67px] translate-x-[-50%] whitespace-pre">Real benefits that support your career and well-being</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="absolute h-[96px] left-[80px] top-0 w-[1040px]" data-name="Container">
      <WhatWeOfferStaff />
      <WhatWeOfferStaff1 />
    </div>
  );
}

function Icon41() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.pbe23200} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M25.6667 11.6667V18.6667" id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.pc2e7900} id="Vector_3" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function WhatWeOfferStaff2() {
  return (
    <div className="absolute bg-[rgba(20,148,150,0.1)] content-stretch flex items-center justify-center left-[24px] rounded-[16.4px] size-[56px] top-[24px]" data-name="WhatWeOfferStaff">
      <Icon41 />
    </div>
  );
}

function WhatWeOfferStaff3() {
  return (
    <div className="absolute h-[56px] left-[83px] top-[25.28px] w-[194px]" data-name="WhatWeOfferStaff">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] top-[2px] w-[157px]">{`Paid Training & Certifications`}</p>
    </div>
  );
}

function WhatWeOfferStaff4() {
  return (
    <div className="absolute h-[68.25px] left-[24px] top-[92.28px] w-[194px]" data-name="WhatWeOfferStaff">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] top-px w-[168px]">We cover your professional development and required certifications</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <WhatWeOfferStaff2 />
      <WhatWeOfferStaff3 />
      <WhatWeOfferStaff4 />
    </div>
  );
}

function Icon42() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p275e0300} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p3997a780} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function WhatWeOfferStaff5() {
  return (
    <div className="absolute bg-[rgba(20,148,150,0.1)] content-stretch flex items-center justify-center left-[24px] rounded-[16.4px] size-[56px] top-[24px]" data-name="WhatWeOfferStaff">
      <Icon42 />
    </div>
  );
}

function WhatWeOfferStaff6() {
  return (
    <div className="absolute h-[56px] left-[92px] top-[21.28px] w-[172px]" data-name="WhatWeOfferStaff">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] top-[2px] w-[146px]">Growth Opportunities</p>
    </div>
  );
}

function WhatWeOfferStaff7() {
  return (
    <div className="absolute h-[68.25px] left-[24px] top-[92.28px] w-[194px]" data-name="WhatWeOfferStaff">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] top-px w-[165px]">Clear pathways to advance your career within our organization</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <WhatWeOfferStaff5 />
      <WhatWeOfferStaff6 />
      <WhatWeOfferStaff7 />
    </div>
  );
}

function Icon43() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p184ba090} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p35e942a0} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p2f1426c0} id="Vector_3" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p5d36b00} id="Vector_4" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function WhatWeOfferStaff8() {
  return (
    <div className="absolute bg-[rgba(20,148,150,0.1)] content-stretch flex items-center justify-center left-[24px] rounded-[16.4px] size-[56px] top-[24px]" data-name="WhatWeOfferStaff">
      <Icon43 />
    </div>
  );
}

function WhatWeOfferStaff9() {
  return <div className="absolute h-[28px] left-[24px] top-[96px] w-[194px]" data-name="WhatWeOfferStaff" />;
}

function WhatWeOfferStaff10() {
  return <div className="absolute h-[68.25px] left-[24px] top-[132px] w-[194px]" data-name="WhatWeOfferStaff" />;
}

function Container54() {
  return (
    <div className="[grid-area:1_/_3] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <WhatWeOfferStaff8 />
      <WhatWeOfferStaff9 />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-[89px] not-italic text-[#232e43] text-[20px] top-[22.28px] w-[148px]">Leadership Pathways</p>
      <WhatWeOfferStaff10 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-[24px] not-italic text-[#1e7872] text-[14px] top-[91.28px] w-[179px]">Move into lead educator and management roles as you grow</p>
    </div>
  );
}

function Icon44() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p1c8f0d00} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p4cb2400} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function WhatWeOfferStaff11() {
  return (
    <div className="absolute bg-[rgba(20,148,150,0.1)] content-stretch flex items-center justify-center left-[24px] rounded-[16.4px] size-[56px] top-[24px]" data-name="WhatWeOfferStaff">
      <Icon44 />
    </div>
  );
}

function WhatWeOfferStaff12() {
  return (
    <div className="absolute h-[56px] left-[94px] top-[24.28px] w-[174px]" data-name="WhatWeOfferStaff">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] top-[2px] w-[149px]">Professional Development</p>
    </div>
  );
}

function WhatWeOfferStaff13() {
  return (
    <div className="absolute h-[68.25px] left-[24px] top-[92.28px] w-[194px]" data-name="WhatWeOfferStaff">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] top-px w-[178px]">Ongoing training in early childhood methods and best practices</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="[grid-area:1_/_4] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <WhatWeOfferStaff11 />
      <WhatWeOfferStaff12 />
      <WhatWeOfferStaff13 />
    </div>
  );
}

function Icon45() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p2466a280} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function WhatWeOfferStaff14() {
  return (
    <div className="absolute bg-[rgba(20,148,150,0.1)] content-stretch flex items-center justify-center left-[24px] rounded-[16.4px] size-[56px] top-[24px]" data-name="WhatWeOfferStaff">
      <Icon45 />
    </div>
  );
}

function WhatWeOfferStaff15() {
  return (
    <div className="absolute h-[56px] left-[93px] top-[25.03px] w-[194px]" data-name="WhatWeOfferStaff">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] top-[1.67px] w-[154px]">Supportive Team Culture</p>
    </div>
  );
}

function WhatWeOfferStaff16() {
  return <div className="absolute h-[68.25px] left-[24px] top-[160px] w-[194px]" data-name="WhatWeOfferStaff" />;
}

function Container56() {
  return (
    <div className="[grid-area:2_/_1] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <WhatWeOfferStaff14 />
      <WhatWeOfferStaff15 />
      <WhatWeOfferStaff16 />
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-[24px] not-italic text-[#1e7872] text-[14px] top-[91.03px] w-[194px]">Work alongside passionate educators who care about each other</p>
    </div>
  );
}

function Icon46() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.pb57f480} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function WhatWeOfferStaff17() {
  return (
    <div className="absolute bg-[rgba(20,148,150,0.1)] content-stretch flex items-center justify-center left-[24px] rounded-[16.4px] size-[56px] top-[24px]" data-name="WhatWeOfferStaff">
      <Icon46 />
    </div>
  );
}

function WhatWeOfferStaff18() {
  return (
    <div className="absolute h-[56px] left-[94px] top-[24.03px] w-[194px]" data-name="WhatWeOfferStaff">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[#232e43] text-[20px] top-[2px] w-[143px]">Safe Licensed Environment</p>
    </div>
  );
}

function WhatWeOfferStaff19() {
  return (
    <div className="absolute h-[45.5px] left-[24px] top-[92.03px] w-[194px]" data-name="WhatWeOfferStaff">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] top-px w-[186px]">Fully compliant, professionally managed childcare facility</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="[grid-area:2_/_2] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <WhatWeOfferStaff17 />
      <WhatWeOfferStaff18 />
      <WhatWeOfferStaff19 />
    </div>
  );
}

function Icon47() {
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

function WhatWeOfferStaff20() {
  return (
    <div className="absolute bg-[rgba(20,148,150,0.1)] content-stretch flex items-center justify-center left-[24px] rounded-[16.4px] size-[56px] top-[24px]" data-name="WhatWeOfferStaff">
      <Icon47 />
    </div>
  );
}

function WhatWeOfferStaff21() {
  return <div className="absolute h-[28px] left-[24px] top-[96px] w-[194px]" data-name="WhatWeOfferStaff" />;
}

function WhatWeOfferStaff22() {
  return (
    <div className="absolute h-[68.25px] left-[24px] top-[90.03px] w-[194px]" data-name="WhatWeOfferStaff">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] top-px w-[189px]">Consistent hours with advance notice for any schedule changes</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="[grid-area:2_/_3] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <WhatWeOfferStaff20 />
      <WhatWeOfferStaff21 />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-[91px] not-italic text-[#232e43] text-[20px] top-[24.03px] w-[143px]">Predictable Schedule</p>
      <WhatWeOfferStaff22 />
    </div>
  );
}

function Icon48() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M14 2.33333V25.6667" id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p2a38c0} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function WhatWeOfferStaff23() {
  return (
    <div className="absolute bg-[rgba(20,148,150,0.1)] content-stretch flex items-center justify-center left-[24px] rounded-[16.4px] size-[56px] top-[24px]" data-name="WhatWeOfferStaff">
      <Icon48 />
    </div>
  );
}

function WhatWeOfferStaff24() {
  return (
    <div className="absolute h-[45.5px] left-0 top-[0.03px] w-[194px]" data-name="WhatWeOfferStaff">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[22.75px] left-0 not-italic text-[#1e7872] text-[14px] top-px w-[190px]">Competitive wages with transparent job responsibilities</p>
    </div>
  );
}

function WhatWeOfferStaff25() {
  return (
    <div className="absolute h-[56px] left-[24px] top-[96px] w-[194px]" data-name="WhatWeOfferStaff">
      <WhatWeOfferStaff24 />
    </div>
  );
}

function Container59() {
  return (
    <div className="[grid-area:2_/_4] bg-white place-self-stretch relative rounded-[16px] shrink-0" data-name="Container">
      <WhatWeOfferStaff23 />
      <WhatWeOfferStaff25 />
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-[92px] not-italic text-[#232e43] text-[20px] top-[10.03px] w-[159px]">{`Fair Pay & Clear Expectations`}</p>
    </div>
  );
}

function Container60() {
  return (
    <div className="absolute gap-[24px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[528.5px] left-[80px] top-[160px] w-[1040px]" data-name="Container">
      <Container52 />
      <Container53 />
      <Container54 />
      <Container55 />
      <Container56 />
      <Container57 />
      <Container58 />
      <Container59 />
    </div>
  );
}

function WhatWeOfferStaff26() {
  return (
    <div className="h-[84px] relative shrink-0 w-full" data-name="WhatWeOfferStaff">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-[352.01px] not-italic text-[18px] text-center text-white top-[2px] translate-x-[-50%] w-[656px]">{`We believe that when staff thrive, children thrive. That's why we invest in creating a workplace where you can build a long-term, fulfilling career in early childhood education.`}</p>
    </div>
  );
}

function Container61() {
  return (
    <div className="absolute bg-gradient-to-b content-stretch flex flex-col from-[#149496] h-[148px] items-start left-[216px] pb-0 pt-[32px] px-[32px] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] to-[#1e7872] top-[736.5px] w-[768px]" data-name="Container">
      <WhatWeOfferStaff26 />
    </div>
  );
}

function Container62() {
  return (
    <div className="absolute h-[884.5px] left-[487px] top-[96px] w-[1200px]" data-name="Container">
      <Container51 />
      <Container60 />
      <Container61 />
    </div>
  );
}

function Icon49() {
  return (
    <div className="h-[114.772px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[30%_10%]" data-name="Vector">
        <div className="absolute inset-[-3.75%_-1.88%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 96 50">
            <path d={svgPaths.pe5f8a80} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeWidth="3.44317" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container63() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[40px] opacity-30 size-[95px] top-[80px]" data-name="Container">
      <Icon49 />
    </div>
  );
}

function Container64() {
  return <div className="absolute left-[2020px] opacity-30 size-[90px] top-[858.5px]" data-name="Container" />;
}

function VectorHeart() {
  return (
    <div className="relative size-[205.713px]" data-name="Vector Heart 5">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 206 206">
        <g id="Vector Heart 5" opacity="0.3">
          <path d={svgPaths.p8029100} fill="var(--fill-0, #E5795B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function WhatWeOfferStaff27() {
  return (
    <div className="absolute bg-[#f5edda] h-[1076.5px] left-0 overflow-clip top-[4290.72px] w-[2174px]" data-name="WhatWeOfferStaff">
      <Container62 />
      <Container63 />
      <Container64 />
      <div className="absolute flex items-center justify-center left-[1877.17px] size-[218.414px] top-[818.65px]" style={{ "--transform-inner-width": "205.703125", "--transform-inner-height": "205.703125" } as React.CSSProperties}>
        <div className="flex-none rotate-[356.343deg]">
          <VectorHeart />
        </div>
      </div>
    </div>
  );
}

function GrowthTraining() {
  return (
    <div className="absolute h-[52px] left-0 top-0 w-[1040px]" data-name="GrowthTraining">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[52px] left-[520.49px] not-italic text-[#232e43] text-[40px] text-center text-nowrap top-[3.33px] translate-x-[-50%] whitespace-pre">{`Growth & Training`}</p>
    </div>
  );
}

function GrowthTraining1() {
  return (
    <div className="absolute h-[28px] left-[184px] top-[68px] w-[672px]" data-name="GrowthTraining">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-[336.56px] not-italic text-[#1e7872] text-[20px] text-center text-nowrap top-[1.67px] translate-x-[-50%] whitespace-pre">We invest in your professional development because you matter</p>
    </div>
  );
}

function Container65() {
  return (
    <div className="absolute h-[96px] left-[80px] top-0 w-[1040px]" data-name="Container">
      <GrowthTraining />
      <GrowthTraining1 />
    </div>
  );
}

function Icon50() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d="M16 9.33333V28" id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p308d0700} id="Vector_2" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container66() {
  return (
    <div className="bg-[rgba(196,154,58,0.1)] relative rounded-[16px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[64px]">
        <Icon50 />
      </div>
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[78.396px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-0 not-italic text-[#232e43] text-[28px] top-[2.67px] w-[342px]">Training in Early Childhood Methods</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[78px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[26px] left-0 not-italic text-[#1e7872] text-[16px] top-px w-[299px]">Learn research-backed approaches like Montessori, Reggio Emilia, and play-based learning</p>
    </div>
  );
}

function Container67() {
  return (
    <div className="basis-0 grow h-[168.396px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] h-[168.396px] items-start relative w-full">
        <Heading5 />
        <Paragraph14 />
      </div>
    </div>
  );
}

function GrowthTraining2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[168.396px] items-start relative shrink-0 w-full" data-name="GrowthTraining">
      <Container66 />
      <Container67 />
    </div>
  );
}

function Container68() {
  return (
    <div className="absolute bg-[#f5edda] content-stretch flex flex-col h-[232.396px] items-start left-0 pb-0 pt-[32px] px-[32px] rounded-[16px] top-0 w-[504px]" data-name="Container">
      <GrowthTraining2 />
    </div>
  );
}

function Icon51() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p8f03b40} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p3fb33600} id="Vector_2" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container69() {
  return (
    <div className="bg-[rgba(196,154,58,0.1)] relative rounded-[16px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[64px]">
        <Icon51 />
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[78.396px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-0 not-italic text-[#232e43] text-[28px] top-[2.78px] w-[304px]">Support for Earning Certifications</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[26px] left-0 not-italic text-[#1e7872] text-[16px] top-px w-[340px]">We help cover costs and provide time for you to earn your CDA or degree</p>
    </div>
  );
}

function Container70() {
  return (
    <div className="basis-0 grow h-[142.396px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] h-[142.396px] items-start relative w-full">
        <Heading6 />
        <Paragraph15 />
      </div>
    </div>
  );
}

function GrowthTraining3() {
  return (
    <div className="content-stretch flex gap-[16px] h-[142.396px] items-start relative shrink-0 w-full" data-name="GrowthTraining">
      <Container69 />
      <Container70 />
    </div>
  );
}

function Container71() {
  return (
    <div className="absolute bg-[#f5edda] content-stretch flex flex-col h-[232.396px] items-start left-[536px] pb-0 pt-[32px] px-[32px] rounded-[16px] top-0 w-[504px]" data-name="Container">
      <GrowthTraining3 />
    </div>
  );
}

function Icon52() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p27a3200} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p7001700} id="Vector_2" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p18f42980} id="Vector_3" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p2ee517c0} id="Vector_4" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container72() {
  return (
    <div className="bg-[rgba(196,154,58,0.1)] relative rounded-[16px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[64px]">
        <Icon52 />
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[78.396px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-0 not-italic text-[#232e43] text-[28px] top-[-5.61px] w-[340px]">Mentorship from Experienced Educators</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[26px] left-0 not-italic text-[#1e7872] text-[16px] top-px w-[327px]">Work alongside seasoned teachers who guide, support, and share their expertise</p>
    </div>
  );
}

function Container73() {
  return (
    <div className="basis-0 grow h-[142.396px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] h-[142.396px] items-start relative w-full">
        <Heading7 />
        <Paragraph16 />
      </div>
    </div>
  );
}

function GrowthTraining4() {
  return (
    <div className="content-stretch flex gap-[16px] h-[142.396px] items-start relative shrink-0 w-full" data-name="GrowthTraining">
      <Container72 />
      <Container73 />
    </div>
  );
}

function Container74() {
  return (
    <div className="absolute bg-[#f5edda] content-stretch flex flex-col h-[206.396px] items-start left-0 pb-0 pt-[32px] px-[32px] rounded-[16px] top-[264.4px] w-[504px]" data-name="Container">
      <GrowthTraining4 />
    </div>
  );
}

function Icon53() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p18cb7e80} id="Vector" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p26c56780} id="Vector_2" stroke="var(--stroke-0, #C49A3A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container75() {
  return (
    <div className="bg-[rgba(196,154,58,0.1)] relative rounded-[16px] shrink-0 size-[64px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[64px]">
        <Icon53 />
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[39.198px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-0 not-italic text-[#232e43] text-[28px] text-nowrap top-[2.67px] whitespace-pre">Pathway to Lead Roles</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[26px] left-0 not-italic text-[#1e7872] text-[16px] top-px w-[348px]">Clear progression from assistant to lead educator to program director</p>
    </div>
  );
}

function Container76() {
  return (
    <div className="basis-0 grow h-[103.198px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[12px] h-[103.198px] items-start relative w-full">
        <Heading8 />
        <Paragraph17 />
      </div>
    </div>
  );
}

function GrowthTraining5() {
  return (
    <div className="content-stretch flex gap-[16px] h-[103.198px] items-start relative shrink-0 w-full" data-name="GrowthTraining">
      <Container75 />
      <Container76 />
    </div>
  );
}

function Container77() {
  return (
    <div className="absolute bg-[#f5edda] content-stretch flex flex-col h-[206.396px] items-start left-[536px] pb-0 pt-[32px] px-[32px] rounded-[16px] top-[264.4px] w-[504px]" data-name="Container">
      <GrowthTraining5 />
    </div>
  );
}

function Container78() {
  return (
    <div className="absolute h-[470.792px] left-[80px] top-[160px] w-[1040px]" data-name="Container">
      <Container68 />
      <Container71 />
      <Container74 />
      <Container77 />
    </div>
  );
}

function GrowthTraining6() {
  return (
    <div className="absolute h-[39.198px] left-[40px] top-[40px] w-[592px]" data-name="GrowthTraining">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-[296.83px] not-italic text-[#232e43] text-[28px] text-center text-nowrap top-[2.67px] translate-x-[-50%] whitespace-pre">Ready to Start Your Path?</p>
    </div>
  );
}

function GrowthTraining7() {
  return (
    <div className="absolute h-[48px] left-[40px] top-[95.2px] w-[592px]" data-name="GrowthTraining">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[296.33px] not-italic text-[16px] text-[rgba(35,46,67,0.8)] text-center top-[1.33px] translate-x-[-50%] w-[553px]">{`Whether you're just starting in early childhood education or you're a seasoned professional looking for a supportive home, we want to hear from you.`}</p>
    </div>
  );
}

function GrowthTraining8() {
  return (
    <div className="absolute bg-white h-[56px] left-[194px] rounded-[2.23696e+07px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] top-[188.99px] w-[286.146px]" data-name="GrowthTraining">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[35px] not-italic text-[#232e43] text-[16px] text-nowrap top-[16px] tracking-[0.4px] uppercase whitespace-pre">Start Your Path With Us</p>
    </div>
  );
}

function Container79() {
  return (
    <div className="absolute bg-gradient-to-b from-[#c49a3a] h-[263.198px] left-[264px] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] to-[#f6d33a] top-[678.79px] w-[672px]" data-name="Container">
      <GrowthTraining6 />
      <GrowthTraining7 />
      <GrowthTraining8 />
    </div>
  );
}

function Container80() {
  return (
    <div className="absolute h-[941.99px] left-[487px] top-[96px] w-[1200px]" data-name="Container">
      <Container65 />
      <Container78 />
      <Container79 />
    </div>
  );
}

function Container81() {
  return <div className="absolute left-[2036px] opacity-30 size-[90px] top-[80px]" data-name="Container" />;
}

function Container82() {
  return <div className="absolute left-[64px] opacity-30 size-[85px] top-[968.99px]" data-name="Container" />;
}

function VectorFlower() {
  return (
    <div className="absolute left-[64px] size-[182px] top-[892.78px]" data-name="Vector Flower 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 182 182">
        <g id="Vector Flower 3" opacity="0.3">
          <path d={svgPaths.p3e2e6900} fill="var(--fill-0, #149496)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function VectorApple() {
  return (
    <div className="relative size-[170px]" data-name="Vector Apple 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 170 170">
        <g id="Vector Apple 2">
          <path d={svgPaths.p19ce3c00} fill="var(--fill-0, #E5795B)" id="Vector" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function VectorGrass() {
  return (
    <div className="absolute left-[1829px] size-[252px] top-[869.78px]" data-name="Vector Grass 3">
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

function Button1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[36px] left-[99.48px] rounded-[2.23696e+07px] top-[12px] w-[129.458px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#232e43] text-[14px] text-nowrap top-[8.67px] whitespace-pre">Why Work Here</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[36px] left-[240.94px] rounded-[2.23696e+07px] top-[12px] w-[141.448px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#232e43] text-[14px] text-nowrap top-[8.67px] whitespace-pre">Culture + Mission</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[rgba(35,46,67,0.9)] h-[36px] left-[394.39px] rounded-[2.23696e+07px] top-[12px] w-[124.927px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[14px] text-nowrap text-white top-[8.67px] whitespace-pre">Open Positions</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[36px] left-[531.31px] rounded-[2.23696e+07px] top-[12px] w-[123.896px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#232e43] text-[14px] text-nowrap top-[8.67px] whitespace-pre">What We Offer</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[36px] left-[667.21px] rounded-[2.23696e+07px] top-[12px] w-[143.688px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[#232e43] text-[14px] text-nowrap top-[8.67px] whitespace-pre">Growth + Training</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[#e5795b] h-[36px] left-[822.9px] rounded-[2.23696e+07px] top-[12px] w-[100.292px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[16px] not-italic text-[14px] text-nowrap text-white top-[8.67px] whitespace-pre">Apply Now</p>
    </div>
  );
}

function Container83() {
  return (
    <div className="h-[60px] overflow-clip relative rounded-[33px] shrink-0 w-[1022px]" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
      <Button6 />
    </div>
  );
}

function CareersBottomDock() {
  return (
    <div className="absolute bg-[rgba(196,154,58,0.95)] content-stretch flex flex-col h-[61.333px] items-start left-[567px] p-[0.667px] rounded-[55px] top-[18.78px] w-[1024px]" data-name="CareersBottomDock">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(35,46,67,0.1)] border-solid inset-0 pointer-events-none rounded-[55px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <Container83 />
    </div>
  );
}

function GrowthTraining9() {
  return (
    <div className="absolute bg-white h-[1133.99px] left-0 overflow-clip top-[5367.22px] w-[2174px]" data-name="GrowthTraining">
      <Container80 />
      <Container81 />
      <Container82 />
      <VectorFlower />
      <div className="absolute flex items-center justify-center left-[1855.36px] size-[235.289px] top-[48.14px]" style={{ "--transform-inner-width": "170", "--transform-inner-height": "170" } as React.CSSProperties}>
        <div className="flex-none rotate-[326.854deg]">
          <VectorApple />
        </div>
      </div>
      <VectorGrass />
      <CareersBottomDock />
    </div>
  );
}

function CareersApply() {
  return (
    <div className="absolute h-[52px] left-0 top-0 w-[1040px]" data-name="CareersApply">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[52px] left-[520.19px] not-italic text-[#232e43] text-[40px] text-center text-nowrap top-[3.33px] translate-x-[-50%] whitespace-pre">Apply Now</p>
    </div>
  );
}

function CareersApply1() {
  return (
    <div className="absolute h-[28px] left-[184px] top-[68px] w-[672px]" data-name="CareersApply">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-[336.17px] not-italic text-[#1e7872] text-[20px] text-center text-nowrap top-[1.67px] translate-x-[-50%] whitespace-pre">Take the first step toward joining our team</p>
    </div>
  );
}

function Container84() {
  return (
    <div className="absolute h-[96px] left-[80px] top-0 w-[1040px]" data-name="Container">
      <CareersApply />
      <CareersApply1 />
    </div>
  );
}

function Label() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Full Name *</p>
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute h-[52px] left-0 rounded-[16.4px] top-0 w-[672px]" data-name="Text Input">
      <div className="content-stretch flex h-[52px] items-center overflow-clip pl-[48px] pr-[16px] py-[12px] relative rounded-[inherit] w-[672px]">
        <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(35,46,67,0.5)] text-nowrap whitespace-pre">Enter your full name</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f5edda] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
    </div>
  );
}

function Icon54() {
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

function Container85() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <TextInput />
      <Icon54 />
    </div>
  );
}

function Container86() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-0 top-0 w-[672px]" data-name="Container">
      <Label />
      <Container85 />
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
    <div className="absolute h-[52px] left-0 rounded-[16.4px] top-0 w-[324px]" data-name="Email Input">
      <div className="content-stretch flex h-[52px] items-center overflow-clip pl-[48px] pr-[16px] py-[12px] relative rounded-[inherit] w-[324px]">
        <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(35,46,67,0.5)] text-nowrap whitespace-pre">you@example.com</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f5edda] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
    </div>
  );
}

function Icon55() {
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

function Container87() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <EmailInput />
      <Icon55 />
    </div>
  );
}

function Container88() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[8px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Label1 />
      <Container87 />
    </div>
  );
}

function Label2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Phone Number *</p>
    </div>
  );
}

function PhoneInput() {
  return (
    <div className="absolute h-[52px] left-0 rounded-[16.4px] top-0 w-[324px]" data-name="Phone Input">
      <div className="content-stretch flex h-[52px] items-center overflow-clip pl-[48px] pr-[16px] py-[12px] relative rounded-[inherit] w-[324px]">
        <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(35,46,67,0.5)] text-nowrap whitespace-pre">(555) 123-4567</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f5edda] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
    </div>
  );
}

function Icon56() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_14_1939)" id="Icon">
          <path d={svgPaths.p24c7c480} id="Vector" stroke="var(--stroke-0, #1E7872)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_14_1939">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container89() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <PhoneInput />
      <Icon56 />
    </div>
  );
}

function Container90() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[8px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Label2 />
      <Container89 />
    </div>
  );
}

function Container91() {
  return (
    <div className="absolute gap-[24px] grid grid-cols-[repeat(2,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[84px] left-0 top-[108px] w-[672px]" data-name="Container">
      <Container88 />
      <Container90 />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Position Applying For *</p>
    </div>
  );
}

function Option() {
  return (
    <div className="absolute left-[-753px] size-0 top-[-2915.88px]" data-name="Option">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] top-0 w-0">Select a position</p>
    </div>
  );
}

function Option1() {
  return (
    <div className="absolute left-[-753px] size-0 top-[-2915.88px]" data-name="Option">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] top-0 w-0">Lead Educator</p>
    </div>
  );
}

function Option2() {
  return (
    <div className="absolute left-[-753px] size-0 top-[-2915.88px]" data-name="Option">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] top-0 w-0">Assistant Educator</p>
    </div>
  );
}

function Option3() {
  return (
    <div className="absolute left-[-753px] size-0 top-[-2915.88px]" data-name="Option">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] top-0 w-0">Infant Specialist</p>
    </div>
  );
}

function Option4() {
  return (
    <div className="absolute left-[-753px] size-0 top-[-2915.88px]" data-name="Option">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] top-0 w-0">Toddler Guide</p>
    </div>
  );
}

function Option5() {
  return (
    <div className="absolute left-[-753px] size-0 top-[-2915.88px]" data-name="Option">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] top-0 w-0">Preschool Assistant</p>
    </div>
  );
}

function Option6() {
  return (
    <div className="absolute left-[-753px] size-0 top-[-2915.88px]" data-name="Option">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] top-0 w-0">Intern / Apprentice</p>
    </div>
  );
}

function Option7() {
  return (
    <div className="absolute left-[-753px] size-0 top-[-2915.88px]" data-name="Option">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] top-0 w-0">Other / General Application</p>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="absolute border-2 border-[#f5edda] border-solid h-[52px] left-0 rounded-[16.4px] top-0 w-[672px]" data-name="Dropdown">
      <Option />
      <Option1 />
      <Option2 />
      <Option3 />
      <Option4 />
      <Option5 />
      <Option6 />
      <Option7 />
    </div>
  );
}

function Icon57() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.pe6b10c0} id="Vector" stroke="var(--stroke-0, #1E7872)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p4c21d00} id="Vector_2" stroke="var(--stroke-0, #1E7872)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container92() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <Dropdown />
      <Icon57 />
    </div>
  );
}

function Container93() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-0 top-[216px] w-[672px]" data-name="Container">
      <Label3 />
      <Container92 />
    </div>
  );
}

function Label4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Resume / CV *</p>
    </div>
  );
}

function FileUpload() {
  return <div className="absolute border-2 border-[#f5edda] border-solid h-[68px] left-0 rounded-[16.4px] top-0 w-[672px]" data-name="File Upload" />;
}

function Icon58() {
  return (
    <div className="absolute left-[16px] size-[20px] top-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M10 2.5V12.5" id="Vector" stroke="var(--stroke-0, #1E7872)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p320a7e80} id="Vector_2" stroke="var(--stroke-0, #1E7872)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3053b100} id="Vector_3" stroke="var(--stroke-0, #1E7872)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Container94() {
  return (
    <div className="h-[68px] relative shrink-0 w-full" data-name="Container">
      <FileUpload />
      <Icon58 />
    </div>
  );
}

function Container95() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[100px] items-start left-0 top-[324px] w-[672px]" data-name="Container">
      <Label4 />
      <Container94 />
    </div>
  );
}

function Label5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Availability *</p>
    </div>
  );
}

function Option8() {
  return (
    <div className="absolute left-[-753px] size-0 top-[-3147.88px]" data-name="Option">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] top-0 w-0">Select availability</p>
    </div>
  );
}

function Option9() {
  return (
    <div className="absolute left-[-753px] size-0 top-[-3147.88px]" data-name="Option">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] top-0 w-0">Immediate</p>
    </div>
  );
}

function Option10() {
  return (
    <div className="absolute left-[-753px] size-0 top-[-3147.88px]" data-name="Option">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] top-0 w-0">2 Weeks</p>
    </div>
  );
}

function Option11() {
  return (
    <div className="absolute left-[-753px] size-0 top-[-3147.88px]" data-name="Option">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] top-0 w-0">1 Month</p>
    </div>
  );
}

function Option12() {
  return (
    <div className="absolute left-[-753px] size-0 top-[-3147.88px]" data-name="Option">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] top-0 w-0">Flexible</p>
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="absolute border-2 border-[#f5edda] border-solid h-[52px] left-0 rounded-[16.4px] top-0 w-[672px]" data-name="Dropdown">
      <Option8 />
      <Option9 />
      <Option10 />
      <Option11 />
      <Option12 />
    </div>
  );
}

function Icon59() {
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

function Container96() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <Dropdown1 />
      <Icon59 />
    </div>
  );
}

function Container97() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[84px] items-start left-0 top-[448px] w-[672px]" data-name="Container">
      <Label5 />
      <Container96 />
    </div>
  );
}

function Label6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Brief Experience Summary *</p>
    </div>
  );
}

function TextArea() {
  return (
    <div className="h-[124px] relative rounded-[16.4px] shrink-0 w-full" data-name="Text Area">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex h-[124px] items-start px-[16px] py-[12px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(35,46,67,0.5)] text-nowrap whitespace-pre">Tell us about your experience working with children...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f5edda] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
    </div>
  );
}

function Container98() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[161.333px] items-start left-0 top-[556px] w-[672px]" data-name="Container">
      <Label6 />
      <TextArea />
    </div>
  );
}

function Label7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Why do you want to join Village Values? *</p>
    </div>
  );
}

function TextArea1() {
  return (
    <div className="absolute h-[124px] left-0 rounded-[16.4px] top-0 w-[672px]" data-name="Text Area">
      <div className="content-stretch flex h-[124px] items-start overflow-clip pl-[48px] pr-[16px] py-[12px] relative rounded-[inherit] w-[672px]">
        <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(35,46,67,0.5)] text-nowrap whitespace-pre">What draws you to our mission and team?</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f5edda] border-solid inset-0 pointer-events-none rounded-[16.4px]" />
    </div>
  );
}

function Icon60() {
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

function Container99() {
  return (
    <div className="h-[129.333px] relative shrink-0 w-full" data-name="Container">
      <TextArea1 />
      <Icon60 />
    </div>
  );
}

function Container100() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[161.333px] items-start left-0 top-[741.33px] w-[672px]" data-name="Container">
      <Label7 />
      <Container99 />
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-[#149496] h-[56px] left-0 rounded-[16.4px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[926.67px] w-[672px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[252px] not-italic text-[16px] text-nowrap text-white top-[16.13px] tracking-[0.4px] uppercase whitespace-pre">Submit Application</p>
    </div>
  );
}

function Form() {
  return (
    <div className="h-[982.667px] relative shrink-0 w-full" data-name="Form">
      <Container86 />
      <Container91 />
      <Container93 />
      <Container95 />
      <Container97 />
      <Container98 />
      <Container100 />
      <Button7 />
    </div>
  );
}

function Container101() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[1078.67px] items-start left-[216px] pb-0 pt-[48px] px-[48px] rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-[144px] w-[768px]" data-name="Container">
      <Form />
    </div>
  );
}

function Container102() {
  return (
    <div className="absolute h-[1222.67px] left-[487px] top-[96px] w-[1200px]" data-name="Container">
      <Container84 />
      <Container101 />
    </div>
  );
}

function Container103() {
  return <div className="absolute left-[2020px] opacity-30 size-[90px] top-[1196.67px]" data-name="Container" />;
}

function VectorBook() {
  return (
    <div className="relative size-[150.539px]" data-name="Vector Book 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 151 151">
        <g id="Vector Book 2">
          <path d={svgPaths.p36747280} fill="var(--fill-0, #E5795B)" id="Vector" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function VectorApple1() {
  return (
    <div className="absolute left-[1890px] size-[175px] top-[1167.79px]" data-name="Vector Apple 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 175 175">
        <g id="Vector Apple 3">
          <path d={svgPaths.p3fe24f00} fill="var(--fill-0, #E5795B)" id="Vector" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function VectorButterfly1() {
  return (
    <div className="relative size-[252px]" data-name="Vector Butterfly 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector Butterfly 3">
          <path d={svgPaths.p1bb29f00} fill="var(--fill-0, #149496)" id="Vector" opacity="0.3" />
          <path d={svgPaths.pb8d1600} fill="var(--fill-0, #149496)" id="Vector_2" opacity="0.3" />
          <path d={svgPaths.p2ebc4700} fill="var(--fill-0, #149496)" id="Vector_3" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function CareersApply2() {
  return (
    <div className="absolute bg-[#f5edda] h-[1414.67px] left-0 overflow-clip top-[6501.21px] w-[2174px]" data-name="CareersApply">
      <Container102 />
      <Container103 />
      <div className="absolute flex items-center justify-center left-[110.48px] size-[202.254px] top-[43.51px]" style={{ "--transform-inner-width": "150.53125", "--transform-inner-height": "150.53125" } as React.CSSProperties}>
        <div className="flex-none rotate-[26.809deg]">
          <VectorBook />
        </div>
      </div>
      <VectorApple1 />
      <div className="absolute flex items-center justify-center left-[1700px] size-[343.194px] top-[72.79px]" style={{ "--transform-inner-width": "252", "--transform-inner-height": "252" } as React.CSSProperties}>
        <div className="flex-none rotate-[330.636deg]">
          <VectorButterfly1 />
        </div>
      </div>
    </div>
  );
}

function MainContent() {
  return (
    <div className="h-[7915.88px] relative shrink-0 w-full" data-name="Main Content">
      <CareersHero6 />
      <WhyWorkHere6 />
      <CultureMission5 />
      <OpenPositions26 />
      <WhatWeOfferStaff27 />
      <GrowthTraining9 />
      <CareersApply2 />
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

function Text36() {
  return (
    <div className="h-[24px] relative shrink-0 w-[96.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[96.875px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[1.33px] whitespace-pre">Village Values</p>
      </div>
    </div>
  );
}

function Container104() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center relative shrink-0 w-full" data-name="Container">
      <ImageVillageValuesLogo1 />
      <Text36 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.7)] top-[1.33px] w-[193px]">Licensed in-home childcare built on trust, learning, and community.</p>
    </div>
  );
}

function Container105() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container104 />
      <Paragraph18 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[20px] text-nowrap text-white top-[1.67px] whitespace-pre">Quick Links</p>
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[67.594px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Programs</p>
    </div>
  );
}

function ListItem24() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link7 />
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[43.583px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">About</p>
    </div>
  );
}

function ListItem25() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link8 />
    </div>
  );
}

function Link9() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[39.844px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Enroll</p>
    </div>
  );
}

function ListItem26() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link9 />
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[52.698px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Careers</p>
    </div>
  );
}

function ListItem27() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link10 />
    </div>
  );
}

function List6() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[120px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem24 />
      <ListItem25 />
      <ListItem26 />
      <ListItem27 />
    </div>
  );
}

function Container106() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading1 />
      <List6 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[20px] text-nowrap text-white top-[1.67px] whitespace-pre">Resources</p>
    </div>
  );
}

function Link11() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[123.438px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Parent Handbook</p>
    </div>
  );
}

function ListItem28() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link11 />
    </div>
  );
}

function Link12() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[103.271px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Daily Schedule</p>
    </div>
  );
}

function ListItem29() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link12 />
    </div>
  );
}

function Link13() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[36.052px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">FAQs</p>
    </div>
  );
}

function ListItem30() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link13 />
    </div>
  );
}

function Link14() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[76.875px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Contact Us</p>
    </div>
  );
}

function ListItem31() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link14 />
    </div>
  );
}

function List7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[120px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem28 />
      <ListItem29 />
      <ListItem30 />
      <ListItem31 />
    </div>
  );
}

function Container107() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading9 />
      <List7 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[20px] text-nowrap text-white top-[1.67px] whitespace-pre">Contact</p>
    </div>
  );
}

function Icon61() {
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

function Text37() {
  return (
    <div className="absolute h-[24px] left-[28px] top-0 w-[192px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap top-[1.33px] whitespace-pre">Rancho Cordova, CA 95742</p>
    </div>
  );
}

function ListItem32() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Icon61 />
      <Text37 />
    </div>
  );
}

function Icon62() {
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

function Link15() {
  return (
    <div className="h-[24px] relative shrink-0 w-[106.688px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[106.688px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap top-[1.33px] whitespace-pre">(916) 761-0211</p>
      </div>
    </div>
  );
}

function ListItem33() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="List Item">
      <Icon62 />
      <Link15 />
    </div>
  );
}

function Icon63() {
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

function Link16() {
  return (
    <div className="h-[24px] relative shrink-0 w-[158.021px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[158.021px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap top-[1.33px] whitespace-pre">info@villagevalues.net</p>
      </div>
    </div>
  );
}

function ListItem34() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="List Item">
      <Icon63 />
      <Link16 />
    </div>
  );
}

function List8() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] h-[96px] items-start relative shrink-0 w-full" data-name="List">
      <ListItem32 />
      <ListItem33 />
      <ListItem34 />
    </div>
  );
}

function Container108() {
  return (
    <div className="[grid-area:1_/_4] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading10 />
      <List8 />
    </div>
  );
}

function Container109() {
  return (
    <div className="gap-[48px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[164px] relative shrink-0 w-full" data-name="Container">
      <Container105 />
      <Container106 />
      <Container107 />
      <Container108 />
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[20px] relative shrink-0 w-[381.052px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[20px] relative w-[381.052px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.6)] text-nowrap top-[0.67px] whitespace-pre">{`© 2024 Village Values. All rights reserved. Licensed & Insured.`}</p>
      </div>
    </div>
  );
}

function Icon64() {
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

function Link17() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[2.23696e+07px] shrink-0 size-[40px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[40px]">
        <Icon64 />
      </div>
    </div>
  );
}

function Icon65() {
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

function Link18() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[2.23696e+07px] shrink-0 size-[40px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[40px]">
        <Icon65 />
      </div>
    </div>
  );
}

function Icon66() {
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

function Link19() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.1)] grow h-[40px] min-h-px min-w-px relative rounded-[2.23696e+07px] shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[40px] items-center justify-center relative w-full">
        <Icon66 />
      </div>
    </div>
  );
}

function Container110() {
  return (
    <div className="h-[40px] relative shrink-0 w-[152px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[16px] h-[40px] items-start relative w-[152px]">
        <Link17 />
        <Link18 />
        <Link19 />
      </div>
    </div>
  );
}

function Container111() {
  return (
    <div className="content-stretch flex h-[72.667px] items-center justify-between pb-0 pt-[0.667px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px_0px_0px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Paragraph19 />
      <Container110 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#232e43] h-[412.667px] relative shrink-0 w-full" data-name="Footer">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[48px] h-[412.667px] items-start pb-0 pt-[64px] px-[567px] relative w-full">
          <Container109 />
          <Container111 />
        </div>
      </div>
    </div>
  );
}

function Careers() {
  return (
    <div className="absolute bg-[#f5edda] content-stretch flex flex-col h-[8328.54px] items-start left-0 top-0 w-[2174px]" data-name="Careers">
      <MainContent />
      <Footer />
    </div>
  );
}

function Container112() {
  return <div className="absolute bg-[#e5795b] left-[56px] rounded-[2.23696e+07px] size-[16.007px] top-[-8.02px]" data-name="Container" />;
}

function Container113() {
  return <div className="absolute bg-[#f6d33a] left-[-4.72px] rounded-[2.23696e+07px] size-[13.438px] top-[57.68px]" data-name="Container" />;
}

function Container114() {
  return <div className="absolute bg-[#149496] left-[-13.08px] opacity-[0.89] rounded-[2.23696e+07px] size-[10.162px] top-[2.92px]" data-name="Container" />;
}

function Container115() {
  return <div className="absolute left-0 opacity-0 rounded-[2.23696e+07px] size-[62.667px] top-0" data-name="Container" />;
}

function Icon67() {
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
    <div className="absolute bg-[rgba(196,154,58,0.9)] border-[0.667px] border-[rgba(196,154,58,0.2)] border-solid left-0 overflow-clip rounded-[2.23696e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[64px] top-[-0.01px]" data-name="Button">
      <Container115 />
      <Icon67 />
    </div>
  );
}

function ScrollToTop() {
  return (
    <div className="absolute left-[2078px] size-[64px] top-[5252.67px]" data-name="ScrollToTop">
      <Container112 />
      <Container113 />
      <Container114 />
      <Button8 />
    </div>
  );
}

export default function CareerPage() {
  return (
    <div className="bg-[#f5edda] relative size-full" data-name="Career Page">
      <Careers />
      <ScrollToTop />
    </div>
  );
}