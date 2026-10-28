export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://benthanhgcc.com';

export const SITE = {
  name: 'Bến Thành GCC',
  legalName: 'Công ty Cổ phần Văn hóa Tổng hợp Bến Thành',
  slogan: 'In ấn, văn phòng phẩm và không gian làm việc cho doanh nghiệp',
  description:
    'Công ty Cổ phần Văn hóa Tổng hợp Bến Thành (Bến Thành GCC) — dịch vụ in ấn, văn phòng phẩm, F&B, bản ghi video/audio, chia sẻ không gian kinh doanh, lưu trú ngắn hạn và cho thuê kho xưởng tại TP.HCM.',
  email: 'contact@benthanhgcc.com',
  orderEmail: 'muahang@benthanhprint.com',
  hotline: '(028) 3829 2775',
  hotlineAlt: '090 254 9118',
  hours: '8:00 - 17:00 | Thứ 2 - Thứ 7',
  taxCode: '0301166778',
  foundedYear: 2004,
  social: {
    facebook: '#',
    x: '#',
    instagram: '#',
  },
} as const;
