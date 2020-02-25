import React from 'react'
import { NavLink } from 'react-router-dom'


export default function MainHeader() {
  return (
    <header>
      <>
        <div className="links">
          <nav>
            <NavLink
              exact
              to={"/"}
              activeClassName={"active"}
            >
              Home
            </NavLink>

            <NavLink
              to={"/ProviderContainer"}
              activeClassName={"active"}
            >
              Provider Information
            </NavLink>

            <NavLink
              to={"/SpecialtyContainer"}
              activeClassName={"active"}
            >
              Specialty Descriptions
            </NavLink>
          </nav>
        </div>

       
      </>
    </header>
  )
}



