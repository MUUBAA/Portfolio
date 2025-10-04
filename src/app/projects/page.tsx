
'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AppHeader } from '@/components/app-header';
import { AppFooter } from '@/components/app-footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { projects, Project } from '@/lib/projects-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Bot, Code, Database, LayoutGrid, Mail } from 'lucide-react';

type Category = 'All' | 'AI/ML' | 'Full-Stack' | 'Research' | 'Distributed Systems';

const categoryFilters: { name: Category; icon: React.ReactNode }[] = [
  { name: 'All', icon: <LayoutGrid className="mr-2 h-4 w-4" /> },
  { name: 'AI/ML', icon: <Bot className="mr-2 h-4 w-4" /> },
  { name: 'Full-Stack', icon: <Code className="mr-2 h-4 w-4" /> },
  { name: 'Research', icon: <Database className="mr-2 h-4 w-4" /> },
];

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const getCategoryCount = (category: Category): number => {
    if (category === 'All') return projects.length;
    return projects.filter((p) => p.category === category).length;
  };

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <>
      <AppHeader />
      <main className="flex-grow w-full">
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                My Projects
              </h1>
              <p className="mt-4 text-muted-foreground md:text-xl">
                A showcase of innovative solutions, from AI-powered applications to full-stack platforms. Each project represents a unique challenge solved with cutting-edge technology and best practices.
              </p>
              <div className="mt-6 flex justify-center items-center gap-4 text-sm text-muted-foreground flex-wrap">
                  <span>15+ Projects Completed</span>
                  <span className="text-white/20">|</span>
                  <span>Multiple Industries</span>
                  <span className="text-white/20">|</span>
                  <span>AI/ML Specialist</span>
              </div>
            </div>

            <div className="flex justify-center flex-wrap gap-2 mt-12">
              {categoryFilters.map((filter) => {
                 const count = getCategoryCount(filter.name);
                 if (filter.name !== 'All' && count === 0) return null;
                 
                 return (
                    <Button
                        key={filter.name}
                        variant={activeCategory === filter.name ? 'secondary' : 'outline'}
                        onClick={() => setActiveCategory(filter.name)}
                        className="flex items-center gap-2"
                    >
                        {filter.icon}
                        {filter.name}
                        <Badge variant={activeCategory === filter.name ? 'default' : 'secondary'}>{count}</Badge>
                    </Button>
                 )
              })}
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project) => {
                const projectImage = PlaceHolderImages.find((p) => p.id === project.imageId);
                 const statusColor =
                  project.status === 'Live'
                    ? 'bg-green-500/20 text-green-400 border-green-500/30'
                    : project.status === 'In Development'
                    ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                    : project.status === 'Completed'
                    ? 'bg-blue-500/20 text-blue-400 border-blue-500/30'
                    : 'bg-gray-500/20 text-gray-400 border-gray-500/30';

                return (
                  <Card key={project.title} className="bg-card/50 border-white/10 flex flex-col">
                    <CardHeader>
                      {projectImage && (
                         <div className="card-media relative aspect-video w-full rounded-lg overflow-hidden border border-white/10">
                            <Image
                                alt={projectImage.description}
                                className="object-cover"
                                data-ai-hint={projectImage.imageHint}
                                fill
                                src={projectImage.imageUrl}
                            />
                         </div>
                      )}
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <div className="flex justify-between items-start mb-2">
                        <div>
                            <h3 className="font-bold text-lg">{project.title}</h3>
                            <p className="text-sm text-muted-foreground">{project.category} &bull; {project.year}</p>
                        </div>
                        <Badge variant="outline" className={`text-xs whitespace-nowrap ${statusColor}`}>{project.status}</Badge>
                      </div>
                      <p className="text-muted-foreground text-sm mb-4">{project.summary}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex justify-between items-center">
                        <div className="text-xs text-muted-foreground">
                            <p>{project.client}</p>
                            <p>Duration: {project.duration}</p>
                        </div>
                        <div className='flex gap-2'>
                        {project.demoUrl && project.demoUrl !== '#' && (
                            <Button asChild size="sm" variant="outline">
                                <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live Site</a>
                            </Button>
                        )}
                        {project.repoUrl && project.repoUrl !== '#' && (
                            <Button asChild size="sm" variant="ghost">
                                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">View Code</a>
                            </Button>
                        )}
                         {project.detailsUrl && project.detailsUrl !== '#' && (
                            <Button asChild size="sm">
                                <Link href={project.detailsUrl}>Project Details</Link>
                            </Button>
                        )}
                        </div>
                    </CardFooter>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <section id="projects-cta" className="py-12 md:py-24">
          <div className="container px-4 md:px-6 text-center">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Start Your Project?
                </h2>
                <p className="mt-4 text-muted-foreground md:text-xl">
                Let’s discuss how I can help bring your vision to life with innovative AI solutions and robust full-stack development.
                </p>
                <div className="mt-8 flex flex-col gap-4 min-[400px]:flex-row justify-center">
                <Button asChild size="lg" variant="secondary">
                    <a href="mailto:contact@abdullahmubasir.com">
                    <Mail className="mr-2" /> Start a Conversation
                    </a>
                </Button>
                <Button asChild size="lg" variant="outline">
                    <Link href="/resume.pdf" target="_blank">Download Resume</Link>
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
