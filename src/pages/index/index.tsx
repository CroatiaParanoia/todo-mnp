import { Component } from "react";
import { View, Text, Input, Button } from "@tarojs/components";
import useTodoList from "./../../todo-hooks";
import "./index.scss";

export default function Index() {
  const [
    { todoList, inputValue },
    { createTodoItem, removeTodoItem, completeTodoItem, setInputValue },
  ] = useTodoList();

  return (
    <View className="index">
      <Text>Hello world!12</Text>
      <View className="input-container">
        <Input
          className="input"
          placeholder="输入待办事项"
          value={inputValue}
          onInput={(e) => setInputValue(e.detail.value)}
        ></Input>
        <Button className="create-btn" onClick={() => createTodoItem()}>
          创建
        </Button>
      </View>

      <View>
        {todoList.map((item) => {
          return (
            <View
              key={item.id}
              className="todo-item"
              style={{
                textDecorationLine: item.isComplete ? "line-through" : "none",
              }}
            >
              <Text>{item.content}</Text>

              {item.isComplete ? (
                <Button onClick={() => removeTodoItem(item.id)}>删除</Button>
              ) : (
                <Button onClick={() => completeTodoItem(item.id)}>完成</Button>
              )}
            </View>
          );
        })}
      </View>
    </View>
  );
}
