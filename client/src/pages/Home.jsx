import { Link } from 'react-router-dom'

const stats = [
  { value: '50,000+', label: 'Learners' },
  { value: '500+', label: 'Placements' },
  { value: '100%', label: 'Free Courses' },
  { value: '4.9/5', label: 'Average Rating' },
]

const advantages = [
  {
    icon: 'menu_book',
    color: 'text-primary',
    borderColor: 'hover:border-primary',
    title: 'Free Learning',
    desc: 'Access foundational courses across tech, business, and design at zero cost.',
  },
  {
    icon: 'school',
    color: 'text-secondary-container',
    borderColor: 'hover:border-secondary-container',
    title: 'Higher Education',
    desc: 'Upgrade to expert-led premium programs with recognized certifications.',
  },
  {
    icon: 'work',
    color: 'text-tertiary-fixed-dim',
    borderColor: 'hover:border-tertiary-fixed-dim',
    title: 'Job Placement',
    desc: 'Direct connections to top employers and dedicated career coaching.',
  },
  {
    icon: 'groups',
    color: 'text-primary',
    borderColor: 'hover:border-primary',
    title: 'Community Support',
    desc: 'Join thousands of peers for collaborative learning and networking.',
  },
]

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Software Engineer at Infosys',
    avatar: 'PS',
    text: 'Skill Mitra helped me transition from a non-tech background to a full-time engineering role in just 8 months. The free courses are genuinely world-class.',
  },
  {
    name: 'Rahul Mehta',
    role: 'Data Analyst at Wipro',
    avatar: 'RM',
    text: 'The mentorship program was a game changer. My mentor guided me through every interview and now I\'m earning 3x my previous salary.',
  },
  {
    name: 'Ananya Iyer',
    role: 'UX Designer at Swiggy',
    avatar: 'AI',
    text: 'I started with the free tier and got my first freelance project within weeks. The community here is incredibly supportive.',
  },
]

