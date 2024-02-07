'use server'

import { redirect } from 'next/navigation'
import { revalidateTag } from 'next/cache'

export async function addProduct(formData: FormData) {
  const body = Object.fromEntries(formData);

  const data = await fetch('http://localhost:3002/products/add', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })

  if (data.ok) {
    revalidateTag('products')
    redirect('/dashboard')
  }

  console.log('whoops')
  return false
}