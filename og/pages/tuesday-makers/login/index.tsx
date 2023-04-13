import { signIn } from "next-auth/react"

export default function LoginForm() {
  // const searchParams = useSearchParams()
  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    // const signInResult = await signIn("credentials", {
    //   email: "john.doe@gmail.com",
    //   redirect: false,
    //   // callbackUrl: "/tuesday-makers/members",
    // })
    const signInResult = await signIn("credentials", {
      email: "john.doe@gmail.com",
      // callbackUrl: searchParams?.get("from") || "/dashboard",
      callbackUrl: "/",
    })

    console.log('signInResult', signInResult)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" />
        <button>Sign In</button>
      </form>
    </div>
  )
}