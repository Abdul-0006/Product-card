import './card.css'


const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="nav-logo">Kababjees Fried Chicken</h1>
      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar