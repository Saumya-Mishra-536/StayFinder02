export default function Login() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-80">
          <h2 className="text-2xl font-semibold mb-4 text-center">Log in</h2>
          <input
            type="text"
            placeholder="Phone number"
            className="w-full mb-3 px-4 py-2 border rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full mb-3 px-4 py-2 border rounded-md"
          />
          <div className="text-right text-sm mb-4 text-blue-600 cursor-pointer">
            Forgot Password?
          </div>
          <button className="w-full bg-blue-500 text-white py-2 rounded-md">Log in</button>
          <div className="text-center text-sm mt-4">
            Don’t have an account? <a href="/signup" className="text-blue-600">Sign up</a>
          </div>
        </div>
      </div>
    );
  }
  