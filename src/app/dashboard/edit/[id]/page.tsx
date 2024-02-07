import { Edit } from "@/components/edit";
import { Product } from "@/types/product";

async function getProduct(id: string) {
  const res = await fetch(`http://localhost:3002/products/${id}`)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }

  return res.json()
}

export default async function EditPage({ params }: { params: { id: string } }) {
  const product: Product = await getProduct(params.id)

  return (
    <Edit product={product} />
  );
}
