'use client'

import { register, signin } from "@/lib/api"
import { useRouter } from "next/navigation"
import Button from "./Button"
import Card from "./Card"
import Input from "./Input"
import { useCallback, useState } from "react"


const registerContent = {
    linkUrl:"/signin",
    linkText: 'Already have an account',
    header: 'Create a new account',
    subHeader:'It only takes 30 seconds to create your free account.',
    buttonText: 'Register'
}

const signinContent = {
    linkUrl: "/register",
    linkText: "Don't have an account?",
    header: "Welcome Back",
    subheader: "Enter your credentials to access your account",
    buttonText: "Sign In",
  };