import { Link } from 'react-router-dom'
import { Button } from '../ui/button'

const Error = () => {
  return (
    <section>
      <div className="container flex min-h-[82vh] flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-2 text-center">
          <h2 className="flex flex-col justify-center gap-2 text-xl sm:flex-row sm:items-end sm:text-end sm:text-3xl">
            <span className="text-3xl">Oops!</span>Something went wrong.
          </h2>
          <p className="mb-6 text-xs">The page you are looking for has encountered a problem.</p>
          <Link to="/">
            <Button className="w-full px-4 py-2">Back to Home</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Error
