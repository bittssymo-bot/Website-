export default function StPetersKisiiAcademyWebsite() {
  const sections = [
    {
      title: 'Primary School',
      description:
        'Building strong academic foundations, discipline, creativity, and confidence for every learner.',
    },
    {
      title: 'Junior Secondary School (J.S.S)',
      description:
        'Preparing students for future careers and higher learning through CBC-focused education and innovation.',
    },
  ];

  const features = [
    'Qualified & Dedicated Teachers',
    'CBC Curriculum Learning',
    'Computer & Digital Literacy',
    'Sports & Co-Curricular Activities',
    'Safe & Secure Environment',
    'Guidance & Counseling',
  ];

  const handleAdmissionClick = () => {
    document.getElementById('admissions').scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    e.target.reset();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Header */}
      <header className="bg-blue-900 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold">
              St Peters Kisii Academy
            </h1>
            <p className="text-sm text-blue-200">
              Primary & Junior Secondary School
            </p>
          </div>

          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#home" className="hover:text-yellow-300 transition">
              Home
            </a>
            <a href="#about" className="hover:text-yellow-300 transition">
              About
            </a>
            <a href="#academics" className="hover:text-yellow-300 transition">
              Academics
            </a>
            <a href="#admissions" className="hover:text-yellow-300 transition">
              Admissions
            </a>
            <a href="#gallery" className="hover:text-yellow-300 transition">
              Gallery
            </a>
            <a href="#contact" className="hover:text-yellow-300 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 text-white"
      >
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
              Excellence in Education & Discipline
            </h2>

            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              Welcome to St Peters Kisii Academy — a center of academic
              excellence dedicated to nurturing disciplined, responsible, and
              successful learners in both Primary and Junior Secondary School.
            </p>

            <div className="flex flex-wrap gap-4">
              <button 
                onClick={handleAdmissionClick}
                className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-semibold px-6 py-3 rounded-2xl shadow-lg transition"
              >
                Apply for Admission
              </button>

              <button className="border border-white hover:bg-white hover:text-blue-900 px-6 py-3 rounded-2xl transition">
                Learn More
              </button>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/20 rounded-2xl p-6 text-center">
                <h3 className="text-4xl font-bold">500+</h3>
                <p className="text-blue-100 mt-2">Students</p>
              </div>

              <div className="bg-white/20 rounded-2xl p-6 text-center">
                <h3 className="text-4xl font-bold">30+</h3>
                <p className="text-blue-100 mt-2">Teachers</p>
              </div>

              <div className="bg-white/20 rounded-2xl p-6 text-center">
                <h3 className="text-4xl font-bold">100%</h3>
                <p className="text-blue-100 mt-2">Commitment</p>
              </div>

              <div className="bg-white/20 rounded-2xl p-6 text-center">
                <h3 className="text-4xl font-bold">CBC</h3>
                <p className="text-blue-100 mt-2">Curriculum</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">
              About Our School
            </h2>

            <p className="text-lg leading-relaxed text-slate-600 mb-6">
              St Peters Kisii Academy is committed to providing quality
              education that empowers learners academically, socially,
              spiritually, and morally. We create a supportive learning
              environment where every child can thrive.
            </p>

            <p className="text-lg leading-relaxed text-slate-600">
              Our school combines discipline, innovation, and modern CBC
              teaching methods to prepare learners for future success.
            </p>
          </div>

          <div className="grid gap-6">
            <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">
                Mission
              </h3>
              <p className="text-slate-600">
                To provide holistic education that nurtures excellence,
                discipline, leadership, and innovation.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-6 shadow-lg border border-slate-100">
              <h3 className="text-2xl font-semibold text-blue-800 mb-3">
                Vision
              </h3>
              <p className="text-slate-600">
                To become a leading center of academic excellence in Kenya.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Academics */}
      <section id="academics" className="bg-slate-100 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold text-blue-900 mb-4">
              Academic Sections
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              We offer comprehensive education programs designed to help every
              learner reach their full potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-3xl shadow-xl p-8 hover:-translate-y-2 transition duration-300"
              >
                <h3 className="text-3xl font-bold text-blue-800 mb-4">
                  {section.title}
                </h3>
                <p className="text-slate-600 text-lg leading-relaxed">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-lg text-slate-600">
            We focus on excellence, discipline, and holistic learner growth.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100 hover:shadow-2xl transition"
            >
              <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 text-2xl font-bold mb-4">
                ✓
              </div>

              <h3 className="text-xl font-semibold text-slate-800">
                {feature}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Admissions */}
      <section
        id="admissions"
        className="bg-gradient-to-r from-yellow-400 to-yellow-300 py-20 px-6"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-blue-900 mb-6">
            Admissions Open
          </h2>

          <p className="text-lg text-blue-900 leading-relaxed mb-8">
            We are currently admitting learners for PP1, PP2, Grade 1–6, and
            Grade 7–9 (Junior Secondary School).
          </p>

          <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-4 rounded-2xl font-semibold shadow-xl transition">
            Enroll Today
          </button>
        </div>
      </section>

      {/* Gallery */}
      <section id="gallery" className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            School Gallery
          </h2>
          <p className="text-slate-600 text-lg">
            A glimpse into life at St Peters Kisii Academy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div
              key={item}
              className="h-64 rounded-3xl bg-gradient-to-br from-blue-200 to-blue-400 shadow-xl flex items-center justify-center text-white text-2xl font-bold"
            >
              School Image {item}
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-blue-900 text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-6">Contact Us</h2>

            <p className="text-blue-100 text-lg mb-4">
              We would love to hear from you.
            </p>

            <div className="space-y-4 text-lg">
              <p>📍 Kisii, Kenya</p>
              <p>📞 +254 700 000 000</p>
              <p>📧 info@stpeterskisiiacademy.ac.ke</p>
            </div>
          </div>

          <div className="bg-white rounded-3xl p-8 text-slate-800 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                required
                className="w-full border border-slate-300 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>

              <button 
                type="submit"
                className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-semibold transition w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-6 text-center">
        <p>
          © 2026 St Peters Kisii Academy — All Rights Reserved.
        </p>
      </footer>
    </div>
  );
}
