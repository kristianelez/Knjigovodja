import { useParams, Link } from "wouter";
import { ArrowLeft, Clock, User, Calendar } from "lucide-react";
import { blogPosts } from "@/data/posts";
import NotFound from "./not-found";
import { SEO, SITE } from "@/components/SEO";

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return <NotFound />;
  }

  const postUrl = `${SITE.url}/blog/${post.slug}`;
  const articleJsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "headline": post.title,
      "description": post.excerpt,
      "image": `${SITE.url}${post.image}`,
      "datePublished": post.date,
      "dateModified": post.date,
      "author": { "@type": "Person", "name": post.author },
      "publisher": {
        "@type": "Organization",
        "name": "ENS d.o.o.",
        "logo": { "@type": "ImageObject", "url": `${SITE.url}/favicon.svg` }
      },
      "mainEntityOfPage": { "@type": "WebPage", "@id": postUrl },
      "articleSection": post.category,
      "inLanguage": "bs-BA"
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Početna", "item": SITE.url + "/" },
        { "@type": "ListItem", "position": 2, "name": "Blog", "item": SITE.url + "/blog" },
        { "@type": "ListItem", "position": 3, "name": post.title, "item": postUrl }
      ]
    }
  ];

  // Format content paragraphs
  const paragraphs = post.content.split('\n\n').filter(p => p.trim() !== '');

  return (
    <article className="pt-24 pb-20 bg-white min-h-screen">
      <SEO
        title={`${post.title} | ENS d.o.o. Blog`}
        description={post.excerpt}
        path={`/blog/${post.slug}`}
        image={`${SITE.url}${post.image}`}
        type="article"
        keywords={`${post.category.toLowerCase()}, knjigovodstvo BiH, ${post.title.toLowerCase()}`}
        publishedTime={post.date}
        author={post.author}
        jsonLd={articleJsonLd}
      />
      {/* Hero Image Header */}
      <div className="w-full h-[40vh] md:h-[50vh] relative">
        <img 
          src={post.image} 
          alt={post.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container px-4 text-center">
            <span className="px-4 py-1.5 bg-primary text-white text-sm font-bold rounded-full uppercase tracking-wider mb-6 inline-block">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white max-w-4xl mx-auto leading-tight">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 -mt-8 relative z-10 max-w-4xl">
        <div className="bg-white rounded-t-3xl shadow-sm p-8 md:p-12 border-t border-x border-gray-100">
          
          <div className="mb-10 pb-8 border-b border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
            <Link 
              href="/blog" 
              className="inline-flex items-center text-sm font-semibold text-gray-500 hover:text-primary transition-colors"
            >
              <ArrowLeft className="mr-2 w-4 h-4" /> Nazad na blog
            </Link>

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 font-medium">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4 text-primary" />
                {post.author}
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-primary" />
                {post.date}
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                {post.readTime}
              </div>
            </div>
          </div>

          <div className="prose prose-lg prose-gray max-w-none prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80">
            <p className="text-xl text-gray-800 font-medium mb-8 leading-relaxed">
              {post.excerpt}
            </p>
            
            {paragraphs.map((p, i) => {
              // Add a fake subheading for structure on longer texts
              if (i === 2 && paragraphs.length > 3) {
                return (
                  <div key={i}>
                    <h3>Važnost stručnog savjetovanja</h3>
                    <p>{p}</p>
                  </div>
                );
              }
              return <p key={i}>{p}</p>;
            })}
          </div>

          {/* Footer of post */}
          <div className="mt-16 pt-8 border-t border-gray-100 flex items-center justify-between">
            <p className="text-gray-500 italic">Podijelite ovaj članak sa saradnicima.</p>
            <div className="flex gap-4">
              {/* Dummy share buttons */}
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">
                in
              </button>
              <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors">
                f
              </button>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
