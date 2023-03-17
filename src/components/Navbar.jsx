import React from 'react'
import { Navbar, Dropdown, Avatar } from "flowbite-react"
import logo from "../assets/logo.png"
import git from "../assets/git avater.png"


  const NavbarFB = () => {
    return (
            <div>
          <Navbar
            fluid={true}
            rounded={true}
            >
            <Navbar.Brand href="https://developers.google.com/womentechmakers/ambassadors">
              <img
                src={logo}
                className="mr-3 h-6 sm:h-9"
                alt="WTM Logo"
              />
              <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                WTM
              </span>
            </Navbar.Brand>
          <div className="flex md:order-2">
            <Dropdown
              arrowIcon={false}
              inline={true}
              label={<Avatar alt="User settings" img={git} rounded={true}/>}
            >
            </Dropdown>
            <Navbar.Toggle />
          </div>
          <Navbar.Collapse>
            <Navbar.Link
              href="/"
              active={true}
            >
              Home
            </Navbar.Link>
            <Navbar.Link href="/signup">
              SignUp
            </Navbar.Link>
             <Navbar.Link href="/login">
            LogIn
            </Navbar.Link>
            <Navbar.Link href="/lang">
            TranslateLang
            </Navbar.Link>
            <Navbar.Link href="/img">
             GenImage
            </Navbar.Link>
          </Navbar.Collapse>
         </Navbar>
            </div>
  )
}
export default NavbarFB