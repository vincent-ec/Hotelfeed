import svgPaths from "./svg-c2k22fdjf7";
import img1664285177Jpeg from "figma:asset/bd792bc9ee68ea4bcc06e37da3a69c66b035ec2e.png";
import img1664285177Jpeg1 from "figma:asset/b5d6e6ab248a89c56fb52b0f42de414f93985d9c.png";
import imgImage10 from "figma:asset/3cc58b451a65a2ded66c2efa81803680c780fb0a.png";
import imgMarkerPrimaryPng from "figma:asset/e1d844d5b8bf50da29363d552d808f2428d950ef.png";
import imgImage8 from "figma:asset/7b8ff98a9cf0c56d2fd625bf3de2b122b60df83f.png";

function Frame3() {
  return (
    <div className="content-stretch flex gap-[8px] h-[36px] items-center relative shrink-0">
      <div className="flex flex-col font-['Cera_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#202223] text-[16px] whitespace-nowrap">
        <p className="leading-[20px]">Association Name</p>
      </div>
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex gap-[24px] items-start relative shrink-0" data-name="Left">
      <div className="bg-white content-stretch flex items-center px-[8px] relative rounded-[5px] shrink-0" data-name="Assc Logo + Name">
        <Frame3 />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Logo">
      <Left />
    </div>
  );
}

function AccountDropdownButton() {
  return (
    <div className="bg-white content-stretch flex gap-[4px] h-[36px] items-center p-[8px] relative rounded-[4px] shrink-0" data-name="Account Dropdown Button">
      <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-name="Avatar + Label">
        <div className="bg-[#ccc] content-stretch flex flex-col items-center justify-center p-[4px] relative rounded-[5px] shrink-0 size-[24px]" data-name="Avatars">
          <div aria-hidden="true" className="absolute border border-[#ccc] border-solid inset-0 pointer-events-none rounded-[5px]" />
          <p className="font-['Cera_Pro:Bold',sans-serif] leading-[16px] not-italic relative shrink-0 text-[9px] text-black text-center uppercase">CW</p>
        </div>
        <p className="font-['Cera_Pro:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#0d0d0d] text-[14px]">C. Wilson</p>
      </div>
      <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Unicons / Arrows / down arrow">
        <div className="absolute inset-[37%_27.93%_36.98%_28.14%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.78466 5.20549">
            <path d={svgPaths.p1ea57800} fill="var(--fill-0, black)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function HomeAccount() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0" data-name="Home + Account">
      <div className="content-stretch flex flex-col h-[36px] items-end relative shrink-0" data-name="Account Dropdown">
        <AccountDropdownButton />
      </div>
    </div>
  );
}

function Component1664285177Jpeg() {
  return (
    <div className="relative rounded-[8px] shrink-0 size-[40px]" data-name="1664285177.jpeg">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none rounded-[8px]">
        <div className="absolute inset-0 overflow-hidden rounded-[8px]">
          <img alt="" className="absolute h-full left-[-0.91%] max-w-none top-0 w-[101.81%]" src={img1664285177Jpeg} />
        </div>
        <div className="absolute inset-0 overflow-hidden rounded-[8px]">
          <img alt="" className="absolute left-[-29.44%] max-w-none size-[158.88%] top-[-29.44%]" src={img1664285177Jpeg1} />
        </div>
      </div>
    </div>
  );
}

function DivDFlexMargin() {
  return (
    <div className="content-stretch flex flex-col items-center relative rounded-[8px] shrink-0 size-[40px]" data-name="div.d-flex:margin">
      <Component1664285177Jpeg />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div className="flex flex-col font-['Cera_Pro:Medium',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#000d22] text-[24px] whitespace-nowrap">
        <p className="leading-[28px]">{`Champions Tournament 2025 `}</p>
      </div>
    </div>
  );
}

function Pseudo() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="pseudo">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Unicons / Location and Map / location">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10.6667 13.3334">
            <path d={svgPaths.p2a0a6d80} fill="var(--fill-0, #0D0D0D)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Small() {
  return (
    <div className="content-stretch flex gap-[2px] items-center relative shrink-0" data-name="Small">
      <Pseudo />
      <div className="flex flex-col font-['Cera_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">{`134 Brock Street, Sarnia, ON, CA `}</p>
      </div>
    </div>
  );
}

function Pseudo1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="pseudo">
      <div className="relative shrink-0 size-[16px]" data-name="EC / Calendar / Schedule">
        <div className="absolute inset-[4.17%]" data-name="Shape">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.667 14.667">
            <path d={svgPaths.p1f235250} fill="var(--fill-0, #0D0D0D)" id="Shape" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Small1() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="Small">
      <Pseudo1 />
      <div className="flex flex-col font-['Cera_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[14px] whitespace-nowrap">
        <p className="leading-[20px]">February 19 - 21, 2025</p>
      </div>
    </div>
  );
}

function DivMb() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[474px]" data-name="div.mb-3">
      <Small />
      <Small1 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex flex-col h-full items-start justify-center relative shrink-0">
      <Frame2 />
      <DivMb />
    </div>
  );
}

function PMt2Margin() {
  return (
    <div className="content-stretch flex gap-[12px] items-center py-[8px] relative shrink-0" data-name="p.mt-2:margin">
      <DivDFlexMargin />
      <div className="flex flex-row items-center self-stretch">
        <Frame19 />
      </div>
    </div>
  );
}

function DivDFlex1() {
  return <div className="h-[48px] shrink-0 w-[152.63px]" data-name="div.d-flex" />;
}

function DivDFlex() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative" data-name="div.d-flex">
      <div className="content-stretch flex items-start justify-between pr-[40px] relative w-full">
        <PMt2Margin />
        <DivDFlex1 />
      </div>
    </div>
  );
}

function DivRow() {
  return (
    <div className="content-start flex flex-wrap items-start relative shrink-0 w-full" data-name="div.row">
      <DivDFlex />
    </div>
  );
}

function DivMediaBody() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative" data-name="div.media-body">
      <DivRow />
    </div>
  );
}

function DivMedia() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="div.media">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-b border-solid inset-0 pointer-events-none" />
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center pl-[56px] pr-[8px] py-[16px] relative w-full">
          <DivMediaBody />
        </div>
      </div>
    </div>
  );
}

function Frame56() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <div className="bg-white relative shrink-0 w-full" data-name="EC Global Nav">
        <div aria-hidden="true" className="absolute border-[#ccc] border-b border-solid inset-0 pointer-events-none" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center justify-between px-[48px] py-[8px] relative w-full">
            <Logo />
            <HomeAccount />
          </div>
        </div>
      </div>
      <DivMedia />
    </div>
  );
}

