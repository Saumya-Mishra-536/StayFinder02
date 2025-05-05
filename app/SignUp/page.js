export default function Signup() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-80">
          <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
          <input
            type="text"
            placeholder="Phone number"
            className="w-full mb-4 px-4 py-2 border rounded-md"
          />
          <button className="w-full bg-blue-500 text-white py-2 rounded-md mb-3">Continue</button>
          <div className="text-center text-sm text-gray-500 mb-3">or</div>
          <button className="w-full border py-2 rounded-md mb-2">Continue with Facebook</button>
          <button className="w-full border py-2 rounded-md">Continue with Google</button>
        </div>
      </div>
    );
  }
  

