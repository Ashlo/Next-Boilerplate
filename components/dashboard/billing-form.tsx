'use client';

import { Button } from "@/components/ui/button";
import axios from "axios";
import { Check } from "lucide-react";
import { useState } from "react";

const buyProduct = async (productId: string) => {
    try {
        const response = await axios.post('/api/buyProduct', {
            productId: "645825"
        })

        console.log(response.data);
        window.open(response.data.checkoutUrl, '_blank');
    } catch (error) {
        console.error(error);
        alert('Error buying product');
    }
};

const plans = [
  {
    name: 'Basic',
    price: {
      monthly: 10,
      yearly: 100
    },
    features: [
      'Up to 10 tasks',
      'Basic analytics',
      'Email support',
      '1 team member'
    ]
  }
];

export default function BillingForm() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-center gap-4 p-1 bg-gray-100 rounded-lg w-fit mx-auto">
        <button
          onClick={() => {
            setIsYearly(false);
          }}
          className={`px-4 py-2 rounded-md ${!isYearly ? 'bg-white shadow-sm' : ''}`}
        >
          Monthly
        </button>
        <button
          onClick={() => {
            setIsYearly(true);
          }}
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
                ${isYearly ? plan.price.yearly : plan.price.monthly}
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
              <Button className="w-full" onClick={() => buyProduct('645825')} variant="default">
                Subscribe to {plan.name}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 