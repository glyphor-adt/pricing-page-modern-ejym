import React from 'react'
import { Zap, Shield, TrendingUp } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Accelerated Deployment: Launch in Under 60 Seconds',
    description: 'Deploy your applications with lightning speed. Our streamlined process ensures you are up and running in under a minute.',
  },
  {
    icon: Shield,
    title: 'Fortified Security: Enterprise-Grade Protection for Your Data',
    description: 'Rest easy knowing your data is shielded with our robust, enterprise-grade security measures.',
  },
  {
    icon: TrendingUp,
    title: 'Exponential Growth: Scale Your Business with Confidence',
    description: 'Experience unparalleled growth with our scalable solutions. We adapt to your needs, ensuring you are always ready for what comes next.',
  },
]

function Features() {
  return (
    <section className="py-16">
      <h2 className="text-4xl font-bold text-center mb-12">
        Empowering Features Designed for Your Success
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div key={index} className="bg-white rounded-xl shadow-xl p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <feature.icon className="h-8 w-8 text-primary mb-4" aria-hidden="true" />
            <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Features
