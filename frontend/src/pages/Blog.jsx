import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import Breadcrumbs from '../components/Breadcrumbs';
import { blogPosts } from '../data/mock';

const Blog = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <Breadcrumbs items={[{ label: 'Blog' }]} />

        <div className="mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#333333] mb-6">
            Blog y recursos
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl leading-relaxed">
            Guías, consejos y conocimiento sobre madera de pino, clasificación, aplicaciones y mejores prácticas.
          </p>
        </div>

        {/* Featured Post */}
        {blogPosts.length > 0 && (
          <Card className="mb-16 shadow-xl border-2 hover:border-[#2A5C2A] transition-colors duration-300 group">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-[16/9] lg:aspect-auto bg-gray-200 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800"
                    alt={blogPosts[0].title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-12 flex flex-col justify-center">
                  <div className="inline-block px-3 py-1 bg-[#2A5C2A] text-white text-xs font-semibold rounded-full mb-4 w-fit">
                    {blogPosts[0].category}
                  </div>
                  <h2 className="text-3xl font-bold text-[#333333] mb-4 group-hover:text-[#2A5C2A] transition-colors duration-200">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${blogPosts[0].slug}`}>
                    <Button className="bg-[#2A5C2A] hover:bg-[#1e4a1e] text-white">
                      Leer artículo completo
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Other Posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post) => (
            <Card key={post.id} className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-[#2A5C2A]">
              <CardContent className="p-0">
                <div className="aspect-[16/9] bg-gray-200 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600"
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6 space-y-4">
                  <div className="inline-block px-3 py-1 bg-[#f8f9f8] text-[#2A5C2A] text-xs font-semibold rounded-full">
                    {post.category}
                  </div>
                  <h3 className="text-xl font-bold text-[#333333] group-hover:text-[#2A5C2A] transition-colors duration-200">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500 pt-4 border-t border-gray-100">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{new Date(post.date).toLocaleDateString('es-MX', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Link to={`/blog/${post.slug}`}>
                    <Button variant="ghost" className="w-full text-[#2A5C2A] hover:bg-[#2A5C2A] hover:text-white group-hover:bg-[#2A5C2A] group-hover:text-white transition-colors duration-200">
                      Leer más
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
