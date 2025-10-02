import React, { useState, useEffect } from 'react'; 
import { Button } from './Button';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import Login from "./Login";

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [navbar, setNavbar] = useState(false);
    const location = useLocation();

    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        setButton(window.innerWidth > 960);
    };

  

    useEffect(() => {
        showButton();
        const token = localStorage.getItem("token");
        const name = localStorage.getItem("userName") || localStorage.getItem("userEmail");
        if (token) {
            setUserLoggedIn(true);
            setUserName(name);
        } else {
            setUserLoggedIn(false); 
            setUserName("");
        }

        window.addEventListener('resize', showButton);
        

        return () => {
            window.removeEventListener('resize', showButton);
           
        };
    }, []);

    const handleLogout = () => {
        localStorage.clear();
        window.location.reload();
        window.location.href = "/";
    };

    const isHomePage = location.pathname === '/';
    const navbarClass = isHomePage && !navbar ? 'navbar' : 'navbar active';
  
    return (
        <nav className={navbarClass}>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    TRVLbite <i className='fab fa-typo3' />
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to="/about" className='nav-links' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-links' onClick={() => alert("Work in Progress")}>
                            Community
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link className='nav-links' onClick={() => alert("Work in Progress")}>
                            Categories
                        </Link>
                    </li>

                    {userLoggedIn ? (
                        <>
                            <li className="nav-item">
                                <Link to={`/profile/${localStorage.getItem("userID")}`} className="nav-links">
                                    👤 {userName} 
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={handleLogout}>
                                    🚪 Logout
                                </Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-item">
                                <Login /> 
                            </li>
                            {button && (
                                <li className="nav-item" style={{marginTop:"3%"}}>
                                    <Button buttonStyle="btn--outline">SIGN UP</Button>
                                </li>
                            )}
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
