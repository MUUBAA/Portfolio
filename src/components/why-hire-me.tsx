import { Star, Code, Cloud, BrainCircuit, Globe, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const features = [
  {
    icon: <Star className="h-8 w-8 text-accent" />,
    title: 'Full Stack Developer',
    description: '10+ live projects deployed successfully across healthcare, disaster management, and e-commerce.',
  },
  {
    icon: <Code className="h-8 w-8 text-accent" />,
    title: '10+ Successful Projects',
    description: 'Extensive experience in backend development and creating robust REST APIs.',
  },
  {
    icon: <Cloud className="h-8 w-8 text-accent" />,
    title: 'Cloud & DevOps Expertise',
    description: 'Proficient with AWS, Docker, and setting up CI/CD pipelines for efficient deployment.',
  },
  {
    icon: <BrainCircuit className="h-8 w-8 text-accent" />,
    title: 'LLM & RAG Specialist',
    description: 'Specializing in Large Language Models and Retrieval-Augmented Generation.',
  },
  {
    icon: <Globe className="h-8 w-8 text-accent" />,
    title: 'Trusted by Global Clients',
    description: 'Experience working with clients from various industries around the world.',
  },
  {
    icon: <GraduationCap className="h-8 w-8 text-accent" />,
    title: 'Computer Science Graduate',
    description: 'Certified in AWS, Python (NPTEL), and C (Udemy), with strong theoretical and practical foundation.',
  },
];

export function WhyHireMe() {
  return (
    <section id="why-hire-me" className="py-12 md:py-24 lg:py-32 bg-black/20">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Why Hire Me?
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            A Foundation of Trust and Excellence
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title} className="bg-card/50 border-white/10">
              <CardHeader className="flex flex-row items-center gap-4">
                {feature.icon}
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
