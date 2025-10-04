import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { expertiseData } from '@/lib/expertise-data';
import { CheckCircle2 } from 'lucide-react';

export function ResearchExpertise() {
  return (
    <section id="expertise" className="py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Research Expertise
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Deep dive into my specializations.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-1 lg:grid-cols-3">
          {expertiseData.map((expertise) => (
            <Card key={expertise.category} className="bg-card/50 border-white/10 flex flex-col">
              <CardHeader className="flex flex-row items-center gap-4">
                {expertise.icon}
                <CardTitle>{expertise.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {expertise.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 mt-0.5 shrink-0 text-accent" />
                      <span className="text-muted-foreground">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
