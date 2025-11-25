import React from 'react'

function Footer() {
  return (
    <footer className="py-12 border-t border-gray-200 mt-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Product</h4>
          <ul className="text-gray-600">
            <li><a href="#">Features</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Customers</a></li>
            <li><a href="#">Case Studies</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Company</h4>
          <ul className="text-gray-600">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Resources</h4>
          <ul className="text-gray-600">
            <li><a href="#">Documentation</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Tutorials</a></li>
            <li><a href="#">API</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold text-gray-800 mb-4">Legal</h4>
          <ul className="text-gray-600">
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Cookies Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center text-gray-500">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
