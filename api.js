const API = "http://localhost:4000/tareas";

export const getTasks = async () => {
  const res = await fetch(API);
  return await res.json();
};

export const createTask = async (newTask) => {
  const res = await fetch(API, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newTask),
  });
  return await res.json();
};
