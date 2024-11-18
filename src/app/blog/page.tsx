import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
    // Example blog data
    const blogPosts = [
        {
            id: 1,
            title: "The Importance of SEO in 2024",
            excerpt: "Learn why SEO is crucial for the success of your business in 2024 and beyond.",
            imgUrl: "/images/team.jpg",
            slug: "/blog/importance-of-seo",
            date: "October 12, 2024",
        },
        {
            id: 2,
            title: "How to Build a Scalable Web App",
            excerpt: "Discover the key elements to building scalable web applications with modern technologies.",
            imgUrl: "/images/process.jpg",
            slug: "/blog/build-scalable-web-app",
            date: "September 25, 2024",
        },
        {
            id: 3,
            title: "Top Digital Marketing Trends",
            excerpt: "Stay ahead of the competition with these top digital marketing trends you need to implement in your business.",
            imgUrl: "/images/about.jpg",
            slug: "/blog/digital-marketing-trends",
            date: "August 30, 2024",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Hero Section */}
            <section className="bg-blue-600 text-white py-16 pt-[150px]">
                <div className="container mx-auto text-center">
                    <h1 className="text-4xl font-bold mb-4">Our Blog</h1>
                    <p className="text-xl">
                        Stay updated with the latest trends, insights, and tips from the world of development, SEO, and marketing.
                    </p>
                </div>
            </section>

            {/* Blog Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {blogPosts.map((post) => (
                            <div key={post.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                                <Image src={post.imgUrl} alt={post.title} fill={true} className="w-full h-48 object-cover" />
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                    <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                                    <Link href={post.slug}>
                                        <div className="text-blue-600 font-semibold hover:underline">Read More</div>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="bg-blue-600 text-white py-12">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Want More Insights?</h2>
                    <p className="text-lg mb-6">
                        Subscribe to our newsletter to stay updated with the latest blog posts.
                    </p>
                    <div

                        className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition"
                    >
                        Subscribe Now
                    </div>
                </div>
            </section>

        </div>
    );
}
