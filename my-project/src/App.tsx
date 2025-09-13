import { useState } from 'react'
import './index.css' // Tailwind CSS

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-purple-400 via-pink-500 to-red-400 text-white p-8">
      <h1 className="text-5xl font-extrabold mb-8 drop-shadow-lg">
        🎨 Tailwind CSS is Working!
      </h1>

      <p className="text-2xl mb-6 font-semibold tracking-wide">
        Count increments when you click the button
      </p>

      <button
        className="px-8 py-4 bg-yellow-400 hover:bg-yellow-500 text-black font-bold rounded-xl shadow-2xl transform hover:scale-105 transition duration-300"
        onClick={() => setCount(count + 1)}
      >
        Count: {count}
      </button>

      <p className="mt-8 text-xl italic underline decoration-pink-300">
        Watch the colors, hover, and shadows change!
      </p>
    </div>
  )
}

export default App
