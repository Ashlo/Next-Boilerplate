import { db } from '@/configs';
import { tasks } from '@/configs/schema';
import { auth } from '@clerk/nextjs/server';
import { eq } from 'drizzle-orm';
import { NextResponse } from 'next/server';

export async function PATCH(
  req: Request,
  { params }: { params: { taskId: string } }
) {
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

    const task = await db.update(tasks)
      .set({ title, description, status })
      .where(eq(tasks.id, parseInt(params.taskId)))
      .returning();

    return NextResponse.json(task[0]);
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { taskId: string } }
) {
  try {
    const { userId } = await auth();
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    await db.delete(tasks)
      .where(eq(tasks.id, parseInt(params.taskId)));

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 });
  }
} 