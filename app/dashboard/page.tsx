import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import TasksTable from '@/components/dashboard/tasks-table';
import TaskForm from '@/components/dashboard/task-form';
import { Button } from '@/components/ui/button';
import TasksDashboard from '@/components/dashboard/tasks-dashboard';

export default async function DashboardPage() {
  const { userId } = await auth();

  if (!userId) {
    redirect('/auth/sign-in');
  }

  return (
    <div className="p-6">
      <TasksDashboard />
    </div>
  );
} 