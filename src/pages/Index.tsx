import { Button } from "@/components/ui/button";
import { ShoppingBag, Home } from "lucide-react";
import JellyHeader from "@/components/JellyHeader";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a0033] via-[#2d0066] to-[#1a0033]">
      <JellyHeader />
      <div className="flex min-h-screen items-center justify-center px-4 pt-20">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mx-auto animate-pulse-glow">
            <ShoppingBag className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Welcome to Uzum Market
          </h1>
          <p className="text-xl text-white/70 max-w-md mx-auto">
            Your cosmic shopping destination for amazing deals!
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Button variant="hero" size="lg" asChild>
              <a href="/">
                <Home className="w-5 h-5" />
                Explore Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
