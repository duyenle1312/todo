import DataTable from "@/components/todo-list";
import connectMongoDB from "@/lib/db";
import Todo from "@/lib/model";
import * as React from "react";

export const revalidate = 0;

const getTodo = async () => {
  await connectMongoDB();
  const todo = await Todo.find();
  return todo;
};

export type Todo = {
  _id: string;
  todo: string;
};

export default async function Home() {
  const data = await getTodo();

  return <DataTable data={JSON.parse(JSON.stringify(data))} />;
}
