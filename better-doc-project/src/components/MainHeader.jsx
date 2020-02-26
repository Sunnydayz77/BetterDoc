import React from 'react'
import { NavLink } from 'react-router-dom'


export default function MainHeader() {
  return (
    <header>
      <>
        <h1>BetterDoc</h1>
        <h2>A Better Way To Search For Healthcare</h2>
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



