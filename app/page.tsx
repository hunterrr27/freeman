import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Code, Rocket, Zap } from "lucide-react";
import { Metadata } from 'next'
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Freeman Development & Design',
  description: 'Innovative web design and development services tailored to your brand\'s needs. Expert solutions in Next.js, React, and modern web technologies.',
}

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 space-y-24 py-12">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-6 pt-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
          freeman development & design
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px]">
          innovative web design, tailored to your brand&apos;s needs
        </p>
        <Link href="/contact">
          <Button size="lg" className="mt-6">
            start your project <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </section>

      {/* USP Section */}
      <section className="space-y-6">
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <Rocket className="h-6 w-6 mb-2" />
              <CardTitle className="text-lg">fast & optimized</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                lightning-fast websites built with performance and seo in mind
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Code className="h-6 w-6 mb-2" />
              <CardTitle className="text-lg">responsive design</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                beautifully crafted websites that work seamlessly across all devices
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Zap className="h-6 w-6 mb-2" />
              <CardTitle className="text-lg">rapid delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                efficient development process to get your site live quickly
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-muted py-12 -mx-4 px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-3xl font-bold">100%</h3>
            <p className="text-muted-foreground">client satisfaction</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">10+</h3>
            <p className="text-muted-foreground">websites launched</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">24/7</h3>
            <p className="text-muted-foreground">support available</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 py-12">
        <h2 className="text-3xl font-bold">ready to transform your online presence?</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          let&apos;s create a website that drives results for your business
        </p>
        <Link href="/contact">
          <Button size="lg" variant="outline">
            book a free consultation
          </Button>
        </Link>
      </section>
    </div>
  );
}