import { API } from "../constants"

export const getTasks = async () => {
    const res = await fetch(API.DIEGO_TAREAS)
    return await res.json()
}

export const getTask = async (id) => {
    const res = await fetch(API.DIEGO_TAREAS+"/"+id)
    return await res.json()
}

export const createTask = async (newTask) => {
    const res = await fetch(API.DIEGO_TAREAS, { 
        method: 'POST',
        headers: { 
            Accept: "application/json", 
            "Content-Type": "application/json" },
        body: JSON.stringify(newTask)
    });
    return  await res.json();
}

export const deleteTask = async (id) => {

}

export const updateTask = async (id, newTask) => {
    const res = await fetch(API.DIEGO_TAREAS+"/"+id, { 
        method: 'POST',
        headers: { 
            Accept: "application/json", 
            "Content-Type": "application/json" },
        body: JSON.stringify(newTask)
    });
    return  await res.json();
}
