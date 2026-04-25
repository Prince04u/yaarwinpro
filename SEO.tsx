import { Header } from "./Header";
import { Footer } from "./Footer";
import { AnimatedBackground } from "./AnimatedBackground";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior }); }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col">
      <AnimatedBackground />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
