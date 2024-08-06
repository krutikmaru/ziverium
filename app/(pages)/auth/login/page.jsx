"use client";
import NorthernLights from "@/app/ui/components/NorthernLights";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import React from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  //connect login page to supase
  const supabase = createClientComponentClient();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      setLoading(false);
      console.log(user);
    }
    getUser();
  }, []);
  const handleSignUp = async () => {
    setIsSubmitting(true);
    try {
      const res = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${location.origin}/auth/callback`,
        },
      });

      setUser(res.data.user);
      router.refresh();
      setEmail("");
      setPassword("");
      setLoading(false);
    } catch (error) {
      console.log(error);
    } finally {
    }
  };

  const handleSignIn = async () => {
    const res = await supabase.auth.signInWithPassword({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/`,
      },
    });
    setUser(res.data.user);
    console.log("Users", res.data.user);
    router.refresh();
    setEmail("");
    setPassword("");
  };
  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <Skeleton className="bg-white" />
        <h2>Loading Please wait... </h2>
      </div>
    );
  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.refresh();
    setUser(null);
  };
  return (
    <main>
      <div className="flex flex-col md:flex-row justify-center items-center w-screen min-h-screen relative overflow-hidden px-5 md:px-20">
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-b from-transparent to-ziverium-background-dark z-20"></div>
        <NorthernLights />
        <div className=" w-full h-full flex flex-col items-center md:items-start justify-center relative z-20 mt-36 md:mt-0 mb-10">
          <h1 className="scroll-m-20 text-7xl font-normal tracking-tight lg:text-8xl mb-4">
            Sign Up Now
          </h1>
          <p className="text-base md:text-xl font-light text-neutral-300 mb-5 text-center md:text-left">
            Welcome to our website! Please log in using your credentials to
            access your account and explore personalized features. If you
            encounter any issues, use the "Forgot Password" link or contact
            support for assistance.
          </p>
          <Input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              width: "350px",
              height: "45px",
              padding: "12px 20px",
              margin: "8px 0",
              boxSizing: "border-box",
              border: "2px solid #ccc",
              borderRadius: "4px",
              fontSize: "21px",
              background: "transparent",
              fontFamily: "Arial, sans-serif",
              transition: "border-color 0.3s ease, box-shadow 0.3s ease",
            }}
          />
          <Input
            type="password"
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{
              width: "350px",
              height: "45px",
              padding: "12px 20px",
              margin: "16px 0", // Add space between the inputs
              boxSizing: "border-box",
              border: "2px solid #ccc",
              borderRadius: "4px",
              background: "transparent",
              fontSize: "21px",
              fontFamily: "Arial, sans-serif",
              transition: "border-color 0.3s ease, box-shadow 0.3s ease",
            }}
          />

          <button className="text-base md:text-xl font-light text-blue-500 mb-5 text-center md:text-left cursor-pointer hover:underline">
            Forgot Password?
          </button>

          <div className="flex space-x-2">
            {user ? (
              <h2>You are logged in</h2>
            ) : (
              <button
                className="bg-ziverium-blue text-[#141414] py-2 px-5 font-semibold rounded-full flex items-center space-x-2 "
                onClick={handleSignUp}
              >
                <span>Sign Up</span>
              </button>
            )}

            <button
              className="bg-ziverium-blue text-[#141414] py-2 px-5 font-semibold rounded-full flex items-center space-x-2 "
              onClick={handleSignIn}
            >
              <span>Sign In</span>
            </button>
          </div>
        </div>
        <div className=" w-full h-full relative overflow-visible bg-transparent">
          {/* <Spline
          scene="https://prod.spline.design/50s7CDe3XTgTbS2h/scene.splinecode"
          className="bg-red-transparent object-contain h-[700px]"
        /> */}
        </div>
      </div>
    </main>
  );
}
