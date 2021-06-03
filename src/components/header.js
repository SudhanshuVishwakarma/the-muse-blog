import { Link,graphql,useStaticQuery } from 'gatsby'
import React from 'react'
import {header__container,nav__list,nav__item,active,title} from "./header.module.scss"


const Header = () => {

    const data = useStaticQuery(graphql`
    query{
        site{
            siteMetadata{
                title
            }
        }
    }
    `)

    return (
        <header className={header__container}>
            <h1 className={title}>
                <Link to="/" >{data.site.siteMetadata.title}</Link>
            </h1>
            <br></br>

            <nav>
              <ul className={nav__list}>
                  <li >
                      <Link className={nav__item} activeClassName={active} to ="/">Home</Link>
                  </li>
                  
                  <li >
                      <Link className={nav__item}  activeClassName={active} to ="/blog">Blog</Link>
                  </li>

                  
                  <li >
                      <Link className={nav__item}   activeClassName={active} to ="/about">About</Link>
                  </li>
              </ul>
          </nav>
        </header>
        
            
        
          
      
    )
}

export default Header;
