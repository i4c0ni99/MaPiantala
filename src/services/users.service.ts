import { User } from "../types/User.class";
import { axiosInstance } from "../utils/axiosInstance";

export async function updateUser(data: User) {
  await axiosInstance.patch(`/user/`, {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
    passwordConfirm: data.passwordConfirm,
    profilePicture: data.profilePicture,
    copertinePicture: data.copertinePicture,
  });
}

export async function postUser(data: User) {
  await axiosInstance.post(`/user/signup`, {
    firstName: data.firstName,
    lastName: data.lastName,
    email: data.email,
    password: data.password,
    passwordConfirm: data.passwordConfirm,
  });
}

export async function getUser(): Promise<User> {
  const result = await axiosInstance.get(`/user/me`);
  return result.data;
}