export default function Home() {
  return (
    <div className="page-enter">
      {/* ─── Hero Section ─────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div className="hero-blob" />
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm w-fit border border-surface-variant">
              <span className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
              <span className="text-label-sm text-on-surface-variant">New: Premium Career Paths Available</span>
            </div>

            {/* Headline */}
            <h1 className="text-display-lg text-primary leading-tight">
              Learn Free. <br />
              <span className="text-gradient">Earn Real.</span> <br />
              Grow Together.
            </h1>

            <p className="text-body-lg text-on-surface-variant max-w-[540px]">
              Join the premium educational platform designed for ambitious learners. Master in-demand skills for free, upgrade your credentials, and unlock real earning opportunities.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mt-2">
              <Link
                to="/signup"
                className="bg-primary-container text-on-primary px-8 py-3.5 rounded-lg text-label-md font-semibold hover:bg-primary transition-all shadow-md hover:shadow-hover text-center"
              >
                Start Learning Free
              </Link>
              <Link
                to="/courses"
                className="bg-transparent border border-outline text-primary px-8 py-3.5 rounded-lg text-label-md font-semibold hover:border-secondary hover:text-secondary transition-all text-center"
              >
                Explore Careers
              </Link>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative z-10 w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-card">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYetsq3rUkLULHxmPTX1yxQoq7ZxaJvBV_3QsIBicZS5CddEMtNDHO6dgJkJW67wrJr6D73oxRRWH88tzezcoxkQUTZmdBpw5w9oSVjaBiliWVizLMufaxiuANs-Md-y7OmFKlFURzZavGWM5ley6i8_KLHMude2vsOk6X2hOHOt9U2EeCMCpElusC3qS51E8qsbKUrhhJIX8FIDlV2EvNkpJTKxwqMydi1Z6vSppvqsrSN97B8YDQ"
              alt="Premium education platform illustration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ─── Trust Strip ──────────────────────────────────────────── */}
      <section className="border-y border-surface-variant bg-white">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-surface-variant">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center text-center px-4">
                <span className="text-headline-md text-primary font-bold">{stat.value}</span>
                <span className="text-label-sm text-on-surface-variant uppercase tracking-wider mt-1">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Advantages Section ───────────────────────────────────── */}
      <section className="py-24 bg-[#F8F7F3]">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg md:text-[40px] md:leading-[48px] text-primary mb-4">
              The Skill Mitra Advantage
            </h2>
            <p className="text-body-md text-on-surface-variant max-w-[600px] mx-auto">
              A comprehensive ecosystem designed to take you from curious beginner to employed professional.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className={`bg-white p-8 rounded-card shadow-card ${adv.borderColor} hover:shadow-hover transition-all duration-300 border-t-2 border-transparent group`}
              >
                <div className="w-12 h-12 bg-surface rounded-lg flex items-center justify-center mb-6">
                  <span className={`material-symbols-outlined ${adv.color} text-[28px]`}>{adv.icon}</span>
                </div>
                <h3 className="text-headline-md text-primary mb-3 text-lg">{adv.title}</h3>
                <p className="text-body-md text-on-surface-variant text-sm">{adv.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── How It Works ─────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg text-primary mb-4">How It Works</h2>
            <p className="text-body-md text-on-surface-variant max-w-xl mx-auto">
              Three simple steps to go from zero to career-ready.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connector line on desktop */}
            <div className="hidden md:block absolute top-10 left-1/6 right-1/6 h-0.5 bg-surface-variant" />
            {[
              { step: '01', icon: 'person_add', title: 'Create Free Account', desc: 'Sign up in under 2 minutes with your email or social account. No credit card required.' },
              { step: '02', icon: 'menu_book', title: 'Choose Your Path', desc: 'Browse 500+ courses. Pick a free learning path or unlock premium career tracks.' },
              { step: '03', icon: 'workspace_premium', title: 'Land Your Goal', desc: 'Earn certificates, connect with employers, and grow your income with our placement network.' },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center text-center gap-4 p-6">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-primary-container/10 border-2 border-primary-container/20 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary-container text-[36px]">{item.icon}</span>
                  </div>
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-secondary-container text-on-secondary-container text-label-sm font-bold flex items-center justify-center">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-headline-md text-primary">{item.title}</h3>
                <p className="text-body-md text-on-surface-variant">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─────────────────────────────────────────── */}
      <section className="py-24 bg-[#F8F7F3]" id="community">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop">
          <div className="text-center mb-16">
            <h2 className="text-headline-lg text-primary mb-4">Success Stories</h2>
            <p className="text-body-md text-on-surface-variant max-w-xl mx-auto">
              Real outcomes from real learners across India.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-white rounded-card p-8 shadow-card border border-surface-variant/50 card-interactive">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary font-bold text-sm shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <p className="text-label-md font-semibold text-on-surface">{t.name}</p>
                    <p className="text-label-sm text-on-surface-variant">{t.role}</p>
                  </div>
                </div>
                {/* Stars */}
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined symbol-filled text-secondary-container text-[18px]">star</span>
                  ))}
                </div>
                <p className="text-body-md text-on-surface-variant leading-relaxed">{t.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Banner ───────────────────────────────────────────── */}
      <section className="py-24 bg-primary-container">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop text-center">
          <h2 className="text-headline-lg text-on-primary mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-body-lg text-on-primary/80 max-w-xl mx-auto mb-8">
            Join 50,000+ learners who are already building their dream careers with Skill Mitra.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="bg-secondary-container text-on-secondary-container px-10 py-4 rounded-lg text-label-md font-semibold hover:bg-secondary-fixed transition-all shadow-hover"
            >
              Get Started for Free
            </Link>
            <Link
              to="/pricing"
              className="border-2 border-on-primary/40 text-on-primary px-10 py-4 rounded-lg text-label-md font-semibold hover:border-on-primary hover:bg-on-primary/10 transition-all"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
