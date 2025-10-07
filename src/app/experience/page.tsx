
'use client';

import { useState } from 'react';
import { AppHeader } from '@/components/app-header';
import { AppFooter } from '@/components/app-footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { experienceData } from '@/lib/experience-data';
import Link from 'next/link';
import { Briefcase, GraduationCap, Award, Wrench, Download, Mail, ArrowRight } from 'lucide-react';

export default function ExperiencePage() {
  const [activeTab, setActiveTab] = useState('work');

  return (
    <>
      <AppHeader />
      <main className="flex-grow w-full">
        {/* Hero Section */}
        <section className="py-12 md:py-24 text-center">
          <div className="container px-4 md:px-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Professional Experience
            </h1>
            <p className="mt-4 max-w-3xl mx-auto text-muted-foreground md:text-xl">
              A comprehensive overview of my journey in AI, software engineering, and continuous learning. From academic excellence to real-world impact, each experience has shaped my expertise.
            </p>
            <div className="mt-8 flex flex-col gap-4 min-[400px]:flex-row justify-center">
              <Button asChild size="lg" variant="outline">
                <Link href="https://abdullah-mubasir-ats-calibri-improved-1.tiiny.site" target="_blank">
                  <Download className="mr-2" /> Download Resume
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <a href={`mailto:${experienceData.contactEmail}`}>
                  <Mail className="mr-2" /> Get in Touch
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Sticky Tabs */}
        <div className="sticky top-16 z-30 bg-background/80 backdrop-blur-lg border-b border-border">
          <div className="container px-4 md:px-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
                <TabsTrigger value="work" className="py-3 text-sm md:text-base"><Briefcase className='mr-2' />Work</TabsTrigger>
                <TabsTrigger value="education" className="py-3 text-sm md:text-base"><GraduationCap className='mr-2' />Education</TabsTrigger>
                <TabsTrigger value="certs" className="py-3 text-sm md:text-base"><Award className='mr-2' />Certs</TabsTrigger>
                <TabsTrigger value="skills" className="py-3 text-sm md:text-base"><Wrench className='mr-2' />Skills</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>

        {/* Content Section */}
        <section className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsContent value="work">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Work Experience</h2>
                  {experienceData.work.map((job, index) => (
                    <Card key={index} className="bg-card/50 border-white/10">
                      <CardHeader>
                        <div className="flex justify-between items-start">
                          <div>
                            <CardTitle className="text-xl md:text-2xl">{job.role}</CardTitle>
                            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-2 text-sm text-muted-foreground">
                              <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-primary">{job.company}</a>
                              <span>{job.location}</span>
                              <span>{job.startDate} – {job.endDate || 'Present'}</span>
                            </div>
                          </div>
                          <Badge variant="outline" className="whitespace-nowrap">{job.type}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <p>{job.summary}</p>
                        <div>
                          <h4 className="font-semibold mb-2">Key Achievements:</h4>
                          <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                            {job.achievements.map((ach, i) => <li key={i}>{ach}</li>)}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {job.tech.map((t, i) => <Badge key={i} variant="secondary">{t}</Badge>)}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              <TabsContent value="education">
                 <div className="space-y-8">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Education</h2>
                  {experienceData.education.map((edu, index) => (
                    <Card key={index} className="bg-card/50 border-white/10">
                      <CardHeader>
                         <CardTitle className="text-xl md:text-2xl">{edu.school}</CardTitle>
                         <p className="text-muted-foreground">{edu.startDate} – {edu.endDate || 'Present'}</p>
                      </CardHeader>
                      <CardContent>
                        <h3 className="font-semibold text-lg">{edu.degree}</h3>
                        <ul className="list-disc list-inside space-y-1 mt-2 text-muted-foreground">
                          {edu.details.map((detail, i) => <li key={i}>{detail}</li>)}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                 </div>
              </TabsContent>
              <TabsContent value="certs">
                 <div className="space-y-8">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Certifications</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                      {experienceData.certs.map((cert, index) => (
                        <Card key={index} className="bg-card/50 border-white/10 flex flex-col items-center text-center p-6">
                            <Award className="h-12 w-12 text-accent mb-4" />
                            <h3 className="font-bold text-lg">{cert.title}</h3>
                            <p className="text-muted-foreground text-sm mt-1">{cert.issuer} • {cert.year}</p>
                            {cert.credentialUrl && (
                                <Button asChild variant="link" className="mt-4">
                                    <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
                                        View Credential
                                    </a>
                                </Button>
                            )}
                        </Card>
                      ))}
                    </div>
                 </div>
              </TabsContent>
              <TabsContent value="skills">
                <div className="space-y-8">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Core Skills</h2>
                  <div className="grid gap-8 md:grid-cols-2">
                    {experienceData.skills.map((group, index) => (
                      <Card key={index} className="bg-card/50 border-white/10">
                        <CardHeader>
                          <CardTitle className="text-xl">{group.group}</CardTitle>
                        </CardHeader>
                        <CardContent className="flex flex-wrap gap-2">
                          {group.items.map((skill, i) => <Badge key={i} variant="secondary">{skill}</Badge>)}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24 bg-black/20">
            <div className="container px-4 md:px-6 text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Leverage This Experience?</h2>
                    <p className="mt-4 text-muted-foreground md:text-xl">
                        With a strong foundation in AI, data privacy, and advanced research methodologies—and proven results across multiple projects—I’m ready to contribute cutting-edge solutions to your next challenge.
                    </p>
                    <div className="mt-8 flex flex-col gap-4 min-[400px]:flex-row justify-center">
                        <Button asChild size="lg" variant="secondary">
                            <a href={`mailto:${experienceData.contactEmail}`}>Let’s Discuss Your Project</a>
                        </Button>
                        <Button asChild size="lg" variant="outline">
                            <Link href="/projects">
                                View My Work <ArrowRight className="ml-2" />
                            </Link>
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
