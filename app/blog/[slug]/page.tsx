import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/lib/sample-data";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((item) => item.slug === params.slug);
  if (!post) notFound();

  return (
    <article className="section">
      <div className="mx-auto max-w-4xl">
        <span className="rounded-md bg-ipu-mist px-3 py-2 text-sm font-black text-ipu-blue">{post.tag}</span>
        <h1 className="mt-5 text-4xl font-black md:text-6xl">{post.title}</h1>
        <p className="mt-3 text-sm font-bold text-slate-500">{post.author} · {post.date} · {post.readTime}</p>
        <Image src={post.thumbnail} alt={post.title} width={1200} height={720} className="mt-8 rounded-lg object-cover" />
        <p className="mt-8 text-lg leading-8 text-slate-700">{post.content}</p>
      </div>
    </article>
  );
}
