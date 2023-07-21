import instance from "../utils/axiosCustomize";

const portDataUser = (email, password, username, role, image) => {
  const data = new FormData();
  data.append("email", email);
  data.append("password", password);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);

  return instance.post("/api/v1/participant", data);
};

const getDataUser = () => {
  return instance.get("/api/v1/participant/all");
};

const putDataUser = (id, username, role, image) => {
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);

  return instance.put("/api/v1/participant", data);
};

const deleteDataUser = () => {
  return instance.delete("/api/v1/participant");
};

export { portDataUser, getDataUser, putDataUser, deleteDataUser };
