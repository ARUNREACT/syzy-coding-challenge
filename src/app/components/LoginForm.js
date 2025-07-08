export default function LoginForm() {
  return (
    <div className="flex items-center justify-center mt-10 px-4">
      <div className="md:p-8 w-full max-w-md">
        <form action="mailto:convey2arunk@gmail.com" method="POST" className="space-y-4">
          <div>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              required
              className="mt-1 block w-full px-4 py-2 border-b border-gray-300 text-black focus:border-b-blue-500"
            />
          </div>
          <div>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              required
              className="mt-1 block w-full px-4 py-2 border-b border-gray-300 text-black focus:border-b-blue-500"
            />
          </div>
          <div>
            <button
              type="submit"
              className="cursor-pointer w-full bg-blue-200 text-black font-semibold text-sm px-4 py-3 hover:bg-blue-400 hover:text-white transition"
            >
              SIGN IN
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
