import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const GOALS = [
  { id: 'foundational_learning', icon: 'school', label: 'Foundational Learning' },
  { id: 'career_transition', icon: 'swap_calls', label: 'Career Transition' },
  { id: 'higher_education', icon: 'workspace_premium', label: 'Higher Education' },
  { id: 'earning_jobs', icon: 'payments', label: 'Earning / Jobs' },
]

const benefits = [
  { icon: 'menu_book', title: 'Access 50+ Free Courses', desc: 'Build your foundational skills at no cost.' },
  { icon: 'groups', title: 'Join a 10k+ Student Community', desc: 'Connect, collaborate, and grow together.' },
  { icon: 'work', title: 'Unlock Career Placements', desc: 'Direct pathways to top hiring partners.' },
]

export default function SignUp() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [goals, setGoals] = useState([])
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    setError('')
  }

  const toggleGoal = (id) => {
    setGoals((prev) =>
      prev.includes(id) ? prev.filter((g) => g !== id) : [...prev, id]
    )
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const { data } = await axios.post('/api/auth/register', { ...form, goals })
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex font-sans antialiased">
      {/* Left Column: Brand & Benefits */}
      <section className="w-full md:w-5/12 bg-primary-container text-on-primary p-8 md:p-margin-desktop flex flex-col justify-center relative overflow-hidden shrink-0 hidden md:flex">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-primary rounded-full blur-3xl opacity-50 mix-blend-multiply pointer-events-none" />
        <div className="relative z-10 max-w-md mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-on-primary/70 hover:text-on-primary transition-colors mb-8 text-label-md">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back to Home
          </Link>
          <div className="w-16 h-16 mb-stack-lg bg-primary-container/20 rounded-xl flex items-center justify-center border border-on-primary/20">
            <span className="material-symbols-outlined text-secondary-container text-[36px]">school</span>
          </div>
          <h1 className="text-display-lg text-on-primary mb-stack-md">Start Your Growth Journey</h1>
          <p className="text-body-lg text-on-primary/80 mb-stack-lg">
            Join the platform that bridges education and career success with premium guidance.
          </p>
          <ul className="space-y-stack-md">
            {benefits.map((b) => (
              <li key={b.icon} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-secondary-container/20 flex items-center justify-center shrink-0 mt-1">
                  <span className="material-symbols-outlined symbol-filled text-secondary-fixed text-[18px]">{b.icon}</span>
                </div>
                <div>
                  <h3 className="text-headline-md text-on-primary text-[18px] leading-snug">{b.title}</h3>
                  <p className="text-body-md text-on-primary/70">{b.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Right Column: Registration Form */}
      <section className="w-full md:w-7/12 bg-surface flex items-center justify-center p-6 md:p-margin-desktop overflow-y-auto">
        <div className="w-full max-w-xl">
          {/* Mobile back link */}
          <Link to="/" className="md:hidden flex items-center gap-2 text-on-surface-variant hover:text-primary mb-6 text-label-md">
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            Back to Home
          </Link>

          <div className="bg-surface-container-lowest rounded-card p-8 border-t-2 border-secondary-container shadow-card">
            <div className="mb-8">
              <h2 className="text-headline-lg-mobile md:text-headline-lg text-on-surface mb-2">Create Account</h2>
              <p className="text-body-md text-on-surface-variant">Step 1 of 2: Basic Information</p>
            </div>

            {/* Error */}
            {error && (
              <div className="mb-6 p-4 bg-error-container text-on-error-container rounded-lg text-label-md flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">error</span>
                {error}
              </div>
            )}

            {/* Social Sign Up */}
            <div className="grid grid-cols-2 gap-3 mb-6">
              {[
                {
                  label: 'Google',
                  svg: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  ),
                },
                {
                  label: 'LinkedIn',
                  svg: (
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="#0A66C2">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  ),
                },
              ].map((btn) => (
                <button
                  key={btn.label}
                  type="button"
                  className="flex items-center justify-center gap-2 py-3 px-4 border border-outline-variant rounded-lg hover:bg-surface-container-low transition-colors text-label-md text-on-surface"
                >
                  {btn.svg}
                  {btn.label}
                </button>
              ))}
            </div>

            <div className="relative flex items-center mb-6">
              <div className="flex-grow border-t border-outline-variant" />
              <span className="flex-shrink-0 mx-4 text-label-sm text-outline">or sign up with email</span>
              <div className="flex-grow border-t border-outline-variant" />
            </div>

            <form onSubmit={handleSubmit} className="space-y-stack-md">
              {/* Full Name */}
              <div>
                <label className="block text-label-md text-on-surface mb-2" htmlFor="name">Full Name</label>
                <div className="relative input-glow rounded-lg transition-shadow">
                  <span className="material-symbols-outlined absolute left-3 top-3.5 text-outline text-[20px]">person</span>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-outline-variant rounded-lg bg-surface-container-lowest text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 text-body-md transition-all"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-label-md text-on-surface mb-2" htmlFor="email">Email Address</label>
                <div className="relative input-glow rounded-lg transition-shadow">
                  <span className="material-symbols-outlined absolute left-3 top-3.5 text-outline text-[20px]">mail</span>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-4 py-3 border border-outline-variant rounded-lg bg-surface-container-lowest text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 text-body-md transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-label-md text-on-surface mb-2" htmlFor="password">Password</label>
                <div className="relative input-glow rounded-lg transition-shadow">
                  <span className="material-symbols-outlined absolute left-3 top-3.5 text-outline text-[20px]">lock</span>
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-12 py-3 border border-outline-variant rounded-lg bg-surface-container-lowest text-on-surface focus:outline-none focus:border-primary-container focus:ring-2 focus:ring-primary-container/20 text-body-md transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute right-3 top-3 text-outline hover:text-on-surface transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Goal Selection */}
              <div className="pt-4 border-t border-outline-variant mt-6">
                <h3 className="text-headline-md text-on-surface mb-1">What are you here for?</h3>
                <p className="text-body-md text-on-surface-variant mb-4">Select your primary goal to help us personalize your experience.</p>
                <div className="grid grid-cols-2 gap-3">
                  {GOALS.map((goal) => {
                    const selected = goals.includes(goal.id)
                    return (
                      <button
                        type="button"
                        key={goal.id}
                        onClick={() => toggleGoal(goal.id)}
                        className={`goal-card text-left ${selected ? 'selected' : ''}`}
                      >
                        <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center mb-3">
                          <span className="material-symbols-outlined text-on-surface text-[20px]">{goal.icon}</span>
                        </div>
                        <span className="text-label-md text-on-surface font-semibold">{goal.label}</span>
                        <span className={`material-symbols-outlined absolute top-4 right-4 text-primary-container text-[20px] check-icon symbol-filled`}>
                          check_circle
                        </span>
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary-container text-on-primary py-3 px-4 rounded-lg text-label-md font-semibold hover:opacity-90 transition-opacity mt-4 flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>
                    Creating Account...
                  </>
                ) : (
                  <>
                    Create Account
                    <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                  </>
                )}
              </button>

              <p className="text-center text-body-md text-on-surface-variant text-sm mt-4">
                Already have an account?{' '}
                <Link to="/login" className="text-primary-container font-semibold hover:underline">
                  Log in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
