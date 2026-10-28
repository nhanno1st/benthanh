import { api } from '@/lib/axios';
import { USE_MOCK, mockResolve } from '@/lib/mock';
import { ABOUT_TEXT, BOARD, BUSINESS_LINES, CORE_VALUES, SUPERVISORS } from '@/mocks/company';
import type { BusinessLine, CoreValue, Officer } from '@/types/company';

export interface CompanyProfile {
  aboutText: string;
  board: Officer[];
  supervisors: Officer[];
  coreValues: CoreValue[];
}

export const companyService = {
  async getProfile(): Promise<CompanyProfile> {
    if (USE_MOCK) {
      return mockResolve({ aboutText: ABOUT_TEXT, board: BOARD, supervisors: SUPERVISORS, coreValues: CORE_VALUES });
    }
    return (await api.get<CompanyProfile>('/company/profile')).data;
  },

  async getBusinessLines(): Promise<BusinessLine[]> {
    if (USE_MOCK) return mockResolve(BUSINESS_LINES);
    return (await api.get<BusinessLine[]>('/company/business-lines')).data;
  },
};
