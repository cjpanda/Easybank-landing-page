import aboutFeatures from "../services/AboutFeatures";

const About = () => {
  return (
    <section className="padding-x bg-light py-20 " id="about">
      <div className="max-width">
        <div>
          <h1 className="text-primary text-4xl  text-center xl:text-left lg:text-left  pt-10">
            Why choose Easybank?
          </h1>
          <p className="text-secondary w-full xl:w-[50%] text-center xl:text-left lg:text-left py-10">
            We leverage Open Banking to turn your bank account into your
            financial hub. Control your finances like never before.
          </p>
        </div>

        {/* Display Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
          {aboutFeatures.map((feature, index) => (
            <div
              key={index}
              className="text-center md:text-left  xl:text-left lg:text-left"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="mx-auto sm:mx-0 sm:mr-auto"
              />
              <h2 className="text-primary text-xl  font-semibold mt-8">
                {feature.title}
              </h2>
              <p className="text-secondary mt-4">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
