import svgPaths from "./svg-iw6a9dx0mr";

function Hours() {
  return (
    <div className="absolute h-[52px] left-0 top-0 w-[1040px]" data-name="Hours">
      <p className="absolute font-['Poppins:Bold',sans-serif] leading-[52px] left-[519.95px] not-italic text-[#232e43] text-[40px] text-center text-nowrap top-[3.33px] translate-x-[-50%] whitespace-pre">Hours of Operation</p>
    </div>
  );
}

function Hours1() {
  return (
    <div className="absolute h-[28px] left-[184px] top-[68px] w-[672px]" data-name="Hours">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[28px] left-[336.15px] not-italic text-[#1e7872] text-[20px] text-center text-nowrap top-[2.67px] translate-x-[-50%] whitespace-pre">{`When you can reach us and when we're caring for children`}</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[96px] left-[80px] top-0 w-[1040px]" data-name="Container">
      <Hours />
      <Hours1 />
    </div>
  );
}

function Icon() {
  return (
    <div className="relative shrink-0 size-[28px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 28">
        <g id="Icon">
          <path d="M14 7V14L18.6667 16.3333" id="Vector" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
          <path d={svgPaths.p1fa66600} id="Vector_2" stroke="var(--stroke-0, #149496)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.33333" />
        </g>
      </svg>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-[rgba(20,148,150,0.1)] relative rounded-[16px] shrink-0 size-[56px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-[56px]">
        <Icon />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[39.198px] relative shrink-0 w-[212.49px]" data-name="Heading 3">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[39.198px] relative w-[212.49px]">
        <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-0 not-italic text-[#232e43] text-[28px] text-nowrap top-[2.67px] whitespace-pre">Operating Hours</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[56px] items-center justify-center left-[48px] pl-0 pr-[0.01px] py-0 top-[48px] w-[576px]" data-name="Container">
      <Container1 />
      <Heading />
    </div>
  );
}

function Hours2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[115.823px]" data-name="Hours">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[115.823px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Monday - Friday</p>
      </div>
    </div>
  );
}

function Hours3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[130.635px]" data-name="Hours">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[130.635px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#149496] text-[16px] text-nowrap top-[1.33px] whitespace-pre">7:00 AM - 6:00 PM</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[56.667px] items-center justify-between pb-[0.667px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.667px] border-solid border-white inset-0 pointer-events-none" />
      <Hours2 />
      <Hours3 />
    </div>
  );
}

function Hours4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[61.99px]" data-name="Hours">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[61.99px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Saturday</p>
      </div>
    </div>
  );
}

function Hours5() {
  return (
    <div className="h-[24px] relative shrink-0 w-[47.74px]" data-name="Hours">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[47.74px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#149496] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Closed</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[56.667px] items-center justify-between pb-[0.667px] pt-0 px-0 relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.667px] border-solid border-white inset-0 pointer-events-none" />
      <Hours4 />
      <Hours5 />
    </div>
  );
}

function Hours6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[51.917px]" data-name="Hours">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[51.917px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#232e43] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Sunday</p>
      </div>
    </div>
  );
}

