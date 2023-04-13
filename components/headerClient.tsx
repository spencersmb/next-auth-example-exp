'use client'

import { signIn } from "next-auth/react"

export default function Header() {

  return (
    <header>
      <>
        <span className={''}>
          You are not signed in
        </span>
        <a
          href={`/api/auth/signin`}
          className={''}
          onClick={(e) => {
            e.preventDefault()
            signIn()
          }}
        >
          Sign in
        </a>
      </>
    </header>
  )
}