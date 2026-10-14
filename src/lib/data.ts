import { Residence, Amenity, GalleryPanel, MaterialItem } from "./types";

export const RESIDENCES_DATA: Residence[] = [
  {
    id: "garden-residence",
    name: "DINH THỰ VƯỜN",
    category: "Không Gian Xanh Tầng Trệt",
    bedrooms: "2 Phòng Ngủ",
    area: "110 — 135 m²",
    features: [
      "Khu vườn nhiệt đới cảnh quan riêng tư",
      "Lối kết nối trực tiếp hồ bơi & hiên nghỉ",
      "Không gian mở liền mạch trong nhà và ngoài trời",
      "Phòng tắm đôi ốp đá cẩm thạch sang trọng",
    ],
    description:
      "Khoảng lặng an yên hòa mình cùng thiên nhiên miền duyên hải, nơi vách kính trượt xóa nhòa ranh giới giữa phòng khách chan hòa ánh nắng và khuôn viên vườn xanh mát.",
    image:
      "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1800&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1800&q=85",
    floorplanTag: "Phân Hạng 01 — Dinh Thự Tầng Trệt",
    priceStarting: "Từ 35 Tỷ VNĐ",
  },
  {
    id: "sky-residence",
    name: "DINH THỰ TRÊN KHÔNG",
    category: "Tầm Nhìn Biển Khoáng Đạt",
    bedrooms: "3 Phòng Ngủ",
    area: "145 — 180 m²",
    features: [
      "Tầm nhìn 270° bao trọn đại dương Mỹ Khê",
      "Ban công loggia bao quanh rộng 42 m²",
      "Bàn đảo đá Travertine nhập khẩu từ Ý",
      "Tủ lưu trữ rượu vang và phòng phụ trợ riêng",
    ],
    description:
      "Lơ lửng trên tầng cao với tầm nhìn ngoạn mục hướng thẳng đại dương. Luồng gió biển thanh khiết tự nhiên luân chuyển qua trần nhà cao 3.2m ốp gỗ sồi tự nhiên tinh mỹ.",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",
    floorplanTag: "Phân Hạng 02 — Căn Hộ Tầng Cao",
    priceStarting: "Từ 52 Tỷ VNĐ",
  },
  {
    id: "penthouse",
    name: "DINH THỰ ĐỈNH CAO",
    category: "Bộ Sưu Tập Giới Hạn",
    bedrooms: "3 — 4 Phòng Ngủ",
    area: "210 — 280 m²",
    features: [
      "Hồ bơi vô cực riêng biệt trên tầng thượng",
      "Khu tiệc ngoài trời & lò sưởi ấm cúng",
      "Phòng ngủ Master với bồn tắm hướng biển",
      "Thang máy riêng với thẻ từ bảo mật tuyệt đối",
    ],
    description:
      "Đỉnh cao của phong cách sống ven biển tại Đà Nẵng. Kiệt tác kiến trúc của sự tĩnh lặng và tỉ lệ vàng, sở hữu hồ bơi vô cực vươn ra bầu trời, nơi mặt nước hòa làm một với biển trời bao la.",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1800&q=85",
    secondaryImage:
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1800&q=85",
    floorplanTag: "Phân Hạng 03 — Đỉnh Tháp Penthouse",
    priceStarting: "Từ 88 Tỷ VNĐ",
  },
];

export const GALLERY_PANELS: GalleryPanel[] = [
  {
    id: "exterior",
    number: "01",
    tag: "KIẾN TRÚC",
    title: "NGOẠI THẤT",
    caption: "Những đường cong đá vôi điêu khắc tinh tế lọc ánh nắng ban mai và đón trọn luồng gió biển duyên hải.",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1800&q=85",
    aspect: "aspect-[16/10]",
  },
  {
    id: "living",
    number: "02",
    tag: "NỘI THẤT",
    title: "PHÒNG KHÁCH",
    caption: "Không gian thông tầng ngập tràn ánh sáng dịu nhẹ với bộ sofa êm ái phong cách tối giản sang trọng.",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=85",
    aspect: "aspect-[4/3]",
  },
  {
    id: "bedroom",
    number: "03",
    tag: "SUITE",
    title: "PHÒNG NGỦ MASTER",
    caption: "Thiên đường nghỉ ngơi nuôi dưỡng sự tĩnh lặng, đón bình minh rực rỡ bên bờ biển mỗi sớm mai.",
    image:
      "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1800&q=85",
    aspect: "aspect-[16/10]",
  },
  {
    id: "terrace",
    number: "04",
    tag: "NGOÀI TRỜI",
    title: "BAN CÔNG LOGGIA",
    caption: "Hiên nghỉ ngoài trời rộng lớn lót gỗ tếch tự nhiên, mở ra tầm nhìn vô cực hướng biển xanh.",
    image:
      "https://images.unsplash.com/photo-1512915922686-57c11dde9b6b?auto=format&fit=crop&w=1800&q=85",
    aspect: "aspect-[4/3]",
  },
  {
    id: "pool",
    number: "05",
    tag: "TIỆN ÍCH",
    title: "HỒ BƠI VÔ CỰC",
    caption: "Hồ bơi nước mặn dài 50m sát bờ biển tạo nên sự liền mạch quang học ngoạn mục với sóng nước Đà Nẵng.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1800&q=85",
    aspect: "aspect-[16/10]",
  },
  {
    id: "lobby",
    number: "06",
    tag: "ĐÓN TIẾP",
    title: "SẢNH ĐÓN ĐẲNG CẤP",
    caption: "Cổng vòm đá nguyên khối uy nghi điểm xuyết hồ nước tĩnh lặng và tác phẩm điêu khắc nghệ thuật đương đại.",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?auto=format&fit=crop&w=1800&q=85",
    aspect: "aspect-[4/3]",
  },
];

