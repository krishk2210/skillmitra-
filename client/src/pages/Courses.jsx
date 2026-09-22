import { useState } from 'react'
import { Link } from 'react-router-dom'

const categories = ['All', 'Web Development', 'Data Science', 'Design', 'Business', 'Marketing', 'Finance']

const courses = [
  { id: 1, title: 'Intro to Web Development', category: 'Web Development', instructor: 'Aryan Kapoor', rating: 4.8, students: 12400, duration: '18h 30m', level: 'Beginner', free: true, image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&q=80' },
  { id: 2, title: 'Python for Data Science', category: 'Data Science', instructor: 'Meera Joshi', rating: 4.9, students: 9200, duration: '24h 00m', level: 'Intermediate', free: true, image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&q=80' },
  { id: 3, title: 'UX/UI Design Fundamentals', category: 'Design', instructor: 'Neha Singh', rating: 4.7, students: 7800, duration: '15h 45m', level: 'Beginner', free: true, image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&q=80' },
  { id: 4, title: 'Advanced React & Next.js', category: 'Web Development', instructor: 'Vikram Rathi', rating: 4.9, students: 5600, duration: '30h 00m', level: 'Advanced', free: false, image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&q=80' },
  { id: 5, title: 'Digital Marketing Mastery', category: 'Marketing', instructor: 'Priya Shah', rating: 4.6, students: 11000, duration: '12h 00m', level: 'Beginner', free: true, image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80' },
  { id: 6, title: 'Machine Learning Bootcamp', category: 'Data Science', instructor: 'Rajesh Kumar', rating: 4.8, students: 8300, duration: '40h 00m', level: 'Advanced', free: false, image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&q=80' },
  { id: 7, title: 'Business Finance 101', category: 'Finance', instructor: 'Kavitha Rao', rating: 4.5, students: 6200, duration: '10h 00m', level: 'Beginner', free: true, image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&q=80' },
  { id: 8, title: 'Figma for Professionals', category: 'Design', instructor: 'Ananya Iyer', rating: 4.7, students: 4900, duration: '20h 00m', level: 'Intermediate', free: false, image: 'https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=400&q=80' },
  { id: 9, title: 'Node.js & Express Mastery', category: 'Web Development', instructor: 'Suresh Mehta', rating: 4.8, students: 7100, duration: '22h 00m', level: 'Intermediate', free: false, image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=80' },
]

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`material-symbols-outlined text-[14px] ${i < Math.floor(rating) ? 'symbol-filled text-secondary-container' : 'text-outline-variant'}`}
        >
          star
        </span>
      ))}
      <span className="text-label-sm text-on-surface-variant ml-1">{rating}</span>
    </div>
  )
}

export default function Courses() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [search, setSearch] = useState('')
  const [filterFree, setFilterFree] = useState(false)

  const filtered = courses.filter((c) => {
    const matchCat = activeCategory === 'All' || c.category === activeCategory
    const matchSearch = c.title.toLowerCase().includes(search.toLowerCase()) || c.instructor.toLowerCase().includes(search.toLowerCase())
    const matchFree = !filterFree || c.free
    return matchCat && matchSearch && matchFree
  })

  return (
    <div className="page-enter">
      {/* Header */}
      <section className="bg-primary-container py-16">
        <div className="max-w-container-max mx-auto px-4 md:px-margin-desktop text-center">
          <h1 className="text-display-lg text-on-primary mb-4">Explore Our Courses</h1>
          <p className="text-body-lg text-on-primary/80 max-w-xl mx-auto mb-8">
            500+ courses across tech, business, design & more. Start free today.
          </p>
          {/* Search Bar */}
          <div className="max-w-lg mx-auto relative">
            <span className="material-symbols-outlined absolute left-4 top-3.5 text-outline">search</span>
            <input
              type="text"
              placeholder="Search courses or instructors..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 rounded-full border-0 bg-white text-on-surface text-body-md focus:outline-none focus:ring-2 focus:ring-secondary-container shadow-card"
            />
          </div>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-4 md:px-margin-desktop py-12">
        {/* Filters Row */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          {/* Category chips */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-label-sm font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-primary-container text-on-primary shadow-sm'
                    : 'bg-surface-container-high text-on-surface-variant hover:bg-surface-container-highest'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          {/* Free filter */}
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={filterFree}
              onChange={(e) => setFilterFree(e.target.checked)}
              className="h-4 w-4 rounded border-outline-variant text-primary focus:ring-primary"
            />
            <span className="text-label-md text-on-surface">Free only</span>
          </label>
        </div>

        {/* Results count */}
        <p className="text-label-md text-on-surface-variant mb-6">
          Showing <span className="font-semibold text-on-surface">{filtered.length}</span> courses
        </p>

        {/* Course Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-24">
            <span className="material-symbols-outlined text-[64px] text-outline-variant">search_off</span>
            <p className="text-headline-md text-on-surface-variant mt-4">No courses found</p>
            <p className="text-body-md text-on-surface-variant mt-2">Try adjusting your search or filters.</p>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((course) => (
              <div key={course.id} className="bg-white rounded-card shadow-card hover:shadow-hover transition-all duration-300 border border-surface-variant/50 overflow-hidden group card-interactive">
                {/* Thumbnail */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <span className={`px-3 py-1 rounded-full text-label-sm font-semibold ${course.free ? 'bg-tertiary-fixed/80 text-tertiary-container' : 'bg-secondary-container text-on-secondary-container'}`}>
                      {course.free ? 'Free' : 'Premium'}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-full text-label-sm bg-black/50 text-white backdrop-blur-xs">
                      {course.level}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-1">
                    <span className="text-label-sm text-secondary uppercase tracking-wider">{course.category}</span>
                  </div>
                  <h3 className="text-headline-md text-primary mb-2 text-[18px] leading-snug line-clamp-2">{course.title}</h3>
                  <p className="text-label-md text-on-surface-variant mb-3">{course.instructor}</p>

                  <div className="flex items-center justify-between mb-4">
                    <StarRating rating={course.rating} />
                    <span className="text-label-sm text-on-surface-variant">{course.students.toLocaleString()} students</span>
                  </div>

                  <div className="flex items-center gap-3 text-label-sm text-on-surface-variant border-t border-surface-variant pt-3">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">schedule</span>
                      {course.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">signal_cellular_alt</span>
                      {course.level}
                    </span>
                  </div>

                  <Link
                    to={`/courses/${course.id}`}
                    className="mt-4 w-full block text-center py-2.5 rounded-lg border border-primary text-primary text-label-md font-semibold hover:bg-primary hover:text-on-primary transition-all"
                  >
                    View Course
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