function Pin() {
  return (
    <div className="col-1 h-[55.5px] ml-0 mt-0 relative row-1 w-[46px]" data-name="Pin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 46 55.5">
        <g id="Pin">
          <path d={svgPaths.p393e6a80} fill="var(--fill-0, #FF5900)" id="Rectangle 83" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Location() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[361px] mt-[198px] place-items-start relative row-1" data-name="Location">
      <Pin />
      <div className="col-1 ml-[14px] mt-[13.07px] overflow-clip relative row-1 size-[18px]" data-name="Bootstrap Icons/Star fill">
        <div className="absolute inset-[3.12%_-0.01%_3.12%_0.01%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18.0003 16.8756">
            <path d={svgPaths.p36ba51a0} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Pin1() {
  return (
    <div className="col-1 h-[48px] ml-0 mt-0 relative row-1 w-[39.784px]" data-name="Pin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.7838 48">
        <g id="Pin">
          <path d={svgPaths.p1958fc00} fill="var(--fill-0, #FF9500)" id="Rectangle 83" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Location1() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[109px] mt-[37.47px] place-items-start relative row-1" data-name="Location">
      <Pin1 />
      <div className="col-1 ml-[12.11px] mt-[11.3px] overflow-clip relative row-1 size-[15.568px]" data-name="Bootstrap Icons/Star fill">
        <div className="absolute inset-[3.12%_-0.01%_3.12%_0.01%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5679 14.5951">
            <path d={svgPaths.p18d5e900} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Pin2() {
  return (
    <div className="col-1 h-[48px] ml-0 mt-0 relative row-1 w-[39.784px]" data-name="Pin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.7838 48">
        <g id="Pin">
          <path d={svgPaths.p1958fc00} fill="var(--fill-0, #FF9500)" id="Rectangle 83" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Location2() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[632px] mt-[344.47px] place-items-start relative row-1" data-name="Location">
      <Pin2 />
      <div className="col-1 ml-[12.11px] mt-[11.3px] overflow-clip relative row-1 size-[15.568px]" data-name="Bootstrap Icons/Star fill">
        <div className="absolute inset-[3.12%_-0.01%_3.12%_0.01%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5679 14.5951">
            <path d={svgPaths.p18d5e900} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Pin3() {
  return (
    <div className="col-1 h-[48px] ml-0 mt-0 relative row-1 w-[39.784px]" data-name="Pin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.7838 48">
        <g id="Pin">
          <path d={svgPaths.p1958fc00} fill="var(--fill-0, #FF9500)" id="Rectangle 83" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Location3() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[549px] mt-[56.47px] place-items-start relative row-1" data-name="Location">
      <Pin3 />
      <div className="col-1 ml-[12.11px] mt-[11.3px] overflow-clip relative row-1 size-[15.568px]" data-name="Bootstrap Icons/Star fill">
        <div className="absolute inset-[3.12%_-0.01%_3.12%_0.01%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5679 14.5951">
            <path d={svgPaths.p18d5e900} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Pin4() {
  return (
    <div className="col-1 h-[48px] ml-0 mt-0 relative row-1 w-[39.784px]" data-name="Pin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 39.7838 48">
        <g id="Pin">
          <path d={svgPaths.p1958fc00} fill="var(--fill-0, #FF9500)" id="Rectangle 83" stroke="var(--stroke-0, white)" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function Location4() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-0 mt-[482.47px] place-items-start relative row-1" data-name="Location">
      <Pin4 />
      <div className="col-1 ml-[12.11px] mt-[11.3px] overflow-clip relative row-1 size-[15.568px]" data-name="Bootstrap Icons/Star fill">
        <div className="absolute inset-[3.12%_-0.01%_3.12%_0.01%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15.5679 14.5951">
            <path d={svgPaths.p18d5e900} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Pin5() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[470px] mt-[328px] place-items-start relative row-1" data-name="Pin">
      <div className="col-1 h-[37.5px] ml-0 mt-0 relative row-1 w-[52px]">
        <div className="absolute inset-[0_0_13.16%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 32.565">
            <path d={svgPaths.p395f1440} fill="var(--fill-0, white)" id="Rectangle 83" stroke="var(--stroke-0, #B2B2B2)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="col-1 flex flex-col font-['Cera_Pro:Bold',sans-serif] h-[12px] justify-center ml-[7px] mt-[8px] not-italic relative row-1 text-[#0d0d0d] text-[12px] text-center w-[38px]">
        <p className="leading-[16px] whitespace-pre-wrap">$400</p>
      </div>
    </div>
  );
}

function Frame23() {
  return (
    <div className="col-1 content-stretch flex gap-[2px] items-center justify-center ml-[2px] mt-0 pb-[4px] pt-[7px] px-[8px] relative row-1">
      <div className="overflow-clip relative shrink-0 size-[10px]" data-name="FA4.7 / User Interface / trophy">
        <div className="absolute inset-[0_0.31%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 9.93884 10">
            <path d={svgPaths.p133ce130} fill="var(--fill-0, #8848FF)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Cera_Pro:Bold',sans-serif] h-[15px] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] text-center w-[28px]">
        <p className="leading-[16px] whitespace-pre-wrap">$140</p>
      </div>
    </div>
  );
}

function Pin6() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[549px] mt-[248.47px] place-items-start relative row-1" data-name="Pin">
      <div className="col-1 h-[37.5px] ml-0 mt-0 relative row-1 w-[58px]">
        <div className="absolute inset-[0_0_13.16%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 58 32.565">
            <path d={svgPaths.p2d096300} fill="var(--fill-0, white)" id="Rectangle 83" stroke="var(--stroke-0, #8848FF)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <Frame23 />
    </div>
  );
}

function Pin7() {
  return (
    <div className="h-[37.5px] relative shrink-0 w-[52px]" data-name="Pin">
      <div className="absolute inset-[0_0_13.16%_0]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 32.565">
          <path d={svgPaths.p395f1440} fill="var(--fill-0, white)" id="Rectangle 83" stroke="var(--stroke-0, #B2B2B2)" strokeWidth="1.5" />
        </svg>
      </div>
      <div className="absolute flex flex-col font-['Cera_Pro:Bold',sans-serif] inset-[21.33%_13.46%_46.67%_13.46%] justify-center leading-[0] not-italic text-[#0d0d0d] text-[12px] text-center">
        <p className="leading-[16px] whitespace-pre-wrap">$200</p>
      </div>
    </div>
  );
}

function Frame41() {
  return (
    <div className="col-1 content-stretch flex flex-col items-center justify-center ml-[213px] mt-[224px] p-[8px] relative row-1 w-[68px]">
      <Pin7 />
    </div>
  );
}

function Pin8() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[640px] mt-[123px] place-items-start relative row-1" data-name="Pin">
      <div className="col-1 h-[37.5px] ml-0 mt-0 relative row-1 w-[52px]">
        <div className="absolute inset-[0_0_13.16%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 32.565">
            <path d={svgPaths.p395f1440} fill="var(--fill-0, white)" id="Rectangle 83" stroke="var(--stroke-0, #B2B2B2)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="col-1 flex flex-col font-['Cera_Pro:Bold',sans-serif] h-[12px] justify-center ml-[7px] mt-[8px] not-italic relative row-1 text-[#0d0d0d] text-[12px] text-center w-[38px]">
        <p className="leading-[16px] whitespace-pre-wrap">$375</p>
      </div>
    </div>
  );
}

function Pin9() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[246px] mt-0 place-items-start relative row-1" data-name="Pin">
      <div className="col-1 h-[37.5px] ml-0 mt-0 relative row-1 w-[52px]">
        <div className="absolute inset-[0_0_13.16%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 32.565">
            <path d={svgPaths.p395f1440} fill="var(--fill-0, white)" id="Rectangle 83" stroke="var(--stroke-0, #B2B2B2)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="col-1 flex flex-col font-['Cera_Pro:Bold',sans-serif] h-[12px] justify-center ml-[7px] mt-[8px] not-italic relative row-1 text-[#0d0d0d] text-[12px] text-center w-[38px]">
        <p className="leading-[16px] whitespace-pre-wrap">$200</p>
      </div>
    </div>
  );
}

function Pin10() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[51px] mt-[336px] place-items-start relative row-1" data-name="Pin">
      <div className="col-1 h-[37.5px] ml-0 mt-0 relative row-1 w-[52px]">
        <div className="absolute inset-[0_0_13.16%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 32.565">
            <path d={svgPaths.p395f1440} fill="var(--fill-0, white)" id="Rectangle 83" stroke="var(--stroke-0, #B2B2B2)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="col-1 flex flex-col font-['Cera_Pro:Bold',sans-serif] h-[12px] justify-center ml-[7px] mt-[8px] not-italic relative row-1 text-[#0d0d0d] text-[12px] text-center w-[38px]">
        <p className="leading-[16px] whitespace-pre-wrap">$250</p>
      </div>
    </div>
  );
}

function Pin11() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[317px] mt-[356.47px] place-items-start relative row-1" data-name="Pin">
      <div className="col-1 h-[37.5px] ml-0 mt-0 relative row-1 w-[52px]">
        <div className="absolute inset-[0_0_13.16%_0]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 52 32.565">
            <path d={svgPaths.p395f1440} fill="var(--fill-0, white)" id="Rectangle 83" stroke="var(--stroke-0, #B2B2B2)" strokeWidth="1.5" />
          </svg>
        </div>
      </div>
      <div className="col-1 flex flex-col font-['Cera_Pro:Bold',sans-serif] h-[12px] justify-center ml-[7px] mt-[8px] not-italic relative row-1 text-[#0d0d0d] text-[12px] text-center w-[38px]">
        <p className="leading-[16px] whitespace-pre-wrap">$180</p>
      </div>
    </div>
  );
}

function Pins() {
  return (
    <div className="col-1 grid-cols-[max-content] grid-rows-[max-content] inline-grid ml-[896px] mt-[232px] place-items-start relative row-1" data-name="Pins">
      <Location />
      <Location1 />
      <Location2 />
      <Location3 />
      <Location4 />
      <Pin5 />
      <Pin6 />
      <Frame41 />
      <Pin8 />
      <Pin9 />
      <Pin10 />
      <Pin11 />
    </div>
  );
}

function Heading() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Heading 5">
      <div className="flex flex-[1_0_0] flex-col font-['Cera_Pro:Medium',sans-serif] h-[17.6px] justify-center leading-[0] max-h-[17.600000381469727px] min-h-px min-w-px not-italic relative text-[#0d0d0d] text-[20px]">
        <p className="leading-[24px] whitespace-pre-wrap">Welcome 👋</p>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <div className="overflow-clip relative size-[28px]" data-name="Unicons / Arrows / down arrow">
            <div className="absolute inset-[37%_27.93%_36.98%_28.14%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12.2985 7.28769">
                <path d={svgPaths.p100fd780} fill="var(--fill-0, #0D0D0D)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Heading1() {
  return (
    <div className="content-stretch flex flex-col font-['Cera_Pro:Regular',sans-serif] gap-[16px] items-start leading-[0] not-italic relative shrink-0 text-[14px] w-full" data-name="Heading 6">
      <div className="flex flex-col justify-center max-w-[288.6099853515625px] relative shrink-0 text-[#0d0d0d] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">All rates are pre-negotiated, best available group rates. You may create a block and share with your team, free of charge so your team can easily stay together.</p>
      </div>
      <div className="flex flex-col justify-center max-w-[288.6099853515625px] relative shrink-0 text-[#303030] w-full">
        <p className="leading-[20px] whitespace-pre-wrap">If you require assistance or have any questions, please use our chat below.</p>
      </div>
    </div>
  );
}

function Filter() {
  return (
    <div className="bg-[#f3f5ff] col-1 content-stretch flex flex-col gap-[8px] items-start ml-[1488.12px] mt-[24px] pb-[24px] pt-[20px] px-[24px] relative rounded-[12px] row-1 w-[280px]" data-name="Filter">
      <Heading />
      <Heading1 />
    </div>
  );
}

function Button() {
  return (
    <div className="bg-[#0731fa] content-stretch flex gap-[4px] h-[35.2px] items-center justify-center px-[12px] py-[4px] relative rounded-[24px] shrink-0" data-name="Button">
      <div className="overflow-clip relative shrink-0 size-[16px]" data-name="Unicons/list-ul">
        <div className="absolute bottom-1/4 left-[8.33%] right-[8.33%] top-1/4" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3335 8.00016">
            <path d={svgPaths.p15a6cf80} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Cera_Pro:Bold',sans-serif] justify-center leading-[0] max-w-[230.61000061035156px] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[16px]">View List</p>
      </div>
    </div>
  );
}

function Frame1() {
  return (
    <div className="bg-[#f3f5ff] relative rounded-[12px] shrink-0 w-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[8px] items-center justify-center px-[90px] py-[16px] relative w-full">
          <Button />
        </div>
      </div>
    </div>
  );
}

function Frame34() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col items-start px-[16px] relative w-full">
        <Frame1 />
      </div>
    </div>
  );
}

