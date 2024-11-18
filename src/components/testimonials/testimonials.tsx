import Image from "next/image";

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      title: "CEO, Company A",
      feedback:
        "Next Corporate has transformed our business! Their solutions are top-notch, and the team is incredibly professional.",
      image: "/images/person6.jpg",
    },
    {
      name: "Jane Smith",
      title: "Founder, Startup B",
      feedback:
        "The team at Next Corporate is fantastic. Their ability to innovate and provide custom solutions helped our company scale rapidly.",
      image: "/images/person1.jpg",
    },
    {
      name: "Sarah Johnson",
      title: "Marketing Head, Enterprise C",
      feedback:
        "We’ve seen significant growth thanks to the strategies implemented by Next Corporate. Highly recommend their services!",
      image: "/images/person3.jpg",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">What Our Clients Say</h2>

        <div className="flex flex-wrap justify-center gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white shadow-lg p-8 rounded-lg max-w-sm w-full md:w-[300px]"
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={24}
                  height={24}
                  className="w-24 h-24 rounded-full object-cover"
                />
              </div>
              <p className="text-lg italic mb-4">&quot;{testimonial.feedback}&quot;</p>
              <h4 className="text-xl font-semibold">{testimonial.name}</h4>
              <p className="text-gray-500">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
