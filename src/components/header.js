import { Link } from 'gatsby'
import React from 'react'

const Header = () => {
    return (
        <div>
          <nav>
              <ul>
                  <li>
                      <Link to ="/">Home</Link>
                  </li>
                  
                  <li>
                      <Link to ="/blog">Blog</Link>
                  </li>

                  
                  <li>
                      <Link to ="/about">About</Link>
                  </li>
              </ul>
          </nav>
        </div>
    )
}

export default Header;
