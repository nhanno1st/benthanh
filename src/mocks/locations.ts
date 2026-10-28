import { IMAGES } from '@/constants/images';
import type { Location } from '@/types/company';

export const LOCATIONS: Location[] = [
  {
    id: 'hq',
    image: IMAGES.locations.hq,
    name: 'Công ty Cổ phần Văn hóa Tổng hợp Bến Thành',
    kind: 'Trụ sở chính',
    address: '160 Hai Bà Trưng, P. Tân Định, TP.HCM',
    phones: ['(028) 3829 2775'],
    email: 'contact@benthanhgcc.com',
    taxCode: '0301166778',
    mapUrl: 'https://maps.google.com/?q=160+Hai+Bà+Trưng,+Tân+Định,+TP.HCM',
  },
  {
    id: 'vpp',
    image: IMAGES.locations.vpp,
    name: 'Văn phòng phẩm Bến Thành',
    kind: 'Cửa hàng văn phòng phẩm',
    address: '160 Hai Bà Trưng, P. Tân Định, TP.HCM',
    phones: ['090 254 9118 (CSKH)', '090 683 9118 (Kinh doanh)'],
    email: 'vpp@benthanhgcc.com',
    taxCode: '0301166778-003',
    mapUrl: 'https://maps.google.com/?q=160+Hai+Bà+Trưng,+Tân+Định,+TP.HCM',
  },
  {
    id: 'print',
    image: IMAGES.locations.print,
    name: 'In Bến Thành',
    kind: 'Xưởng in',
    address: 'Lô E4, đường A, KCN Bình Chiều, P. Tam Bình, TP.HCM',
    phones: ['028 3938 1334', '028 3938 1335'],
    email: 'info@benthanhprint.com',
    taxCode: '0312961577',
    mapUrl: 'https://maps.google.com/?q=KCN+Bình+Chiều,+Tam+Bình,+TP.HCM',
  },
];
