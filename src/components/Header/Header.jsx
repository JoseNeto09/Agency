import React, {useRef, useEffect} from 'react';

import "./header.css";

const nav__links  =[
    {
        path:'#home',
        display:'Home'
    },

    {
        path:'#about',
        display:'About'
    },

    {
        path:'#service',
        display:'Service'
    },

    {
        path:'#projects',
        display:'Projects'
    },

    {
        path:'#blog',
        display:'Blog'
    },
]

const Header = ({theme, toggleTheme}) => {
    
    const headerRef = useRef(null)
    
    const headerFunc = () =>{
        if(document.body.scrollTop > 80 || document.documentElement.scrollTop 
        > 80 ){
            headerRef.current.classList.add('header__shrink')
        } else {
            headerRef.current.classList.remove('header__shrink')
        }
    }
    
    useEffect(() => {
        window.addEventListener("scroll", headerFunc);

        return ()=> window.removeEventListener("scroll", headerFunc);
    },[]);

    const handdleClick = e =>{
        e.preventDefault();

        const targetAttr  = e.target.getAttribute("href");

        const location = document.querySelector(targetAttr).offsetTop;

        window.scrollTo({
            left: 0,
            top: location - 80,
        });

    }

    return (
        <header className="header" ref={headerRef}>
            <div className="container">
                <div className="nav__wrapper">
                    <div className="logo">
                        <h2>Agency</h2>
                    </div>

                    {/*=======Navigation=======*/}
                    <div className="navigation">
                        <ul className="menu">
                            {nav__links.map((item,index) =>(
                                <li className="menu__item" key={index}>
                                    <a href={item.path} onClick={handdleClick} className="menu__link">
                                        {item.display}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {/*=======Light Mode=======*/}
                    <div className="light__mode" >
                        <span onClick={toggleTheme}>
                            {theme==='light-theme' ?(
                            <span>
                                <i class="ri-moon-line"></i>Dark
                            </span>
                            ) : (
                            <span>
                                <i className="ri-sun-line"></i> Light
                            </span>
                            )}
                            </span>
                    </div>
                </div>

                <span className="mobile__menu">
                    <i class='ri-menu-line'></i>
                </span>
            </div>
        </header>
  )
}

export default Header