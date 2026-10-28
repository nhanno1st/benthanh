export type AnnouncementCategory = 'disclosure' | 'governance' | 'financial';

export interface Announcement {
  id: string;
  title: string;
  category: AnnouncementCategory;
  publishedAt: string; // ISO date
  fileUrl: string;
}
