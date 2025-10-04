import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Mail, Linkedin } from 'lucide-react';

export function CallToAction() {
  return (
    <section id="contact-cta" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Ready to Build Something Amazing?
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
            I deliver high-quality, scalable software solutions tailored to your needs. Let's connect and turn your ideas into reality.
            </p>
            <div className="mt-8 flex flex-col gap-4 min-[400px]:flex-row justify-center">
            <Button asChild size="lg" variant="secondary">
                <a href="mailto:contact@abdullahmubasir.com">
                <Mail className="mr-2" /> Get in Touch
                </a>
            </Button>
            <Button asChild size="lg" variant="outline">
                <Link href="#testimonials">See What Others Say</Link>
            </Button>
            </div>
            <div className="mt-6 flex justify-center items-center gap-4 text-sm text-muted-foreground">
                <a href="mailto:contact@abdullahmubasir.com" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Mail className="h-4 w-4" /> Email me directly
                </a>
                <span className="text-white/20">|</span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                    <Linkedin className="h-4 w-4" /> Connect on LinkedIn
                </a>
            </div>
        </div>
      </div>
    </section>
  );
}
