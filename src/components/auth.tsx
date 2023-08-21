'use client'

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

import type { Database } from '@/lib/database.types'

export function Login() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const supabase = createClientComponentClient<Database>()

    const handleSignUp = async () => {
        const { data, error } = await supabase.auth.signUp({
            email,
            password,
            options: {
                emailRedirectTo: `${location.origin}/auth/callback`,
            },
        })
        //console.log(data)
        router.refresh()
    }

    const handleSignIn = async () => {
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        })
        //console.log(data)
        if (data.session) {
            router.push(`${location.origin}/main`)
        }
        router.refresh()
    }


    return (
        <div className='p-24' >
            <div className='p-3 flex flex-col border-double border-2 border-indigo-600'>
                <label htmlFor="email">Email:</label>
                <input name="email" onChange={(e) => setEmail(e.target.value)} value={email} />
                <label htmlFor="password">Password: </label>
                <input
                    type="password"
                    name="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                <button onClick={handleSignUp} className='bg-blue-200 '>Sign up</button>
                <button onClick={handleSignIn} className='bg-blue-500 border-double border-4 border-indigo-600'>Sign in</button>
            </div >
        </div >
    )
}



export function Logout() {
    const supabase = createClientComponentClient<Database>()
    const router = useRouter()

    const handleSignOut = async () => {
        await supabase.auth.signOut()
        router.push(`${location.origin}/`)
    }

    return (
        <button onClick={handleSignOut} className='px-2 border-solid border-2 border-l-neutral-600'>Sign out</button>
    )
} 