import { Label, TextInput, Checkbox, Button } from 'flowbite-react'
import React from 'react'

const Signup = () => {
  return (
    <>
      <form className="flex flex-col gap-4 mt-[50px]">
        <div>
           <div className="mb-2 block">
      <Label
        htmlFor="name"
        value="Your First Name"
      />
    </div>
    <TextInput
      id="name"
      type="text"
      placeholder="first name"
      required={true}
      shadow={true}
          />
          <div className="mb-2 block">
      <Label
        htmlFor="name1"
        value="Your Last Name"
      />
    </div>
    <TextInput
      id="name1"
      type="text"
      placeholder="last name"
      required={true}
      shadow={true}
    />


    <div className="mb-2 block">
      <Label
        htmlFor="email2"
        value="Your email"
      />
    </div>
    <TextInput
      id="email2"
            type="email"
            // icon={HiMail}
      placeholder="name@flowbite.com"
      required={true}
      shadow={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="password2"
        value="Your password"
      />
    </div>
    <TextInput
      id="password2"
      type="password"
      required={true}
      shadow={true}
    />
  </div>
  <div>
    <div className="mb-2 block">
      <Label
        htmlFor="repeat-password"
        value="Repeat password"
      />
    </div>
    <TextInput
      id="repeat-password"
      type="password"
      required={true}
      shadow={true}
    />
  </div>
  <div className="flex items-center gap-2">
    <Checkbox id="agree" />
    <Label htmlFor="agree">
      I agree with the   
      <a
        href="/forms"
        className="text-blue-600 hover:underline dark:text-blue-500"
      >
        terms and conditions
      </a>
    </Label>
  </div>
  <Button type="submit">
    Register new account
  </Button>
</form>
    </>
  )
}

export default Signup