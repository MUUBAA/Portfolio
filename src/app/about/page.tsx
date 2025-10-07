
import Image from 'next/image';
import { AppHeader } from '@/components/app-header';
import { AppFooter } from '@/components/app-footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { aboutData } from '@/lib/about-data';
import { ArrowRight, Calendar, Code, Languages, Linkedin, Mail, Target } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  const aboutImage = PlaceHolderImages.find((p) => p.id === 'about-portrait');

  return (
    <>
      <AppHeader />
      <main className="flex-grow w-full">
        {/* Hero Section */}
        <section className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="flex flex-col justify-center space-y-6">
                <div className="text-sm font-medium text-muted-foreground tracking-wider">{aboutData.hero.location}</div>
                <h1 className="font-display text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                  {aboutData.hero.headline.part1}
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 gradient-text">{aboutData.hero.headline.part2}</span>
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">{aboutData.hero.bio}</p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <a href={`mailto:${aboutData.ctaEmail}`}>Let's Work Together</a>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/https://abdullah-mubasir-ats-calibri-improved-1.tiiny.site" target='_blank'>View Resume</Link>
                  </Button>
                </div>
              </div>
              <div className="relative flex items-center justify-center">
                {aboutImage && (
                  <div className="relative w-full max-w-md aspect-square rounded-lg bg-black/20 p-4 border border-white/10 shadow-lg" style={{'--glow-color': '#60A5FA'} as React.CSSProperties}>
                    <Image
                      alt={aboutImage.description}
                      className="object-cover rounded-md"
                      data-ai-hint={aboutImage.imageHint}
                      fill
                      src={aboutImage.imageUrl}
                    />
                    <div className="absolute inset-0 rounded-lg -z-10 blur-xl" style={{background: 'radial-gradient(circle at center, var(--glow-color) 0%, transparent 60%)', opacity: 0.2}}></div>
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm p-3 rounded-lg border border-white/10 text-center">
                      <div className="text-3xl font-bold">{aboutData.hero.expYears}+</div>
                      <div className="text-xs text-muted-foreground">Years Exp</div>
                    </div>
                     <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm p-3 rounded-lg border border-white/10 text-center">
                      <div className="text-3xl font-bold">{aboutData.hero.projectsCount}+</div>
                      <div className="text-xs text-muted-foreground">Projects</div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* My Journey Section */}
        <section id="journey" className="py-12 md:py-24 lg:py-32 bg-black/20">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">My Journey</h2>
            </div>
            <div className="mt-12 max-w-3xl mx-auto space-y-6 text-muted-foreground md:text-lg">
              {aboutData.journey.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Expertise Section */}
        <section id="tech-expertise" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Technical Expertise</h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {aboutData.expertise.map((category) => (
                <Card key={category.category} className="bg-card/50 border-white/10">
                  <CardHeader>
                    <CardTitle className='text-xl'>{category.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <li key={skill}>
                          <Badge variant="secondary">{skill}</Badge>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* What Drives Me Section */}
        <section id="drives" className="py-12 md:py-24 lg:py-32 bg-black/20">
          <div className="container px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Drives Me</h2>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {aboutData.drives.map((drive) => (
                <Card key={drive.title} className="bg-transparent border-0 text-center items-center flex flex-col">
                  <div className="p-4 bg-accent/10 rounded-full mb-4 border border-accent/20">
                    {drive.icon === 'Target' && <Target className="h-8 w-8 text-accent" />}
                    {drive.icon === 'Code' && <Code className="h-8 w-8 text-accent" />}
                    {drive.icon === 'Languages' && <Languages className="h-8 w-8 text-accent" />}
                    {drive.icon === 'Mail' && <Mail className="h-8 w-8 text-accent" />}
                  </div>
                  <h3 className="text-xl font-bold">{drive.title}</h3>
                  <p className="text-muted-foreground mt-2">{drive.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Key Achievements Section */}
        <section id="achievements" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Key Achievements</h2>
            </div>
            <div className="mt-12 relative max-w-3xl mx-auto">
              <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
              {aboutData.achievements.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} mb-12`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="p-4 rounded-lg bg-card/50 border border-white/10 card">
                        <p className="text-muted-foreground">{item.description}</p>
                        <h3 className="font-bold text-lg mt-1">{item.title}</h3>
                    </div>
                  </div>
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-background p-1 rounded-full">
                    <div className="h-8 w-8 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
                      {item.year}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Beyond the Code Section */}
        <section id="beyond-code" className="py-12 md:py-24 lg:py-32 bg-black/20">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Beyond the Code</h2>
              <p className="mt-4 text-muted-foreground md:text-xl">{aboutData.beyond.paragraph}</p>
              <div className="mt-6 flex justify-center gap-4 flex-wrap">
                {aboutData.beyond.badges.map(badge => <Badge key={badge} variant="secondary">{badge}</Badge>)}
              </div>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section id="closing-cta" className="py-12 md:py-24">
          <div className="container px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                {aboutData.closingCTA.headline}
                </h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                {aboutData.closingCTA.subtext}
                </p>
                <div className="mt-8 flex flex-col gap-4 min-[400px]:flex-row justify-center">
                <Button asChild size="lg" variant="secondary">
                    <a href={`mailto:${aboutData.ctaEmail}`}>
                    <Mail className="mr-2" /> Start a Conversation
                    </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                    <Link href="/experience">View Experience</Link>
                </Button>
                </div>
            </div>
          </div>
        </section>

         {/* Research CTA */}
         <section id="research-cta" className="py-12 md:py-24 bg-black/20">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto bg-card/50 p-8 rounded-lg border border-white/10 card text-center">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
                {aboutData.researchCTA.headline}
                </h2>
                <blockquote className="mt-6 text-muted-foreground md:text-lg italic border-l-4 border-accent pl-4 text-left">
                {aboutData.researchCTA.quote}
                </blockquote>
                <div className="mt-8 flex flex-col gap-4 min-[400px]:flex-row justify-center">
                <Button asChild size="lg" variant="secondary">
                    <a href={`mailto:${aboutData.ctaEmail}?subject=Collaboration Proposal`}>
                    <Linkedin className="mr-2" /> Propose a Collaboration
                    </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                    <Link href="/experience">View Experience</Link>
                </Button>
                </div>
            </div>
          </div>
        </section>
      </main>
      <AppFooter />
    </>
  );
}
