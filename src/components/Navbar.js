import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar">
       <Link to='/' className="navbar">Home</Link>
       <Link to='/about' className="navbar">About</Link>
       <Link to='/products' className="navbar">Products</Link>
    </nav>
  )
}
