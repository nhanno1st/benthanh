import type { InquiryPayload } from '@/types/contact';

export type InquiryErrors = Partial<Record<keyof InquiryPayload, string>>;

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE = /^(\+?84|0)\d{8,10}$/;

export function validateInquiry(v: InquiryPayload): InquiryErrors {
  const errors: InquiryErrors = {};
  if (!v.topic) errors.topic = 'Vui lòng chọn chủ đề liên hệ';
  if (!v.fullName.trim()) errors.fullName = 'Vui lòng nhập họ và tên';
  const c = v.contact.trim().replace(/[\s.-]/g, '');
  if (!c) errors.contact = 'Vui lòng nhập email hoặc số điện thoại';
  else if (!EMAIL.test(c) && !PHONE.test(c)) errors.contact = 'Email hoặc số điện thoại chưa đúng định dạng';
  return errors;
}
