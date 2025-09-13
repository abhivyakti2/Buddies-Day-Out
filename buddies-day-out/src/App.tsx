import './index.css'

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">
        🚀 Tailwind is Working!
      </h1>

      <p className="text-lg mb-4">
        If you see this styled text, Tailwind CSS is set up correctly 🎉
      </p>

      <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md transition duration-300">
        Click Me
      </button>
    </div>
  )
}

export default App

