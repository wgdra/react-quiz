import instance from "../utils/axiosCustomize";

const postLogin = (email, password) => {
  return instance.post("/api/v1/login", {
    email: email,
    password: password,
    delay: 3000,
  });
};

const postRegister = (email, username, password) => {
  return instance.post("/api/v1/register", {
    email: email,
    username: username,
    password: password,
  });
};

const postDataUser = (email, password, username, role, image) => {
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

const getQuizByUser = () => {
  return instance.get("/api/v1/quiz-by-participant");
};

const getQuestionsByQuizId = (quizId) => {
  return instance.get(`/api/v1/questions-by-quiz?quizId=${quizId}`);
};

const putDataUser = (id, username, role, image) => {
  const data = new FormData();
  data.append("id", id);
  data.append("username", username);
  data.append("role", role);
  data.append("userImage", image);

  return instance.put("/api/v1/participant", data);
};

const deleteDataUser = (id) => {
  return instance.delete("/api/v1/participant", { data: { id: id } });
};

export {
  postLogin,
  postRegister,
  postDataUser,
  getDataUser,
  getQuizByUser,
  getQuestionsByQuizId,
  putDataUser,
  deleteDataUser,
};
