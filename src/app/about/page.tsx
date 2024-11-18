import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gray-900 text-white py-20 pt-[150px]">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl mb-8">
            We are a team of dedicated professionals delivering creative solutions to help your business grow.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto flex flex-col md:flex-row items-center">
          {/* Text Section */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-4">We are a team of expert people with creative ideas</h2>
            <p className="text-gray-600 mb-6">
              As an example, let’s take the content marketing process. It’s a process you’ll find in every Marketing Department out there. There will be writers, designers, SEO experts, and web designers, all working together to create a single piece of content.
            </p>

            {/* Stats */}
            <div className="flex space-x-8">
              <div className="text-center">
                <div className="text-green-500 text-4xl font-bold">16+</div>
                <div className="text-gray-600">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-green-500 text-4xl font-bold">30+</div>
                <div className="text-gray-600">Expert Members</div>
              </div>
              <div className="text-center">
                <div className="text-green-500 text-4xl font-bold">520+</div>
                <div className="text-gray-600">Customers</div>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 mt-12 md:mt-0">
            <Image
              src="/images/about.jpg"
              alt="Team illustration"
              width={500}
              height={400}
              className="mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Meet Our Team</h2>
          <div className="flex flex-wrap justify-center gap-10 items-start">
            <div className="text-center w-48">
              <Image
                src="/images/person2.jpg"
                alt="Team Member 1"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4 w-[200px] h-[200px]"
              />
              <h4 className="text-xl font-bold">John Doe</h4>
              <p className="text-gray-600">CEO</p>
            </div>
            <div className="text-center w-48">
              <Image
                src="/images/person4.jpg"
                alt="Team Member 2"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4 w-[200px] h-[200px]"
              />
              <h4 className="text-xl font-bold">Jane Smith</h4>
              <p className="text-gray-600">Marketing Director</p>
            </div>
            <div className="text-center w-48">
              <Image
                src="/images/person6.jpg"
                alt="Team Member 3"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4 w-[200px] h-[200px]" 
              />
              <h4 className="text-xl font-bold">David Lee</h4>
              <p className="text-gray-600">Lead Designer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold">Our Mission & Vision</h2>
            <p className="text-gray-600">We strive to achieve excellence through creativity and innovation.</p>
          </div>

          <div className="flex flex-col md:flex-row justify-around space-y-8 md:space-y-0">
            <div className="text-center">
              <h3 className="text-2xl font-bold">Mission</h3>
              <p className="text-gray-600">To deliver exceptional creative solutions that help businesses grow and achieve their full potential.</p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold">Vision</h3>
              <p className="text-gray-600">To be the leading provider of innovative digital solutions that transform industries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <p className="mb-8">Have any questions or want to work with us? Reach out to us!</p>
          <a
            href="/contact"
            className="bg-green-500 text-white py-3 px-8 rounded-lg hover:bg-green-600 transition"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}
