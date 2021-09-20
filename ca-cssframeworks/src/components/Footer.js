import React from 'react'
import { FaVimeoV } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";


function Footer() {
    return (
        <div className="main-footer">
        <div className="container">
          <div className="row">
            {/* Column1 */}
            <div className="col">
              <p> <FaVimeoV /> <FaYoutube/></p>
              
            </div>
            {/* Column2 */}
            <div className="col">
              <p>hello@yay.com</p>
              
            </div>
            {/* Column3 */}
            <div className="col">
              <p>Copyright 2020</p>
            
            </div>
          </div>
        
          
        </div>
      </div>
    )
}

export default Footer
