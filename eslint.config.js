import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Home } from "lucide-react";
import { SEO } from "@/components/SEO";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <SEO title="Page Not Found · YaarWin" description="The page you are looking for does not exist on YaarWin." />
      <section className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="text-center max-w-md animate-rise">
          <div className="text-8xl font-black gradient-text mb-4">404</div>
          <h1 className="text-2xl font-bold mb-3">Page not found</h1>
          <p className="text-muted-foreground mb-8">The page you are looking for has moved or never existed. Let's get you back to YaarWin.</p>
          <Link to="/" className="btn-primary"><Home size={18} /> Back to Home</Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
