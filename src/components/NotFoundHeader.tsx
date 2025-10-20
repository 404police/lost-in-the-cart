import { ShoppingBag } from "lucide-react";

const NotFoundHeader = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
            <ShoppingBag className="w-6 h-6 text-white" />
          </div>
          <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Uzum Market
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Home
          </a>
          <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Categories
          </a>
          <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Deals
          </a>
          <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
            Cart
          </a>
        </nav>
      </div>
    </header>
  );
};

export default NotFoundHeader;