function DivFormGroup() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="div.form-group">
      <div className="flex flex-col font-['Cera_Pro:Medium',sans-serif] justify-center leading-[0] max-w-[249.17999267578125px] not-italic relative shrink-0 text-[#303030] text-[16px] whitespace-nowrap">
        <p className="leading-[20px]">Check-in date</p>
      </div>
      <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Assets/Input">
        <div aria-hidden="true" className="absolute border border-[#b2b2b2] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[12px] pr-[8px] py-[8px] relative size-full">
            <div className="content-stretch flex flex-col items-start pr-[8px] relative shrink-0" data-name="Assets/Prefix">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Unicons / Business / calender">
                <div className="absolute inset-[8.33%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                    <path d={svgPaths.p52ea100} fill="var(--fill-0, #727272)" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-col font-['Cera_Pro:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#0d0d0d] text-[14px]">
              <p className="leading-[20px] whitespace-pre-wrap">Feb 18, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function DivFormGroup1() {
  return (
    <div className="content-stretch flex flex-col gap-[5px] items-start relative shrink-0 w-full" data-name="div.form-group">
      <div className="flex flex-col font-['Cera_Pro:Medium',sans-serif] justify-center leading-[0] max-w-[249.17999267578125px] not-italic relative shrink-0 text-[#303030] text-[16px] whitespace-nowrap">
        <p className="leading-[20px]">Check-out date</p>
      </div>
      <div className="bg-white h-[36px] relative rounded-[4px] shrink-0 w-full" data-name="Assets/Input">
        <div aria-hidden="true" className="absolute border border-[#b2b2b2] border-solid inset-0 pointer-events-none rounded-[4px]" />
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex items-center pl-[12px] pr-[8px] py-[8px] relative size-full">
            <div className="content-stretch flex flex-col items-start pr-[8px] relative shrink-0" data-name="Assets/Prefix">
              <div className="overflow-clip relative shrink-0 size-[20px]" data-name="Unicons / Business / calender">
                <div className="absolute inset-[8.33%]" data-name="Vector">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16.6667 16.6667">
                    <path d={svgPaths.p52ea100} fill="var(--fill-0, #727272)" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="flex flex-[1_0_0] flex-col font-['Cera_Pro:Regular',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#0d0d0d] text-[14px]">
              <p className="leading-[20px] whitespace-pre-wrap">Feb 20, 2025</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AutoLayoutButton() {
  return (
    <div className="bg-[#0731fa] flex-[1_0_0] min-h-px min-w-px relative rounded-[4px]" data-name="Auto layout button">
      <div className="flex flex-row items-center justify-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-center px-[16px] py-[8px] relative w-full">
          <p className="font-['Cera_Pro:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Apply Filters</p>
        </div>
      </div>
    </div>
  );
}

function DivBgGrey() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.bg-grey">
      <div className="content-stretch flex flex-col gap-[16px] items-start pb-[16px] pt-[4px] px-[16px] relative w-full">
        <DivFormGroup />
        <DivFormGroup1 />
        <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Primary button">
          <AutoLayoutButton />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 5">
      <div className="content-stretch flex flex-col items-start pr-[154.18px] relative w-full">
        <div className="flex flex-col font-['Cera_Pro:Medium',sans-serif] justify-center leading-[0] max-h-[17.600000381469727px] max-w-[265.17999267578125px] not-italic relative shrink-0 text-[#303030] text-[16px] whitespace-nowrap">
          <p className="leading-[20px]">Property name</p>
        </div>
      </div>
    </div>
  );
}

function DivPlaceholder() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="div#placeholder">
      <div className="flex flex-col font-['Cera_Pro:Regular',sans-serif] justify-center leading-[0] max-w-[329px] not-italic relative shrink-0 text-[#999] text-[16px] whitespace-nowrap">
        <p className="leading-[normal]">Narrow results based on the property name.</p>
      </div>
    </div>
  );
}

function Input() {
  return (
    <div className="bg-white h-[42px] relative rounded-[4px] shrink-0 w-full" data-name="Input">
      <div aria-hidden="true" className="absolute border border-[#9b9b9b] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <div className="content-stretch flex flex-col items-start px-[17px] py-[11px] relative size-full">
        <DivPlaceholder />
      </div>
    </div>
  );
}

function DivMR() {
  return (
    <div className="content-stretch flex flex-col gap-[9.99px] items-start relative shrink-0 w-full" data-name="div.m-r-1">
      <Heading2 />
      <Input />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[16px] relative w-[13.72px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.72 16">
        <g clipPath="url(#clip0_1_3433)" id="Icon">
          <path d={svgPaths.p282e7e40} fill="var(--fill-0, #909090)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_3433">
            <rect fill="white" height="16" width="13.72" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Before() {
  return (
    <div className="absolute content-stretch flex items-start left-[138.77px] top-[-0.5px]" data-name="::before">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon />
        </div>
      </div>
    </div>
  );
}

function Label() {
  return (
    <div className="h-[16px] relative shrink-0 w-[152.48px]" data-name="Label">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Cera_Pro:Regular',sans-serif] justify-center leading-[0] left-[35px] not-italic text-[#303030] text-[16px] top-[8px] whitespace-nowrap">
        <p className="leading-[24px]">{`Hide sold out `}</p>
      </div>
      <Before />
    </div>
  );
}

function SpanInput() {
  return (
    <div className="absolute left-0 rounded-[5px] size-[25px] top-0" data-name="span.input">
      <div className="absolute bg-white border border-[#ccc] border-solid inset-0 rounded-[5px]" data-name="span.input paints" />
    </div>
  );
}

function DivCheckbox() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.checkbox">
      <div className="content-stretch flex flex-col items-start pr-[112.7px] py-[4px] relative w-full">
        <Label />
        <SpanInput />
      </div>
    </div>
  );
}

function Label1() {
  return (
    <div className="h-[16px] relative shrink-0 w-[152.48px]" data-name="Label">
      <div className="-translate-y-1/2 absolute flex flex-col font-['Cera_Pro:Regular',sans-serif] justify-center leading-[0] left-[35px] not-italic text-[#303030] text-[16px] top-[8px] whitespace-nowrap">
        <p className="leading-[24px]">Only show special promotions</p>
      </div>
    </div>
  );
}

function SpanInput1() {
  return (
    <div className="absolute left-0 rounded-[5px] size-[25px] top-0" data-name="span.input">
      <div className="absolute bg-white border border-[#ccc] border-solid inset-0 rounded-[5px]" data-name="span.input paints" />
    </div>
  );
}

function DivCheckbox1() {
  return (
    <div className="relative shrink-0 w-full" data-name="div.checkbox">
      <div className="content-stretch flex flex-col items-start pr-[112.7px] py-[4px] relative w-full">
        <Label1 />
        <SpanInput1 />
      </div>
    </div>
  );
}

function Heading3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 5">
      <div className="content-stretch flex flex-col items-start pr-[154.18px] relative w-full">
        <div className="flex flex-col font-['Cera_Pro:Medium',sans-serif] justify-center leading-[0] max-h-[17.600000381469727px] max-w-[265.17999267578125px] not-italic relative shrink-0 text-[#303030] text-[16px] whitespace-nowrap">
          <p className="leading-[20px]">Min # of rooms</p>
        </div>
      </div>
    </div>
  );
}

function DropdownArrowSvg() {
  return (
    <div className="h-[7.88px] relative shrink-0 w-[13px]" data-name="dropdown-arrow.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 7.88008">
        <g clipPath="url(#clip0_1_3423)" id="dropdown-arrow.svg">
          <path d={svgPaths.p3d89dbc0} fill="var(--fill-0, #9197A1)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_3423">
            <rect fill="white" height="7.88008" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownArrowSvgFill() {
  return (
    <div className="absolute content-stretch flex flex-col h-[42px] items-start left-0 overflow-clip pb-[15.454px] pl-[235.18px] pr-[17px] pt-[18.666px] top-0 w-[265.18px]" data-name="dropdown-arrow.svg fill">
      <DropdownArrowSvg />
    </div>
  );
}

function DivH2D3331A() {
  return (
    <div className="-translate-y-1/2 absolute content-stretch flex flex-col items-start left-[17px] overflow-clip pr-[90.18px] right-[33px] top-[calc(50%+0.4px)]" data-name="div.h2d-3331a094">
      <div className="flex flex-col font-['Cera_Pro:Regular',sans-serif] justify-center leading-[0] max-h-[20.799999237060547px] max-w-[215.17999267578125px] not-italic relative shrink-0 text-[#303030] text-[16px] whitespace-nowrap">
        <p className="leading-[20.8px]">Select a quantity</p>
      </div>
    </div>
  );
}

function Options() {
  return (
    <div className="bg-white h-[42px] relative rounded-[4px] shrink-0 w-full" data-name="Options">
      <div aria-hidden="true" className="absolute border border-[#9b9b9b] border-solid inset-0 pointer-events-none rounded-[4px]" />
      <DropdownArrowSvgFill />
      <DivH2D3331A />
    </div>
  );
}

function DivMR1() {
  return (
    <div className="content-stretch flex flex-col gap-[9.99px] items-start relative shrink-0 w-full" data-name="div.m-r-1">
      <Heading3 />
      <Options />
    </div>
  );
}

function Icon1() {
  return (
    <div className="h-[16px] relative w-[13.72px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.72 16">
        <g clipPath="url(#clip0_1_3433)" id="Icon">
          <path d={svgPaths.p282e7e40} fill="var(--fill-0, #909090)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_3433">
            <rect fill="white" height="16" width="13.72" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Before1() {
  return (
    <div className="content-stretch flex items-start relative shrink-0" data-name="::before">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon1 />
        </div>
      </div>
    </div>
  );
}

function Heading4() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 5">
      <div className="content-stretch flex gap-[12.32px] items-start pr-[61.14px] relative w-full">
        <div className="flex flex-col font-['Cera_Pro:Medium',sans-serif] justify-center leading-[0] max-h-[17.600000381469727px] max-w-[265.17999267578125px] not-italic relative shrink-0 text-[#303030] text-[16px] whitespace-nowrap">
          <p className="leading-[20px]">{`Hotel to venue distance `}</p>
        </div>
        <Before1 />
      </div>
    </div>
  );
}

function MarkerPrimaryPng() {
  return (
    <div className="h-[23.68px] max-w-[35px] min-w-[18px] relative shrink-0 w-[18px]" data-name="marker-primary.png">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img alt="" className="absolute left-0 max-w-none size-full top-0" src={imgMarkerPrimaryPng} />
      </div>
    </div>
  );
}

function SpanInputGroupAddon() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start justify-center pl-[9px] pr-[8px] py-[9px] relative rounded-bl-[4px] rounded-tl-[4px] shrink-0" data-name="span.input-group-addon">
      <div aria-hidden="true" className="absolute border-[#9b9b9b] border-b border-l border-solid border-t inset-0 pointer-events-none rounded-bl-[4px] rounded-tl-[4px]" />
      <MarkerPrimaryPng />
    </div>
  );
}

