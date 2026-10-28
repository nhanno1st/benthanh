/**
 * TẤT CẢ ẢNH DEMO nằm ở đây (lấy từ Unsplash) để bạn xem giao diện.
 * Khi có ảnh thật / API: thay URL ở file này hoặc gán trực tiếp vào field `image` / `imageUrl` trong dữ liệu.
 * Nếu một URL bị lỗi, component <Photo /> tự chuyển sang ảnh dự phòng nên giao diện không bao giờ trống.
 */
const u = (id: string, w = 1200) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const IMAGES = {
  hero: u('photo-1497366216548-37526070297c', 1400),
  building: u('photo-1486406146926-c627a92ad1ab', 1200),

  values: {
    customer: u('photo-1521737604893-d14cc237f11d'),
    integrity: u('photo-1521791136064-7986c2920216'),
    sustainable: u('photo-1470071459604-3b5ec3a7fe05'),
  },

  services: {
    'in-an': u('photo-1562564055-71e051d33c19'),
    'van-phong-pham': u('photo-1455390582262-044cdead277a'),
    fnb: u('photo-1554118811-1e0d58224f24'),
    'ban-ghi': u('photo-1598488035139-bdbb2231ce04'),
    'khong-gian': u('photo-1497366754035-f200968a6e72'),
    'luu-tru': u('photo-1631049307264-da0ec9d70304'),
    'kho-xuong': u('photo-1553413077-190dd305871c'),
  },

  locations: {
    hq: u('photo-1486406146926-c627a92ad1ab'),
    vpp: u('photo-1441986300917-64674bd600d8'),
    print: u('photo-1562564055-71e051d33c19'),
  },

  posts: {
    agm: u('photo-1542744173-8e7e53415bb0'),
    coworking: u('photo-1522071820081-009f0129c71c'),
    printing: u('photo-1562564055-71e051d33c19'),
    gifts: u('photo-1549465220-1a8b9238cd48'),
    notice: u('photo-1504711434969-e33886168f5c'),
    stay: u('photo-1551882547-ff40c63fe5fa'),
  },

  products: {
    paper: u('photo-1517842645767-c639042777db', 800),
    namecard: u('photo-1589829085413-56de8ae18c73', 800),
    pens: u('photo-1585336261022-680e295ce3fe', 800),
    markers: u('photo-1513542789411-b6a5d4f31634', 800),
    notebook: u('photo-1531346878377-a5be20888e57', 800),
    folder: u('photo-1568667256549-094345857637', 800),
    giftset: u('photo-1549465220-1a8b9238cd48', 800),
    bag: u('photo-1607082348824-0a96f2a4b9da', 800),
  },
} as const;
