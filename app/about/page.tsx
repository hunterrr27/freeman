import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Heart, Coffee, ArrowRight } from "lucide-react";
import { Metadata } from 'next'
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Us | Freeman Development',
  description: 'Learn about Freeman Development\'s expert team of web developers and designers crafting digital experiences with passion and precision.',
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 space-y-24 py-12">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-6 pt-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
          about freeman development
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px]">
          crafting digital experiences with passion and precision
        </p>
      </section>

      {/* Team Values */}
      <section className="space-y-6">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Users className="h-6 w-6 mb-2" />
              <CardTitle className="text-lg">our team</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                expert developers and designers working together to bring your vision to life
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Heart className="h-6 w-6 mb-2" />
              <CardTitle className="text-lg">our passion</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                dedicated to creating websites that make a lasting impact for our clients
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Coffee className="h-6 w-6 mb-2" />
              <CardTitle className="text-lg">our process</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                collaborative approach ensuring your project exceeds expectations
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Story Section */}
      <section className="bg-muted py-12 -mx-4 px-4">
        <div className="max-w-[800px] mx-auto space-y-6">
          <h2 className="text-3xl font-bold text-center">our story</h2>
          <p className="text-muted-foreground text-center">
            founded in 2025, freeman development has grown from a solo operation to a full-service web development agency. we&apos;ve helped dozens of businesses establish their digital presence and achieve their online goals.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 py-12">
        <h2 className="text-3xl font-bold">want to know more?</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          reach out to learn more about how we can help your business grow
        </p>
        <Link href="/contact">
          <Button size="lg" >
            get in touch <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </section>
    </div>
  );
}