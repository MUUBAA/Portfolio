
import { AppHeader } from '@/components/app-header';
import { AppFooter } from '@/components/app-footer';
import { ContactForm } from '@/components/contact-form';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Github, Linkedin, Mail, Clock, Briefcase, Globe } from 'lucide-react';
import Link from 'next/link';

const contactData = {
  hero: {
    overline: 'Fullstack Developer & AI Engineer',
    title: 'From Academia to Application',
    paragraph: "FullStack Developer and AI Engineer, specializing in AI, web privacy, and data protection. I’m passionate about advancing research in generative AI and privacy-preserving systems, and I am open for research collaborations and freelance projects.",
    badges: [
      { text: '24h Response Time', icon: <Clock /> },
      { text: 'Open to Opportunities', icon: <Briefcase /> },
      { text: 'Remote Available', icon: <Globe /> },
    ]
  },
  profiles: {
    avatarUrl: '/assets/images/avatar-main.jpeg',
    name: 'Abdullah Mubasir',
    title: 'Fullstack Developer & AI Engineer',
    freelancerUrl: 'https://www.freelancer.com/u/AbdullahMubasir',
    socials: {
      linkedin: 'https://www.linkedin.com/in/abdullah-mubasir-496887250/',
      github: 'https://github.com/MUUBAA',
    }
  },
  contactInfo: {
    email: 'abduzayn709@gmail.com',
    location: 'Available for onsite, hybrid and remote work globally'
  },
  expertise: [
    { title: 'AI & Generative Models', details: 'LLMs, NLP, privacy-preserving ML' },
    { title: 'Web Privacy & Data Protection', details: 'ad/trackers, network/DOM analysis, compliance' },
    { title: 'Data Engineering & Research Pipelines', details: 'scalable/reproducible ETL for research' },
  ],
  faq: [
    {
      question: 'What is your current availability?',
      answer: 'I am currently available for new freelance projects and actively seeking research collaborations. My typical response time is within 24 hours.'
    },
    {
      question: 'Do you only work through Freelancer.com?',
      answer: 'While Freelancer.com is one platform I use, I am open to direct collaborations and projects through other channels as well. Feel free to reach out to discuss your needs.'
    },
    {
      question: 'What technologies are you most passionate about?',
      answer: 'I am most passionate about Python, PyTorch, and the entire Generative AI ecosystem. I also have a deep interest in building scalable, privacy-first systems using modern data engineering tools.'
    },
     {
      question: 'What is your primary research focus as a AI and web privacy?',
      answer: 'My PhD research is centered on the intersection of AI and web privacy. I develop novel techniques for detecting and mitigating online tracking, analyzing privacy policies at scale, and building privacy-preserving data systems.'
    }
  ]
}

export default function ContactPage() {
  return (
    <>
      <AppHeader />
      <main className="flex-grow w-full">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6 text-center max-w-4xl mx-auto">
            <div className="text-sm font-medium text-muted-foreground tracking-wider">{contactData.hero.overline}</div>
            <h1 className="mt-2 font-display text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl">
              {contactData.hero.title}
            </h1>
            <p className="mt-6 max-w-3xl mx-auto text-muted-foreground md:text-xl">{contactData.hero.paragraph}</p>
            <div className="mt-8 flex justify-center gap-2 sm:gap-4 flex-wrap">
              {contactData.hero.badges.map(badge => (
                <Badge key={badge.text} variant="secondary" className="gap-2 py-1.5 px-3 sm:px-4">
                  {badge.icon}
                  {badge.text}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-12 md:pb-24 lg:pb-32">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

              {/* Left Column: Contact Form */}
              <div className="lg:col-span-2">
                <Card className="p-4 sm:p-6 md:p-8 bg-card/50 border-white/10">
                  <CardHeader>
                    <CardTitle className="text-3xl">Send Me a Message</CardTitle>
                    <p className="text-muted-foreground pt-2">Have a research idea, project, or question? Fill out the form below.</p>
                  </CardHeader>
                  <CardContent>
                    <ContactForm />
                  </CardContent>
                </Card>
              </div>

              {/* Right Column: Info Sidebar */}
              <div className="space-y-8">
                {/* Professional Profiles */}
                <Card className="p-6 bg-card/50 border-white/10">
                    <CardHeader className="p-0">
                        <CardTitle className="text-xl mb-4">Professional Profiles</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0">
                        <div className="flex items-center gap-4">
                            <Avatar className="h-16 w-16">
                                <AvatarImage src={contactData.profiles.avatarUrl} alt={contactData.profiles.name} />
                                <AvatarFallback>AM</AvatarFallback>
                            </Avatar>
                            <div>
                                <h4 className="font-bold">{contactData.profiles.name}</h4>
                                <p className="text-sm text-muted-foreground">{contactData.profiles.title}</p>
                                <a href={contactData.profiles.freelancerUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-accent hover:underline">
                                    Hire Me on Freelancer.com
                                </a>
                            </div>
                        </div>
                        <div className="mt-4 grid grid-cols-2 gap-2">
                           <Link href={contactData.profiles.socials.linkedin} target='_blank' className='flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors'>
                             <Linkedin size={16} /> LinkedIn
                           </Link>
                           <Link href={contactData.profiles.socials.github} target='_blank' className='flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors'>
                             <Github size={16} /> GitHub
                           </Link>
                        </div>
                    </CardContent>
                </Card>

                {/* Contact Information */}
                <Card className="p-6 bg-card/50 border-white/10">
                    <CardHeader className="p-0">
                        <CardTitle className="text-xl mb-4">Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-3">
                       <div className="flex items-center gap-3">
                          <Mail size={16} className="text-muted-foreground" />
                          <div>
                            <p className="text-sm font-semibold">Email</p>
                            <a href={`mailto:${contactData.contactInfo.email}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{contactData.contactInfo.email}</a>
                          </div>
                       </div>
                       <div className="flex items-center gap-3">
                          <Globe size={16} className="text-muted-foreground" />
                          <div>
                            <p className="text-sm font-semibold">Location</p>
                            <p className="text-sm text-muted-foreground">{contactData.contactInfo.location}</p>
                          </div>
                       </div>
                    </CardContent>
                </Card>

                 {/* Key Expertise */}
                <Card className="p-6 bg-card/50 border-white/10">
                    <CardHeader className="p-0">
                        <CardTitle className="text-xl mb-4">Key Expertise</CardTitle>
                    </CardHeader>
                    <CardContent className="p-0 space-y-2">
                      {contactData.expertise.map(expert => (
                        <div key={expert.title}>
                          <h5 className="font-semibold">{expert.title}</h5>
                          <p className="text-sm text-muted-foreground">{expert.details}</p>
                        </div>
                      ))}
                    </CardContent>
                </Card>

              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-12 md:py-24 bg-black/20">
          <div className="container px-4 md:px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tighter text-center sm:text-4xl">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full mt-8">
              {contactData.faq.map((item, index) => (
                 <AccordionItem key={index} value={`item-${index}`}>
                   <AccordionTrigger className="text-lg text-left hover:no-underline">{item.question}</AccordionTrigger>
                   <AccordionContent className="text-muted-foreground text-base">
                     {item.answer}
                   </AccordionContent>
                 </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

      </main>
      <AppFooter />
    </>
  );
}
