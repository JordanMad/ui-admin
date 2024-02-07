"use client";

import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Product } from "@/types/product"
import { useState } from "react";
import { editProduct } from "@/actions/edit-product";
import { useFormState } from "react-dom";

export function Edit({ product }: { product: Product }) {
  const [formState, setFormState] = useState(product)
  const [state, formAction] = useFormState(editProduct, {
    message: null
  })

  const handleOnChangeField = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((prevState) => {
      return {
        ...prevState,
        [event.target.name]: event.target.value
      }
    })
  }

  return (
    <div className="h-screen flex items-center justify-center bg-green-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-green-700">Edit Ingredient</h2>
        <form className="mt-4 space-y-6" action={formAction}>
          <input type="hidden" name="id" value={formState.id} />
          <div className="space-y-2">
            <Label className="text-gray-700" htmlFor="name">
              Name
            </Label>
            <Input
              className="border-green-300 focus:ring-green-200 focus:border-green-500"
              id="name"
              required
              type="text"
              name="name"
              onChange={handleOnChangeField}
              value={formState.name}
            />
          </div>
          <div className="space-y-2">
            <Label className="text-gray-700" htmlFor="type">
              Type
            </Label>
            <Input
              className="border-green-300 focus:ring-green-200 focus:border-green-500 bg-white"
              id="type"
              name="type"
              required
              type="text"
              onChange={handleOnChangeField}
              value={formState.type}
            />
          </div>
          <div className="space-y-2">
            <Label className="text-gray-700" htmlFor="calories">
              Calories
            </Label>
            <Input
              className="border-green-300 focus:ring-green-200 focus:border-green-500"
              id="calories"
              required
              type="text"
              onChange={handleOnChangeField}
              value={formState.calories}
              name="calories"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-gray-700" htmlFor="nutritionalHighlight">
              Nutrition highlight
            </Label>
            <Textarea
              className="border-green-300 focus:ring-green-200 focus:border-green-500"
              id="nutritionalHighlight"
              name="nutritionalHighlight"
              onChange={handleOnChangeField}
              value={formState.nutritionalHighlight}
              required
            />
          </div>
          <div className="space-y-2">
            <Label className="text-gray-700" htmlFor="price">
              Price
            </Label>
            <Input
              className="border-green-300 focus:ring-green-200 focus:border-green-500"
              id="price"
              required
              type="text"
              onChange={handleOnChangeField}
              value={formState.price}
              name="price"
            />
          </div>
          <Button className="w-full bg-green-500 hover:bg-green-600 text-white" type="submit">Edit</Button>
        </form>
      </div>
    </div>
  )
}
