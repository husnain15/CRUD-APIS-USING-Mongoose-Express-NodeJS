import User from "../Models/User.js";

const getUsers = async () => {
  try {
    // console.log("in_try");
    const users = await User.find({});
    if (!users) return { status: true, message: "No record were found" };
    return { status: true, message: "Fetched Successfully", data: users };
  } catch (e) {
    return { status: false, message: e.message };
  }
};

const addUser = async (body) => {
  try {
    const user = new User(body);
    console.log(user);
    await user.save();
    return { status: true, message: "Added Successfully" };
  } catch (e) {
    console.log("Error", e);
    return { status: false, message: e.message };
  }
};

const UserFindById = async (userId) => {
  try {
    const users = await User.findById(userId);
    if (!users) return { status: true, message: "No record were found" };
    return { status: true, message: "Fetched Successfully", data: users };
  } catch (e) {
    return { status: false, message: e.message };
  }
};

const updateUser = async (id,body) => {
  try {
    const users = await User.findByIdAndUpdate(id,body);
    if (!users) return { status: true, message: "No record were found" };
    return { status: true, message: "Fetched Successfully", data: users };
  } catch (e) {
    return { status: false, message: e.message };
  }
};

const deleteUserById = async (userId) => {
  try {
    const users = await User.findByIdAndDelete(userId);
    if (!users) return { status: true, message: "No record were found" };
    return { status: true, message: "Delete Successfully", data: users };
  } catch (e) {
    return { status: false, message: e.message };
  }
};
export { getUsers, addUser, UserFindById, updateUser, deleteUserById };
