import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import Breadcrumbs from '../components/Breadcrumbs';
import { blogPosts } from '../data/mock';

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-[#d7ba92] mb-4">Artículo no encontrado</h1>
          <Link to="/blog">
            <Button className="bg-[#260801] hover:bg-[#1e4a1e] text-white">
              Volver al blog
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug);
  const previousPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;
  const nextPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <Breadcrumbs
          items={[
            { label: 'Blog', path: '/blog' },
            { label: post.title }
          ]}
        />

        {/* Post Header */}
        <article>
          <div className="mb-8">
            <div className="inline-block px-4 py-2 bg-[#260801] text-white text-sm font-semibold rounded-full mb-6">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#d7ba92] mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center space-x-6 text-[#40210d]">
              <div className="flex items-center space-x-2">
                <Calendar className="w-5 h-5" />
                <span>
                  {new Date(post.date).toLocaleDateString('es-MX', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5" />
                <span>{post.readTime} de lectura</span>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-[16/9] bg-gray-200 rounded-2xl overflow-hidden mb-12 shadow-xl">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200"
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Post Content */}
          <div
            className="prose prose-lg max-w-none"
            style={{
              color: '#d7ba92',
              lineHeight: '1.8'
            }}
          >
            <div className="text-xl text-[#40210d] leading-relaxed mb-12 pb-8 border-b border-gray-200">
              {post.excerpt}
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: post.content }}
              className="space-y-6"
              style={{
                fontSize: '1.125rem',
                color: '#4a5568'
              }}
            />
          </div>
        </article>

        {/* CTA Card */}
        <Card className="my-16 bg-gradient-to-br from-[#f8f9f8] to-[#f0f4f0] border-2 border-[#260801]/20">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold text-[#d7ba92] mb-4">
              ¿Tienes preguntas sobre madera de pino?
            </h3>
            <p className="text-[#40210d] mb-6">
              Nuestro equipo está listo para asesorarte
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contacto">
                <Button size="lg" className="bg-[#260801] hover:bg-[#1e4a1e] text-white w-full sm:w-auto">
                  Contactar
                </Button>
              </Link>
              <Link to="/cotizar">
                <Button size="lg" variant="outline" className="border-[#260801] text-[#260801] hover:bg-[#260801] hover:text-white w-full sm:w-auto">
                  Solicitar cotización
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="grid md:grid-cols-2 gap-6 mt-16 pt-8 border-t border-gray-200">
          {previousPost ? (
            <Link to={`/blog/${previousPost.slug}`}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-[#260801] group">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-2 text-[#260801] mb-3">
                    <ArrowLeft className="w-4 h-4" />
                    <span className="text-sm font-semibold">Artículo anterior</span>
                  </div>
                  <h4 className="text-lg font-bold text-[#d7ba92] group-hover:text-[#260801] transition-colors duration-200">
                    {previousPost.title}
                  </h4>
                </CardContent>
              </Card>
            </Link>
          ) : (
            <div />
          )}

          {nextPost && (
            <Link to={`/blog/${nextPost.slug}`} className={!previousPost ? 'md:col-start-2' : ''}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-2 hover:border-[#260801] group">
                <CardContent className="p-6 text-right">
                  <div className="flex items-center justify-end space-x-2 text-[#260801] mb-3">
                    <span className="text-sm font-semibold">Siguiente artículo</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <h4 className="text-lg font-bold text-[#d7ba92] group-hover:text-[#260801] transition-colors duration-200">
                    {nextPost.title}
                  </h4>
                </CardContent>
              </Card>
            </Link>
          )}
        </div>

        {/* Back to Blog */}
        <div className="mt-12 text-center">
          <Link to="/blog">
            <Button variant="outline" className="border-[#260801] text-[#260801] hover:bg-[#260801] hover:text-white">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Volver al blog
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
