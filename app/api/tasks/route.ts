import { NextResponse } from 'next/server';

let tasksStore: any[] = [];

export async function GET() {
  return NextResponse.json(tasksStore, { status: 200 });
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const newTask = {
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      ...body,
    };
    tasksStore.push(newTask);
    return NextResponse.json(newTask, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Gagal menambahkan tugas' },
      { status: 400 }
    );
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json(
        { message: 'ID tugas diperlukan' },
        { status: 400 }
      );
    }

    tasksStore = tasksStore.filter((task) => task.id !== id);
    return NextResponse.json({ message: 'Tugas berhasil dihapus' }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: 'Gagal menghapus tugas' },
      { status: 500 }
    );
  }
}
