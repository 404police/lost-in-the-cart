import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, ShoppingBag } from "lucide-react";
import NotFoundHeader from "@/components/NotFoundHeader";
import GlowingParticles from "@/components/GlowingParticles";
import VideoSection from "@/components/VideoSection";
import Animated404 from "@/components/Animated404";

const NotFound = () => {
  const location = useLocation();
  const [isTextHovered, setIsTextHovered] = useState(false);

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-background via-secondary/40 to-background">
      <NotFoundHeader />
      <GlowingParticles />

      <main className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-24 pb-12">
        <div className="container max-w-7xl mx-auto text-center space-y-16">
          {/* Animated 404 Characters */}
          <div className="animate-in fade-in duration-700">
            <Animated404 />
          </div>

          {/* Playful Headline with Interactive Effects */}
          <div 
            className="space-y-4 animate-in fade-in duration-700 delay-150"
            onMouseEnter={() => setIsTextHovered(true)}
            onMouseLeave={() => setIsTextHovered(false)}
          >
            <h2 
              className={`text-3xl md:text-5xl lg:text-6xl font-bold text-foreground transition-all duration-300 ${
                isTextHovered ? "animate-shake" : ""
              }`}
            >
              Oops! Page not found — but at least we found some laughs! 😄
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              This page decided to go on an adventure through the cosmic marketplace. Our delivery robot is still looking for it somewhere between here and infinity...
            </p>
          </div>

          {/* Comedy Video Section */}
          <div className="animate-in fade-in duration-1000 delay-300">
            <VideoSection />
          </div>

          {/* CTA Buttons with Neon Effect */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-in fade-in duration-1000 delay-500">
            <Button 
              variant="neon" 
              size="lg" 
              className="min-w-[220px] text-lg rounded-2xl relative group"
              style={{
                boxShadow: "0 0 20px hsl(268 100% 50% / 0.5), 0 0 40px hsl(268 100% 50% / 0.3)",
              }}
              asChild
            >
              <a href="/" className="relative z-10">
                <Home className="w-6 h-6" />
                Go Back Home
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-accent/50 to-primary/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="min-w-[220px] text-lg border-2 border-primary/50 hover:border-accent hover:bg-accent/10 hover:scale-105 transition-all duration-300 rounded-2xl font-bold" 
              asChild
            >
              <a href="/">
                <ShoppingBag className="w-6 h-6" />
                Browse Deals
              </a>
            </Button>
          </div>

          {/* Fun Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 animate-in fade-in duration-1000 delay-700">
            <div className="group p-8 rounded-3xl bg-card/60 backdrop-blur-md border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-5xl mb-4 animate-bounce-slow">🚀</div>
              <h3 className="font-bold text-xl mb-3 text-foreground">Lost in Space</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Our delivery bots are exploring distant galaxies to find your page. They'll return with cosmic deals!
              </p>
            </div>
            <div className="group p-8 rounded-3xl bg-card/60 backdrop-blur-md border-2 border-border hover:border-accent transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-5xl mb-4 animate-float" style={{ animationDelay: "0.5s" }}>📦</div>
              <h3 className="font-bold text-xl mb-3 text-foreground">Package Mystery</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                This page might be wrapped up with tomorrow's surprise deals. Stay tuned for something special!
              </p>
            </div>
            <div className="group p-8 rounded-3xl bg-card/60 backdrop-blur-md border-2 border-border hover:border-primary transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <div className="text-5xl mb-4 animate-pulse-glow">💜</div>
              <h3 className="font-bold text-xl mb-3 text-foreground">We Still Love You</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Errors are just detours to better experiences. Head home and discover amazing offers waiting for you!
              </p>
            </div>
          </div>

          {/* Fun Easter Egg */}
          <div className="text-sm text-muted-foreground/60 italic mt-12">
            <p>🎭 Pro tip: Our 404 pages have won "Most Entertaining Error" 3 years in a row*</p>
            <p className="text-xs mt-2">*Award totally made up by our creative team</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
