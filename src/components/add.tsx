import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { addProduct } from "@/actions/add-product"

export function Add() {
  return (
    <div className="h-screen flex items-center justify-center bg-green-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-green-700">Add Ingredient</h2>
        <form className="mt-4 space-y-6" action={addProduct}>
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
              name="price"
            />
          </div>
          <Button className="w-full bg-green-500 hover:bg-green-600 text-white" type="submit">Add</Button>
        </form>
      </div>
    </div>
  )
}
