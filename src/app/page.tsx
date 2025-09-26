import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

import { AppHeader } from '@/components/app-header';
import { AppFooter } from '@/components/app-footer';
import { ContactForm } from '@/components/contact-form';
import { AiSuggestion } from '@/components/ai-suggestion';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function Home() {
  const contactImage = PlaceHolderImages.find((p) => p.id === 'contact-office-meeting');

  return (
    <>
      <AppHeader />
      <main className="flex-grow w-full">
        <section className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <Card className="overflow-hidden">
              <div className="grid gap-10 lg:grid-cols-2">
                <div className="p-6 sm:p-8 lg:p-12 space-y-8 order-2 lg:order-1">
                  <div className="space-y-4">
                    <AiSuggestion
                      originalContent="Let's talk"
                      as="h1"
                      className="text-4xl font-bold tracking-tighter sm:text-5xl"
                    />
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                      We&apos;re here to help you with any questions you may have. Reach out to us and we&apos;ll respond
                      as soon as we can.
                    </p>
                  </div>
                  <Separator />
                  <div className="grid gap-4 text-sm">
                    <div className="flex items-start gap-4">
                      <Mail className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <a href="mailto:contact@seera.com" className="text-muted-foreground hover:text-primary transition-colors">
                          contact@seera.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <Phone className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Phone</h3>
                        <a href="tel:+1-234-567-890" className="text-muted-foreground hover:text-primary transition-colors">
                          +1 (234) 567-890
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <MapPin className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold">Office</h3>
                        <p className="text-muted-foreground">123 Innovation Drive, Tech City, 54321</p>
                      </div>
                    </div>
                  </div>
                  <Separator />
                  <div className="space-y-4">
                    <AiSuggestion
                      originalContent="Get in touch"
                      as="h2"
                      className="text-3xl font-bold tracking-tighter"
                    />
                    <ContactForm />
                  </div>
                </div>

                <div className="relative order-1 lg:order-2 h-64 lg:h-auto">
                  {contactImage && (
                    <Image
                      alt={contactImage.description}
                      className="object-cover"
                      data-ai-hint={contactImage.imageHint}
                      fill
                      src={contactImage.imageUrl}
                    />
                  )}
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>
      <AppFooter />
    </>
  );
}
