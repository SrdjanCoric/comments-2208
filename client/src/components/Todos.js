import useAsync from "../hooks/useAsync";

const Todos = () => {
  const {
    data: todos,
    isLoading,
    isError,
  } = useAsync("https://jsonplaceholder.typicode.com/todos/");
  if (isLoading) {
    return <h1>I am loading</h1>;
  }

  if (isError) {
    return <h1>ERROR!!!</h1>;
  }
  return (
    <>
      {isLoading && <h1>I am loading</h1>}
      <h1>Todos</h1>
      {todos.map((todo) => {
        return (
          <ul key={todo.id}>
            <li>{todo.title}</li>
            <li>{todo.completed}</li>
          </ul>
        );
      })}
    </>
  );
};

export default Todos;