export const AMENITIES_DATA: Amenity[] = [
  {
    id: "infinity-pool",
    number: "01",
    title: "HỒ BƠI VÔ CỰC",
    subtitle: "Chân Trời Sát Biển",
    description: "Hồ bơi nước mặn chuẩn Olympic vươn dài ra đại dương cùng các chòi cabana riêng tư lãng mạn.",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "wellness-spa",
    number: "02",
    title: "KHU WELLNESS SPA",
    subtitle: "Trị Liệu Thủy Sinh & Xông Hơi",
    description: "Không gian thiền định chuông xoay, phòng xông hơi Phần Lan, bồn ngâm lạnh và khu trị liệu biệt lập.",
    image:
      "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "residents-lounge",
    number: "03",
    title: "PHÒNG KHÁCH ĐẶC QUYỀN",
    subtitle: "Không Gian Kết Nối Thượng Lưu",
    description: "Hầm lưu trữ rượu vang tinh tuyển, phòng đọc sách yên tĩnh và phòng tiệc riêng tư đón tiếp khách quý.",
    image:
      "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "fitness-studio",
    number: "04",
    title: "PHÒNG GYM & PILATES",
    subtitle: "Rèn Luyện Cùng Thiên Nhiên",
    description: "Trang thiết bị Technogym đỉnh cao, sàn tập yoga hướng biển và phòng tập Pilates reformer chuyên sâu.",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "tropical-gardens",
    number: "05",
    title: "VƯỜN NHIỆT ĐỚI",
    subtitle: "Thảm Thực Vật Bản Địa",
    description: "Ba héc-ta đồi cát và cây cỏ duyên hải được bảo tồn, đan xen vườn thảo mộc và hồ cá koi thanh bình.",
    image:
      "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=1400&q=85",
  },
  {
    id: "concierge",
    number: "06",
    title: "QUẢN GIA RIÊNG 24/7",
    subtitle: "Đặc Quyền Phong Cách Sống",
    description: "Hỗ trợ chuyên cơ cá nhân, du thuyền thưởng ngoạn, đầu bếp phục vụ tại gia và quản lý tài sản chuyên nghiệp.",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1400&q=85",
  },
];

export const MATERIALS_DATA: MaterialItem[] = [
  {
    id: "travertine",
    name: "Đá Navona Travertine",
    origin: "Tivoli, Nước Ý",
    description: "Đá trầm tích cắt lớp tự nhiên với bề mặt lỗ xốp mộc mạc, mô phỏng các tầng địa chất ven biển ngàn năm.",
    finish: "Mài mờ, giữ nguyên vân rỗ tự nhiên",
    image:
      "https://images.unsplash.com/photo-1598880940371-c756e015faf1?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "timber",
    name: "Gỗ Tếch Tái Sinh",
    origin: "Tây Nguyên, Việt Nam",
    description: "Gỗ nhiệt đới khai thác bền vững, tôi luyện qua nắng gió biển khơi để hình thành sắc bạc quý phái.",
    finish: "Chải nổi thớ vân, phủ dầu thực vật",
    image:
      "https://images.unsplash.com/photo-1546484396-fb3fc6f95f98?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "natural-stone",
    name: "Đá Vôi Quảng Nam",
    origin: "Miền Trung, Việt Nam",
    description: "Từng khối đá nguyên khối được đục đẽo thủ công, càng nhuốm màu thời gian càng thêm đĩnh đạc và uy nghiêm.",
    finish: "Chẻ thô tự nhiên & phay rãnh nghệ thuật",
    image:
      "https://images.unsplash.com/photo-1590402494682-cd3fb53b1f70?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "linen",
    name: "Vải Linen Hữu Cơ Thô",
    origin: "Làng Dệt Truyền Thống Huế",
    description: "Dệt thủ công sợi lanh tự nhiên dày dặn, làm dịu đi các góc cạnh bê tông và đón nhận ánh nắng dịu dàng.",
    finish: "Giặt sấy tự nhiên, không tẩy trắng hóa học",
    image:
      "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=1200&q=85",
  },
  {
    id: "brushed-metal",
    name: "Đồng Thau Chải Mờ",
    origin: "Nghệ Thuật Kim Khí Thủ Công",
    description: "Đồng thau chống ăn mòn muối biển cao cấp, tự phát triển lớp patina cổ điển tuyệt đẹp theo năm tháng.",
    finish: "Chải sọc mờ thủ công phủ màu trầm",
    image:
      "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=1200&q=85",
  },
];

export const LOCATION_DISTANCES = [
  { value: 5, unit: "PHÚT", label: "BÃI BIỂN MỸ KHÊ", desc: "Lối đi bộ riêng qua đồi cát ra thẳng biển" },
  { value: 10, unit: "PHÚT", label: "TRUNG TÂM THÀNH PHỐ", desc: "Bến du thuyền sông Hàn & các bảo tàng" },
  { value: 15, unit: "PHÚT", label: "SÂN BAY QUỐC TẾ", desc: "Dịch vụ đưa đón sảnh VIP chuyên biệt" },
  { value: 20, unit: "PHÚT", label: "SÂN GOLF QUỐC TẾ", desc: "BRG Danang Golf Resort & Montgomerie Links" },
];
