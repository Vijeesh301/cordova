/* eslint-disable no-unused-vars */
import { stringify } from "postcss";
import { useEffect, useState } from "react";

export const useTodo = () => {
  const [todoItems, setTodoItems] = useState(
    localStorage.getItem("items")
      ? JSON.parse(localStorage.getItem("items"))
      : []
  );

  const [todoName, setTodoName] = useState("");

  const [id, setId] = useState(1);

  // ADD ITEMS
  const addItems = () => {
    const items = {
      id: id,
      name: todoName,
    };
    if (todoItems.every((value) => value.name !== items.name)) {
      setTodoItems([...todoItems, items]);
      setTodoName("");
    }
    setId(id + 1);
  };

  // DELETE ITEMS
  const deleteItems = (index) => {
    setTodoItems(todoItems.filter((value, i) => i !== index));
  };

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(todoItems));
  }, [todoItems]);

  return {
    addItems,
    todoName,
    setTodoName,
    todoItems,
    deleteItems,
    setTodoItems,
  };
};
