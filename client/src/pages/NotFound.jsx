import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 page-enter">
      <span className="material-symbols-outlined text-[80px] text-outline-variant mb-6">explore_off</span>
      <h1 className="text-display-lg text-primary mb-4">404</h1>
      <h2 className="text-headline-md text-on-surface mb-4">Page Not Found</h2>
      <p className="text-body-lg text-on-surface-variant max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved. Let's get you back on track.
      </p>
      <div className="flex gap-4">
        <Link
          to="/"
          className="bg-primary-container text-on-primary px-8 py-3.5 rounded-lg text-label-md font-semibold hover:bg-primary transition-colors shadow-sm"
        >
          Go Home
        </Link>
        <Link
          to="/courses"
          className="border border-outline text-primary px-8 py-3.5 rounded-lg text-label-md font-semibold hover:border-secondary hover:text-secondary transition-colors"
        >
          Browse Courses
        </Link>
      </div>
    </div>
  )
}
