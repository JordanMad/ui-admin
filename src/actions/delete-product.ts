'use server'

import { revalidateTag } from "next/cache"

export async function deleteProduct(id: string) {
    const data = await fetch(`http://localhost:3002/products/${id}`,{
        method: 'DELETE'
    })

    if (!data.ok) {
        throw new Error('wtf')
    }

    revalidateTag('products')

    const response = await data.json()

    return response
}