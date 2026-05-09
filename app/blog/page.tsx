import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/sample-data";

export default function BlogPage() {
  return (
    <section className="section">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm font-black uppercase tracking-[0.18em] text-ipu-sky">Blog</p>
        <h1 className="mt-3 text-4xl font-black md:text-6xl">Counselling reads for smarter choices</h1>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {blogPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="overflow-hidden rounded-lg border border-blue-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-glow">
              <Image src={post.thumbnail} alt={post.title} width={800} height={520} className="h-52 w-full object-cover" />
              <div className="p-5">
                <span className="rounded-md bg-ipu-mist px-2 py-1 text-xs font-black text-ipu-blue">{post.tag}</span>
                <h2 className="mt-4 text-xl font-black">{post.title}</h2>
                <p className="mt-2 text-sm leading-6 text-slate-600">{post.excerpt}</p>
                <p className="mt-4 text-xs font-bold text-slate-500">{post.author} · {post.date} · {post.readTime}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
