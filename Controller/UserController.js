import {
  addUser,
  UserFindById,
  getUsers,
  updateUser,
  deleteUserById,
} from "../Services/UserService.js";
const getAllUserHandler = async (req, res) => {
  //   console.log("here");
  try {
    const users = await getUsers();
    console.log("Get All Users Handler");
    return res.send(users);
  } catch (e) {
    console.log("Error ", e);
    return res.status(400).send({ status: false, message: e });
  }
};

const addUserHandler = async (req, res) => {
  try {
    const { body } = req; ///{userId} = req.params;
    const user = await addUser(body);
    res.send(user);
  } catch (e) {
    res.status(400).send({ status: false, message: e });
  }
};

const getfindByIdUserHandler = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await UserFindById(userId);

    res.send(user);
  } catch (e) {
    res.status(400).send({ status: false, message: e });
  }
};

const updateUserHandler = async (req, res) => {
  try {
    const user = await updateUser(req.params.userId, req.body, { new: true });
    if (!user) {
      res.status(404).send();
    } else {
      res.status(200).send(user);
    }
  } catch (e) {
    res.status(404).send(e);
  }
};

const deleteUserHandler = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await deleteUserById(userId);
    res.send(user);
  } catch (e) {
    res.status(400).send({ status: false, message: e });
  }
};

export {
  getAllUserHandler,
  addUserHandler,
  getfindByIdUserHandler,
  updateUserHandler,
  deleteUserHandler,
};
