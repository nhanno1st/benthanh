export interface Post {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string; // ISO date
  image?: string;
  content: string[]; // mỗi phần tử là 1 đoạn văn
}
