import svgPaths from "./svg-n15349y8je";
import imgImageWithFallback from "figma:asset/eb06bdca81e935bd3d464786cf7f42cfcd2ef284.png";
import imgImageWithFallback1 from "figma:asset/df3528e8af5425e6f19e2448b019913ab02914cd.png";
import imgImageWithFallback2 from "figma:asset/4cd16b76a3e21abfab79bf7da38c206b5d3f4198.png";
import imgImageWithFallback3 from "figma:asset/7b4e932327d85c236f8c8254106660e80c422ac9.png";
import imgImageWithFallback4 from "figma:asset/940def1fbe82bc8a0f2a7104a8709bad4c1aa619.png";
import imgImageWithFallback5 from "figma:asset/c7e192a74679e3618cc130b8f2ad92b7b6fe58bd.png";
import imgImageWithFallback6 from "figma:asset/0268482d91a4a3c972eb22dbed04952054070845.png";
import imgImage5 from "figma:asset/dccb1a27f93066682499f337c8b316057065f1e3.png";
import imgImage4 from "figma:asset/60126bbaed0567eabcfd1b4007cd1d7e99fc6d7a.png";
import imgImage3 from "figma:asset/cd1afafadc53631edc5be67bcff0c34a9da44f8a.png";
import imgImageVillageValuesLogo from "figma:asset/812e68f0e38eb12d17187ac3fd565ef3be28e713.png";

function Heading() {
  return (
    <div className="h-[104px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[52px] left-0 not-italic text-[#232e43] text-[40px] top-[3.33px] w-[317px]">A Note from Our Founders</p>
    </div>
  );
}

function FoundersNote() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="FoundersNote">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#1e7872] text-[16px] top-[1.33px] w-[480px]">We started Village Values with a simple belief: every child deserves a safe, nurturing environment where they can learn, play, and grow into their full potential.</p>
    </div>
  );
}

function FoundersNote1() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="FoundersNote">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#1e7872] text-[16px] top-[1.33px] w-[480px]">{`As parents ourselves, we understand the trust you place in us. That's why we've built our program on the foundation of authentic care, transparent communication, and proven educational practices.`}</p>
    </div>
  );
}

function FoundersNote2() {
  return (
    <div className="h-[48px] relative shrink-0 w-full" data-name="FoundersNote">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#1e7872] text-[16px] top-[1.33px] w-[454px]">{`Our home isn't just a childcare facility it's an extension of your family's village. We're honored to be part of your child's journey.`}</p>
    </div>
  );
}

function Text() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[17.33px] w-[170.5px]" data-name="Text">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[#232e43] text-[16px] text-nowrap whitespace-pre">With love and gratitude,</p>
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[41.33px] w-[168.052px]" data-name="Text">
      <p className="font-['Poppins:Italic',sans-serif] italic leading-[24px] relative shrink-0 text-[#c49a3a] text-[16px] text-nowrap whitespace-pre">The Village Values Team</p>
    </div>
  );
}

function FoundersNote3() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="FoundersNote">
      <Text />
      <Text1 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[304px] items-start relative shrink-0 w-full" data-name="Container">
      <FoundersNote />
      <FoundersNote1 />
      <FoundersNote2 />
      <FoundersNote3 />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[432px] items-start left-[1119px] top-[130px] w-[488px]" data-name="Container">
      <Heading />
      <Container />
    </div>
  );
}

function ImageWithFallback() {
  return (
    <div className="h-[500px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-6.48%] max-w-none top-[0.4%] w-[163.82%]" src={imgImageWithFallback} />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col h-[500px] items-start left-0 overflow-clip rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-0 w-[488px]" data-name="Container">
      <ImageWithFallback />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-0 not-italic text-[20px] text-nowrap text-white top-[1.67px] whitespace-pre">Est. 2020</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute bg-[#c49a3a] box-border content-stretch flex flex-col h-[76px] items-start left-[385.68px] pb-0 pt-[24px] px-[24px] rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[448px] w-[126.323px]" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[500px] left-[567px] top-[96px] w-[488px]" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function FoundersNote4() {
  return (
    <div className="absolute bg-[#f5edda] h-[692px] left-0 top-[1305.33px] w-[2174px]" data-name="FoundersNote">
      <Container1 />
      <Container4 />
    </div>
  );
}

function OurPromise() {
  return (
    <div className="absolute h-[52px] left-0 top-0 w-[1040px]" data-name="OurPromise">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[52px] left-[520.61px] not-italic text-[#232e43] text-[40px] text-center text-nowrap top-[3.33px] translate-x-[-50%] whitespace-pre">Our Promise to Your Family</p>
    </div>
  );
}

function OurPromise1() {
  return (
    <div className="absolute h-[56px] left-[184px] top-[68px] w-[672px]" data-name="OurPromise">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-[336.42px] not-italic text-[#1e7872] text-[20px] text-center top-[1.67px] translate-x-[-50%] w-[665px]">{`These aren't just values on a wall, they're the commitments we live by every single day.`}</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[124px] relative shrink-0 w-full" data-name="Container">
      <OurPromise />
      <OurPromise1 />
    </div>
  );
}

function Container6() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[64px] h-[542px] items-start px-[80px] py-0 relative shrink-0 w-[1189px]" data-name="Container">
      <Container5 />
    </div>
  );
}

function OurPromise2() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex flex-col from-[#f5edda] h-[734px] items-start left-0 pb-0 pt-[96px] px-[487px] to-[#ffffff] top-[1997px] w-[2215px]" data-name="OurPromise">
      <Container6 />
    </div>
  );
}

