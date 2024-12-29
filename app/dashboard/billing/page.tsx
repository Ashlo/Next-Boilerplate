import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import BillingForm from '@/components/dashboard/billing-form';

export default async function BillingPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/auth/sign-in');
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-8">Billing & Subscription</h2>
      <BillingForm />
    </div>
  );
} 