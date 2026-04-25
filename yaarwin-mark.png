import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/Layout";

import Home from "./pages/Home";
import Games from "./pages/Games";
import HowToPlay from "./pages/HowToPlay";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Giftcode from "./pages/Giftcode";
import Download from "./pages/Download";
import GiftcodesGuide from "./pages/GiftcodesGuide";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Disclaimer from "./pages/Disclaimer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/games" element={<Games />} />
            <Route path="/how-to-play" element={<HowToPlay />} />
            <Route path="/yaarwin-login" element={<Login />} />
            <Route path="/yaarwin-register" element={<Register />} />
            <Route path="/yaarwin-giftcode" element={<Giftcode />} />
            <Route path="/yaarwin-download" element={<Download />} />
            <Route path="/giftcodes-guide" element={<GiftcodesGuide />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms-conditions" element={<Terms />} />
            <Route path="/disclaimer" element={<Disclaimer />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
