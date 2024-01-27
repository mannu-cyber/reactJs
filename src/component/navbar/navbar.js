import navbar from './navbar.css'

function Navbar() {
  return (
<>

<nav className='nav'>


<a className="navbarList" href="./">Home</a> &nbsp;
<a className="navbarList" href="./about">About</a> &nbsp;
<a className="navbarList" href="./contact">Contact</a> &nbsp;
<a className="navbarList login" href="./login">Login</a> &nbsp;
<a className="navbarList " href="./pricing">Pricing</a> &nbsp;
<a className="navbarList " href="./services">Services  </a> &nbsp;

</nav>

</>
  )
}

export default Navbar