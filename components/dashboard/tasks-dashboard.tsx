'use client';

import { useState } from 'react';
import TasksTable from './tasks-table';
import TaskForm from './task-form';
import { Button } from '@/components/ui/button';

export default function TasksDashboard() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold">Dashboard</h2>
        <Button onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Cancel' : 'New Task'}
        </Button>
      </div>
      <div className="bg-white rounded-xl shadow-sm p-6">
        {showForm && (
          <div className="mb-6">
            <TaskForm onSuccess={() => {
              setShowForm(false);
              // You'll need to implement a way to refresh the table
              
            }} />
          </div>
        )}
        <TasksTable />
      </div>
    </>
  );
} 