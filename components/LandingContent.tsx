'use client';

import Link from 'next/link';

export default function LandingContent() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-50">
        <div className="flex justify-between items-center py-6">
          <div className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform cursor-pointer">
              SaaSFrame
            </span>
          </div>
        </div>

        {/* Enhanced Hero Section */}
        <div className="mt-24 relative z-10">
          {/* Decorative background elements */}
          <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-100 to-purple-100 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
          </div>
          <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
            <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-purple-100 to-blue-100 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
          </div>

          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-6xl lg:text-7xl font-bold tracking-tight mb-8 animate-fade-in">
              <span className="block text-gray-900 drop-shadow-sm">Launch Your SaaS</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                In Record Time
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-12 leading-relaxed">
              Start with a production-ready foundation. Authentication, payments, 
              and core features — all set up and ready to customize.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                href="/auth/sign-up"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200"
              >
                Start Building
                <svg className="ml-2 h-5 w-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-medium rounded-full text-gray-700 bg-white hover:bg-gray-50 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 transform duration-200"
              >
                View Features
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-8 pt-8">
              {[
                { number: '100+', text: 'Components Ready' },
                { number: '1hr', text: 'Setup Time' },
                { number: '99%', text: 'Time Saved' },
              ].map((stat, index) => (
                <div key={index} className="text-center p-6 rounded-2xl bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600 font-medium">{stat.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
