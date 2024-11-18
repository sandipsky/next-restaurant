export default function Services() {
    return (
      <div className="min-h-screen bg-gray-100">
        {/* Hero Section */}
        <section className="bg-blue-600 text-white py-20 pt-[150px]">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Our Services</h1>
            <p className="text-xl">
              We provide a wide range of services to help your business grow and succeed. From development to marketing strategies, we have you covered.
            </p>
          </div>
        </section>
  
        {/* Services Section */}
        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Service 1 */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-blue-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6M12 15l-3-3 3-3 3 3-3 3zm9-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Web Development</h3>
                <p className="text-gray-600 text-center">
                  We create high-quality websites and web applications that meet your business needs and help you stay ahead of the competition.
                </p>
              </div>
  
              {/* Service 2 */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-green-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3M9 12a9 9 0 0118 0 9 9 0 11-18 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">SEO Optimization</h3>
                <p className="text-gray-600 text-center">
                  Improve your website’s visibility on search engines and attract more traffic to grow your business organically.
                </p>
              </div>
  
              {/* Service 3 */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-yellow-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11V7a5 5 0 1110 0v4m-7 4v2a5 5 0 0010 0v-2" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Digital Marketing</h3>
                <p className="text-gray-600 text-center">
                  Our team crafts effective digital marketing strategies to enhance your online presence and boost your brand’s reach.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Additional Services Section */}
        <section className="bg-gray-50 py-16">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Additional Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {/* Service 4 */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-indigo-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6h6v13m-2-5l4-4m0 0l4-4M4 4l16 16" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Graphic Design</h3>
                <p className="text-gray-600 text-center">
                  Eye-catching designs that speak to your audience and communicate your brand’s message effectively.
                </p>
              </div>
  
              {/* Service 5 */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-pink-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12l3 3-3 3M16 12l-3 3 3 3" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Social Media Management</h3>
                <p className="text-gray-600 text-center">
                  We help you manage and grow your social media accounts to connect with your audience and build your brand.
                </p>
              </div>
  
              {/* Service 6 */}
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <div className="mb-4 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18V6m12 12V6M6 9h12M6 15h12" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-center">Content Creation</h3>
                <p className="text-gray-600 text-center">
                  Create compelling and valuable content that attracts, engages, and delights your audience.
                </p>
              </div>
            </div>
          </div>
        </section>

         {/* Pricing Packages Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Business Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Basic Package */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-4">Basic</h3>
              <p className="text-center text-gray-600 mb-6">Rs.999 / month</p>
              <ul className="text-gray-600 mb-4">
                <li className="mb-2">5 Web Pages</li>
                <li className="mb-2">Basic SEO Setup</li>
                <li className="mb-2">1 Social Media Account</li>
                <li className="mb-2">Basic Analytics Reporting</li>
              </ul>
              <div className="text-center">
                <a href="/contact" className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
                  Get Started
                </a>
              </div>
            </div>

            {/* Standard Package */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-4">Standard</h3>
              <p className="text-center text-gray-600 mb-6">$Rs.1999 / month</p>
              <ul className="text-gray-600 mb-4">
                <li className="mb-2">10 Web Pages</li>
                <li className="mb-2">Advanced SEO</li>
                <li className="mb-2">3 Social Media Accounts</li>
                <li className="mb-2">Monthly Analytics Reporting</li>
                <li className="mb-2">Blog Integration</li>
              </ul>
              <div className="text-center">
                <a href="/contact" className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
                  Get Started
                </a>
              </div>
            </div>

            {/* Premium Package */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-center mb-4">Premium</h3>
              <p className="text-center text-gray-600 mb-6">Rs.2999 / month</p>
              <ul className="text-gray-600 mb-4">
                <li className="mb-2">Unlimited Web Pages</li>
                <li className="mb-2">Premium SEO with Backlinking</li>
                <li className="mb-2">5 Social Media Accounts</li>
                <li className="mb-2">Weekly Analytics Reporting</li>
                <li className="mb-2">Full Marketing Strategy</li>
                <li className="mb-2">24/7 Support</li>
              </ul>
              <div className="text-center">
                <a href="/contact" className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  
        {/* Call to Action */}
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6">
              Let&apos;s help you transform your business with our range of services. Contact us today to learn more.
            </p>
            <a href="/contact" className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg hover:bg-gray-100 transition">
              Get in Touch
            </a>
          </div>
        </section>
      </div>
    );
  }
  