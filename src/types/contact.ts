export interface InquiryPayload {
  topic: string;
  fullName: string;
  contact: string; // email hoặc số điện thoại
  company?: string;
  message?: string;
}
