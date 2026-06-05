// ============================================================
// Blog Page — Displays the blog listing/landing page
// This is a thin wrapper that delegates all the rendering to
// a client component (BlogContent) for interactivity.
// Route: /blog
// ============================================================

// Import Metadata for setting the page title and SEO description
import type { Metadata } from 'next'

// Import the client component that contains the actual blog UI
// (category filtering, blog cards, etc.)
import BlogContent from './blog-content'

// Metadata for SEO — sets <title> and <meta name="description">
export const metadata: Metadata = {
  title: 'Blog — Web Design, SEO & Digital Marketing Insights | Alffy',
  description: 'Practical articles on web design, SEO, branding, and digital marketing for East African businesses. Written by the Alffy team in Kampala, Uganda.',
}

// Main component for the Blog page — just renders BlogContent.
// BlogContent is a 'use client' component because it needs
// React state (useState) for the category filter.
export default function BlogPage() {
  return <BlogContent />
}
