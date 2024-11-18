'use client'
import Image from 'next/image';

export default function BlogPost() {
  // You can fetch the blog post data here, based on the slug.
  // Example data
  const post = {
    title: "How to Create a Successful Marketing Strategy",
    date: "October 15, 2024",
    author: "John Doe",
    authorImage: "/images/person6.jpg",
    content: `
      A marketing strategy is vital for any business that wants to grow and succeed in today's competitive environment.
      In this blog, we'll cover the key steps to create a successful marketing strategy, including understanding your audience,
      setting goals, and measuring results.
    `,
    coverImage: "/images/about.jpg",
    relatedPosts: [
      { title: "Understanding Customer Behavior", slug: "understanding-customer-behavior" },
      { title: "The Importance of Brand Identity", slug: "importance-of-brand-identity" },
    ],
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-16 pt-[150px]">
        {/* Blog Title and Cover Image */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-500 text-sm">Published on {post.date} by {post.author}</p>
          <Image
            src={post.coverImage}
            alt="Blog cover"
            width={1000}
            height={500}
            className="rounded-lg my-8"
          />
        </div>

        {/* Author Info */}
        <div className="flex items-center mb-8">
          <Image
            src={post.authorImage}
            alt={post.author}
            width={50}
            height={50}
            className="rounded-full mr-4"
          />
          <div>
            <h2 className="font-bold">{post.author}</h2>
            <p className="text-sm text-gray-500">Marketing Specialist</p>
          </div>
        </div>

        {/* Blog Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <p>{post.content}</p>
        </div>

        {/* Related Posts */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold mb-6">Related Posts</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {post.relatedPosts.map((related, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <a href={`/blog/${related.slug}`}>
                  <h4 className="text-xl font-bold mb-4">{related.title}</h4>
                  <p className="text-gray-500">Read more</p>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
