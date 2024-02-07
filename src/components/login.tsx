import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { authenticate } from "@/actions/authenticate"

export function Login() {
  return (
    <div className="h-screen flex items-center justify-center bg-green-500">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-center text-green-700">Login</h2>
        <form className="mt-4 space-y-6" action={authenticate}>
          <div className="space-y-2">
            <Label className="text-gray-700" htmlFor="email">
              Email
            </Label>
            <Input
              className="border-green-300 focus:ring-green-200 focus:border-green-500"
              id="email"
              required
              type="text"
              name="email"
            />
          </div>
          <div className="space-y-2">
            <Label className="text-gray-700" htmlFor="password">
              Password
            </Label>
            <Input
              className="border-green-300 focus:ring-green-200 focus:border-green-500"
              id="password"
              name="password"
              required
              type="password"
            />
          </div>
          <Button className="w-full bg-green-500 hover:bg-green-600 text-white">Login</Button>
        </form>
      </div>
    </div>
  )
}
