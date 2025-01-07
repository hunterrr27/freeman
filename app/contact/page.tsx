import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Freeman Development',
  description: 'Get in touch with Freeman Development for your next web project. We\'re here to help bring your digital vision to life.',
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 space-y-24 py-12">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-6 pt-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
          let&apos;s connect
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px]">
          ready to start your next project? we&apos;re here to help
        </p>
      </section>

      {/* Contact Methods */}
      <section className="space-y-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card>
            <CardHeader>
              <Mail className="h-6 w-6 mb-2" />
              <CardTitle className="text-lg">email</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                hello@freeman.dev
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Phone className="h-6 w-6 mb-2" />
              <CardTitle className="text-lg">phone</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                (555) 123-4567
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <MapPin className="h-6 w-6 mb-2" />
              <CardTitle className="text-lg">location</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                San Francisco, CA
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Clock className="h-6 w-6 mb-2" />
              <CardTitle className="text-lg">hours</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                Mon-Fri: 9am-6pm PST
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-muted py-12 -mx-4 px-4">
        <div className="max-w-[600px] mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-center">send us a message</h2>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 rounded-md border"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 rounded-md border"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="w-full p-2 rounded-md border"
            />
            <textarea
              placeholder="Message"
              rows={4}
              className="w-full p-2 rounded-md border"
            />
            <Button size="lg" className="w-full">
              send message
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}