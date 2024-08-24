// Internal Imports
import { signup } from "../actions";

// External Imports
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default function SignUpPage() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="w-1/2 h-full bg-neutral-900 flex justify-between items-start flex-col p-5">
        {/* Logo */}
        <Link href={"/"} className="w-40 h-12 relative">
          <Image
            src={"/ziverium-text.png"}
            fill
            className="absolute  object-cover"
            alt="Ziverium Logo"
          />
        </Link>
        {/* Quote */}
        <div>
          <blockquote className="mt-6 border-l-2 pl-6 italic">
            &quot;Where your ideas meet creativity.&quot;
          </blockquote>
        </div>
      </div>
      <div className="w-1/2 h-full bg-neutral-950 flex flex-col space-y-4 justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
            Create your account
          </h3>
          <p className="leading-7 text-sm text-neutral-400">
            Provide email & password to create your account.
          </p>
        </div>
        <form className="min-w-[350px]">
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label
                htmlFor="email"
                className="text-sm font-normal text-neutral-600"
              >
                Email
              </Label>
              <Input
                id="email"
                placeholder="meera@example.com"
                name="email"
                type="email"
                required
                className="dark:bg-neutral-900 dark:border-neutral-800 dark:placeholder:text-neutral-600 "
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label
                htmlFor="password"
                className="text-sm font-normal text-neutral-600"
              >
                Password
              </Label>
              <Input
                id="password"
                name="password"
                type="password"
                required
                className="dark:bg-neutral-900 dark:border-neutral-800"
              />
            </div>
            <Button formAction={signup} type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
        <div className="mt-4 text-center text-sm">
          Already have an account?{" "}
          <Link href="/login" className="underline">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}

{
  /* <div className="w-screen h-screen flex justify-center items-center">
      <Card className="w-[350px] dark:bg-neutral-900 dark:border-neutral-800">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription className="dark:text-neutral-600">
            Enter credenitals to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label
                  htmlFor="email"
                  className="text-sm font-normal text-neutral-600"
                >
                  Email
                </Label>
                <Input
                  id="email"
                  placeholder="meera@example.com"
                  name="email"
                  type="password"
                  required
                  className="dark:bg-neutral-800 dark:border-neutral-700 dark:placeholder:text-neutral-600"
                />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label
                  htmlFor="password"
                  className="text-sm font-normal text-neutral-600"
                >
                  Password
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="dark:bg-neutral-800 dark:border-neutral-700"
                />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline">Cancel</Button>
          <Button formAction={login}>Sign in</Button>
        </CardFooter>
      </Card>
      {/* <form>
        <label htmlFor="email">Email:</label>
        <input id="email" name="email" type="email" required />
        <label htmlFor="password">Password:</label>
        <input id="password" name="password" type="password" required />
        <button formAction={login}>Log in</button>
        <button formAction={signup}>Sign up</button>
      </form> */
}
// </div> */}
