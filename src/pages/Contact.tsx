
import React from 'react';
import Section from '@/components/Section';
import SectionTitle from '@/components/SectionTitle';
import PageLayout from '@/components/PageLayout';
import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <PageLayout>
      <Section>
        <SectionTitle 
          title="Get in Touch" 
          subtitle="Contact" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="text-muted-foreground mb-8">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision. Fill out the form, and I'll get back to you as soon as possible.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-lg bg-primary/10">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Email</h4>
                  <a href="mailto:your.email@example.com" className="text-muted-foreground hover:text-primary">
                    your.email@example.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-lg bg-primary/10">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Phone</h4>
                  <a href="tel:+11234567890" className="text-muted-foreground hover:text-primary">
                    +1 (123) 456-7890
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-lg bg-primary/10">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    San Francisco, California
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-lg bg-primary/10">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">Working Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Friday: 9am - 5pm
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="glass p-8 rounded-lg">
            <h3 className="font-serif text-2xl font-semibold mb-6">
              Send me a message
            </h3>
            <ContactForm />
          </div>
        </div>
      </Section>

      {/* Map Section (Embed a map or placeholder) */}
      <Section className="p-0 h-[400px] relative">
        <div className="absolute inset-0 bg-gray-300">
          {/* You would typically embed a map here */}
          <div className="flex items-center justify-center h-full bg-gray-200">
            <p className="text-muted-foreground">Map placeholder - Embed Google Maps or similar here</p>
          </div>
        </div>
      </Section>
    </PageLayout>
  );
};

export default Contact;
