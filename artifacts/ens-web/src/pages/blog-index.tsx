import { motion } from "framer-motion";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Clock } from "lucide-react";
import { blogPosts } from "@/data/posts";

export default function BlogIndex() {
  // Extract unique categories
  const categories = Array.from(new Set(blogPosts.map(post => post.category)));

  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stručni savjeti i novosti
            </h1>
            <p className="text-xl text-gray-600 mb-10">
              Budite u toku sa najnovijim poreznim izmjenama, zakonima i savjetima za optimizaciju vašeg poslovanja.
            </p>
            
            {/* Visual Categories */}
            <div className="flex flex-wrap justify-center gap-2">
              <span className="px-4 py-2 bg-primary text-white text-sm font-medium rounded-full cursor-pointer">
                Sve teme
              </span>
              {categories.map((cat, i) => (
                <span key={i} className="px-4 py-2 bg-white text-gray-600 hover:text-primary border border-gray-200 text-sm font-medium rounded-full cursor-pointer transition-colors">
                  {cat}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden bg-white flex flex-col group">
                <div className="relative h-56 overflow-hidden">
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-sm text-gray-500 mb-4 gap-4">
                    <span>{post.date}</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>
                  <p className="text-gray-600 mb-6 line-clamp-2 flex-grow">
                    {post.excerpt}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="inline-flex items-center font-semibold text-primary hover:text-primary/80 transition-colors mt-auto"
                  >
                    Pročitaj više <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
