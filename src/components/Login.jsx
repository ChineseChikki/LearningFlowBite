import { Label, TextInput, Checkbox, Button } from "flowbite-react"
import React from "react"

const Login = () => {
  return (
    <>
        <form className="flex flex-col gap-4 mt-[50px]">
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="email1"
              value="Your email"
            />
          </div>
          <TextInput
            id="email1"
            type="email"
            // icon={HiMail}
            placeholder="name@flowbite.com"
            required={true}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label
              htmlFor="password1"
              value="Your password"
            />
          </div>
          <TextInput
            id="password1"
            type="password"
            required={true}
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">
            Remember me
          </Label>
        </div>
        <Button type="submit">
          Submit
        </Button>
        </form>
    </>
  )
}

export default Login
