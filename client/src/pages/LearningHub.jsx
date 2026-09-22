import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const enrolledCourses = [
  { id: 1, title: 'Intro to Web Development', progress: 72, instructor: 'Aryan Kapoor', nextLesson: 'CSS Flexbox & Grid', color: 'bg-primary-container' },
  { id: 2, title: 'Python for Data Science', progress: 35, instructor: 'Meera Joshi', nextLesson: 'Pandas DataFrames', color: 'bg-secondary-container' },
  { id: 3, title: 'UX/UI Design Fundamentals', progress: 91, instructor: 'Neha Singh', nextLesson: 'Prototype Testing', color: 'bg-tertiary-fixed-dim' },
]

const recentActivity = [
  { icon: 'play_circle', label: 'Completed: "CSS Animations"', time: '2h ago', color: 'text-tertiary-container' },
  { icon: 'quiz', label: 'Quiz passed: Python Basics (87%)', time: '5h ago', color: 'text-secondary-container' },
  { icon: 'workspace_premium', label: 'Certificate earned: HTML Fundamentals', time: '1d ago', color: 'text-secondary' },
  { icon: 'groups', label: 'Joined: "Web Dev India" community group', time: '2d ago', color: 'text-primary-container' },
]

const upcomingEvents = [
  { title: 'Live Mentorship Session', time: 'Today, 6:00 PM', icon: 'video_call' },
  { title: 'Python Workshop', time: 'Tomorrow, 10:00 AM', icon: 'code' },
  { title: 'Career Fair – Tech Sector', time: 'Aug 30, 2:00 PM', icon: 'work' },
]

export default function LearningHub() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    navigate('/')
  }

  const displayName = user?.name || 'Learner'
  const initials = displayName.split(' ').map((n) => n[0]).join('').slice(0, 2).toUpperCase()

  return (
    <div className="page-enter min-h-screen bg-[#F8F7F3]">
      <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop py-10">

        {/* ─── Welcome Banner ─────────────────────────── */}
        <div className="bg-primary-container rounded-2xl p-8 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden relative">
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
          <div className="flex items-center gap-4 z-10">
            <div className="w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container font-bold text-xl shrink-0">
              {initials}
            </div>
            <div>
              <p className="text-label-md text-on-primary/70">Welcome back,</p>
              <h1 className="text-headline-lg text-on-primary">{displayName} 👋</h1>
              <p className="text-label-md text-on-primary/60 mt-0.5">{user?.email || 'learner@skillmitra.com'}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 z-10">
            <Link
              to="/courses"
              className="bg-secondary-container text-on-secondary-container px-5 py-2.5 rounded-lg text-label-md font-semibold hover:bg-secondary-fixed transition-colors"
            >
              Browse Courses
            </Link>
            <button
              onClick={handleLogout}
              className="border border-on-primary/30 text-on-primary px-5 py-2.5 rounded-lg text-label-md hover:border-on-primary/60 transition-colors"
            >
              Log Out
            </button>
          </div>
        </div>

        {/* ─── Stats Row ──────────────────────────────── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { icon: 'menu_book', label: 'Courses Enrolled', value: '3' },
            { icon: 'emoji_events', label: 'Certificates Earned', value: '1' },
            { icon: 'local_fire_department', label: 'Day Streak', value: '7' },
            { icon: 'schedule', label: 'Hours Learned', value: '42' },
          ].map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-5 shadow-card border border-surface-variant/50 flex items-center gap-4">
              <div className="w-11 h-11 rounded-lg bg-primary-container/10 flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary-container text-[22px]">{stat.icon}</span>
              </div>
              <div>
                <p className="text-headline-md text-primary font-bold">{stat.value}</p>
                <p className="text-label-sm text-on-surface-variant">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* ─── Left: My Courses ──────────────────── */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between mb-2">
              <h2 className="text-headline-md text-primary">My Courses</h2>
              <Link to="/courses" className="text-label-md text-primary-container hover:underline">Browse all →</Link>
            </div>

            {enrolledCourses.map((course) => (
              <div key={course.id} className="bg-white rounded-xl p-6 shadow-card border border-surface-variant/50 hover:shadow-hover transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 ${course.color} rounded-lg flex items-center justify-center shrink-0`}>
                    <span className="material-symbols-outlined text-on-primary text-[22px]">menu_book</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-headline-md text-primary text-[16px] font-semibold truncate">{course.title}</h3>
                        <p className="text-label-md text-on-surface-variant">{course.instructor}</p>
                      </div>
                      <span className="text-label-md font-bold text-primary-container shrink-0">{course.progress}%</span>
                    </div>

                    {/* Progress bar */}
                    <div className="mt-3 mb-2">
                      <div className="h-2 bg-surface-container-highest rounded-full overflow-hidden">
                        <div
                          className="h-full bg-primary-container rounded-full transition-all duration-700"
                          style={{ width: `${course.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <p className="text-label-sm text-on-surface-variant">
                        Next: <span className="text-on-surface font-medium">{course.nextLesson}</span>
                      </p>
                      <button className="flex items-center gap-1.5 text-label-sm text-primary-container hover:text-primary font-semibold transition-colors">
                        <span className="material-symbols-outlined text-[16px]">play_circle</span>
                        Continue
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* ─── Right: Activity + Events ──────────── */}
          <div className="space-y-6">
            {/* Recent Activity */}
            <div className="bg-white rounded-xl p-6 shadow-card border border-surface-variant/50">
              <h2 className="text-headline-md text-primary mb-4 text-[16px] font-semibold">Recent Activity</h2>
              <ul className="space-y-4">
                {recentActivity.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className={`material-symbols-outlined symbol-filled text-[20px] shrink-0 mt-0.5 ${item.color}`}>{item.icon}</span>
                    <div>
                      <p className="text-label-md text-on-surface">{item.label}</p>
                      <p className="text-label-sm text-on-surface-variant">{item.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Upcoming Events */}
            <div className="bg-white rounded-xl p-6 shadow-card border border-surface-variant/50">
              <h2 className="text-headline-md text-primary mb-4 text-[16px] font-semibold">Upcoming Events</h2>
              <ul className="space-y-4">
                {upcomingEvents.map((evt, i) => (
                  <li key={i} className="flex items-center gap-3 p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer">
                    <div className="w-10 h-10 rounded-lg bg-primary-container/10 flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-primary-container text-[20px]">{evt.icon}</span>
                    </div>
                    <div>
                      <p className="text-label-md font-semibold text-on-surface">{evt.title}</p>
                      <p className="text-label-sm text-on-surface-variant">{evt.time}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Upgrade CTA */}
            {(!user?.plan || user?.plan === 'free') && (
              <div className="bg-primary-container rounded-xl p-6 text-on-primary">
                <span className="material-symbols-outlined symbol-filled text-secondary-container text-[32px] mb-3 block">workspace_premium</span>
                <h3 className="text-headline-md text-on-primary mb-2">Upgrade to Pro</h3>
                <p className="text-label-md text-on-primary/70 mb-4">Unlock 500+ courses, mentorship, and job placements.</p>
                <Link to="/pricing" className="block text-center bg-secondary-container text-on-secondary-container py-2.5 rounded-lg text-label-md font-semibold hover:bg-secondary-fixed transition-colors">
                  View Plans
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
