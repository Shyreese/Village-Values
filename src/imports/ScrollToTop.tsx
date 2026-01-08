import svgPaths from "./svg-ty95wsf6gy";

function Container() {
  return <div className="absolute bg-[#e5795b] left-[55.2px] rounded-[2.23696e+07px] size-[17.596px] top-[-12.79px]" data-name="Container" />;
}

function Container1() {
  return <div className="absolute bg-[#f6d33a] left-[-4.22px] rounded-[2.23696e+07px] size-[12.435px] top-[56.51px]" data-name="Container" />;
}

function Container2() {
  return <div className="absolute bg-[#149496] left-[-12px] opacity-70 rounded-[2.23696e+07px] size-[8px] top-[4px]" data-name="Container" />;
}

function Container3() {
  return <div className="absolute left-0 opacity-0 rounded-[2.23696e+07px] size-[62.667px] top-0" data-name="Container" />;
}

function Icon() {
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

function Button() {
  return (
    <div className="absolute bg-[rgba(196,154,58,0.9)] border-[0.667px] border-[rgba(196,154,58,0.2)] border-solid left-0 overflow-clip rounded-[2.23696e+07px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] size-[64px] top-[-0.19px]" data-name="Button">
      <Container3 />
      <Icon />
    </div>
  );
}

export default function ScrollToTop() {
  return (
    <div className="relative size-full" data-name="ScrollToTop">
      <Container />
      <Container1 />
      <Container2 />
      <Button />
    </div>
  );
}