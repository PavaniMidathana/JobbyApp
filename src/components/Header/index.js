import 'index.css'

const Header = () => (
  <nav className="nav-container">
    <div className="nav-content-lg">
      <img
        src="https://assets.ccbp.in/frontend/react-js/logo-img.png"
        alt="website logo"
        className="nav-content-logo"
      />
      <ul className="nav-content-ul">
        <li className="nav-content-li">Home</li>
        <li className="nav-content-li">Jobs</li>
      </ul>
      <button className="nav-content-btn">Logout</button>
    </div>
  </nav>
)
