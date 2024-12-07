import { Metadata } from 'next'
import React from 'react'
import signUpImage from "@/assets/signup-image.jpg"
import Image from 'next/image'
import Link from 'next/link'
import SignUpForm from './SignUpForm'

export const metadata: Metadata = {
    title: "Sign Up"
}

export default function Page() {
    return (
        <main className="flex items-center justify-center h-screen p-5">
            <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] rounded-2xl overflow-hidden bg-card shadow-2xl">
                <div className="w-full p-10 space-y-10 overflow-y-auto md:w-1/2">
                <div className="space-y-1 text-center">
                    <h1 className="text-3xl font-bold"> Sign Up to Regram</h1>
                    <p>A place where <span className="italic">you</span> can find a friend</p>
                </div>
                <div className="space-y-5">

                    <SignUpForm />

                    <Link href="/login" className="block text-center hover:underline">
                    Already have an account? Log In
                    </Link>
                </div>
                </div>
                
                <Image 
                src={signUpImage}
                alt=""
                className="hidden object-cover w-1/2 md:block"
                />
            </div>
        </main>
    )
}