function DropdownArrowSvg1() {
  return (
    <div className="h-[7.88px] relative shrink-0 w-[13px]" data-name="dropdown-arrow.svg">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 7.88008">
        <g clipPath="url(#clip0_1_3423)" id="dropdown-arrow.svg">
          <path d={svgPaths.p3d89dbc0} fill="var(--fill-0, #9197A1)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_1_3423">
            <rect fill="white" height="7.88008" width="13" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function DropdownArrowSvgFill1() {
  return (
    <div className="content-stretch flex flex-col h-[42px] items-start overflow-clip pb-[15.454px] pl-[200.18px] pr-[17px] pt-[18.666px] relative shrink-0" data-name="dropdown-arrow.svg fill">
      <DropdownArrowSvg1 />
    </div>
  );
}

function DivH2D51C1Ab6C() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-15px)] overflow-clip pr-[71.18px] top-[calc(50%+0.32px)] w-[165px]" data-name="div.h2d-51c1ab6c">
      <div className="flex flex-col font-['Cera_Pro:Regular',sans-serif] justify-center leading-[0] max-h-[20.799999237060547px] not-italic relative shrink-0 text-[#303030] text-[16px] whitespace-nowrap">
        <p className="leading-[20.8px]">Select a Venue</p>
      </div>
    </div>
  );
}

function Options1() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[8px] items-start relative rounded-br-[4px] rounded-tr-[4px] shrink-0 w-[213px]" data-name="Options">
      <div aria-hidden="true" className="absolute border border-[#9b9b9b] border-solid inset-0 pointer-events-none rounded-br-[4px] rounded-tr-[4px]" />
      <DropdownArrowSvgFill1 />
      <DivH2D51C1Ab6C />
    </div>
  );
}

function DivInputGroup() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-[248px]" data-name="div.input-group">
      <SpanInputGroupAddon />
      <Options1 />
    </div>
  );
}

function DivFormGroup2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="div.form-group">
      <DivInputGroup />
    </div>
  );
}

function DivMR2() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="div.m-r-1">
      <Heading4 />
      <DivFormGroup2 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pr-[179.18px] right-0 top-0" data-name="Heading 5">
      <div className="flex flex-col font-['Cera_Pro:Medium',sans-serif] justify-center leading-[0] max-h-[17.600000381469727px] max-w-[265.17999267578125px] not-italic relative shrink-0 text-[#303030] text-[16px] whitespace-nowrap">
        <p className="leading-[20px]">Promotions</p>
      </div>
    </div>
  );
}

function SpanRrIconBreakfastMargin() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[29.34px]" data-name="span.rr-icon-breakfast:margin">
      <div className="-translate-y-1/2 absolute flex flex-col font-['roomroster-font:font',sans-serif] justify-center leading-[0] left-0 not-italic text-[#909090] text-[21.3px] top-[10.5px] whitespace-nowrap">
        <p className="leading-[21.33px]">F</p>
      </div>
    </div>
  );
}

function SpanInput2() {
  return (
    <div className="absolute left-0 rounded-[5px] size-[25px] top-0" data-name="span.input">
      <div className="absolute bg-white border border-[#ccc] border-solid inset-0 rounded-[5px]" data-name="span.input paints" />
    </div>
  );
}

function SpanLabelText() {
  return (
    <div className="content-stretch flex items-center pl-[35px] relative shrink-0" data-name="span.label-text">
      <SpanRrIconBreakfastMargin />
      <SpanInput2 />
      <div className="flex flex-col font-['Cera_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#303030] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Free Breakfast</p>
      </div>
    </div>
  );
}

function Label2() {
  return (
    <div className="content-stretch flex items-start max-w-[168.67999267578125px] min-h-[20px] relative shrink-0" data-name="Label">
      <SpanLabelText />
    </div>
  );
}

function DivCheckboxMargin() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12.75px] pr-[8px] pt-[8px] relative shrink-0 z-[2]" data-name="div.checkbox:margin">
      <Label2 />
    </div>
  );
}

function SpanBadge() {
  return (
    <div className="bg-[#909090] content-stretch flex flex-col items-center justify-center min-w-[10px] px-[7px] py-[3px] relative rounded-[10px] shrink-0 z-[1]" data-name="span.badge">
      <div className="flex flex-col font-['Cera_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[12px]">1</p>
      </div>
    </div>
  );
}

function DivCheckboxContainer() {
  return (
    <div className="absolute content-stretch flex isolate items-center justify-between left-0 right-0 top-[27.59px]" data-name="div.checkbox-container">
      <DivCheckboxMargin />
      <SpanBadge />
    </div>
  );
}

function SpanRrIconParkingMargin() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[29.34px]" data-name="span.rr-icon-parking:margin">
      <div className="-translate-y-1/2 absolute flex flex-col font-['roomroster-font:font',sans-serif] justify-center leading-[0] left-0 not-italic text-[#909090] text-[21.3px] top-[10.5px] whitespace-nowrap">
        <p className="leading-[21.33px]">I</p>
      </div>
    </div>
  );
}

function SpanInput3() {
  return (
    <div className="absolute left-0 rounded-[5px] size-[25px] top-0" data-name="span.input">
      <div className="absolute bg-white border border-[#ccc] border-solid inset-0 rounded-[5px]" data-name="span.input paints" />
    </div>
  );
}

function SpanLabelText1() {
  return (
    <div className="content-stretch flex items-center pl-[35px] relative shrink-0" data-name="span.label-text">
      <SpanRrIconParkingMargin />
      <SpanInput3 />
      <div className="flex flex-col font-['Cera_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#303030] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Free Parking</p>
      </div>
    </div>
  );
}

function Label3() {
  return (
    <div className="content-stretch flex items-start max-w-[155.3699951171875px] min-h-[20px] relative shrink-0" data-name="Label">
      <SpanLabelText1 />
    </div>
  );
}

function DivCheckboxMargin1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12.75px] pr-[8px] pt-[8px] relative shrink-0 z-[2]" data-name="div.checkbox:margin">
      <Label3 />
    </div>
  );
}

function SpanBadge1() {
  return (
    <div className="bg-[#909090] content-stretch flex flex-col items-center justify-center min-w-[10px] px-[7px] py-[3px] relative rounded-[10px] shrink-0 z-[1]" data-name="span.badge">
      <div className="flex flex-col font-['Cera_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[12px]">1</p>
      </div>
    </div>
  );
}

function DivCheckboxContainer1() {
  return (
    <div className="absolute content-stretch flex isolate items-center justify-between left-0 right-0 top-[72.34px]" data-name="div.checkbox-container">
      <DivCheckboxMargin1 />
      <SpanBadge1 />
    </div>
  );
}

function SpanRrIconWifiMargin() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[29.34px]" data-name="span.rr-icon-wifi:margin">
      <div className="-translate-y-1/2 absolute flex flex-col font-['roomroster-font:font',sans-serif] justify-center leading-[0] left-0 not-italic text-[#909090] text-[21.3px] top-[10.5px] whitespace-nowrap">
        <p className="leading-[21.33px]">G</p>
      </div>
    </div>
  );
}

function SpanInput4() {
  return (
    <div className="absolute left-0 rounded-[5px] size-[25px] top-0" data-name="span.input">
      <div className="absolute bg-white border border-[#ccc] border-solid inset-0 rounded-[5px]" data-name="span.input paints" />
    </div>
  );
}

function SpanLabelText2() {
  return (
    <div className="content-stretch flex items-center pl-[35px] relative shrink-0" data-name="span.label-text">
      <SpanRrIconWifiMargin />
      <SpanInput4 />
      <div className="flex flex-col font-['Cera_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#303030] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Free Wifi</p>
      </div>
    </div>
  );
}

function Label4() {
  return (
    <div className="content-stretch flex items-start max-w-[130.07000732421875px] min-h-[20px] relative shrink-0" data-name="Label">
      <SpanLabelText2 />
    </div>
  );
}

function DivCheckboxMargin2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12.75px] pr-[8px] pt-[8px] relative shrink-0 z-[2]" data-name="div.checkbox:margin">
      <Label4 />
    </div>
  );
}

function SpanBadge2() {
  return (
    <div className="bg-[#909090] content-stretch flex flex-col items-center justify-center min-w-[10px] px-[7px] py-[3px] relative rounded-[10px] shrink-0 z-[1]" data-name="span.badge">
      <div className="flex flex-col font-['Cera_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[12px]">1</p>
      </div>
    </div>
  );
}

function DivCheckboxContainer2() {
  return (
    <div className="absolute content-stretch flex isolate items-center justify-between left-0 right-0 top-[117.09px]" data-name="div.checkbox-container">
      <DivCheckboxMargin2 />
      <SpanBadge2 />
    </div>
  );
}

