'use server'

import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export async function authenticate(formData: FormData) {
  if (formData.get('email') === process.env.ADMIN_EMAIL && formData.get('password') === process.env.ADMIN_PASSWORD) {
    cookies().set('user', '1')
    redirect('/dashboard')
  } else {
    throw new Error('Something went wrong')
  }
}