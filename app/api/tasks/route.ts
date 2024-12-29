import { db } from '@/configs';
import { tasks } from '@/configs/schema';
import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const { userId } = await auth();
    
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const allTasks = await db.select().from(tasks);
    return NextResponse.json(allTasks);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const { title, description, status } = body;

    if (!title) {
      return new NextResponse("Title is required", { status: 400 });
    }

    const task = await db.insert(tasks).values({
      title,
      description,
      status: status || 'pending'
    }).returning();

    return NextResponse.json(task[0]);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
} 