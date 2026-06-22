import { notFound } from "next/navigation";
import BlogArticle from "./BlogArticle";
import { blogPosts } from "@/data/content";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();
  return <BlogArticle post={post} />;
}
