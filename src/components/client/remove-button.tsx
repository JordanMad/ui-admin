'use client';

import { deleteProduct } from "@/actions/delete-product";
import { Button } from "../ui/button"

export function RemoveButton({ id }: { id: string}) {
    return <Button className="bg-red-500 hover:bg-red-600 text-white" onClick={() => deleteProduct(id)}>Remove</Button>
}