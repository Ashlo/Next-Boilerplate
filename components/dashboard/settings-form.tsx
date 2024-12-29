'use client';

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function SettingsForm() {
  const [isSaving, setIsSaving] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSaving(true);
    // Add your settings update logic here
    setTimeout(() => setIsSaving(false), 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">Notifications</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <label className="font-medium">Email Notifications</label>
              <p className="text-sm text-gray-500">Receive email about your task updates</p>
            </div>
            <input type="checkbox" className="toggle" />
          </div>
          <div className="flex items-center justify-between">
            <div>
              <label className="font-medium">Task Reminders</label>
              <p className="text-sm text-gray-500">Get notified about upcoming tasks</p>
            </div>
            <input type="checkbox" className="toggle" defaultChecked />
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-medium">Preferences</h3>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Default Task View
          </label>
          <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm">
            <option>List</option>
            <option>Board</option>
            <option>Calendar</option>
          </select>
        </div>
      </div>

      <Button type="submit" disabled={isSaving}>
        {isSaving ? 'Saving...' : 'Save Settings'}
      </Button>
    </form>
  );
} 