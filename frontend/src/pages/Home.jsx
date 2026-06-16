import heroImg from "../assets/hero.png";

export default function Home() {
  const features = [
    {
      title: "Fast Performance",
      description: "Experience lightning-fast loading and smooth interactions.",
      icon: "⚡",
    },
    {
      title: "Secure",
      description: "Built with security and reliability in mind.",
      icon: "🔒",
    },
    {
      title: "Responsive",
      description: "Looks great on desktop, tablet, and mobile devices.",
      icon: "📱",
    },
    {
      title: "Easy to Use",
      description: "Simple and intuitive interface for everyone.",
      icon: "🚀",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero min-h-screen px-6">
        <div className="hero-content max-w-7xl flex-col-reverse lg:flex-row-reverse gap-10">

          {/* Image */}
          <img
            src={heroImg}
            alt="Hero"
            className="w-full max-w-xs sm:max-w-md lg:max-w-lg rounded-3xl"
          />

          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-primary leading-tight">
              Welcome to Your App
            </h1>

            <p className="py-6 text-base md:text-lg text-base-content/80 max-w-2xl">
              Build modern experiences with React, Tailwind CSS, and DaisyUI.
              Beautiful design, blazing-fast performance, and a great user
              experience.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn btn-primary">
                Get Started
              </button>

              <button className="btn btn-outline">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Features
            </h2>

            <p className="mt-4 text-base-content/70">
              Everything you need for a modern application.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card bg-base-200 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:shadow-primary/30"
              >
                <div className="card-body items-center text-center">
                  <div className="text-5xl mb-3">
                    {feature.icon}
                  </div>

                  <h3 className="card-title text-primary">
                    {feature.title}
                  </h3>

                  <p className="text-base-content/70">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}