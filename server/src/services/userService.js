import User from "../models/User.js";

export const register = async (data) => {
    return await User.create(data);
}