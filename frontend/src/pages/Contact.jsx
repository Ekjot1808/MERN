function Contact() {

    async function handleSubmit(formData) {
        const formInputData = Object.fromEntries(formData);
        console.log(formInputData);

        const response = await fetch("http://localhost:5000/api/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formInputData),
        });

        const data = await response.json();

        console.log(data);
    }

  return (
    <section className="min-h-screen px-6 py-24">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold">
            Get In <span className="text-primary">Touch</span>
          </h1>

          <p className="mt-4 text-base-content/70">
            Have a question or want to work together? Send me a message.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div className="space-y-8">

            <div>
              <h2 className="text-3xl font-bold mb-4">
                Let's Talk
              </h2>

              <p className="text-base-content/70 leading-8">
                I'm always interested in hearing about new projects,
                creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-5">

              <div className="flex items-center gap-4">
                <div className="btn btn-circle btn-primary">
                  📧
                </div>

                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-base-content/70">
                    ekjot@example.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="btn btn-circle btn-primary">
                  📍
                </div>

                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-base-content/70">
                    Punjab, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="btn btn-circle btn-primary">
                  📞
                </div>

                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-base-content/70">
                    +91 XXXXX XXXXX
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side Form */}
          <div className="card bg-base-200 shadow-2xl border border-base-content/10">
            <div className="card-body">

              <h2 className="text-3xl font-bold mb-4">
                Send Message
              </h2>

              <form action={handleSubmit} className="space-y-5">

                <div>
                  <label className="label">
                    <span className="label-text">
                      Full Name
                    </span>
                  </label>

                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">
                      Email Address
                    </span>
                  </label>

                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="input input-bordered w-full"
                  />
                </div>

                <div>
                  <label className="label">
                    <span className="label-text">
                      Message
                    </span>
                  </label>

                  <textarea
                    rows="6"
                    name="message"
                    placeholder="Write your message..."
                    className="textarea textarea-bordered w-full"
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary w-full">
                  Send Message
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;