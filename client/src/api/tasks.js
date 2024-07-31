import instance from "./axios";

export const getTasksRequest = () => instance.get("/tasks");
export const getTaskRequest = (id) => instance.post(`/tasks/${id}`);
export const createTasksRequest = (task) => instance.post("/tasks", task);
export const updateTasksRequest = (id,task) =>instance.put(`/tasks/${id}`,task);
export const deleteTasksRequest = (id) => instance.delete(`/tasks/${id}`);
