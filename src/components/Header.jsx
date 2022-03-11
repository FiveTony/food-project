import { Link } from 'react-router-dom'

function Header() {
   return (
      <nav className="amber darken-3">
         <div className="nav-wrapper">
            <Link to="/" className="brand-logo">
               Shop
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
               <li>
                  <Link to="/about">About</Link>
               </li>
               <li>
                  <Link to="/contact">Contacts</Link>
               </li>
            </ul>
         </div>
      </nav>
   );
}
export { Header };
