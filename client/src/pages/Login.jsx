import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const { data } = await axios.post('/api/auth/login', form)
      localStorage.setItem('token', data.token)
      localStorage.setItem('user', JSON.stringify(data.user))
      navigate('/dashboard')
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex font-sans antialiased">
      {/* Left Panel */}
      <div className="hidden lg:flex w-1/2 bg-primary-container text-on-primary flex-col justify-center items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/90 to-primary-container z-0" />
        <div className="absolute inset-0 z-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
        <div className="z-10 text-center px-margin-desktop max-w-lg">
          <div className="mb-stack-lg flex justify-center">
            <span className="material-symbols-outlined text-[64px] text-secondary-container">school</span>
          </div>
          <h1 className="text-display-lg text-on-primary mb-stack-md">Skill Mitra</h1>
          <p className="text-headline-lg text-primary-fixed-dim">Learn Free. Earn Real.</p>
          <p className="text-body-md text-on-primary/70 mt-4">
            Welcome back! Continue your learning journey and unlock new career opportunities.
          </p>
        </div>
      </div>

      {/* Right Panel – Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-margin-desktop bg-surface">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden text-center mb-8">
            <span className="material-symbols-outlined text-[48px] text-primary">school</span>
            <h2 className="text-headline-md text-primary mt-2">Skill Mitra</h2>
          </div>

          <div className="bg-surface-container-lowest rounded-xl shadow-card p-8 border border-surface-variant">
            <div className="mb-8 text-center">
              <h2 className="text-headline-lg-mobile lg:text-headline-lg text-primary mb-2">Welcome Back</h2>
              <p className="text-body-md text-on-surface-variant">Please enter your details to sign in.</p>
            </div>

            {/* Error alert */}
            {error && (
              <div className="mb-6 p-4 bg-error-container text-on-error-container rounded-lg text-label-md flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]">error</span>
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-stack-md">
              {/* Email */}
              <div>
                <label className="block text-label-md text-on-surface mb-1" htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={form.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-primary-container transition-all duration-200 text-on-surface text-body-md"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-label-md text-on-surface mb-1" htmlFor="password">Password</label>
                <div className="relative">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    placeholder="••••••••"
                    value={form.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 pr-12 rounded-lg border border-outline-variant bg-surface focus:outline-none focus:ring-2 focus:ring-primary-container focus:border-primary-container transition-all duration-200 text-on-surface text-body-md"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-on-surface-variant hover:text-primary transition-colors"
                  >
                    <span className="material-symbols-outlined text-[20px]">
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </button>
                </div>
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="h-4 w-4 rounded border-outline-variant text-primary focus:ring-primary"
                  />
                  <span className="text-label-md text-on-surface-variant">Remember me</span>
                </label>
                <a href="#" className="text-label-md text-primary hover:text-primary-container transition-colors">
                  Forgot password?
                </a>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex justify-center py-3 px-4 rounded-lg text-label-md font-semibold text-primary bg-secondary-container hover:bg-secondary-fixed-dim focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary transition-all duration-200 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[18px] animate-spin">refresh</span>
                    Signing in...
                  </span>
                ) : 'Sign in'}
              </button>
            </form>

            {/* Divider */}
            <div className="my-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-surface-variant" />
                </div>
                <div className="relative flex justify-center text-label-sm">
                  <span className="px-3 bg-surface-container-lowest text-on-surface-variant">Or continue with</span>
                </div>
              </div>
            </div>

            {/* Social buttons */}
            <div className="grid grid-cols-2 gap-4 mb-6">
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
                  className="flex justify-center items-center gap-2 py-2.5 px-4 border border-outline-variant rounded-lg bg-surface-container-lowest text-label-md text-on-surface hover:bg-surface-container-low transition-colors"
                >
                  {btn.svg}
                  {btn.label}
                </button>
              ))}
            </div>

            <p className="text-center text-body-md text-on-surface-variant">
              Don't have an account?{' '}
              <Link to="/signup" className="text-label-md text-primary hover:text-primary-container transition-colors underline decoration-2 underline-offset-4">
                Sign up now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