function SpanRrIconPoolMargin() {
  return (
    <div className="h-[22.5px] relative shrink-0 w-[29.34px]" data-name="span.rr-icon-pool:margin">
      <div className="-translate-y-1/2 absolute flex flex-col font-['roomroster-font:font',sans-serif] justify-center leading-[0] left-0 not-italic text-[#909090] text-[21.3px] top-[10.5px] whitespace-nowrap">
        <p className="leading-[21.33px]">H</p>
      </div>
    </div>
  );
}

function SpanInput5() {
  return (
    <div className="absolute left-0 rounded-[5px] size-[25px] top-0" data-name="span.input">
      <div className="absolute bg-white border border-[#ccc] border-solid inset-0 rounded-[5px]" data-name="span.input paints" />
    </div>
  );
}

function SpanLabelText3() {
  return (
    <div className="content-stretch flex items-center pl-[35px] relative shrink-0" data-name="span.label-text">
      <SpanRrIconPoolMargin />
      <SpanInput5 />
      <div className="flex flex-col font-['Cera_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#303030] text-[16px] whitespace-nowrap">
        <p className="leading-[24px]">Pool</p>
      </div>
    </div>
  );
}

function Label5() {
  return (
    <div className="content-stretch flex items-start max-w-[96.7300033569336px] min-h-[20px] relative shrink-0" data-name="Label">
      <SpanLabelText3 />
    </div>
  );
}

function DivCheckboxMargin3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-[12.75px] pr-[8px] pt-[8px] relative shrink-0 z-[2]" data-name="div.checkbox:margin">
      <Label5 />
    </div>
  );
}

function SpanBadge3() {
  return (
    <div className="bg-[#909090] content-stretch flex flex-col items-center justify-center min-w-[10px] px-[7px] py-[3px] relative rounded-[10px] shrink-0 z-[1]" data-name="span.badge">
      <div className="flex flex-col font-['Cera_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[12px]">1</p>
      </div>
    </div>
  );
}

function DivCheckboxContainer3() {
  return (
    <div className="absolute content-stretch flex isolate items-center justify-between left-0 right-0 top-[161.84px]" data-name="div.checkbox-container">
      <DivCheckboxMargin3 />
      <SpanBadge3 />
    </div>
  );
}

function DivMR3() {
  return (
    <div className="h-[206.59px] relative shrink-0 w-full" data-name="div.m-r-1">
      <Heading5 />
      <DivCheckboxContainer />
      <DivCheckboxContainer1 />
      <DivCheckboxContainer2 />
      <DivCheckboxContainer3 />
    </div>
  );
}

function DivHotelFilterOptions() {
  return (
    <div className="flex-[1_0_0] min-h-px min-w-px relative w-full" data-name="div.hotel-filter-options">
      <div className="content-stretch flex flex-col gap-[16px] items-start px-[16px] relative size-full">
        <DivMR />
        <DivCheckbox />
        <DivCheckbox1 />
        <DivMR1 />
        <DivMR2 />
        <DivMR3 />
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative rounded-[16px] self-stretch shrink-0" data-name="Button">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col h-full items-center justify-center pb-[5.2px] pl-[0.745px] pr-[0.435px] pt-[6px] relative">
          <div className="flex flex-col font-['Cera_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#303030] text-[14px] text-center whitespace-nowrap">
            <p className="leading-[18.2px]">Reset</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SpanBadge4() {
  return (
    <div className="bg-[#0731fa] content-stretch flex flex-col items-center justify-center min-w-[10px] px-[7px] py-[3px] relative rounded-[10px] shrink-0" data-name="span.badge">
      <div className="flex flex-col font-['Cera_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
        <p className="leading-[12px]">0</p>
      </div>
    </div>
  );
}

function SpanBadgeMargin() {
  return (
    <div className="content-stretch flex flex-col items-start min-w-[18px] mr-[-0.37px] pr-[8px] relative shrink-0" data-name="span.badge:margin">
      <SpanBadge4 />
    </div>
  );
}

function AutoLayoutButton1() {
  return (
    <div className="bg-[#0731fa] content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Auto layout button">
      <p className="font-['Cera_Pro:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Apply Filters</p>
    </div>
  );
}

function DivApplyFilters() {
  return (
    <div className="content-stretch flex items-center pr-[0.37px] relative self-stretch shrink-0" data-name="div#apply-filters">
      <SpanBadgeMargin />
      <div className="content-stretch flex h-full items-start mr-[-0.37px] relative shrink-0" data-name="Primary button">
        <AutoLayoutButton1 />
      </div>
    </div>
  );
}

function DivStickyApply() {
  return (
    <div className="bg-white h-[62.2px] relative shrink-0 w-full" data-name="div#sticky-apply">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-solid border-t inset-0 pointer-events-none" />
      <div className="content-stretch flex items-start justify-between pl-[16px] pr-[15.72px] py-[16px] relative size-full">
        <Button1 />
        <DivApplyFilters />
      </div>
    </div>
  );
}

function Frame36() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-start min-h-px min-w-px relative w-[280.18px]">
      <DivBgGrey />
      <DivHotelFilterOptions />
      <DivStickyApply />
    </div>
  );
}

function Container() {
  return (
    <div className="bg-white h-full relative shrink-0 w-[280px]" data-name="Container">
      <div className="overflow-auto size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start pt-[16px] relative size-full">
          <Frame34 />
          <Frame36 />
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="relative shrink-0 w-full" data-name="Heading 5">
      <div className="content-stretch flex flex-col items-start pr-[177.61px] relative w-full">
        <div className="flex flex-col font-['Cera_Pro:Bold',sans-serif] justify-center leading-[0] max-h-[17.600000381469727px] max-w-[288.6099853515625px] not-italic relative shrink-0 text-[#0d0d0d] text-[14px] whitespace-nowrap">
          <p className="leading-[20px]">8 Hotels Found</p>
        </div>
      </div>
    </div>
  );
}

function Frame45() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[#0d0d0d] w-full">
      <div className="flex flex-col font-['Cera_Pro:Medium',sans-serif] justify-center leading-[0] min-w-full relative shrink-0 text-[20px] w-[min-content]">
        <p className="leading-[24px] whitespace-pre-wrap">{`Holiday Inn Express Hotel `}</p>
      </div>
      <p className="font-['Cera_Pro:Regular',sans-serif] leading-[16px] relative shrink-0 text-[12px]">Branson, MO</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['roomroster-font:font',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] whitespace-nowrap">
        <p className="leading-[12px]">F</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[4px] relative shrink-0" data-name="Container">
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['roomroster-font:font',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] whitespace-nowrap">
        <p className="leading-[12px]">I</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[4px] relative shrink-0" data-name="Container">
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['roomroster-font:font',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] whitespace-nowrap">
        <p className="leading-[12px]">G</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[4px] relative shrink-0" data-name="Container">
      <Container7 />
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['roomroster-font:font',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] whitespace-nowrap">
        <p className="leading-[12px]">H</p>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[4px] relative shrink-0" data-name="Container">
      <Container9 />
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container4 />
      <Container6 />
      <Container8 />
    </div>
  );
}

function Background() {
  return (
    <div className="bg-[#156a3a] content-stretch flex items-center min-w-[10px] px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Cera_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">
        <p className="leading-[14px]">9.2</p>
      </div>
    </div>
  );
}

function Frame53() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Cera_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] w-[71.86px]">
        <p className="leading-[16px] whitespace-pre-wrap">Guest Rating</p>
      </div>
      <Background />
    </div>
  );
}

function Icon2() {
  return (
    <div className="h-[14px] relative w-[13px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
        <g id="Icon">
          <path d={svgPaths.p3bf9d080} fill="var(--fill-0, #FFA200)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon3() {
  return (
    <div className="h-[14px] relative w-[13px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
        <g id="Icon">
          <path d={svgPaths.p3bf9d080} fill="var(--fill-0, #FFA200)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[14px] relative w-[13px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
        <g id="Icon">
          <path d={svgPaths.pb65ed00} fill="var(--fill-0, #FFA200)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon2 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon3 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon4 />
        </div>
      </div>
    </div>
  );
}

function Stars() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Stars">
      <Container10 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Cera_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] w-[71.86px]">
        <p className="leading-[16px] whitespace-pre-wrap">Hotel Rating</p>
      </div>
      <Stars />
    </div>
  );
}

function Ratings() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Ratings">
      <Frame53 />
      <Frame54 />
    </div>
  );
}

function Frame43() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-white overflow-clip relative shrink-0 size-[16px]" data-name="Unicons/exclamation-circle">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path d={svgPaths.p17117e00} fill="var(--fill-0, #0D0D0D)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Cera_Pro:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[0px] w-[105.683px]">
        <p className="text-[12px] whitespace-pre-wrap">
          <span className="leading-[16px]">{`Only `}</span>
          <span className="font-['Cera_Pro:Bold',sans-serif] leading-[16px] not-italic">25</span>
          <span className="leading-[16px]">{` rooms left `}</span>
        </p>
      </div>
    </div>
  );
}

function Pin12() {
  return (
    <div className="col-1 h-[17.242px] ml-0 mt-0 relative row-1 w-[14px]" data-name="Pin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17.242">
        <g id="Pin">
          <path d={svgPaths.p3f532f00} fill="var(--fill-0, #FF5900)" id="Rectangle 83" />
          <path d={svgPaths.p1a9abb00} fill="var(--fill-0, #FF5900)" id="Rectangle 84" />
        </g>
      </svg>
    </div>
  );
}

