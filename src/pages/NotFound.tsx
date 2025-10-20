import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ShoppingBag } from "lucide-react";
import NotFoundHeader from "@/components/NotFoundHeader";
import FloatingElements from "@/components/FloatingElements";
import VideoSection from "@/components/VideoSection";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      <NotFoundHeader />
      <FloatingElements />

      <main className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-20 pb-12">
        <div className="container max-w-6xl mx-auto text-center space-y-12">
          {/* 404 Hero Text */}
          <div className="space-y-6 animate-in fade-in duration-700">
            <div className="relative inline-block">
              <h1 className="text-[120px] md:text-[180px] font-black bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-none animate-pulse-glow">
                404
              </h1>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 blur-3xl -z-10 animate-pulse-glow" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
              Oops! The deal got lost in the cart 🛒
            </h2>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Looks like this page went on a shopping spree and never came back! Our delivery robot is still searching for it in the cosmic warehouse...
            </p>
          </div>

          {/* Video Section */}
          <div className="animate-in fade-in duration-1000 delay-300">
            <VideoSection />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in duration-1000 delay-500">
            <Button variant="hero" size="lg" className="min-w-[200px]" asChild>
              <a href="/">
                <Home className="w-5 h-5" />
                Back to Home
              </a>
            </Button>
            <Button variant="outline" size="lg" className="min-w-[200px] border-primary/50 hover:border-primary" asChild>
              <a href="/">
                <ShoppingBag className="w-5 h-5" />
                Browse Deals
              </a>
            </Button>
          </div>

          {/* Fun Facts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 animate-in fade-in duration-1000 delay-700">
            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary transition-colors">
              <div className="text-4xl mb-2">🚀</div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Lost in Space</h3>
              <p className="text-sm text-muted-foreground">
                Our robots are exploring the universe to find your page. They'll be back soon!
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-accent transition-colors">
              <div className="text-4xl mb-2">📦</div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Package Floating</h3>
              <p className="text-sm text-muted-foreground">
                Your page might be packaged with tomorrow's deals. Check back later!
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary transition-colors">
              <div className="text-4xl mb-2">💜</div>
              <h3 className="font-bold text-lg mb-2 text-foreground">Still Love You</h3>
              <p className="text-sm text-muted-foreground">
                Errors happen, but our deals don't! Head home for amazing offers.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
