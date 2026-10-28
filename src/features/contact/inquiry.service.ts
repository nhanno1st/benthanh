import { api } from '@/lib/axios';
import { USE_MOCK, mockResolve } from '@/lib/mock';
import type { InquiryPayload } from '@/types/contact';

export const inquiryService = {
  async submit(payload: InquiryPayload): Promise<void> {
    if (USE_MOCK) {
      console.info('[mock] inquiry', payload);
      await mockResolve(null, 600);
      return;
    }
    await api.post('/inquiries', payload);
  },
};
