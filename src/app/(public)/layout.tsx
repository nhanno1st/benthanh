import BackToTop from '@/components/ui/BackToTop';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-gold focus:px-5 focus:py-3 focus:font-semibold focus:text-brand-dark"
      >
        Bỏ qua đến nội dung chính
      </a>
      <Header />
      <main id="main" tabIndex={-1} className="outline-none">
        {children}
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
