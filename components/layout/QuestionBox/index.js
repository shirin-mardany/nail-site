import React from 'react'

export default function QuestionBox() {
    return (
      <div>
        <div className="space-y-2">
          {/* Accordion Item 1 */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <input
              type="radio"
              name="my-accordion-3"
              defaultChecked
              className="hidden peer"
              id="item-1"
            />
            <label
              htmlFor="item-1"
              className="block cursor-pointer bg-white px-4 py-3 font-semibold text-gray-800"
            >
              How do I create an account?
            </label>
            <div className="max-h-0 overflow-hidden peer-checked:max-h-40 transition-all duration-300 px-4 text-sm text-gray-600 bg-gray-50">
              Click the "Sign Up" button in the top right corner and follow the
              registration process.
            </div>
          </div>

          {/* Accordion Item 2 */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <input
              type="radio"
              name="my-accordion-3"
              className="hidden peer"
              id="item-2"
            />
            <label
              htmlFor="item-2"
              className="block cursor-pointer bg-white px-4 py-3 font-semibold text-gray-800"
            >
              I forgot my password. What should I do?
            </label>
            <div className="max-h-0 overflow-hidden peer-checked:max-h-40 transition-all duration-300 px-4 text-sm text-gray-600 bg-gray-50">
              Click on "Forgot Password" on the login page and follow the
              instructions sent to your email.
            </div>
          </div>

          {/* Accordion Item 3 */}
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <input
              type="radio"
              name="my-accordion-3"
              className="hidden peer"
              id="item-3"
            />
            <label
              htmlFor="item-3"
              className="block cursor-pointer bg-white px-4 py-3 font-semibold text-gray-800"
            >
              How do I update my profile information?
            </label>
            <div className="max-h-0 overflow-hidden peer-checked:max-h-40 transition-all duration-300 px-4 text-sm text-gray-600 bg-gray-50">
              Go to "My Account" settings and select "Edit Profile" to make
              changes.
            </div>
          </div>
        </div>
      </div>
    );
}
