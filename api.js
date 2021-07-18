const API = 'http://192.168.5.108:4000/tareas'

export const getTasks = async () => {
    const res = await fetch(API)
    return await res.json()
}