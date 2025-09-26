import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function AppHeader() {
  return (
    <header className="bg-card shadow-sm sticky top-0 z-40">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors" prefetch={false}>
          Seera
        </Link>
        <nav>
          <Button asChild>
            <Link href="#">Contact</Link>
          </Button>
        </nav>
      </div>
    </header>
  );
}