function Location5() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Location">
      <Pin12 />
      <div className="col-1 ml-[3px] mt-[3.62px] overflow-clip relative row-1 size-[8px]" data-name="Bootstrap Icons/Star fill">
        <div className="absolute inset-[3.12%_-0.01%_3.12%_0.01%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00015 7.50025">
            <path d={svgPaths.p1d29ec80} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame44() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-white overflow-clip relative shrink-0 size-[16px]" data-name="Unicons/car-sideview">
        <div className="absolute inset-[18.75%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10">
            <path d={svgPaths.p12061680} fill="var(--fill-0, #0D0D0D)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Cera_Pro:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] w-[53.814px]">
        <p className="leading-[16px] whitespace-pre-wrap">23 mins</p>
      </div>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <p className="font-['Cera_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0d0d0d] text-[12px]">0.9 mi</p>
      <div className="flex flex-col font-['Cera_Pro:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[16px] w-[6px]">
        <p className="leading-[20px] whitespace-pre-wrap">•</p>
      </div>
      <Frame44 />
    </div>
  );
}

function Container12() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center pl-px relative w-full">
          <Location5 />
          <Frame12 />
        </div>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Frame43 />
      <Container12 />
    </div>
  );
}

function Frame37() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Container1 />
      <Ratings />
      <Container11 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <Frame45 />
      <Frame37 />
    </div>
  );
}

function Divider() {
  return <div className="bg-[#e5e5e5] h-full shrink-0 w-px" data-name="Divider" />;
}

function Frame26() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-end min-h-px min-w-px relative w-full">
      <div className="bg-[#9ce5e3] content-stretch flex gap-[8px] items-center justify-center px-[8px] py-[4px] relative rounded-[4px] shrink-0" data-name="Info Badge">
        <p className="font-['Cera_Pro:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] text-center">2 night minimum</p>
      </div>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Cera_Pro:Bold',sans-serif] h-[24px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#0d0d0d] text-[24px] text-right">
        <p className="leading-[28px] whitespace-pre-wrap">$235</p>
      </div>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-end min-h-px min-w-px relative w-full">
      <Frame26 />
      <Frame22 />
      <p className="font-['Cera_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] text-right w-full whitespace-pre-wrap">Average rate</p>
    </div>
  );
}

function AutoLayoutButton2() {
  return (
    <div className="bg-[#0731fa] content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Auto layout button">
      <p className="font-['Cera_Pro:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Hold group rooms</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-end min-h-px min-w-px relative w-full">
      <Frame25 />
      <AutoLayoutButton2 />
    </div>
  );
}

function Heading7() {
  return (
    <div className="content-stretch flex flex-col h-full items-end relative shrink-0 w-[160px]" data-name="Heading 9">
      <Frame15 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative self-stretch">
      <Frame11 />
      <Divider />
      <Heading7 />
    </div>
  );
}

function Hotel() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Hotel">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex gap-[12px] items-start p-[16px] relative w-full">
        <div className="relative rounded-[8px] shrink-0 size-[72px]" data-name="image 8">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
            <img alt="" className="absolute h-[100.02%] left-0 max-w-none top-[-0.01%] w-[159.5%]" src={imgImage8} />
          </div>
        </div>
        <Frame7 />
      </div>
    </div>
  );
}

function Frame46() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[#0d0d0d] w-full">
      <div className="flex flex-col font-['Cera_Pro:Medium',sans-serif] justify-center leading-[0] min-w-full relative shrink-0 text-[20px] w-[min-content]">
        <p className="leading-[24px] whitespace-pre-wrap">{`Holiday Inn Express Hotel `}</p>
      </div>
      <p className="font-['Cera_Pro:Regular',sans-serif] leading-[16px] relative shrink-0 text-[12px]">Branson, MO</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['roomroster-font:font',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] whitespace-nowrap">
        <p className="leading-[12px]">F</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[4px] relative shrink-0" data-name="Container">
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['roomroster-font:font',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] whitespace-nowrap">
        <p className="leading-[12px]">I</p>
      </div>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[4px] relative shrink-0" data-name="Container">
      <Container17 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['roomroster-font:font',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] whitespace-nowrap">
        <p className="leading-[12px]">G</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[4px] relative shrink-0" data-name="Container">
      <Container19 />
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['roomroster-font:font',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] whitespace-nowrap">
        <p className="leading-[12px]">H</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[4px] relative shrink-0" data-name="Container">
      <Container21 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container14 />
      <Container16 />
      <Container18 />
      <Container20 />
    </div>
  );
}

function Background1() {
  return (
    <div className="bg-[#156a3a] content-stretch flex items-center min-w-[10px] px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Cera_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">
        <p className="leading-[14px]">9.2</p>
      </div>
    </div>
  );
}

function Frame55() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Cera_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] w-[71.86px]">
        <p className="leading-[16px] whitespace-pre-wrap">Guest Rating</p>
      </div>
      <Background1 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="h-[14px] relative w-[13px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
        <g id="Icon">
          <path d={svgPaths.p3bf9d080} fill="var(--fill-0, #FFA200)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon6() {
  return (
    <div className="h-[14px] relative w-[13px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
        <g id="Icon">
          <path d={svgPaths.p3bf9d080} fill="var(--fill-0, #FFA200)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[14px] relative w-[13px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
        <g id="Icon">
          <path d={svgPaths.pb65ed00} fill="var(--fill-0, #FFA200)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon5 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon6 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon7 />
        </div>
      </div>
    </div>
  );
}

function Stars1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Stars">
      <Container22 />
    </div>
  );
}

function Frame57() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Cera_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] w-[71.86px]">
        <p className="leading-[16px] whitespace-pre-wrap">Hotel Rating</p>
      </div>
      <Stars1 />
    </div>
  );
}

function Ratings1() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Ratings">
      <Frame55 />
      <Frame57 />
    </div>
  );
}

function Frame47() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="bg-white overflow-clip relative shrink-0 size-[16px]" data-name="Unicons/bed">
        <div className="absolute inset-[18.75%_4.17%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14.6667 10">
            <path d={svgPaths.p1173ba80} fill="var(--fill-0, #0D0D0D)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Cera_Pro:Regular',sans-serif] h-[18px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#0d0d0d] text-[0px]">
        <p className="text-[12px] whitespace-pre-wrap">
          <span className="font-['Cera_Pro:Bold',sans-serif] leading-[16px] not-italic">Staff Only</span>
          <span className="leading-[16px]">{` Room Type`}</span>
        </p>
      </div>
    </div>
  );
}

function Frame48() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="bg-white overflow-clip relative shrink-0 size-[16px]" data-name="Unicons/exclamation-circle">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path d={svgPaths.p17117e00} fill="var(--fill-0, #0D0D0D)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Cera_Pro:Regular',sans-serif] h-[18px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#0d0d0d] text-[12px]">
        <p className="leading-[16px] whitespace-pre-wrap">Availability Upon Request</p>
      </div>
    </div>
  );
}

function Pin13() {
  return (
    <div className="col-1 h-[17.242px] ml-0 mt-0 relative row-1 w-[14px]" data-name="Pin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17.242">
        <g id="Pin">
          <path d={svgPaths.p3f532f00} fill="var(--fill-0, #FF5900)" id="Rectangle 83" />
          <path d={svgPaths.p1a9abb00} fill="var(--fill-0, #FF5900)" id="Rectangle 84" />
        </g>
      </svg>
    </div>
  );
}

function Location6() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Location">
      <Pin13 />
      <div className="col-1 ml-[3px] mt-[3.62px] overflow-clip relative row-1 size-[8px]" data-name="Bootstrap Icons/Star fill">
        <div className="absolute inset-[3.12%_-0.01%_3.12%_0.01%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00015 7.50025">
            <path d={svgPaths.p1d29ec80} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame49() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-white overflow-clip relative shrink-0 size-[16px]" data-name="Unicons/car-sideview">
        <div className="absolute inset-[18.75%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10">
            <path d={svgPaths.p12061680} fill="var(--fill-0, #0D0D0D)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Cera_Pro:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] w-[53.814px]">
        <p className="leading-[16px] whitespace-pre-wrap">23 mins</p>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <p className="font-['Cera_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0d0d0d] text-[12px]">0.9 mi</p>
      <div className="flex flex-col font-['Cera_Pro:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[16px] w-[6px]">
        <p className="leading-[20px] whitespace-pre-wrap">•</p>
      </div>
      <Frame49 />
    </div>
  );
}

function Container24() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center pl-px relative w-full">
          <Location6 />
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Frame47 />
      <Frame48 />
      <Container24 />
    </div>
  );
}

function Frame38() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Container13 />
      <Ratings1 />
      <Container23 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <Frame46 />
      <Frame38 />
    </div>
  );
}

function Divider1() {
  return <div className="bg-[#e5e5e5] h-full shrink-0 w-px" data-name="Divider" />;
}

function Frame24() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full">
      <div className="flex flex-col font-['Cera_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[24px] text-right whitespace-nowrap">
        <p className="leading-[28px]">$200</p>
      </div>
    </div>
  );
}

function Frame50() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-end relative shrink-0 w-full">
      <p className="font-['Cera_Pro:Medium',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#d55792] text-[12px] text-right">Staff Only Room Type</p>
      <Frame24 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-end min-h-px min-w-px relative w-full">
      <Frame50 />
      <p className="font-['Cera_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] text-right w-full whitespace-pre-wrap">Average rate</p>
    </div>
  );
}

function AutoLayoutButton3() {
  return (
    <div className="bg-[#0731fa] content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Auto layout button">
      <p className="font-['Cera_Pro:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Select room</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-end min-h-px min-w-px relative w-full">
      <Frame27 />
      <AutoLayoutButton3 />
    </div>
  );
}

function Heading8() {
  return (
    <div className="content-stretch flex flex-col h-full items-end relative shrink-0 w-[160px]" data-name="Heading 9">
      <Frame16 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative self-stretch">
      <Frame13 />
      <Divider1 />
      <Heading8 />
    </div>
  );
}

