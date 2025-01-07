import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, Video, MessageSquare } from "lucide-react";
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Consultation | Freeman Development',
  description: 'Schedule a free consultation with Freeman Development to discuss your web development project needs and goals.',
}

export default function BookPage() {
  return (
    <div className="container mx-auto px-4 space-y-24 py-12">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-6 pt-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
          book a consultation
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px]">
          schedule a free 30-minute consultation to discuss your project
        </p>
      </section>

      {/* Consultation Types */}
      <section className="space-y-6">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Video className="h-6 w-6 mb-2" />
              <CardTitle className="text-lg">video call</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                meet face-to-face virtually to discuss your project in detail
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <MessageSquare className="h-6 w-6 mb-2" />
              <CardTitle className="text-lg">phone call</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                discuss your needs over a phone consultation
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Calendar className="h-6 w-6 mb-2" />
              <CardTitle className="text-lg">flexible scheduling</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                pick a time that works best for your schedule
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Booking Form */}
      <section className="bg-muted py-12 -mx-4 px-4">
        <div className="max-w-[600px] mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-center">select your slot</h2>
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <select className="w-full p-2 rounded-md border">
                <option value="">Select Meeting Type</option>
                <option value="video">Video Call</option>
                <option value="phone">Phone Call</option>
              </select>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-2 rounded-md border"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="date"
                className="w-full p-2 rounded-md border"
              />
              <select className="w-full p-2 rounded-md border">
                <option value="">Select Time Slot</option>
                <option value="9">9:00 AM</option>
                <option value="10">10:00 AM</option>
                <option value="11">11:00 AM</option>
                <option value="13">1:00 PM</option>
                <option value="14">2:00 PM</option>
                <option value="15">3:00 PM</option>
                <option value="16">4:00 PM</option>
              </select>
            </div>
            <textarea
              placeholder="Tell us about your project (optional)"
              rows={4}
              className="w-full p-2 rounded-md border"
            />
            <Button size="lg" className="w-full">
              schedule consultation
            </Button>
          </form>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">frequently asked questions</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-[900px] mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">what should i prepare?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                have a general idea of your project goals, timeline, and budget. any examples of websites you like are also helpful.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">is it really free?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                yes, the initial 30-minute consultation is completely free with no obligations.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">what happens next?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                after our call, we&apos;ll send you a detailed proposal based on your requirements within 48 hours.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">can i reschedule?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                yes, you can reschedule or cancel your consultation up to 2 hours before the scheduled time.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}