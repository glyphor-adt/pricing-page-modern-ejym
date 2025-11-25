import React from 'react'

function Hero() {
  return (
    <section className="py-24 text-center md:text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="md:order-2">
          <img
            src="https://images.unsplash.com/photo-1682687220305-b2743fa1474c?w=800&h=600"
            alt="Hero Image"
            className="rounded-xl shadow-2xl"
          />
        </div>
        <div className="md:order-1">
          <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-transparent bg-clip-text mb-4">
            Unlock Limitless Potential with AI-Powered Automation
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl leading-relaxed mb-8">
            Transform your workflow with intelligent automation. Reclaim your time, boost productivity, and achieve unprecedented results with our cutting-edge AI solutions.
          </p>
          <div className="space-x-4">
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl text-lg shadow-xl text-white transition-all duration-300">
              Start Free Trial
            </button>
            <button className="border-2 border-gray-300 hover:border-blue-500 px-8 py-4 rounded-xl text-lg transition-all duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
