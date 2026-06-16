import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import heroImg from "../../assets/hero.png"
import { toast } from "react-toastify";

export default function AdminService() {

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

  async function handleDelete (id) {
    await fetch(`http://localhost:5000/api/admin/services/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    toast.success("Service Deleted");
  }

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold">
            My <span className="text-primary">Services</span>
          </h1>
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
                    <button onClick={() => handleDelete(service._id)}  className="btn btn-primary btn-sm">
                      Delete
                    </button>
                  </div>

                </div>
              </div>
            ))}

          </div>

        </div>
      </section>

    </div>
  );
}