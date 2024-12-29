import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div className="flex min-h-screen">
      {/* Left Side - Gradient Background with Content */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-blue-600 to-purple-600 p-12 text-white">
        <div className="relative z-10 mt-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome back to ClinicFlow</h1>
          <p className="text-lg text-blue-100 mb-8">
            Your comprehensive medical clinic management solution. Sign in to access your dashboard and manage your practice efficiently.
          </p>
          <div className="flex items-center space-x-4 text-sm text-blue-100">
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
              </svg>
              Efficient Patient Management
            </div>
            <div className="flex items-center">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              Smart Scheduling
            </div>
          </div>
        </div>
        {/* Decorative circles */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          <div className="absolute w-96 h-96 -top-10 -left-10 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute w-96 h-96 -bottom-10 -right-10 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute w-96 h-96 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>

      {/* Right Side - Sign In Form */}
      <div className="w-full lg:w-1/2 bg-white flex items-center justify-center p-12">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Sign in to ClinicFlow</h2>
            <p className="text-gray-600">Welcome back! Please enter your details.</p>
          </div>
          <SignIn
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
            path="/auth/sign-in"
          />
        </div>
      </div>
    </div>
  );
}
