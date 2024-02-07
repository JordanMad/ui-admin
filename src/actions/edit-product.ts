'use server'

import { redirect } from 'next/navigation'
import { revalidateTag } from 'next/cache'

export async function editProduct(prevState: any, formData: FormData) {
  const body = Object.fromEntries(formData);

  const data = await fetch(`http://localhost:3002/products/${body.id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-type': 'application/json' // Indicates the content
    },
  })

  if (data.ok) {
    revalidateTag('products')
    redirect('/dashboard')
  }

  return false
}