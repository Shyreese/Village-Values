import svgPaths from "./svg-5eq722ur0f";

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

function Container() {
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

function TextInput() {
  return (
    <div className="absolute bg-white h-[52px] left-0 rounded-[16.4px] top-0 w-[576px]" data-name="Text Input">
      <div className="content-stretch flex h-[52px] items-center overflow-clip pl-[48px] pr-[16px] py-[12px] relative rounded-[inherit] w-[576px]">
        <p className="font-['Poppins:Regular',sans-serif] leading-[normal] not-italic relative shrink-0 text-[16px] text-[rgba(35,46,67,0.5)] text-nowrap whitespace-pre">Enter your name</p>
      </div>
      <div aria-hidden="true" className="absolute border-2 border-solid border-white inset-0 pointer-events-none rounded-[16.4px]" />
    </div>
  );
}

function Icon() {
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

function Container1() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <TextInput />
      <Icon />
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[84px] items-start relative shrink-0 w-full" data-name="Container">
      <Label />
      <Container1 />
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

function Icon1() {
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

function Container3() {
  return (
    <div className="h-[52px] relative shrink-0 w-full" data-name="Container">
      <EmailInput />
      <Icon1 />
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[84px] items-start relative shrink-0 w-full" data-name="Container">
      <Label1 />
      <Container3 />
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

function Container5() {
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

function Icon2() {
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

function Container6() {
  return (
    <div className="h-[153.333px] relative shrink-0 w-full" data-name="Container">
      <TextArea />
      <Icon2 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col gap-[8px] h-[185.333px] items-start relative shrink-0 w-full" data-name="Container">
      <Label3 />
      <Container6 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#149496] h-[56px] relative rounded-[16.4px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[227px] not-italic text-[16px] text-nowrap text-white top-[15.51px] tracking-[0.4px] uppercase whitespace-pre">Send Message</p>
    </div>
  );
}

function Form() {
  return (
    <div className="content-stretch flex flex-col gap-[24px] h-[589.333px] items-start relative shrink-0 w-full" data-name="Form">
      <Container2 />
      <Container4 />
      <Container5 />
      <Container7 />
      <Button />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-[#f5edda] content-stretch flex flex-col h-[685.333px] items-start left-[264px] pb-0 pt-[48px] px-[48px] rounded-[24px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] top-[144px] w-[672px]" data-name="Container">
      <Form />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[39.198px] left-[32px] top-[32px] w-[608px]" data-name="Heading 3">
      <p className="absolute font-['Poppins:SemiBold',sans-serif] leading-[39.2px] left-[303.9px] not-italic text-[#232e43] text-[28px] text-center text-nowrap top-[2.67px] translate-x-[-50%] whitespace-pre">Get New Resources Every Month</p>
    </div>
  );
}

function Paragraph() {
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

function Button1() {
  return (
    <div className="bg-[#232e43] h-[52px] relative rounded-[2.23696e+07px] shrink-0 w-[132.354px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid h-[52px] relative w-[132.354px]">
        <p className="absolute font-['Poppins:Regular',sans-serif] leading-[24px] left-[26.35px] not-italic text-[16px] text-nowrap text-white top-[14.31px] whitespace-pre">Subscribe</p>
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[52px] items-start left-[112px] top-[155.2px] w-[448px]" data-name="Container">
      <EmailInput1 />
      <Button1 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute bg-gradient-to-b from-[#c49a3a] h-[239.198px] left-[264px] rounded-[16px] shadow-[0px_20px_25px_-5px_rgba(0,0,0,0.1),0px_8px_10px_-6px_rgba(0,0,0,0.1)] to-[#f6d33a] top-[877.33px] w-[672px]" data-name="Container">
      <Heading />
      <Paragraph />
      <Container9 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute h-[1116.53px] left-[487px] top-[96px] w-[1200px]" data-name="Container">
      <Container />
      <Container8 />
      <Container10 />
    </div>
  );
}

function Container12() {
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

export default function ResourcesContact2() {
  return (
    <div className="bg-white relative size-full" data-name="ResourcesContact">
      <Container11 />
      <Container12 />
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