import React from 'react'

function Pricing() {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        Transparent Pricing for Every Stage of Growth
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Starter Plan */}
        <div className="bg-white rounded-xl shadow-xl p-6">
          <h3 className="text-2xl font-semibold mb-4">Starter</h3>
          <div className="text-5xl font-bold mb-4">Free</div>
          <p className="text-gray-600 mb-4">Perfect for individuals and small teams getting started.</p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Up to 5 users</li>
            <li>Basic analytics</li>
            <li>Community support</li>
          </ul>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-lg shadow-md text-white transition-all duration-300 w-full">
            Get Started
          </button>
        </div>

        {/* Pro Plan (Most Popular) */}
        <div className="bg-white rounded-xl shadow-2xl p-6 transform scale-105">
          <div className="bg-primary text-primary-foreground py-2 px-4 rounded-full inline-block mb-2">Most Popular</div>
          <h3 className="text-2xl font-semibold mb-4">Pro</h3>
          <div className="text-5xl font-bold mb-4">$29/month</div>
          <p className="text-gray-600 mb-4">For growing teams that need more features and support.</p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Up to 25 users</li>
            <li>Advanced analytics</li>
            <li>Priority support</li>
            <li>Integration with other tools</li>
          </ul>
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-lg shadow-md text-white transition-all duration-300 w-full">
            Start Free Trial
          </button>
        </div>

        {/* Enterprise Plan */}
        <div className="bg-white rounded-xl shadow-xl p-6">
          <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
          <div className="text-5xl font-bold mb-4">Contact Us</div>
          <p className="text-gray-600 mb-4">Custom solutions for large organizations with unique needs.</p>
          <ul className="list-disc list-inside text-gray-600 mb-6">
            <li>Unlimited users</li>
            <li>Custom analytics</li>
            <li>Dedicated support</li>
            <li>Custom integrations</li>
          </ul>
          <button className="border-2 border-blue-600 hover:bg-blue-50 px-6 py-3 rounded-xl text-lg shadow-md text-blue-600 transition-all duration-300 w-full">
            Contact Sales
          </button>
        </div>
      </div>
    </section>
  )
}

export default Pricing
