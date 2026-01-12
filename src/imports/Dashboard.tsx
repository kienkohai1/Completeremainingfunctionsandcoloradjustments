import imgImage1 from "figma:asset/bddc0bf93d570d4a40eda0e7cccb0f35d375c456.png";

function Group() {
  return (
    <div className="absolute contents left-0 top-0">
      <div className="absolute bg-white border border-[rgba(0,0,0,0.36)] border-solid h-[332px] left-0 top-0 w-[454px]" />
      <div className="absolute h-[110px] left-[26px] top-[17px] w-[173px]" data-name="image 1">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[120%] left-[-3.03%] max-w-none top-[-6.36%] w-[106.06%]" src={imgImage1} />
        </div>
      </div>
      <div className="absolute flex flex-col font-['Inter:Medium',sans-serif] font-medium justify-center leading-[0] left-[26px] not-italic text-[32px] text-black top-[197px] translate-y-[-50%] w-[247px]">
        <p className="leading-none">Quản lý Sân Tập</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[26px] not-italic text-[#2962ff] text-[32px] top-[252px] translate-y-[-50%] w-[171px]">
        <p className="leading-none">The Hunter</p>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal gap-[32px] items-start leading-[0] left-[50px] not-italic text-[32px] text-black top-[506px] w-[244px]">
      <div className="flex flex-col h-[32px] justify-center relative shrink-0 w-full">
        <p className="leading-none">Quản lý sân</p>
      </div>
      <div className="flex flex-col h-[32.286px] justify-center relative shrink-0 w-full">
        <p className="leading-none">Quản lý nhân sự</p>
      </div>
      <div className="flex flex-col h-[32.286px] justify-center relative shrink-0 w-full">
        <p className="leading-none">Đăng ký vé</p>
      </div>
      <div className="flex flex-col h-[32.286px] justify-center relative shrink-0 w-full">
        <p className="leading-none">Yêu cầu thêm</p>
      </div>
      <div className="flex flex-col h-[32.286px] justify-center relative shrink-0 w-[244px]">
        <p className="leading-none">Mua sắm</p>
      </div>
    </div>
  );
}

function NavigationPill() {
  return (
    <div className="absolute bg-[rgba(41,98,255,0.24)] content-stretch flex h-[63px] items-center left-[14px] px-[36px] py-[8px] rounded-[8px] top-[421px] w-[366px]" data-name="Navigation Pill">
      <div aria-hidden="true" className="absolute border border-black border-solid inset-0 pointer-events-none rounded-[8px]" />
      <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#2c10ff] text-[32px] text-nowrap">
        <p className="leading-none">Dashboard</p>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents left-0 top-[332px]">
      <div className="absolute bg-white border border-[rgba(0,0,0,0.36)] border-solid h-[906px] left-0 top-[332px] w-[454px]" />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[19px] not-italic text-[28px] text-[rgba(0,0,0,0.67)] text-nowrap top-[366px] translate-y-[-50%]">
        <p className="leading-none">Menu quản lý</p>
      </div>
      <Frame />
      <NavigationPill />
    </div>
  );
}

function Group2() {
  return (
    <div className="absolute contents left-[490px] top-[234px]">
      <div className="absolute bg-white border border-black border-solid left-[490px] rounded-[38px] size-[360px] top-[234px]" />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[612px] not-italic text-[32px] text-black text-nowrap top-[280px] translate-y-[-50%]">
        <p className="leading-none">Sân tập</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[527px] not-italic text-[32px] text-black text-nowrap top-[398px] translate-y-[-50%]">
        <p className="leading-none">Còn trống: 7</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[527px] not-italic text-[32px] text-black text-nowrap top-[346px] translate-y-[-50%]">
        <p className="leading-none">Đang dùng: 8</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[506px] not-italic text-[#2370ff] text-[24px] text-nowrap top-[546px] translate-y-[-50%]">
        <p className="leading-none">Tỉ lê lấp đầy trong ngày: 67%</p>
      </div>
    </div>
  );
}

function Group3() {
  return (
    <div className="absolute contents left-[899px] top-[234px]">
      <div className="absolute bg-white border border-black border-solid left-[899px] rounded-[38px] size-[360px] top-[234px]" />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[936px] not-italic text-[32px] text-black text-nowrap top-[395px] translate-y-[-50%]">
        <p className="leading-none">Chưa Checkin: 18</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[1021px] not-italic text-[32px] text-black text-nowrap top-[280px] translate-y-[-50%]">
        <p className="leading-none">Vé đã bán</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[936px] not-italic text-[32px] text-black text-nowrap top-[346px] translate-y-[-50%]">
        <p className="leading-none">Đã bán: 36</p>
      </div>
    </div>
  );
}

function Group4() {
  return (
    <div className="absolute contents left-[1308px] top-[234px]">
      <div className="absolute bg-white border border-black border-solid left-[1308px] rounded-[38px] size-[360px] top-[234px]" />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[1361px] not-italic text-[32px] text-black text-nowrap top-[280px] translate-y-[-50%]">
        <p className="leading-none">Doanh thu tháng</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[1345px] not-italic text-[32px] text-black text-nowrap top-[346px] translate-y-[-50%]">
        <p className="leading-none">36.9 Triệu VNĐ</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[1324px] not-italic text-[#2370ff] text-[24px] text-nowrap top-[546px] translate-y-[-50%]">
        <p className="leading-none">+3.6% so với tháng trước</p>
      </div>
    </div>
  );
}

function Group5() {
  return (
    <div className="absolute contents left-[1704px] top-[234px]">
      <div className="absolute bg-white border border-black border-solid left-[1704px] rounded-[38px] size-[360px] top-[234px]" />
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[1741px] not-italic text-[32px] text-black text-nowrap top-[395px] translate-y-[-50%]">
        <p className="leading-none">Chưa xử lý: 18</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[1784px] not-italic text-[32px] text-black text-nowrap top-[276px] translate-y-[-50%]">
        <p className="leading-none">Yêu cầu thêm</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-[1741px] not-italic text-[32px] text-black text-nowrap top-[346px] translate-y-[-50%]">
        <p className="leading-none">Đã xử lý: 36</p>
      </div>
    </div>
  );
}

export default function Dashboard() {
  return (
    <div className="relative size-full" data-name="Dashboard">
      <div className="absolute bg-[#f7f7f7] h-[1238px] left-0 top-0 w-[2102px]" />
      <div className="absolute flex flex-col font-['Inter:Semi_Bold',sans-serif] font-semibold justify-center leading-[0] left-[534px] not-italic text-[40px] text-black text-nowrap top-[92px] translate-y-[-50%]">
        <p className="leading-none">Dashboard</p>
      </div>
      <div className="absolute flex flex-col font-['Inter:Light',sans-serif] font-light justify-center leading-[0] left-[534px] not-italic text-[24px] text-black text-nowrap top-[136px] translate-y-[-50%]">
        <p className="leading-none">Hệ thống quản lý sân tập</p>
      </div>
      <Group />
      <Group1 />
      <Group2 />
      <Group3 />
      <Group4 />
      <Group5 />
    </div>
  );
}