function Hotel1() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Hotel">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex gap-[12px] items-start p-[16px] relative w-full">
        <div className="relative rounded-[8px] shrink-0 size-[72px]" data-name="image 8">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
            <img alt="" className="absolute h-[100.02%] left-0 max-w-none top-[-0.01%] w-[159.5%]" src={imgImage8} />
          </div>
        </div>
        <Frame8 />
      </div>
    </div>
  );
}

function DivLabel() {
  return (
    <div className="bg-[#8848ff] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full" data-name="div.label">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative w-full">
          <div className="overflow-clip relative shrink-0 size-[12px]" data-name="FA4.7 / User Interface / trophy">
            <div className="absolute inset-[0_0.31%]" data-name="Vector">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11.9266 12">
                <path d={svgPaths.p2caca600} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col font-['Cera_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[12px] text-center text-white whitespace-nowrap">
            <p className="leading-[16px]">Host Hotel</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame51() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[#0d0d0d] w-full">
      <div className="flex flex-col font-['Cera_Pro:Medium',sans-serif] justify-center leading-[0] min-w-full relative shrink-0 text-[20px] w-[min-content]">
        <p className="leading-[24px] whitespace-pre-wrap">{`Holiday Inn Express Hotel `}</p>
      </div>
      <p className="font-['Cera_Pro:Regular',sans-serif] leading-[16px] relative shrink-0 text-[12px]">Branson, MO</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['roomroster-font:font',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] whitespace-nowrap">
        <p className="leading-[12px]">F</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[4px] relative shrink-0" data-name="Container">
      <Container27 />
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['roomroster-font:font',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] whitespace-nowrap">
        <p className="leading-[12px]">I</p>
      </div>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[4px] relative shrink-0" data-name="Container">
      <Container29 />
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['roomroster-font:font',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] whitespace-nowrap">
        <p className="leading-[12px]">G</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[4px] relative shrink-0" data-name="Container">
      <Container31 />
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['roomroster-font:font',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] whitespace-nowrap">
        <p className="leading-[12px]">H</p>
      </div>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[4px] relative shrink-0" data-name="Container">
      <Container33 />
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container26 />
      <Container28 />
      <Container30 />
      <Container32 />
    </div>
  );
}

function Background2() {
  return (
    <div className="bg-[#156a3a] content-stretch flex items-center min-w-[10px] px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Cera_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">
        <p className="leading-[14px]">9.2</p>
      </div>
    </div>
  );
}

function Frame58() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Cera_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] w-[71.86px]">
        <p className="leading-[16px] whitespace-pre-wrap">Guest Rating</p>
      </div>
      <Background2 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[14px] relative w-[13px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
        <g id="Icon">
          <path d={svgPaths.p3bf9d080} fill="var(--fill-0, #FFA200)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[14px] relative w-[13px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
        <g id="Icon">
          <path d={svgPaths.p3bf9d080} fill="var(--fill-0, #FFA200)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[14px] relative w-[13px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
        <g id="Icon">
          <path d={svgPaths.pb65ed00} fill="var(--fill-0, #FFA200)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon8 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon9 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon10 />
        </div>
      </div>
    </div>
  );
}

function Stars2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Stars">
      <Container34 />
    </div>
  );
}

function Frame59() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Cera_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] w-[71.86px]">
        <p className="leading-[16px] whitespace-pre-wrap">Hotel Rating</p>
      </div>
      <Stars2 />
    </div>
  );
}

function Ratings2() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Ratings">
      <Frame58 />
      <Frame59 />
    </div>
  );
}

function Frame42() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-white overflow-clip relative shrink-0 size-[16px]" data-name="Unicons/exclamation-circle">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path d={svgPaths.p17117e00} fill="var(--fill-0, #0D0D0D)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Cera_Pro:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[0px] w-[105.683px]">
        <p className="text-[12px] whitespace-pre-wrap">
          <span className="leading-[16px]">{`Only `}</span>
          <span className="font-['Cera_Pro:Bold',sans-serif] leading-[16px] not-italic">25</span>
          <span className="leading-[16px]">{` rooms left `}</span>
        </p>
      </div>
    </div>
  );
}

function Pin14() {
  return (
    <div className="col-1 h-[17.242px] ml-0 mt-0 relative row-1 w-[14px]" data-name="Pin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17.242">
        <g id="Pin">
          <path d={svgPaths.p3f532f00} fill="var(--fill-0, #FF5900)" id="Rectangle 83" />
          <path d={svgPaths.p1a9abb00} fill="var(--fill-0, #FF5900)" id="Rectangle 84" />
        </g>
      </svg>
    </div>
  );
}

function Location7() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Location">
      <Pin14 />
      <div className="col-1 ml-[3px] mt-[3.62px] overflow-clip relative row-1 size-[8px]" data-name="Bootstrap Icons/Star fill">
        <div className="absolute inset-[3.12%_-0.01%_3.12%_0.01%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00015 7.50025">
            <path d={svgPaths.p1d29ec80} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-white overflow-clip relative shrink-0 size-[16px]" data-name="Unicons/car-sideview">
        <div className="absolute inset-[18.75%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10">
            <path d={svgPaths.p12061680} fill="var(--fill-0, #0D0D0D)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Cera_Pro:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] w-[53.814px]">
        <p className="leading-[16px] whitespace-pre-wrap">23 mins</p>
      </div>
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <p className="font-['Cera_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0d0d0d] text-[12px]">0.9 mi</p>
      <div className="flex flex-col font-['Cera_Pro:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[16px] w-[6px]">
        <p className="leading-[20px] whitespace-pre-wrap">•</p>
      </div>
      <Frame52 />
    </div>
  );
}

function Container36() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center pl-px relative w-full">
          <Location7 />
          <Frame18 />
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Frame42 />
      <Container36 />
    </div>
  );
}

function Frame39() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Container25 />
      <Ratings2 />
      <Container35 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <Frame51 />
      <Frame39 />
    </div>
  );
}

function Divider2() {
  return <div className="bg-[#e5e5e5] h-full shrink-0 w-px" data-name="Divider" />;
}

function Frame29() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full">
      <div className="flex flex-[1_0_0] flex-col font-['Cera_Pro:Bold',sans-serif] h-[24px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#0d0d0d] text-[24px] text-right">
        <p className="leading-[28px] whitespace-pre-wrap">$235</p>
      </div>
    </div>
  );
}

function Frame28() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col items-end justify-end min-h-px min-w-px relative w-full">
      <Frame29 />
      <p className="font-['Cera_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] text-right w-full whitespace-pre-wrap">Average rate</p>
    </div>
  );
}

function AutoLayoutButton4() {
  return (
    <div className="bg-[#0731fa] content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Auto layout button">
      <p className="font-['Cera_Pro:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Select room</p>
    </div>
  );
}

function Frame20() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-end min-h-px min-w-px relative w-full">
      <Frame28 />
      <AutoLayoutButton4 />
    </div>
  );
}

function Heading9() {
  return (
    <div className="content-stretch flex flex-col h-full items-end relative shrink-0 w-[160px]" data-name="Heading 9">
      <Frame20 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative self-stretch">
      <Frame17 />
      <Divider2 />
      <Heading9 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex gap-[16px] items-start p-[16px] relative w-full">
        <div className="relative rounded-[8px] shrink-0 size-[72px]" data-name="image 9">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
            <img alt="" className="absolute h-[100.02%] left-0 max-w-none top-[-0.01%] w-[159.5%]" src={imgImage8} />
          </div>
        </div>
        <Frame9 />
      </div>
    </div>
  );
}

function Hotel2() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative rounded-[8px] shrink-0 w-full" data-name="Hotel">
      <div aria-hidden="true" className="absolute border border-[#8848ff] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <DivLabel />
      <Frame5 />
    </div>
  );
}

function Frame32() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full">
      <Hotel />
      <Hotel1 />
      <Hotel2 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="relative shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start p-[16px] relative w-full">
        <Heading6 />
        <Frame32 />
      </div>
    </div>
  );
}

function Frame35() {
  return (
    <div className="absolute bg-white h-[64px] left-[520px] overflow-clip rounded-br-[4px] rounded-tr-[4px] top-[18px] w-[20px]">
      <div className="absolute flex items-center justify-center left-[-2px] size-[24px] top-[20px]">
        <div className="flex-none rotate-180">
          <div className="relative size-[24px]" data-name="EC / Arrows / Arrow 2, right">
            <div className="absolute bottom-1/4 flex items-center justify-center left-[37.5%] right-[37.5%] top-1/4">
              <div className="-rotate-90 -scale-y-100 flex-none h-[6px] w-[12px]">
                <div className="relative size-full">
                  <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 6">
                    <path d={svgPaths.p137ee380} fill="var(--fill-0, black)" id="Polygon 1" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Frame60() {
  return (
    <div className="content-stretch flex flex-col items-start not-italic relative shrink-0 text-[#0d0d0d] w-full">
      <div className="flex flex-col font-['Cera_Pro:Medium',sans-serif] justify-center leading-[0] min-w-full relative shrink-0 text-[20px] w-[min-content]">
        <p className="leading-[24px] whitespace-pre-wrap">{`Holiday Inn Express Hotel `}</p>
      </div>
      <p className="font-['Cera_Pro:Regular',sans-serif] leading-[16px] relative shrink-0 text-[12px]">Branson, MO</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['roomroster-font:font',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] whitespace-nowrap">
        <p className="leading-[12px]">F</p>
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[4px] relative shrink-0" data-name="Container">
      <Container39 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['roomroster-font:font',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] whitespace-nowrap">
        <p className="leading-[12px]">I</p>
      </div>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[4px] relative shrink-0" data-name="Container">
      <Container41 />
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['roomroster-font:font',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] whitespace-nowrap">
        <p className="leading-[12px]">G</p>
      </div>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[4px] relative shrink-0" data-name="Container">
      <Container43 />
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex flex-col items-start pb-px relative shrink-0" data-name="Container">
      <div className="flex flex-col font-['roomroster-font:font',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] whitespace-nowrap">
        <p className="leading-[12px]">H</p>
      </div>
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex items-start justify-center pr-[4px] relative shrink-0" data-name="Container">
      <Container45 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <Container38 />
      <Container40 />
      <Container42 />
      <Container44 />
    </div>
  );
}

function Background3() {
  return (
    <div className="bg-[#156a3a] content-stretch flex items-center min-w-[10px] px-[6px] py-[2px] relative rounded-[4px] shrink-0" data-name="Background">
      <div className="flex flex-col font-['Cera_Pro:Bold',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[10px] text-center text-white whitespace-nowrap">
        <p className="leading-[14px]">9.2</p>
      </div>
    </div>
  );
}

function Frame61() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Cera_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] w-[71.86px]">
        <p className="leading-[16px] whitespace-pre-wrap">Guest Rating</p>
      </div>
      <Background3 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[14px] relative w-[13px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
        <g id="Icon">
          <path d={svgPaths.p3bf9d080} fill="var(--fill-0, #FFA200)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[14px] relative w-[13px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
        <g id="Icon">
          <path d={svgPaths.p3bf9d080} fill="var(--fill-0, #FFA200)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[14px] relative w-[13px]" data-name="Icon">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 14">
        <g id="Icon">
          <path d={svgPaths.pb65ed00} fill="var(--fill-0, #FFA200)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex gap-[2px] items-start relative shrink-0" data-name="Container">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon11 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon12 />
        </div>
      </div>
      <div className="flex items-center justify-center relative shrink-0">
        <div className="-scale-y-100 flex-none">
          <Icon13 />
        </div>
      </div>
    </div>
  );
}

