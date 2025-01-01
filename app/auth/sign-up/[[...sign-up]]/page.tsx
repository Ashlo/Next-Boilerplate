import { SignUp } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side - Gradient Background with Content */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-blue-600 to-purple-600 p-12 text-white">
        <div className="relative z-10 mt-auto">
          <h1 className="text-4xl font-bold mb-4">Join SaasFrame Today</h1>
          <p className="text-lg text-blue-100 mb-8">
            A production-ready template with authentication, database, and more. Sign up now to get started.
          </p>
          <div className="grid grid-cols-2 gap-6 text-sm text-blue-100">
            <div className="flex items-start space-x-3">
              <svg className="w-5 h-5 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Type-Safe Development</span>
            </div>
            <div className="flex items-start space-x-3">
              <svg className="w-5 h-5 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Modern Stack</span>
            </div>
            <div className="flex items-start space-x-3">
              <svg className="w-5 h-5 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Database</span>
            </div>
            <div className="flex items-start space-x-3">
              <svg className="w-5 h-5 mt-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Authentication</span>
            </div>
          </div>
        </div>
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute w-96 h-96 -top-10 -right-10 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute w-96 h-96 -bottom-10 -left-10 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute w-96 h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Right Side - Sign Up Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-12">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Create your account</h2>
            <p className="text-gray-600">Start Now</p>
          </div>
          <SignUp
            appearance={{
              elements: {
                formButtonPrimary: 
                  'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white',
                footerActionLink: 'text-blue-600 hover:text-blue-700',
                card: 'shadow-none',
                headerTitle: 'hidden',
                headerSubtitle: 'hidden',
                dividerLine: 'bg-gray-200',
                dividerText: 'text-gray-500',
                formFieldInput: 'border-gray-300 focus:border-blue-500 focus:ring-blue-500',
                formFieldLabel: 'text-gray-700',
                identityPreviewText: 'text-gray-700',
                identityPreviewEditButton: 'text-blue-600 hover:text-blue-700',
                formFieldSuccessText: 'text-green-600',
                formFieldErrorText: 'text-red-600',
                socialButtonsBlockButton: 
                  'border border-gray-300 hover:border-gray-400 hover:bg-gray-50',
                socialButtonsBlockButtonText: 'text-gray-600',
                formFieldWarningText: 'text-yellow-600'
              },
              layout: {
                socialButtonsPlacement: 'bottom',
                showOptionalFields: false
              }
            }}
            redirectUrl="/dashboard"
            routing="path"
            path="/auth/sign-up"
          />
        </div>
      </div>
    </div>
  );
}
