import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

export function AppFooter() {
  return (
    <footer className="bg-transparent text-foreground/80 py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
              <Avatar className="h-8 w-8">
            <AvatarImage src="/assets/images/avatar-main.jpeg" alt="Abdullah Mubasir" />
            <AvatarFallback>AM</AvatarFallback>
           </Avatar>
              <span className="text-lg font-bold">Abdullah Mubasir</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Building intelligent, scalable, and user-centric AI-powered products for startups and teams.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:items-center">
             <h3 className="font-semibold text-foreground">Quick Links</h3>
             <nav className="flex flex-col gap-2">
               <Link href="#projects" className="text-sm hover:text-primary transition-colors">Projects</Link>
               <Link href="#experience" className="text-sm hover:text-primary transition-colors">Experience</Link>
               <Link href="#about" className="text-sm hover:text-primary transition-colors">About</Link>
               <Link href="#contact" className="text-sm hover:text-primary transition-colors">Contact</Link>
             </nav>
          </div>
          <div className="flex flex-col gap-4 md:items-end">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/MUUBAA" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/abdullah-mubasir-496887250/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">
                  <Twitter className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-white/10 pt-4 text-center text-sm text-muted-foreground">
          &copy; 2025 Abdullah Mubasir.
        </div>
      </div>
    </footer>
  );
}