function Stars3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="Stars">
      <Container46 />
    </div>
  );
}

function Frame62() {
  return (
    <div className="content-stretch flex gap-[8px] items-center relative shrink-0">
      <div className="flex flex-col font-['Cera_Pro:Regular',sans-serif] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] w-[71.86px]">
        <p className="leading-[16px] whitespace-pre-wrap">Hotel Rating</p>
      </div>
      <Stars3 />
    </div>
  );
}

function Ratings3() {
  return (
    <div className="content-stretch flex flex-col gap-[4px] items-start justify-center relative shrink-0" data-name="Ratings">
      <Frame61 />
      <Frame62 />
    </div>
  );
}

function Frame63() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0 w-full">
      <div className="bg-white overflow-clip relative shrink-0 size-[16px]" data-name="Unicons/exclamation-circle">
        <div className="absolute inset-[8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 13.3333">
            <path d={svgPaths.p17117e00} fill="var(--fill-0, #EC2A35)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-[1_0_0] flex-col font-['Cera_Pro:Regular',sans-serif] h-[18px] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#ec2a35] text-[12px]">
        <p className="leading-[16px] whitespace-pre-wrap">No group rooms available</p>
      </div>
    </div>
  );
}

function Pin15() {
  return (
    <div className="col-1 h-[17.242px] ml-0 mt-0 relative row-1 w-[14px]" data-name="Pin">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17.2419">
        <g id="Pin">
          <path d={svgPaths.p3f532f00} fill="var(--fill-0, #FF5900)" id="Rectangle 83" />
          <path d={svgPaths.p1a9abb00} fill="var(--fill-0, #FF5900)" id="Rectangle 84" />
        </g>
      </svg>
    </div>
  );
}

function Location8() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-name="Location">
      <Pin15 />
      <div className="col-1 ml-[3px] mt-[3.62px] overflow-clip relative row-1 size-[8px]" data-name="Bootstrap Icons/Star fill">
        <div className="absolute inset-[3.12%_-0.01%_3.12%_0.01%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8.00015 7.50025">
            <path d={svgPaths.p1d29ec80} fill="var(--fill-0, white)" id="Vector" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Frame64() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative shrink-0">
      <div className="bg-white overflow-clip relative shrink-0 size-[16px]" data-name="Unicons/car-sideview">
        <div className="absolute inset-[18.75%_8.33%]" data-name="Vector">
          <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13.3333 10">
            <path d={svgPaths.p12061680} fill="var(--fill-0, #0D0D0D)" id="Vector" />
          </svg>
        </div>
      </div>
      <div className="flex flex-col font-['Cera_Pro:Regular',sans-serif] h-[18px] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[12px] w-[53.814px]">
        <p className="leading-[16px] whitespace-pre-wrap">23 mins</p>
      </div>
    </div>
  );
}

function Frame30() {
  return (
    <div className="content-stretch flex gap-[6px] items-start relative shrink-0">
      <p className="font-['Cera_Pro:Regular',sans-serif] leading-[16px] not-italic relative shrink-0 text-[#0d0d0d] text-[12px]">0.9 mi</p>
      <div className="flex flex-col font-['Cera_Pro:Regular',sans-serif] h-[16px] justify-center leading-[0] not-italic relative shrink-0 text-[#0d0d0d] text-[16px] w-[6px]">
        <p className="leading-[20px] whitespace-pre-wrap">•</p>
      </div>
      <Frame64 />
    </div>
  );
}

function Container48() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[6px] items-center pl-px relative w-full">
          <Location8 />
          <Frame30 />
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col gap-[6px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Frame63 />
      <Container48 />
    </div>
  );
}

function Frame40() {
  return (
    <div className="content-stretch flex flex-col gap-[16px] items-start relative shrink-0 w-full">
      <Container37 />
      <Ratings3 />
      <Container47 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-start min-h-px min-w-px relative">
      <Frame60 />
      <Frame40 />
    </div>
  );
}

function Divider3() {
  return <div className="bg-[#e5e5e5] h-full shrink-0 w-px" data-name="Divider" />;
}

function Frame33() {
  return (
    <div className="content-stretch flex gap-[8px] items-center justify-end relative shrink-0 w-full">
      <div className="bg-white overflow-clip shrink-0 size-[16px]" data-name="Unicons/exclamation-circle" />
      <div className="flex flex-[1_0_0] flex-col font-['Cera_Pro:Bold',sans-serif] justify-center leading-[0] min-h-px min-w-px not-italic relative text-[#0d0d0d] text-[16px] text-right">
        <p className="leading-[20px] whitespace-pre-wrap">No group rooms available</p>
      </div>
    </div>
  );
}

function AutoLayoutButton5() {
  return (
    <div className="bg-[#ccc] content-stretch flex items-center justify-center overflow-clip px-[16px] py-[8px] relative rounded-[4px] shrink-0" data-name="Auto layout button">
      <p className="font-['Cera_Pro:Medium',sans-serif] leading-[20px] not-italic relative shrink-0 text-[14px] text-center text-white">Hold group rooms</p>
    </div>
  );
}

function Frame31() {
  return (
    <div className="content-stretch flex flex-[1_0_0] flex-col gap-[12px] items-end justify-end min-h-px min-w-px relative w-full">
      <Frame33 />
      <AutoLayoutButton5 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="content-stretch flex flex-col h-full items-end relative shrink-0 w-[160px]" data-name="Heading 9">
      <Frame31 />
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-[1_0_0] gap-[12px] items-center min-h-px min-w-px relative self-stretch">
      <Frame21 />
      <Divider3 />
      <Heading10 />
    </div>
  );
}

function Hotel3() {
  return (
    <div className="bg-white relative rounded-[8px] shrink-0 w-full" data-name="Hotel">
      <div aria-hidden="true" className="absolute border border-[#e5e5e5] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="content-stretch flex gap-[12px] items-start p-[16px] relative w-full">
        <div className="relative rounded-[8px] shrink-0 size-[72px]" data-name="image 8">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[8px]">
            <img alt="" className="absolute h-[100.02%] left-0 max-w-none top-[-0.01%] w-[159.5%]" src={imgImage8} />
          </div>
        </div>
        <Frame10 />
      </div>
    </div>
  );
}

function Filters() {
  return (
    <div className="bg-white content-stretch flex flex-col h-full items-start relative shrink-0 w-[520px]" data-name="Filters">
      <div aria-hidden="true" className="absolute border-[#e5e5e5] border-l border-solid inset-0 pointer-events-none" />
      <Frame6 />
      <Frame35 />
      <Hotel3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex h-[942px] items-start relative shadow-[0px_4px_12px_0px_rgba(0,0,0,0.08)] shrink-0 w-[578px]">
      <Container />
      <Filters />
    </div>
  );
}

function Body() {
  return (
    <div className="col-1 content-stretch flex h-[940px] items-start ml-0 mt-0 relative row-1 w-[0.004px]" data-name="Body">
      <Frame4 />
    </div>
  );
}

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <div className="col-1 h-[941px] ml-0 mt-[0.53px] relative row-1 w-[1792px]" data-name="image 10">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImage10} />
      </div>
      <Pins />
      <Filter />
      <Body />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="Frame">
      <Group />
    </div>
  );
}

function DialogueNew() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="DialogueNew">
      <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="DialogueNew">
          <path d={svgPaths.p23711d00} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ButtonChatWithBot() {
  return (
    <div className="-translate-x-1/2 -translate-y-1/2 absolute bg-[#0731fa] left-[calc(50%+6px)] rounded-[30px] size-[56px] top-[calc(50%+6px)]" data-name="Button - Chat with bot">
      <div className="content-stretch flex items-center justify-center overflow-clip p-px relative rounded-[inherit] size-full">
        <DialogueNew />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.05)] border-solid inset-0 pointer-events-none rounded-[30px] shadow-[0px_4px_20px_4px_rgba(0,0,0,0.12)]" />
    </div>
  );
}

function Application() {
  return (
    <div className="absolute left-[1692px] overflow-clip size-[92px] top-[984px]" data-name="Application">
      <ButtonChatWithBot />
    </div>
  );
}

export default function HotelFeedDefault() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Hotel Feed-Default">
      <Frame56 />
      <Frame />
      <Application />
    </div>
  );
}