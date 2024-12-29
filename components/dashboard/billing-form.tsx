'use client';

import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useState } from "react";

const plans = [
  {
    name: 'Basic',
    monthlyPrice: 10,
    yearlyPrice: 100,
    features: [
      'Up to 10 tasks',
      'Basic analytics',
      'Email support',
      '1 team member'
    ]
  },
  {
    name: 'Pro',
    monthlyPrice: 25,
    yearlyPrice: 250,
    features: [
      'Unlimited tasks',
      'Advanced analytics',
      'Priority support',
      'Up to 5 team members',
      'Custom integrations'
    ]
  },
  {
    name: 'Enterprise',
    monthlyPrice: 50,
    yearlyPrice: 500,
    features: [
      'Everything in Pro',
      'Unlimited team members',
      'Custom features',
      '24/7 phone support',
      'Dedicated account manager'
    ]
  }
];

export default function BillingForm() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-center gap-4 p-1 bg-gray-100 rounded-lg w-fit mx-auto">
        <button
          onClick={() => setIsYearly(false)}
          className={`px-4 py-2 rounded-md ${!isYearly ? 'bg-white shadow-sm' : ''}`}
        >
          Monthly
        </button>
        <button
          onClick={() => setIsYearly(true)}
          className={`px-4 py-2 rounded-md ${isYearly ? 'bg-white shadow-sm' : ''}`}
        >
          Yearly (Save 15%)
        </button>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {plans.map((plan) => (
          <div key={plan.name} className="flex flex-col border rounded-lg p-6 hover:shadow-lg transition-shadow">
            <div className="flex-grow space-y-4">
              <h3 className="text-xl font-bold">{plan.name}</h3>
              <div className="text-3xl font-bold">
                ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                <span className="text-base font-normal text-gray-500">
                  /{isYearly ? 'year' : 'month'}
                </span>
              </div>
              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-6 pt-6 border-t">
              <Button className="w-full" variant="default">
                Subscribe to {plan.name}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 