import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import heroImg from "../assets/hero.png"

export default function Services() {

  const [services, setServices] = useState([]);

  useEffect(() => {
    async function getData() {
      const services = await fetch("http://localhost:5000/api/service", {
        method: "GET",
      });

      const data = await services.json();
      console.log(data);
      setServices(data.services);
    }
    getData();
  }, []);

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold">
            My <span className="text-primary">Services</span>
          </h1>

          <p className="mt-6 text-base md:text-lg text-base-content/70">
            I provide modern web solutions to help businesses and individuals
            build powerful digital experiences.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto">

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

            {services.map((service, index) => (
              <div
                key={index}
                className="card bg-base-200 shadow-xl border border-base-content/10 hover:-translate-y-3 hover:shadow-primary/30 transition-all duration-500"
              >
                <div className="card-body text-center">

                  <div className="text-5xl mb-4">
                    <div className="flex justify-center">
                    <img src={heroImg} alt="image" width={200} height={200} />
                    </div>
                  </div>

                  <h2 className="card-title justify-center text-primary">
                    {service.name}
                  </h2>

                  <div>
                    <p className="text-base-content/70">
                      {service.description}
                    </p>

                    <p className="text-base-content/70">
                      {`$ ${service.price}`}
                    </p>
                  </div>

                  <p className="text-base-content/70">
                    {service.provider}
                  </p>

                  <div className="card-actions justify-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Learn More
                    </button>
                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">
          <div className="hero bg-base-200 rounded-3xl shadow-xl border border-base-content/10">
            <div className="hero-content text-center py-16">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold">
                  Let's Build Something Amazing 🚀
                </h2>

                <p className="py-6 text-base-content/70 max-w-2xl mx-auto">
                  Have an idea or project in mind? Let's work together and turn
                  your vision into reality.
                </p>

                <button className="btn btn-primary">
                  <NavLink to="/contact">Contact Me</NavLink>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}