function Hours7() {
  return (
    <div className="h-[24px] relative shrink-0 w-[47.74px]" data-name="Hours">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[24px] relative w-[47.74px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-0 not-italic text-[#149496] text-[16px] text-nowrap top-[1.33px] whitespace-pre">Closed</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[56px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Hours6 />
      <Hours7 />
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[16px] h-[201.333px] items-start left-[48px] top-[136px] w-[576px]" data-name="Container">
      <Container3 />
      <Container4 />
      <Container5 />
    </div>
  );
}

function Hours8() {
  return (
    <div className="h-[60px] relative shrink-0 w-full" data-name="Hours">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[288.34px] not-italic text-[#1e7872] text-[14px] text-center top-[0.67px] translate-x-[-50%] w-[569px]">{`We're closed on major holidays including New Year's Day, Memorial Day, Independence Day, Labor Day, Thanksgiving, and Christmas. Families are notified of closures in advance.`}</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[92.667px] items-start left-[48px] pb-0 pt-[32.667px] px-0 top-[369.33px] w-[576px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0.667px_0px_0px] border-solid border-white inset-0 pointer-events-none" />
      <Hours8 />
    </div>
  );
}

function BoldText() {
  return (
    <div className="absolute content-stretch flex h-[18.667px] items-start left-[279px] top-[382.47px] w-[113.792px]" data-name="Bold Text">
      <p className="font-['Poppins:Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1e7872] text-[14px] text-center text-nowrap whitespace-pre">Holiday Closures:</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[40px] left-[48px] top-[486px] w-[576px]" data-name="Paragraph">
      <p className="absolute font-['Poppins:Italic',sans-serif] italic leading-[20px] left-[288.26px] text-[#1e7872] text-[14px] text-center top-[0.67px] translate-x-[-50%] w-[569px]">{`Need to reach us outside these hours? Send us a message and we'll respond first thing the next business day.`}</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-[#f5edda] h-[574px] left-[264px] rounded-[24px] top-[144px] w-[672px]" data-name="Container">
      <Container2 />
      <Container6 />
      <Container7 />
      <BoldText />
      <Paragraph />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute h-[718px] left-[487px] top-[96px] w-[1200px]" data-name="Container">
      <Container />
      <Container8 />
    </div>
  );
}

function Container10() {
  return <div className="absolute left-[2036px] opacity-30 size-[90px] top-[80px]" data-name="Container" />;
}

function Container11() {
  return <div className="absolute left-[64px] opacity-30 size-[85px] top-[729px]" data-name="Container" />;
}

function VectorOwl() {
  return (
    <div className="absolute left-[1841px] size-[221px] top-[662.47px]" data-name="Vector Owl 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 221 221">
        <g id="Vector Owl 1">
          <path d={svgPaths.p39fc5900} fill="var(--fill-0, #C49A3A)" id="Vector" opacity="0.3" />
        </g>
      </svg>
    </div>
  );
}

function VectorMoon() {
  return (
    <div className="relative size-[252px]" data-name="Vector Moon 4">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 252 252">
        <g id="Vector Moon 4" opacity="0.3">
          <path d={svgPaths.p26d94000} fill="var(--fill-0, #149496)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function VectorSun() {
  return (
    <div className="absolute left-[64px] size-[240px] top-[168.47px]" data-name="Vector Sun 6">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 240 240">
        <g id="Vector Sun 6" opacity="0.3">
          <path d={svgPaths.p9a0380} fill="var(--fill-0, #C49A3A)" id="Vector" />
          <path d={svgPaths.p209e9580} fill="var(--fill-0, #C49A3A)" id="Vector_2" />
          <path d={svgPaths.p22ad4780} fill="var(--fill-0, #C49A3A)" id="Vector_3" />
          <path d={svgPaths.p29c88340} fill="var(--fill-0, #C49A3A)" id="Vector_4" />
          <path d={svgPaths.p1c991940} fill="var(--fill-0, #C49A3A)" id="Vector_5" />
          <path d={svgPaths.p29a2b800} fill="var(--fill-0, #C49A3A)" id="Vector_6" />
          <path d={svgPaths.p1771c300} fill="var(--fill-0, #C49A3A)" id="Vector_7" />
          <path d={svgPaths.p2e15a5c0} fill="var(--fill-0, #C49A3A)" id="Vector_8" />
          <path d={svgPaths.p127c7200} fill="var(--fill-0, #C49A3A)" id="Vector_9" />
        </g>
      </svg>
    </div>
  );
}

function VectorBird() {
  return (
    <div className="relative size-[236px]" data-name="Vector Bird 3">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 236 236">
        <g id="Vector Bird 3" opacity="0.3">
          <g id="Group">
            <path d={svgPaths.p3da7c100} fill="var(--fill-0, #149496)" id="Vector" />
            <path d={svgPaths.p14437580} fill="var(--fill-0, #149496)" id="Vector_2" />
            <path d={svgPaths.p1a73dd00} fill="var(--fill-0, #149496)" id="Vector_3" />
            <path d={svgPaths.p163c7d00} fill="var(--fill-0, #149496)" id="Vector_4" />
          </g>
          <path d={svgPaths.p200ba800} fill="var(--fill-0, #149496)" id="Vector_5" />
          <path d={svgPaths.p16c04400} fill="var(--fill-0, #149496)" id="Vector_6" />
          <path d={svgPaths.paa11500} fill="var(--fill-0, #149496)" id="Vector_7" />
          <path d={svgPaths.p1fe5fc00} fill="var(--fill-0, #149496)" id="Vector_8" />
          <path d={svgPaths.p1327e00} fill="var(--fill-0, #149496)" id="Vector_9" />
          <path d={svgPaths.p353ddf80} fill="var(--fill-0, #149496)" id="Vector_10" />
        </g>
      </svg>
    </div>
  );
}

export default function Hours9() {
  return (
    <div className="bg-white relative size-full" data-name="Hours">
      <Container9 />
      <Container10 />
      <Container11 />
      <VectorOwl />
      <div className="absolute flex items-center justify-center left-[1841.4px] size-[291.208px] top-[153.86px]" style={{ "--transform-inner-width": "252", "--transform-inner-height": "252" } as React.CSSProperties}>
        <div className="flex-none rotate-[9.798deg]">
          <VectorMoon />
        </div>
      </div>
      <VectorSun />
      <div className="absolute flex items-center justify-center left-[149px] size-[236px] top-[571.47px]">
        <div className="flex-none rotate-[180deg] scale-y-[-100%]">
          <VectorBird />
        </div>
      </div>
    </div>
  );
}