import { useIsAuthenticated } from '@azure/msal-react'
import React from 'react'
import { Navbar } from 'react-bootstrap'
import { SignInButton } from './SigninButton'
import Link from 'next/link'
import { SignOutButton } from './SignOutButton'

export const PageLayout = (props) => {
  const isAuthenticated = useIsAuthenticated()
  console.log(isAuthenticated)

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Link className="navbar-brand" href="/">
          MSAL React Tutorial
        </Link>
        {isAuthenticated ? <SignOutButton /> : <SignInButton />}
      </Navbar>
      <center>
        <Link href="/sample">
          <a>to sample</a>
        </Link>
        <br />
        <Link href="/">
          <a>to home</a>
        </Link>
      </center>
      {props.children}
    </>
  )
}
