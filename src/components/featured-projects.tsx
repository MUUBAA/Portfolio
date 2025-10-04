
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { projects } from '@/lib/projects-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight } from 'lucide-react';

export function FeaturedProjects() {
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section id="projects" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Featured Projects
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            A selection of my recent work.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {featuredProjects.map((project) => {
            const projectImage = PlaceHolderImages.find((p) => p.id === project.imageId);
            const statusColor =
              project.status === 'Live'
                ? 'bg-green-500/20 text-green-400 border-green-500/30'
                : project.status === 'In Development'
                ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                : 'bg-blue-500/20 text-blue-400 border-blue-500/30';

            return (
              <Card key={project.title} className="bg-card/50 border-white/10 flex flex-col hover:bg-card/70 hover:-translate-y-2 transition-transform duration-300">
                <CardHeader>
                  {projectImage && (
                     <div className="relative aspect-video w-full rounded-lg overflow-hidden border border-white/10">
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
                  <div className="flex justify-between items-center mb-2">
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <Badge variant="outline" className={`text-xs ${statusColor}`}>{project.status}</Badge>
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
                <CardFooter className="flex gap-2">
                  {project.demoUrl && <Button asChild variant="outline">
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live Demo</a>
                  </Button>}
                  {project.repoUrl && <Button asChild variant="ghost">
                     <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
                  </Button>}
                </CardFooter>
              </Card>
            );
          })}
        </div>
        <div className="mt-12 text-center">
            <Button asChild variant="link" className="text-accent">
                <Link href="/projects">
                    View All Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
