import { supabase } from "../utils/supabase";

export const getAllTodos = async () => {
  const { data, error } = await supabase.from("Todo").select("*");
  if (error) {
    console.error("Supabase error:", error.message);
    return [];
  }
  return data;
};

export const addTodo = async (title: string) => {
  await supabase.from("Todo").insert({ title: title });
};

export const deleteTodo = async (id: number) => {
  await supabase.from("Todo").delete().eq("id", id);
};
