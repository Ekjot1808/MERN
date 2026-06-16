import heroImg from "../assets/hero.png"
function About() {
  const skills = [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "JavaScript",
    "Git & GitHub",
    "REST APIs",
  ];

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="hero min-h-[70vh]">
        <div className="hero-content flex-col lg:flex-row gap-16">
          <img
            src={heroImg}
            alt="Profile"
            className="w-80 rounded-3xl shadow-2xl border border-primary/20"
          />

          <div>
            <h1 className="text-5xl font-bold">
              About <span className="text-primary">Me</span>
            </h1>

            <p className="py-6 text-base-content/70 leading-8">
              Hi, I'm <span className="font-semibold">Ekjot Singh</span>, a
              passionate Full Stack Developer who enjoys building beautiful,
              responsive and scalable web applications using modern technologies.
            </p>

            <button className="btn btn-primary">
              Download Resume
            </button>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            My <span className="text-primary">Skills</span>
          </h2>

          <p className="mt-4 text-base-content/60">
            Technologies I work with
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-5">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="badge badge-primary badge-lg p-5 hover:scale-110 duration-300 cursor-pointer"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-base-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="stats stats-vertical lg:stats-horizontal shadow w-full">

            <div className="stat">
              <div className="stat-title">Projects</div>
              <div className="stat-value text-primary">20+</div>
            </div>

            <div className="stat">
              <div className="stat-title">Experience</div>
              <div className="stat-value text-primary">2+</div>
            </div>

            <div className="stat">
              <div className="stat-title">Happy Clients</div>
              <div className="stat-value text-primary">10+</div>
            </div>

            <div className="stat">
              <div className="stat-title">Technologies</div>
              <div className="stat-value text-primary">15+</div>
            </div>

          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <div className="card bg-base-200 shadow-xl">
          <div className="card-body text-center">
            <h2 className="text-4xl font-bold mb-6">
              My Mission
            </h2>

            <p className="text-base-content/70 leading-8">
              My goal is to create modern, user-friendly, and high-performance
              applications that solve real-world problems. I love learning new
              technologies and continuously improving my skills.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default About;