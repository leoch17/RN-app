const API = "http://192.168.0.102:4000/tareas";

export const getTasks = async () => {
  const res = await fetch(API);
  return await res.json();
};

export const getTask = async (id) => {
  const res = await fetch(`${API}/${id}`);
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

export const updateTask = async (id, newTask) => {
  const res = await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(newTask),
  });
  return res;
};
