export default function Services() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto flex flex-wrap justify-center md:justify-between items-start gap-8 p-8 md:p-4">
        <div className="bg-gradient-to-b from-green-400 to-blue-500 text-white p-8 rounded-lg w-full md:w-[300px]">
          <h3 className="text-xl uppercase font-bold">Our Services</h3>
          <p className="mt-4 text-2xl font-semibold">
            We Will Help Your Business Grow
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-[300px]">
          <h4 className="text-lg font-semibold text-green-500">Social Marketing</h4>
          <p className="mt-2 text-gray-600">
            Social marketing is an approach used to develop activities aimed.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-[300px]">
          <h4 className="text-lg font-semibold text-green-500">Business Ideas</h4>
          <p className="mt-2 text-gray-600">
            Based on client needs, we will provide some good business solutions.
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-[300px]">
          <h4 className="text-lg font-semibold text-green-500">Development</h4>
          <p className="mt-2 text-gray-600">
            Creating your own website has never been easier. Come and check it out!
          </p>
        </div>
      </div>
    </section>
  );
}
