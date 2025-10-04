import Image from 'next/image';
import Link from 'next/link';
import { AppHeader } from '@/components/app-header';
import { AppFooter } from '@/components/app-footer';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { WhyHireMe } from '@/components/why-hire-me';
import { FeaturedProjects } from '@/components/featured-projects';
import { ResearchExpertise } from '@/components/research-expertise';
import { CallToAction } from '@/components/call-to-action';

export default function Home() {
  const heroImage = PlaceHolderImages.find((p) => p.id === 'hero-workstation');

  return (
    <>
      <AppHeader />
      <main className="flex-grow w-full">
        <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:gap-24">
              <div className="flex flex-col justify-center space-y-4">
                <h1 className="font-display text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  Hi, I’m Abdullah
                  <br />
                  Mubasir.
                </h1>
                <p className="font-display text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl bg-gradient-to-r from-blue-400 to-purple-500 gradient-text">
                  FullStack Developer & AI Engineer.
                </p>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  A FullStack Developer and AI Engineer specializing in building intelligent, scalable, and user-centric AI-powered products.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" variant="secondary">
                    <a href="mailto:contact@abdullahmubasir.com">Get in Touch</a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/resume.pdf">View Resume</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                {heroImage && (
                  <div className="relative w-full max-w-md aspect-square rounded-lg bg-black/20 p-4 border border-white/10 shadow-lg" style={{'--glow-color': '#8B5CF6'} as React.CSSProperties}>
                    <Image
                      alt={heroImage.description}
                      className="object-contain rounded-md"
                      data-ai-hint={heroImage.imageHint}
                      fill
                      src={heroImage.imageUrl}
                    />
                     <div className="absolute inset-0 rounded-lg -z-10 blur-xl" style={{background: 'radial-gradient(circle at center, var(--glow-color) 0%, transparent 60%)', opacity: 0.2}}></div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <WhyHireMe />
        <FeaturedProjects />
        <ResearchExpertise />
        <CallToAction />
      </main>
      <AppFooter />
    </>
  );
}
