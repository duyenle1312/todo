import connectMongoDB from "../../../lib/db";
import Todo from "../../../lib/model";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  await connectMongoDB();
  const todo = await Todo.find();
  return NextResponse.json({ todo });
}

export async function POST(request: Request) {
  const { todo } = await request.json();
  console.log(todo);
  await connectMongoDB();
  const res = await Todo.create({ todo });
  return NextResponse.json({ message: "Todo Created" }, { status: 201 });
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  await connectMongoDB();
  await Todo.findByIdAndDelete(id);
  return NextResponse.json({ message: "Todo deleted" }, { status: 200 });
}
