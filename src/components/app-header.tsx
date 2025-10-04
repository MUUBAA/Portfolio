import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

export function AppHeader() {
  return (
    <header className="bg-background/30 backdrop-blur-lg border-b border-white/10 shadow-sm sticky top-0 z-40">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3 text-lg font-bold text-foreground hover:text-primary transition-colors" prefetch={false}>
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://picsum.photos/seed/avatar/32/32" alt="Abdelmajid NIDNASSER" />
            <AvatarFallback>AN</AvatarFallback>
          </Avatar>
          Abdelmajid NIDNASSER
        </Link>
        <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Button asChild variant="secondary">
            <Link href="/resume.pdf" target="_blank">
              Resume
              <span className="ml-2">→</span>
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
