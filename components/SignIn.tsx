"use client"
import React from 'react'
import { Auth } from '@supabase/auth-ui-react'
import { superbase } from '@/lib/superbase/products'
import { ThemeSupa } from '@supabase/auth-ui-shared'

const SignIn = () => {
    return (
        <div className='absolute top-0 w-full bg-white pt-5'>
            <div className='w-[25%] mx-auto'>
                <Auth
                    supabaseClient={superbase}
                    appearance={{ theme: ThemeSupa }}
                />
            </div>
        </div>
    )
}

export default SignIn
