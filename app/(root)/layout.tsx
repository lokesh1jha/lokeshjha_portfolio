import { MainNav } from "@/components/common/main-nav";
import { SiteFooter } from "@/components/common/site-footer";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <MainNav />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}
