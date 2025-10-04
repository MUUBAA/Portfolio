
'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/experience', label: 'Experience' },
  { href: '/contact', label: 'Contact' },
];

export function AppHeader() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="bg-background/30 backdrop-blur-lg border-b border-white/10 shadow-sm sticky top-0 z-40">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3 text-lg font-bold text-foreground hover:text-primary transition-colors" prefetch={false}>
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://picsum.photos/seed/avatar/32/32" alt="Abdullah Mubasir" />
            <AvatarFallback>AM</AvatarFallback>
          </Avatar>
          Abdullah Mubasir
        </Link>
        <nav className="hidden md:flex items-center gap-2 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-muted-foreground hover:text-foreground transition-colors relative py-2 px-4 rounded-md hover:bg-accent/20",
                pathname === link.href && "bg-accent/20 text-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="grid gap-4 py-6">
                  <Link href="/" className="flex items-center gap-3 text-lg font-bold" onClick={() => setIsSheetOpen(false)}>
                     <Avatar className="h-8 w-8">
                      <AvatarImage src="https://picsum.photos/seed/avatar/32/32" alt="Abdullah Mubasir" />
                      <AvatarFallback>AM</AvatarFallback>
                    </Avatar>
                    Abdullah Mubasir
                  </Link>
                  <nav className="grid gap-2">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors py-2 text-lg"
                      onClick={() => setIsSheetOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                  </nav>
                  <Button asChild variant="secondary" onClick={() => setIsSheetOpen(false)}>
                    <Link href="/resume.pdf" target="_blank">
                      Resume
                      <span className="ml-2">→</span>
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
           <div className="hidden md:flex items-center gap-4">
            <Button asChild variant="secondary">
                <Link href="/resume.pdf" target="_blank">
                Resume
                <span className="ml-2">→</span>
                </Link>
            </Button>
           </div>
        </div>
      </div>
    </header>
  );
}
