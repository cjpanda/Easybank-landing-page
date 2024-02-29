import HeroLogo from "../assets/image-mockups.png";

const Hero = () => {
  return (
    <section className="max-width padding-x " id="home">
      <div className="flex flex-col-reverse xl:flex-row sm:flex-col-reverse md:flex-col-reverse lg:flex-row w-full items-center justify-between ">
        {/* Text */}
        <div className="mx-auto text-center lg:text-left xl:text-left pb-10">
          <h1 className="text-5xl text-primary ">
            Next generation <br />
            digital banking
          </h1>
          <p className="text-secondary py-10">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="gradient p-2 px-10 text-light rounded-3xl font-semibold hover:opacity-85">
            Request Invite
          </button>
        </div>
        {/* Image */}
        <div className="imageBg ">
          <img src={HeroLogo} alt="Hero" className="mainImage" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