function Programs() {
  return (
    <div className="absolute h-[52px] left-0 top-0 w-[1040px]" data-name="Programs">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[52px] left-[520.11px] not-italic text-[#232e43] text-[40px] text-center text-nowrap top-[3.33px] translate-x-[-50%] whitespace-pre">What We Offer</p>
    </div>
  );
}

function Programs1() {
  return (
    <div className="absolute h-[56px] left-[184px] top-[68px] w-[672px]" data-name="Programs">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-[336.47px] not-italic text-[#1e7872] text-[20px] text-center top-[1.67px] translate-x-[-50%] w-[639px]">Age-appropriate care designed to nurture continuous growth through all childhood stages.</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[124px] relative shrink-0 w-full" data-name="Container">
      <Programs />
      <Programs1 />
    </div>
  );
}

function ImageWithFallback1() {
  return (
    <div className="absolute h-[256px] left-0 top-0 w-[504px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback1} />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p31469900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M17.5 14H17.5117" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p3a37f200} id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M10.5 14H10.5117" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-[#e5795b] box-border content-stretch flex items-center justify-center left-[432px] rounded-[2.23696e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[56px] top-[16px]" data-name="Container">
      <Icon />
    </div>
  );
}

function Programs2() {
  return (
    <div className="h-[256px] overflow-clip relative shrink-0 w-full" data-name="Programs">
      <ImageWithFallback1 />
      <Container8 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[39.198px] relative shrink-0 w-[139.927px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39.198px] relative w-[139.927px]">
        <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-0 not-italic text-[#232e43] text-[28px] text-nowrap top-[2.67px] whitespace-pre">Infant Care</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="bg-white h-[28px] relative rounded-[2.23696e+07px] shrink-0 w-[136px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[136px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[21px] not-italic text-[#1e7872] text-[14px] text-nowrap top-[4.67px] whitespace-pre">6 - 23 months</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex h-[39.198px] items-center justify-between left-[32px] top-[32px] w-[440px]" data-name="Container">
      <Heading1 />
      <Text2 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="absolute h-[48px] left-[32px] top-[83.2px] w-[440px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#1e7872] text-[16px] top-[1.33px] w-[414px]">Gentle, responsive care focused on building trust, routines, and early sensory development.</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[155.2px] w-[98.906px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] leading-[24px] left-0 text-[#149496] text-[16px] text-nowrap top-[1.33px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        Learn More →
      </p>
    </div>
  );
}

function Programs3() {
  return (
    <div className="h-[211.198px] relative shrink-0 w-full" data-name="Programs">
      <Container9 />
      <Paragraph1 />
      <Button />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-[#f5edda] box-border content-stretch flex flex-col h-[467.198px] items-start left-0 overflow-clip rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[504px]" data-name="Container">
      <Programs2 />
      <Programs3 />
    </div>
  );
}

function ImageWithFallback2() {
  return (
    <div className="absolute h-[256px] left-0 top-0 w-[504px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback2} />
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p1fa66600} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p24d80860} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M10.5 10.5H10.5117" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d="M17.5 10.5H17.5117" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute bg-[#f6d33a] box-border content-stretch flex items-center justify-center left-[432px] rounded-[2.23696e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[56px] top-[16px]" data-name="Container">
      <Icon1 />
    </div>
  );
}

function Programs4() {
  return (
    <div className="h-[256px] overflow-clip relative shrink-0 w-full" data-name="Programs">
      <ImageWithFallback2 />
      <Container11 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[39.198px] relative shrink-0 w-[213.302px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39.198px] relative w-[213.302px]">
        <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-0 not-italic text-[#232e43] text-[28px] text-nowrap top-[2.67px] whitespace-pre">Toddler Program</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="bg-white h-[28px] relative rounded-[2.23696e+07px] shrink-0 w-[95px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[95px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[12px] not-italic text-[#1e7872] text-[14px] text-nowrap top-[4.67px] whitespace-pre">2 - 3 years</p>
      </div>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex h-[39.198px] items-center justify-between left-[32px] top-[32px] w-[440px]" data-name="Container">
      <Heading3 />
      <Text3 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="absolute h-[48px] left-[32px] top-[83.2px] w-[440px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#1e7872] text-[16px] top-[1.33px] w-[390px]">Exploration and discovery through play-based learning, language development, and social interaction.</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[155.2px] w-[98.906px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] leading-[24px] left-0 text-[#149496] text-[16px] text-nowrap top-[1.33px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        Learn More →
      </p>
    </div>
  );
}

function Programs5() {
  return (
    <div className="h-[211.198px] relative shrink-0 w-full" data-name="Programs">
      <Container12 />
      <Paragraph2 />
      <Button1 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute bg-[#f5edda] box-border content-stretch flex flex-col h-[467.198px] items-start left-[536px] overflow-clip rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0 w-[504px]" data-name="Container">
      <Programs4 />
      <Programs5 />
    </div>
  );
}

function ImageWithFallback3() {
  return (
    <div className="absolute h-[256px] left-0 top-0 w-[504px]" data-name="ImageWithFallback">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[350%] left-0 max-w-none top-[-151.21%] w-full" src={imgImageWithFallback3} />
      </div>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d={svgPaths.p1667d400} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.pcdf2f80} fill="var(--fill-0, white)" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p7360100} fill="var(--fill-0, white)" id="Vector_3" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p32c3ad40} fill="var(--fill-0, white)" id="Vector_4" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p39f22100} fill="var(--fill-0, white)" id="Vector_5" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute bg-[#149496] box-border content-stretch flex items-center justify-center left-[432px] rounded-[2.23696e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[56px] top-[16px]" data-name="Container">
      <Icon2 />
    </div>
  );
}

function Programs6() {
  return (
    <div className="h-[256px] overflow-clip relative shrink-0 w-full" data-name="Programs">
      <ImageWithFallback3 />
      <Container14 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[39.198px] relative shrink-0 w-[123.656px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39.198px] relative w-[123.656px]">
        <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-0 not-italic text-[#232e43] text-[28px] text-nowrap top-[2.67px] whitespace-pre">Preschool</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="bg-white h-[28px] relative rounded-[2.23696e+07px] shrink-0 w-[96px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[96px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[12px] not-italic text-[#1e7872] text-[14px] text-nowrap top-[4.67px] whitespace-pre">3 - 5 years</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex h-[39.198px] items-center justify-between left-[32px] top-[32px] w-[440px]" data-name="Container">
      <Heading4 />
      <Text4 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="absolute h-[48px] left-[32px] top-[83.2px] w-[440px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#1e7872] text-[16px] top-[1.33px] w-[384px]">School readiness through structured activities, creative expression, and foundational academic skills.</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[155.2px] w-[98.906px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] leading-[24px] left-0 text-[#149496] text-[16px] text-nowrap top-[1.33px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        Learn More →
      </p>
    </div>
  );
}

function Programs7() {
  return (
    <div className="h-[211.198px] relative shrink-0 w-full" data-name="Programs">
      <Container15 />
      <Paragraph3 />
      <Button2 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[#f5edda] box-border content-stretch flex flex-col h-[467.198px] items-start left-0 overflow-clip rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[499.2px] w-[504px]" data-name="Container">
      <Programs6 />
      <Programs7 />
    </div>
  );
}

function ImageWithFallback4() {
  return (
    <div className="absolute h-[256px] left-0 top-0 w-[504px]" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback4} />
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M14 7V14L18.6667 16.3333" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p1fa66600} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-[#c49a3a] box-border content-stretch flex items-center justify-center left-[432px] rounded-[2.23696e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[56px] top-[16px]" data-name="Container">
      <Icon3 />
    </div>
  );
}

function Programs8() {
  return (
    <div className="h-[256px] overflow-clip relative shrink-0 w-full" data-name="Programs">
      <ImageWithFallback4 />
      <Container17 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[39.198px] relative shrink-0 w-[164.25px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39.198px] relative w-[164.25px]">
        <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-0 not-italic text-[#232e43] text-[28px] text-nowrap top-[2.67px] whitespace-pre">Drop-In Care</p>
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="bg-white h-[28px] relative rounded-[2.23696e+07px] shrink-0 w-[141px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[28px] relative w-[141px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[3.28px] not-italic text-[#1e7872] text-[14px] text-nowrap top-[5.2px] whitespace-pre">6 months - 5 years</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex h-[39.198px] items-center justify-between left-[32px] top-[32px] w-[440px]" data-name="Container">
      <Heading5 />
      <Text5 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="absolute h-[48px] left-[32px] top-[83.2px] w-[440px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#1e7872] text-[16px] top-[1.33px] w-[403px]">Flexible care options for occasional needs, date nights, or unexpected schedule changes.</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute h-[24px] left-[32px] top-[155.2px] w-[98.906px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular','Noto_Sans:Regular',sans-serif] leading-[24px] left-0 text-[#149496] text-[16px] text-nowrap top-[1.33px] whitespace-pre" style={{ fontVariationSettings: "'CTGR' 0, 'wdth' 100, 'wght' 400" }}>
        Learn More →
      </p>
    </div>
  );
}

function Programs9() {
  return (
    <div className="h-[211.198px] relative shrink-0 w-full" data-name="Programs">
      <Container18 />
      <Paragraph4 />
      <Button3 />
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute bg-[#f5edda] box-border content-stretch flex flex-col h-[467.198px] items-start left-[536px] overflow-clip rounded-[24px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-[499.2px] w-[504px]" data-name="Container">
      <Programs8 />
      <Programs9 />
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[966.396px] relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Container13 />
      <Container16 />
      <Container19 />
    </div>
  );
}

function Programs10() {
  return (
    <div className="absolute bg-white box-border content-stretch flex flex-col gap-[64px] h-[1346px] items-start left-0 pb-0 pt-[96px] px-[567px] top-[3443px] w-[2215px]" data-name="Programs">
      <Container7 />
      <Container20 />
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[52px] left-[384.08px] not-italic text-[40px] text-center text-nowrap text-white top-[3.33px] translate-x-[-50%] whitespace-pre">Ready to Visit Our Village?</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-[383.99px] not-italic text-[20px] text-[rgba(255,255,255,0.9)] text-center text-nowrap top-[1.67px] translate-x-[-50%] whitespace-pre">Schedule a tour and see firsthand how we are a pillar to our community.</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] h-[96px] items-start relative shrink-0 w-full" data-name="Container">
      <Heading6 />
      <Paragraph5 />
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

function Icon4() {
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

function Container22() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <TextInput />
      <Icon4 />
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[84px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <Container22 />
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

function Icon5() {
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

function Container24() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <EmailInput />
      <Icon5 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[84px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Container24 />
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
  return <div className="absolute left-[-753px] size-0 top-[-5327.32px]" data-name="Option" />;
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

function Icon6() {
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

function Container26() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <Dropdown />
      <Icon6 />
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[84px] items-start relative shrink-0 w-full" data-name="Container">
      <Label2 />
      <Container26 />
    </div>
  );
}

function Label3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Label">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Preferred Visit Date</p>
    </div>
  );
}

function DatePicker() {
  return <div className="absolute border-2 border-[#f5edda] border-solid h-[52px] left-0 rounded-[16.4px] top-0 w-[672px]" data-name="Date Picker" />;
}

function Icon7() {
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

function Container28() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <DatePicker />
      <Icon7 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[84px] items-start relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <Container28 />
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#e5795b] h-[56px] relative rounded-[16.4px] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[16px] not-italic text-[16px] text-nowrap text-white top-[17.33px] tracking-[0.4px] uppercase whitespace-pre">Book Your Visit</p>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[488px] items-start relative shrink-0 w-full" data-name="Form">
      <Container23 />
      <Container25 />
      <Container27 />
      <Container29 />
      <Button4 />
    </div>
  );
}

function Container30() {
  return (
    <div className="bg-white h-[584px] relative rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col h-[584px] items-start pb-0 pt-[48px] px-[48px] relative w-full">
          <Form />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col gap-[48px] h-[728px] items-start relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container30 />
    </div>
  );
}

function BookingForm() {
  return (
    <div className="absolute bg-gradient-to-b box-border content-stretch flex flex-col from-[#149496] h-[920px] items-start left-0 pb-0 pt-[96px] px-[703px] to-[#1e7872] top-[4789px] w-[2215px]" data-name="BookingForm">
      <Container31 />
    </div>
  );
}

function VectorMountain() {
  return (
    <div className="absolute left-[117px] size-[252px] top-[5377px]" data-name="Vector Mountain 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector Mountain 1" opacity="0.3">
          <path d={svgPaths.p1a9f8d00} fill="var(--fill-0, #F5EDDA)" id="Vector" />
          <path d={svgPaths.p68bcc80} fill="var(--fill-0, #F5EDDA)" id="Vector_2" />
          <path d={svgPaths.pe5f9d00} fill="var(--fill-0, #F5EDDA)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function VectorHouse1() {
  return (
    <div className="absolute left-[1859px] size-[252px] top-[5377px]" data-name="Vector House 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector House 3" opacity="0.3">
          <path d={svgPaths.p2f98fdf0} fill="var(--fill-0, #F5EDDA)" id="Vector" />
          <path d={svgPaths.p14f1c380} fill="var(--fill-0, #F5EDDA)" id="Vector_2" />
          <path d={svgPaths.p244d6640} fill="var(--fill-0, #F5EDDA)" id="Vector_3" />
          <path d={svgPaths.p327f8e00} fill="var(--fill-0, #F5EDDA)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function VectorTree() {
  return (
    <div className="absolute h-[346px] left-[1584px] top-[5269px] w-[294px]" data-name="Vector Tree 4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 294 346">
        <g id="Vector Tree 4" opacity="0.3">
          <path d={svgPaths.p3dba2d00} fill="var(--fill-0, #F5EDDA)" id="Vector" />
          <path d={svgPaths.p115cb900} fill="var(--fill-0, #F5EDDA)" id="Vector_2" />
          <path d={svgPaths.p26a84a00} fill="var(--fill-0, #F5EDDA)" id="Vector_3" />
          <path d={svgPaths.p173f9e80} fill="var(--fill-0, #F5EDDA)" id="Vector_4" />
          <path d={svgPaths.p1285ce00} fill="var(--fill-0, #F5EDDA)" id="Vector_5" />
        </g>
      </svg>
    </div>
  );
}

function VectorStar1() {
  return (
    <div className="relative size-[201.79px]" data-name="Vector Star 8">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 202 202">
        <g id="Vector Star 8" opacity="0.3">
          <path d={svgPaths.p2ae84300} fill="var(--fill-0, #F5EDDA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function VectorMoon() {
  return (
    <div className="relative size-[252px]" data-name="Vector Moon 5">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector Moon 5" opacity="0.3">
          <path d={svgPaths.p26d94000} fill="var(--fill-0, #F5EDDA)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Heading7() {
  return (
    <div className="h-[39.198px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-[336.49px] not-italic text-[#232e43] text-[28px] text-center text-nowrap top-[2.67px] translate-x-[-50%] whitespace-pre">Join Our Village</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[336.88px] not-italic text-[#1e7872] text-[16px] text-center text-nowrap top-[1.33px] translate-x-[-50%] whitespace-pre">Get childcare updates, parenting tips, and community news delivered to your inbox.</p>
    </div>
  );
}

function EmailInput1() {
  return (
    <div className="basis-0 bg-white grow h-[52px] min-h-px min-w-px relative rounded-[2.23696e+07px] shrink-0" data-name="Email Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[52px] items-center px-[24px] py-[12px] relative w-full">
          <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(35,46,67,0.5)] text-nowrap whitespace-pre">Enter your email</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-[#f5edda] border-solid inset-0 pointer-events-none rounded-[2.23696e+07px]" />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[121.77px] size-[16px] top-[18px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_1_634)" id="Icon">
          <path d={svgPaths.p151c1700} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d={svgPaths.p15e62a80} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
        <defs>
          <clipPath id="clip0_1_634">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#149496] h-[52px] relative rounded-[2.23696e+07px] shrink-0 w-[169.771px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[52px] relative w-[169.771px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[32px] not-italic text-[16px] text-nowrap text-white top-[15.33px] tracking-[0.4px] uppercase whitespace-pre">Subscribe</p>
        <Icon8 />
      </div>
    </div>
  );
}

function Form1() {
  return (
    <div className="content-stretch flex gap-[12px] h-[52px] items-start relative shrink-0 w-full" data-name="Form">
      <EmailInput1 />
      <Button5 />
    </div>
  );
}

function Newsletter() {
  return (
    <div className="absolute bg-[#f5edda] box-border content-stretch flex flex-col gap-[16px] h-[284px] items-start left-0 pb-0 pt-[64px] px-[751px] top-[5709px] w-[2215px]" data-name="Newsletter">
      <Heading7 />
      <Paragraph6 />
      <Form1 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[32px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
        <g id="Icon">
          <path d={svgPaths.p1eb47e80} id="Vector" stroke="var(--stroke-0, #E5795B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d={svgPaths.p189e3480} id="Vector_2" stroke="var(--stroke-0, #E5795B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
          <path d="M23.3333 8.66667H23.3467" id="Vector_3" stroke="var(--stroke-0, #E5795B)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.66667" />
        </g>
      </svg>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[39.198px] relative shrink-0 w-[246.552px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[39.198px] relative w-[246.552px]">
        <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-[123px] not-italic text-[#232e43] text-[28px] text-center text-nowrap top-[2.67px] translate-x-[-50%] whitespace-pre">Follow Our Journey</p>
      </div>
    </div>
  );
}

function SocialFeed() {
  return (
    <div className="h-[39.198px] relative shrink-0 w-full" data-name="SocialFeed">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[20px] h-[39.198px] items-center justify-center pl-0 pr-[0.01px] py-0 relative w-full">
          <Icon9 />
          <Heading8 />
        </div>
      </div>
    </div>
  );
}

function SocialFeed1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="SocialFeed">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[520.42px] not-italic text-[#1e7872] text-[16px] text-center text-nowrap top-[1.33px] translate-x-[-50%] whitespace-pre">See daily moments and updates from our Village Values family</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[79.198px] items-start left-[567px] top-[96px] w-[1040px]" data-name="Container">
      <SocialFeed />
      <SocialFeed1 />
    </div>
  );
}

function ImageWithFallback5() {
  return (
    <div className="absolute left-0 size-[248px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback5} />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-full">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-white top-[0.67px] w-[215px]">Creative play time with our toddler group! 🎨</p>
      </div>
    </div>
  );
}

function SocialFeed2() {
  return (
    <div className="absolute bg-gradient-to-t box-border content-stretch flex from-[rgba(35,46,67,0.8)] items-end left-0 opacity-0 pb-[16px] pt-0 px-[16px] size-[248px] to-[rgba(0,0,0,0)] top-0" data-name="SocialFeed">
      <Paragraph7 />
    </div>
  );
}

function Link() {
  return (
    <div className="[grid-area:1_/_1] bg-[rgba(255,255,255,0)] overflow-clip place-self-stretch relative rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0" data-name="Link">
      <ImageWithFallback5 />
      <SocialFeed2 />
    </div>
  );
}

function ImageWithFallback6() {
  return (
    <div className="absolute left-0 size-[248px] top-0" data-name="ImageWithFallback">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-[177.78%] left-[0.34%] max-w-none top-[-39.56%] w-full" src={imgImageWithFallback3} />
      </div>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-full">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-white top-[0.67px] w-[174px]">Learning letters through fun activities 📚</p>
      </div>
    </div>
  );
}

function SocialFeed3() {
  return (
    <div className="absolute bg-gradient-to-t box-border content-stretch flex from-[rgba(35,46,67,0.8)] items-end left-0 opacity-0 pb-[16px] pt-0 px-[16px] size-[248px] to-[rgba(0,0,0,0)] top-0" data-name="SocialFeed">
      <Paragraph8 />
    </div>
  );
}

function Link1() {
  return (
    <div className="[grid-area:1_/_2] bg-[rgba(255,255,255,0)] overflow-clip place-self-stretch relative rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0" data-name="Link">
      <ImageWithFallback6 />
      <SocialFeed3 />
    </div>
  );
}

function ImageWithFallback7() {
  return (
    <div className="absolute left-0 size-[248px] top-0" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback6} />
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="basis-0 grow h-[40px] min-h-px min-w-px relative shrink-0" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[40px] relative w-full">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-white top-[0.67px] w-[196px]">Sweet moments with our littlest villagers 💕</p>
      </div>
    </div>
  );
}

function SocialFeed4() {
  return (
    <div className="absolute bg-gradient-to-t box-border content-stretch flex from-[rgba(35,46,67,0.8)] items-end left-0 opacity-0 pb-[16px] pt-0 px-[16px] size-[248px] to-[rgba(0,0,0,0)] top-0" data-name="SocialFeed">
      <Paragraph9 />
    </div>
  );
}

function Link2() {
  return (
    <div className="[grid-area:1_/_3] bg-[rgba(255,255,255,0)] overflow-clip place-self-stretch relative rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0" data-name="Link">
      <ImageWithFallback7 />
      <SocialFeed4 />
    </div>
  );
}

function ImageWithFallback8() {
  return (
    <div className="absolute left-0 size-[248px] top-0" data-name="ImageWithFallback">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute h-full left-[-36.91%] max-w-none top-0 w-[160%]" src={imgImageWithFallback4} />
      </div>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[20px] relative shrink-0 w-[188.99px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[188.99px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-nowrap text-white top-[0.67px] whitespace-pre">Family fun day celebration! 🎉</p>
      </div>
    </div>
  );
}

function SocialFeed5() {
  return (
    <div className="absolute bg-gradient-to-t box-border content-stretch flex from-[rgba(35,46,67,0.8)] items-end left-0 opacity-0 pb-[16px] pl-[16px] pr-0 pt-0 size-[248px] to-[rgba(0,0,0,0)] top-0" data-name="SocialFeed">
      <Paragraph10 />
    </div>
  );
}

function Link3() {
  return (
    <div className="[grid-area:1_/_4] bg-[rgba(255,255,255,0)] overflow-clip place-self-stretch relative rounded-[16px] shadow-[0px_4px_6px_-1px_rgba(0,0,0,0.1),0px_2px_4px_-2px_rgba(0,0,0,0.1)] shrink-0" data-name="Link">
      <ImageWithFallback8 />
      <SocialFeed5 />
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute gap-[16px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[248px] left-[567px] top-[223.2px] w-[1040px]" data-name="Container">
      <Link />
      <Link1 />
      <Link2 />
      <Link3 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-0 size-[20px] top-[2px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g clipPath="url(#clip0_1_625)" id="Icon">
          <path d={svgPaths.p4b98700} id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p2b0d6500} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M14.5833 5.41667H14.5917" id="Vector_3" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
        <defs>
          <clipPath id="clip0_1_625">
            <rect fill="white" height="20" width="20" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="absolute h-[24px] left-[28px] top-0 w-[104.396px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[61.7px] not-italic text-[#149496] text-[16px] text-center text-nowrap top-[-0.2px] translate-x-[-50%] whitespace-pre">@Villagevalues_</p>
    </div>
  );
}

function Link4() {
  return (
    <div className="absolute h-[24px] left-[1020.8px] top-[503.2px] w-[132.396px]" data-name="Link">
      <Icon10 />
      <Text6 />
    </div>
  );
}

function SocialFeed6() {
  return (
    <div className="absolute bg-white h-[626px] left-0 top-[5993px] w-[2215px]" data-name="SocialFeed">
      <Container32 />
      <Container33 />
      <Link4 />
    </div>
  );
}

function VectorSun() {
  return (
    <div className="absolute left-[-62.71px] size-[252px] top-[-39.77px]" data-name="Vector Sun 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector Sun 1">
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

function Container34() {
  return (
    <div className="h-[126.581px] relative rounded-[2.23696e+07px] shrink-0 w-full" data-name="Container">
      <VectorSun />
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[1974px] opacity-30 size-[120px] top-[128px]" data-name="Container">
      <Container34 />
    </div>
  );
}

function VectorHeart() {
  return (
    <div className="absolute left-[-41.32px] size-[209px] top-[-59.27px]" data-name="Vector Heart 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 209 209">
        <g id="Vector Heart 1">
          <path d={svgPaths.p2a064180} fill="var(--fill-0, #E5795B)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[83.362px] relative rounded-tl-[2.23696e+07px] rounded-tr-[2.23696e+07px] shrink-0 w-full" data-name="Container">
      <VectorHeart />
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[40px] opacity-30 size-[80px] top-[1097.33px]" data-name="Container">
      <Container36 />
    </div>
  );
}

function Hero() {
  return (
    <div className="h-[196px] relative shrink-0 w-full" data-name="Hero">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[67.2px] left-0 not-italic text-[#232e43] text-[56px] top-[5px] w-[394px]">Where families grow together</p>
    </div>
  );
}

function Hero1() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Hero">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-0 not-italic text-[#1e7872] text-[20px] top-[1.67px] w-[485px]">Licensed in-home childcare built on trust, learning, and community.</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute bg-[#149496] h-[60px] left-0 rounded-[2.23696e+07px] top-0 w-[165.802px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[32px] not-italic text-[16px] text-nowrap text-white top-[19.33px] tracking-[0.4px] uppercase whitespace-pre">Book a Visit</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute bg-white border-2 border-[#149496] border-solid h-[60px] left-[181.8px] rounded-[2.23696e+07px] top-0 w-[167.969px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[32px] not-italic text-[#149496] text-[16px] text-nowrap top-[17.33px] tracking-[0.4px] uppercase whitespace-pre">Learn More</p>
    </div>
  );
}

function Hero2() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Hero">
      <Button6 />
      <Button7 />
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] h-[302px] items-start left-[80px] top-[101.33px] w-[496px]" data-name="Container">
      <Hero />
      <Hero1 />
      <Hero2 />
    </div>
  );
}

function ImageWithFallback9() {
  return (
    <div className="h-[500px] relative shrink-0 w-full" data-name="ImageWithFallback">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImageWithFallback4} />
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] box-border content-stretch flex flex-col h-[446px] items-start left-[565px] overflow-clip rounded-[24px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)] top-[15.33px] w-[658px]" data-name="Container">
      <ImageWithFallback9 />
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[500px] left-[487px] top-[418.67px] w-[1200px]" data-name="Container">
      <Container38 />
      <Container39 />
    </div>
  );
}

function VectorCloud() {
  return (
    <div className="absolute left-[-3px] size-[252px] top-0" data-name="Vector Cloud 6">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector Cloud 6">
          <path d={svgPaths.p250d980} fill="var(--fill-0, #C49A3A)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function VectorRainbow() {
  return (
    <div className="absolute h-[171px] left-[102px] opacity-30 overflow-clip top-[248px] w-[249px]" data-name="Vector Rainbow 2">
      <VectorCloud />
    </div>
  );
}

function VectorStickmanStanding() {
  return (
    <div className="absolute h-[252px] left-[1650px] top-[1016px] w-[243px]" data-name="Vector Stickman Standing 5">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 243 252">
        <g id="Vector Stickman Standing 5" opacity="0.3">
          <path d={svgPaths.pc9ec80} fill="var(--fill-0, #149496)" id="Vector" />
          <path d={svgPaths.pc4acff0} fill="var(--fill-0, #149496)" id="Vector_2" />
          <path d={svgPaths.p3f00c200} fill="var(--fill-0, #149496)" id="Vector_3" />
        </g>
      </svg>
    </div>
  );
}

function VectorStickmanStanding1() {
  return (
    <div className="absolute h-[143px] left-[1583px] top-[1117px] w-[152px]" data-name="Vector Stickman Standing 6">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 152 143">
        <g id="Vector Stickman Standing 6">
          <path d={svgPaths.pcd2c000} fill="var(--fill-0, #149496)" id="Vector" opacity="0.3" />
          <path d={svgPaths.p1e9f6e00} fill="var(--fill-0, #149496)" id="Vector_2" opacity="0.3" />
          <path d={svgPaths.pd0d1272} fill="var(--fill-0, #149496)" id="Vector_3" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function VectorHouse() {
  return (
    <div className="absolute h-[321px] left-[1886px] top-[956px] w-[295px]" data-name="Vector House 2">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 295 321">
        <g id="Vector House 2" opacity="0.3">
          <path d={svgPaths.p2f82b300} fill="var(--fill-0, #E5795B)" id="Vector" />
          <path d={svgPaths.pf8a51f0} fill="var(--fill-0, #E5795B)" id="Vector_2" />
          <path d={svgPaths.p10de0b00} fill="var(--fill-0, #E5795B)" id="Vector_3" />
          <path d={svgPaths.p37711d70} fill="var(--fill-0, #E5795B)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function VectorFlower() {
  return (
    <div className="absolute left-[162px] size-[252px] top-[877px]" data-name="Vector Flower 4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector Flower 4">
          <path d={svgPaths.p350a9ef0} fill="var(--fill-0, #149496)" id="Vector" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function VectorStar() {
  return (
    <div className="relative size-[171.65px]" data-name="Vector Star 7">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 172 172">
        <g id="Vector Star 7" opacity="0.3">
          <path d={svgPaths.p148f8400} fill="var(--fill-0, #149496)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Hero3() {
  return (
    <div className="absolute h-[1305px] left-0 overflow-clip top-0 w-[2174px]" data-name="Hero">
      <Container35 />
      <Container37 />
      <Container40 />
      <VectorRainbow />
      <VectorStickmanStanding />
      <VectorStickmanStanding1 />
      <VectorHouse />
      <VectorFlower />
      <div className="absolute flex items-center justify-center left-[9.86px] size-[242.649px] top-[60.03px]" style={{ "--transform-inner-width": "171.640625", "--transform-inner-height": "171.640625" } as React.CSSProperties}>
        <div className="flex-none rotate-[226.652deg]">
          <VectorStar />
        </div>
      </div>
    </div>
  );
}

function Reviews() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Reviews">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[52px] left-[519.54px] not-italic text-[#232e43] text-[40px] text-center text-nowrap top-[3.33px] translate-x-[-50%] whitespace-pre">What Families Are Saying</p>
    </div>
  );
}

function Reviews1() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Reviews">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-[520.96px] not-italic text-[#1e7872] text-[20px] text-center text-nowrap top-[1.67px] translate-x-[-50%] whitespace-pre">{`Don't just take our word for it, hear from our Village Values community.`}</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[96px] items-start left-[80px] top-0 w-[1040px]" data-name="Container">
      <Reviews />
      <Reviews1 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p9b81900} fill="var(--fill-0, #F6D33A)" id="Vector" stroke="var(--stroke-0, #F6D33A)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex gap-[4px] h-[24px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      {[...Array(5).keys()].map((_, i) => (
        <Icon11 key={i} />
      ))}
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[56px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Italic',sans-serif] italic leading-[28px] left-[400px] text-[#1e7872] text-[18px] text-center top-[-13.93px] translate-x-[-50%] w-[744px]">{`"We've tried other daycares, but nothing compares to the warmth and professionalism at Village Values. They truly treat our son like family, and the daily updates give us such peace of mind."`}</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[400.56px] not-italic text-[#232e43] text-[16px] text-center text-nowrap top-[1.33px] translate-x-[-50%] whitespace-pre">{`Michael & Jennifer T.`}</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[400.24px] not-italic text-[#1e7872] text-[14px] text-center text-nowrap top-[0.67px] translate-x-[-50%] whitespace-pre">Parents of 18-month-old</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col h-[44px] items-start relative shrink-0 w-full" data-name="Container">
      <Paragraph12 />
      <Paragraph13 />
    </div>
  );
}

function Container44() {
  return (
    <div className="bg-white h-[260px] relative rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[16px] h-[260px] items-start pb-0 pt-[48px] px-[48px] relative w-full">
          <Container42 />
          <Paragraph11 />
          <Container43 />
        </div>
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M15 18L9 12L15 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="bg-[#149496] relative rounded-[2.23696e+07px] shrink-0 size-[48px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon12 />
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="bg-[rgba(20,148,150,0.3)] relative rounded-[2.23696e+07px] shrink-0 size-[10px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[10px]" />
    </div>
  );
}

function Button10() {
  return (
    <div className="basis-0 bg-[#149496] grow h-[10px] min-h-px min-w-px relative rounded-[2.23696e+07px] shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[10px] w-full" />
    </div>
  );
}

function Container45() {
  return (
    <div className="h-[10px] relative shrink-0 w-[86px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[8px] h-[10px] items-start relative w-[86px]">
        <Button9 />
        <Button10 />
        <Button9 />
        <Button9 />
      </div>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M9 18L15 12L9 6" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Button11() {
  return (
    <div className="bg-[#149496] relative rounded-[2.23696e+07px] shrink-0 size-[48px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[48px]">
        <Icon13 />
      </div>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-center justify-center relative shrink-0 w-full" data-name="Container">
      <Button8 />
      <Container45 />
      <Button11 />
    </div>
  );
}

function Container47() {
  return (
    <div className="absolute box-border content-stretch flex flex-col gap-[42px] h-[360px] items-start left-[152px] pb-0 pt-[10px] px-0 top-[160px] w-[896px]" data-name="Container">
      <Container44 />
      <Container46 />
    </div>
  );
}

function Container48() {
  return (
    <div className="h-[520px] relative shrink-0 w-full" data-name="Container">
      <Container41 />
      <Container47 />
    </div>
  );
}

function Reviews2() {
  return (
    <div className="absolute bg-[#f5edda] box-border content-stretch flex flex-col h-[712px] items-start left-0 overflow-clip pb-0 pt-[96px] px-[487px] top-[2730.93px] w-[2174px]" data-name="Reviews">
      <Container48 />
    </div>
  );
}

function OurPromise3() {
  return (
    <div className="absolute h-[96px] left-[31px] top-[106px] w-[172px]" data-name="OurPromise">
      <div className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[86px] not-italic text-[#f5edda] text-[0px] text-center top-0 translate-x-[-50%] w-[192px]">
        <p className="font-['Poppins:ExtraBold',sans-serif] mb-0 text-[#c49a3a] text-[20px]">{`Fully Licensed & Insured`}</p>
        <p className="text-[16px]">Licensed by the CA Dept. of Social Services (#343626863) and fully insured.</p>
      </div>
    </div>
  );
}

function Back() {
  return (
    <div className="absolute inset-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Back">
      <OurPromise3 />
    </div>
  );
}

function Front() {
  return (
    <div className="absolute bg-white inset-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Front">
      <div className="absolute h-[190px] left-0 rounded-[21px] top-[74px] w-[233px]" data-name="image 5">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[21px]">
          <img alt="" className="absolute h-[164.74%] left-[-41.78%] max-w-none top-[-45.91%] w-[407.53%]" src={imgImage5} />
        </div>
      </div>
    </div>
  );
}

function FlipCard() {
  return (
    <div className="[grid-area:1_/_1] h-[353.594px] relative shrink-0 w-[233.25px]" data-name="Flip Card 1">
      <Back />
      <Front />
    </div>
  );
}

function OurPromise4() {
  return <div className="absolute h-[72px] left-[27.75px] top-[170.67px] w-[172px]" data-name="OurPromise" />;
}

function Back1() {
  return (
    <div className="absolute inset-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Back">
      <OurPromise4 />
      <div className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[117.5px] not-italic text-[#f5edda] text-[0px] text-center top-[104px] translate-x-[-50%] w-[193px]">
        <p className="font-['Poppins:ExtraBold',sans-serif] mb-0 text-[#c49a3a] text-[20px]">{`FBI & DOJ Cleared`}</p>
        <p className="text-[16px]">{`All staff have passed comprehensive background checks from the FBI & Dept. of Justice.`}</p>
      </div>
    </div>
  );
}

function Front1() {
  return (
    <div className="absolute bg-white inset-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Front">
      <div className="absolute h-[196px] left-0 rounded-[24px] top-[61px] w-[233px]" data-name="image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[24px]">
          <img alt="" className="absolute h-[172.91%] left-[-301.06%] max-w-none top-[-48.84%] w-[441.87%]" src={imgImage5} />
        </div>
      </div>
    </div>
  );
}

function FlipCard1() {
  return (
    <div className="[grid-area:1_/_2] h-[353.594px] relative shrink-0 w-[233.25px]" data-name="Flip Card 2">
      <Back1 />
      <Front1 />
    </div>
  );
}

function OurPromise5() {
  return <div className="absolute h-[72px] left-[27.75px] top-[170.67px] w-[172px]" data-name="OurPromise" />;
}

function Back2() {
  return (
    <div className="absolute bottom-[0.11%] left-0 right-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] top-0" data-name="Back">
      <OurPromise5 />
      <div className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[117.5px] not-italic text-[#f5edda] text-[0px] text-center top-[104px] translate-x-[-50%] w-[193px]">
        <p className="font-['Poppins:ExtraBold',sans-serif] mb-0 text-[#c49a3a] text-[20px]">AHA Certified</p>
        <p className="text-[16px]">{`All lead caregivers are certified in CPR & First Aid by the American Heart Association.`}</p>
      </div>
    </div>
  );
}

function Front2() {
  return (
    <div className="absolute bg-white inset-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Front">
      <div className="absolute h-[190px] left-0 rounded-[34px] top-[68px] w-[233px]" data-name="image 4">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[34px]">
          <img alt="" className="absolute h-[149.16%] left-[-54.6%] max-w-none top-[-31.31%] w-[438.79%]" src={imgImage4} />
        </div>
      </div>
    </div>
  );
}

function FlipCard2() {
  return (
    <div className="[grid-area:1_/_3] h-[354px] relative shrink-0 w-[233.25px]" data-name="Flip Card 3">
      <Back2 />
      <Front2 />
    </div>
  );
}

function OurPromise6() {
  return <div className="absolute h-[72px] left-[27.75px] top-[170.67px] w-[172px]" data-name="OurPromise" />;
}

function Back3() {
  return (
    <div className="absolute inset-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Back">
      <OurPromise6 />
      <div className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[117.5px] not-italic text-[#f5edda] text-[0px] text-center top-[104px] translate-x-[-50%] w-[193px]">
        <p className="font-['Poppins:ExtraBold',sans-serif] mb-0 text-[#c49a3a] text-[20px]">{`Preventative Health & Safety`}</p>
        <p className="text-[16px]">Certified for Preventative Health and Safety practices for Child Care Providers.</p>
      </div>
    </div>
  );
}

function Front3() {
  return (
    <div className="absolute bg-white inset-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Front">
      <div className="absolute h-[120px] left-[11px] rounded-[25px] top-[117px] w-[213px]" data-name="image 2">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[25px]">
          <img alt="" className="absolute h-[160.25%] left-[-216.92%] max-w-none top-[-38.48%] w-[325.11%]" src={imgImage4} />
        </div>
      </div>
    </div>
  );
}

function FlipCard3() {
  return (
    <div className="[grid-area:1_/_4] h-[353.594px] relative shrink-0 w-[233.25px]" data-name="Flip Card 4">
      <Back3 />
      <Front3 />
    </div>
  );
}

function OurPromise7() {
  return <div className="absolute h-[72px] left-[27.75px] top-[170.67px] w-[172px]" data-name="OurPromise" />;
}

function Back4() {
  return (
    <div className="absolute inset-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Back">
      <OurPromise7 />
      <div className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[117.5px] not-italic text-[#f5edda] text-[0px] text-center top-[104px] translate-x-[-50%] w-[193px]">
        <p className="font-['Poppins:ExtraBold',sans-serif] mb-0 text-[#c49a3a] text-[20px]">Safe Meal Preparation</p>
        <p className="text-[16px]">Both directors hold California Food Handler Certificates, ensuring healthy and safe meals.</p>
      </div>
    </div>
  );
}

function Front4() {
  return (
    <div className="absolute bg-white inset-0 rounded-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" data-name="Front">
      <div className="absolute h-[170px] left-0 rounded-[30px] top-[88px] w-[233px]" data-name="image 3">
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[30px]">
          <img alt="" className="absolute h-[122.77%] left-[-14.8%] max-w-none top-[-9.82%] w-[134.71%]" src={imgImage3} />
        </div>
      </div>
    </div>
  );
}

function FlipCard4() {
  return (
    <div className="[grid-area:1_/_5] h-[353.594px] relative shrink-0 w-[233.25px]" data-name="Flip Card 5">
      <Back4 />
      <Front4 />
    </div>
  );
}

function Container49() {
  return (
    <div className="absolute gap-[32px] grid grid-cols-[repeat(5,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[353.594px] left-[436px] top-[2281px] w-[1294.25px]" data-name="Container">
      <FlipCard />
      <FlipCard1 />
      <FlipCard2 />
      <FlipCard3 />
      <FlipCard4 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="h-[6619px] relative shrink-0 w-full" data-name="Main Content">
      <FoundersNote4 />
      <OurPromise2 />
      <Programs10 />
      <BookingForm />
      <VectorMountain />
      <VectorHouse1 />
      <VectorTree />
      <div className="absolute flex items-center justify-center left-[188px] size-[278.372px] top-[4831.18px]" style={{ "--transform-inner-width": "201.78125", "--transform-inner-height": "201.78125" } as React.CSSProperties}>
        <div className="flex-none rotate-[212.282deg]">
          <VectorStar1 />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[1868.84px] size-[298.324px] top-[4787.84px]" style={{ "--transform-inner-width": "252", "--transform-inner-height": "252" } as React.CSSProperties}>
        <div className="flex-none rotate-[348.166deg]">
          <VectorMoon />
        </div>
      </div>
      <Newsletter />
      <SocialFeed6 />
      <Hero3 />
      <Reviews2 />
      <Container49 />
    </div>
  );
}

function ImageVillageValuesLogo() {
  return (
    <div className="relative rounded-[2.23696e+07px] shrink-0 size-[40px]" data-name="Image (Village Values Logo)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[2.23696e+07px] size-full" src={imgImageVillageValuesLogo} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border size-[40px]" />
    </div>
  );
}

function Text7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[96.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[96.875px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-nowrap text-white top-[1.33px] whitespace-pre">Village Values</p>
      </div>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex gap-[8px] h-[40px] items-center relative shrink-0 w-full" data-name="Container">
      <ImageVillageValuesLogo />
      <Text7 />
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[72px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.7)] top-[1.33px] w-[193px]">Licensed in-home childcare built on trust, learning, and community.</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container50 />
      <Paragraph14 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[28px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[28px] left-0 not-italic text-[20px] text-nowrap text-white top-[1.67px] whitespace-pre">Quick Links</p>
    </div>
  );
}

function Link5() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[67.594px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Programs</p>
    </div>
  );
}

function ListItem() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link5 />
    </div>
  );
}

function Link6() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[43.583px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">About</p>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link6 />
    </div>
  );
}

function Link7() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[39.844px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Enroll</p>
    </div>
  );
}

function ListItem2() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link7 />
    </div>
  );
}

function Link8() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[52.698px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Careers</p>
    </div>
  );
}

function ListItem3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link8 />
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

function Container52() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading2 />
      <List />
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

function Link9() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[123.438px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Parent Handbook</p>
    </div>
  );
}

function ListItem4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link9 />
    </div>
  );
}

function Link10() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[103.271px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Daily Schedule</p>
    </div>
  );
}

function ListItem5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link10 />
    </div>
  );
}

function Link11() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[36.052px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">FAQs</p>
    </div>
  );
}

function ListItem6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link11 />
    </div>
  );
}

function Link12() {
  return (
    <div className="absolute content-stretch flex h-[21.333px] items-start left-0 top-[1.33px] w-[76.875px]" data-name="Link">
      <p className="font-['Poppins:Regular',sans-serif] leading-[24px] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap whitespace-pre">Contact Us</p>
    </div>
  );
}

function ListItem7() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Link12 />
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

function Container53() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading9 />
      <List1 />
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

function Icon14() {
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

function Text8() {
  return (
    <div className="absolute h-[24px] left-[28px] top-0 w-[192px]" data-name="Text">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap top-[1.33px] whitespace-pre">Rancho Cordova, CA 95742</p>
    </div>
  );
}

function ListItem8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="List Item">
      <Icon14 />
      <Text8 />
    </div>
  );
}

function Icon15() {
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

function Link13() {
  return (
    <div className="h-[24px] relative shrink-0 w-[106.688px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[106.688px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap top-[1.33px] whitespace-pre">(916) 761-0211</p>
      </div>
    </div>
  );
}

function ListItem9() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="List Item">
      <Icon15 />
      <Link13 />
    </div>
  );
}

function Icon16() {
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

function Link14() {
  return (
    <div className="h-[24px] relative shrink-0 w-[158.021px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[24px] relative w-[158.021px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[16px] text-[rgba(255,255,255,0.7)] text-nowrap top-[1.33px] whitespace-pre">info@villagevalues.net</p>
      </div>
    </div>
  );
}

function ListItem10() {
  return (
    <div className="content-stretch flex gap-[8px] h-[24px] items-center relative shrink-0 w-full" data-name="List Item">
      <Icon16 />
      <Link14 />
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

function Container54() {
  return (
    <div className="[grid-area:1_/_4] content-stretch flex flex-col gap-[16px] items-start place-self-stretch relative shrink-0" data-name="Container">
      <Heading10 />
      <List2 />
    </div>
  );
}

function Container55() {
  return (
    <div className="gap-[48px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[164px] relative shrink-0 w-full" data-name="Container">
      <Container51 />
      <Container52 />
      <Container53 />
      <Container54 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[20px] relative shrink-0 w-[381.052px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[20px] relative w-[381.052px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-0 not-italic text-[14px] text-[rgba(255,255,255,0.6)] text-nowrap top-[0.67px] whitespace-pre">{`© 2024 Village Values. All rights reserved. Licensed & Insured.`}</p>
      </div>
    </div>
  );
}

function Icon17() {
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

function Link15() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[2.23696e+07px] shrink-0 size-[40px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon17 />
      </div>
    </div>
  );
}

function Icon18() {
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

function Link16() {
  return (
    <div className="bg-[rgba(255,255,255,0.1)] relative rounded-[2.23696e+07px] shrink-0 size-[40px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center justify-center relative size-[40px]">
        <Icon18 />
      </div>
    </div>
  );
}

function Icon19() {
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

function Link17() {
  return (
    <div className="basis-0 bg-[rgba(255,255,255,0.1)] grow h-[40px] min-h-px min-w-px relative rounded-[2.23696e+07px] shrink-0" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex h-[40px] items-center justify-center relative w-full">
        <Icon19 />
      </div>
    </div>
  );
}

function Container56() {
  return (
    <div className="h-[40px] relative shrink-0 w-[152px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex gap-[16px] h-[40px] items-start relative w-[152px]">
        <Link15 />
        <Link16 />
        <Link17 />
      </div>
    </div>
  );
}

function Container57() {
  return (
    <div className="box-border content-stretch flex h-[72.667px] items-center justify-between pb-0 pt-[0.667px] px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px_0px_0px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none" />
      <Paragraph15 />
      <Container56 />
    </div>
  );
}

function Footer() {
  return (
    <div className="bg-[#232e43] h-[413px] relative shrink-0 w-full" data-name="Footer">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[48px] h-[413px] items-start pb-0 pt-[64px] px-[567px] relative w-full">
          <Container55 />
          <Container57 />
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="absolute bg-[#f5edda] content-stretch flex flex-col h-[7032px] items-start left-0 top-0 w-[2214px]" data-name="App">
      <MainContent />
      <Footer />
    </div>
  );
}

function ImageVillageValuesLogo1() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative rounded-[2.23696e+07px] shrink-0" data-name="Image (Village Values Logo)">
      <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid box-border inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[2.23696e+07px] size-full" src={imgImageVillageValuesLogo} />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[48px] w-full" />
    </div>
  );
}

function Link18() {
  return (
    <div className="relative shrink-0 size-[48px]" data-name="Link">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border content-stretch flex items-center relative size-[48px]">
        <ImageVillageValuesLogo1 />
      </div>
    </div>
  );
}

function Link19() {
  return (
    <div className="absolute h-[24px] left-0 top-0 w-[67.594px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Programs</p>
    </div>
  );
}

function Link20() {
  return (
    <div className="absolute h-[24px] left-[99.59px] top-0 w-[43.583px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">About</p>
    </div>
  );
}

function Link21() {
  return (
    <div className="absolute h-[24px] left-[175.18px] top-0 w-[39.844px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Enroll</p>
    </div>
  );
}

function Link22() {
  return (
    <div className="absolute h-[24px] left-[247.02px] top-0 w-[52.698px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Careers</p>
    </div>
  );
}

function Link23() {
  return (
    <div className="absolute h-[24px] left-[331.72px] top-0 w-[70.802px]" data-name="Link">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Resources</p>
    </div>
  );
}

function Link24() {
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
        <Link19 />
        <Link20 />
        <Link21 />
        <Link22 />
        <Link23 />
        <Link24 />
      </div>
    </div>
  );
}

function Button12() {
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
    <div className="absolute bg-[#f5edda] box-border content-stretch flex h-[88px] items-center justify-between left-0 px-[567px] py-0 top-0 w-[2214px]" data-name="Header">
      <Link18 />
      <Navigation />
      <Button12 />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="bg-[#f5edda] relative size-full" data-name="Home Page">
      <App />
      <Header />
    </div>
  );
}