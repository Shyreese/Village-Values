function Button() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[36px] left-[92.66px] rounded-[2.23696e+07px] top-[12px] w-[124.865px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[47.68px] not-italic text-[#232e43] text-[14px] text-nowrap top-[8.33px] whitespace-pre">Text</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[36px] left-[229.52px] rounded-[2.23696e+07px] top-[12px] w-[135.281px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[52.81px] not-italic text-[#232e43] text-[14px] text-nowrap top-[8.33px] whitespace-pre">Text</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[36px] left-[376.8px] rounded-[2.23696e+07px] top-[12px] w-[149.198px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[59.53px] not-italic text-[#232e43] text-[14px] text-nowrap top-[8.33px] whitespace-pre">Text</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[36px] left-[538px] rounded-[2.23696e+07px] top-[12px] w-[112.188px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[41.33px] not-italic text-[#232e43] text-[14px] text-nowrap top-[8.33px] whitespace-pre">Text</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[36px] left-[662.19px] rounded-[2.23696e+07px] top-[12px] w-[151.458px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[61.15px] not-italic text-[#232e43] text-[14px] text-nowrap top-[8.33px] whitespace-pre">{`Text `}</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#e5795b] h-[36px] left-[886.33px] rounded-[2.23696e+07px] top-[12.33px] w-[104.354px]" data-name="Button">
      <p className="absolute font-['Poppins:Regular',sans-serif] leading-[20px] left-[37px] not-italic text-[14px] text-nowrap text-white top-[8px] whitespace-pre">Text</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[60px] overflow-clip relative shrink-0 w-full" data-name="Container">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

export default function ProgramsBottomDock() {
  return (
    <div className="bg-[rgba(196,154,58,0.95)] relative rounded-[32px] size-full" data-name="ProgramsBottomDock">
      <div aria-hidden="true" className="absolute border-[0.667px] border-[rgba(35,46,67,0.1)] border-solid inset-0 pointer-events-none rounded-[32px] shadow-[0px_25px_50px_-12px_rgba(0,0,0,0.25)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[0.667px] relative size-full">
          <Container />
        </div>
      </div>
    </div>
  );
}