import { mockProjects } from "../data/mockProjects";
import { mockUsers } from "../data/mockUsers";

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export async function getProjects() {
  await delay(200);
  return mockProjects;
}

export async function getProjectById(projectId) {
  await delay(200);
  return mockProjects.find((project) => project.id === projectId);
}

export async function getUserById(userId) {
  await delay(200);
  return mockUsers.find((user) => user.id === userId);
}