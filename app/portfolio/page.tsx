import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Github, Globe } from "lucide-react";
import Link from 'next/link';
import Image from 'next/image';
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio | Freeman Development',
  description: 'Explore our web development projects showcasing modern, responsive websites and applications built with the latest technologies.',
}

export default function PortfolioPage() {
  const projects = [
    {
      title: "freeman's collision – auto body shop website",
      description: "modern, responsive auto body shop website built with next.js, shadcn, and tailwind css, featuring smooth animations and a dark mode toggle",
      tags: ["next.js", "tailwind", "framer motion"],
      image: "/freeman-collision.jpg",
      liveUrl: "https://freeman-collision.vercel.app/",
      githubUrl: "https://github.com/hunterrr27/freeman-collision"
    },
    {
      title: "e-commerce website",
      description: "full-featured online store with payment processing, inventory management, and order tracking",
      tags: ["React", "Stripe", "Node.js", "MongoDB"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "fitness tracking app",
      description: "mobile-first web application for tracking workouts, nutrition, and progress with social features",
      tags: ["React Native", "Firebase", "Redux", "TypeScript"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "restaurant platform",
      description: "responsive website with online ordering system, reservation management, and menu customization",
      tags: ["Next.js", "Sanity.io", "Stripe", "TailwindCSS"],
      image: "/api/placeholder/600/400",
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <div className="container mx-auto px-4 space-y-24 py-12">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center space-y-6 pt-12">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
          our work
        </h1>
        <p className="text-xl text-muted-foreground max-w-[600px]">
          showcasing our best web development projects
        </p>
      </section>

      {/* Portfolio Grid */}
      <section className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className="overflow-hidden transition-transform duration-300 hover:scale-[1.02] group"
          >
            <div className="relative h-48">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/60 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
                    <Globe className="h-5 w-5" />
                  </Button>
                </Link>
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="icon" className="rounded-full bg-white/10 hover:bg-white/20">
                    <Github className="h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
            <CardHeader>
              <CardTitle className="text-xl capitalize">{project.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="bg-muted px-2 py-1 rounded-md text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-6 py-12">
        <h2 className="text-3xl font-bold">ready to start your project?</h2>
        <p className="text-muted-foreground max-w-[600px] mx-auto">
          let&apos;s create something amazing together
        </p>
        <Button size="lg" asChild>
          <Link href="/contact">
            get in touch
          </Link>
        </Button>
      </section>
    </div>
  );
}