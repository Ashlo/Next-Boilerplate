import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import SettingsForm from '@/components/dashboard/settings-form';

export default async function SettingsPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/auth/sign-in');
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-8">Settings</h2>
      <SettingsForm />
    </div>
  );
} 