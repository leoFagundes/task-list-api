import user from "../models/User.js";
import { list } from '../models/List.js'
import authenticateUser from "../services/authenticationService.js";


class UserController {
    static async getUsers(req, res) {
        try {
            const getUsers = await user.find({});
            res.status(200).json(getUsers);
        } catch (error) {
            res.status(500).json({ message: `${error} - failed to fetch users.` });
        }
    }

    static async getUserById(req, res) {
        try {
            const id = req.params.id;
            const userFound = await user.findById(id);
            res.status(200).json(userFound);
        } catch (error) {
            res
                .status(500)
                .json({ message: `${error} - failed to fetch user by id.` });
        }
    }

    static async createUser(req, res) {
        const newUserData = req.body
        try {
            const newUser = JSON.parse(JSON.stringify(newUserData));

            const fetchListDetails = async (listId) => {
                try {
                    const listFound = await list.findById(listId);
                    if (listFound) {
                        const listDetails = { ...listFound._doc };
                        return { list: listDetails };
                    } else {
                        console.error(`list with ID ${listId} not found.`);
                        return { list: null };
                    }
                } catch (error) {
                    console.error(
                        `Failed to search list with ID ${listId}: ${error.message}`
                    );
                    return { list: null };
                }
            }

            if (newUser.lists) {
                newUser.lists = await Promise.all(
                    newUser.lists.map(async (userList) => {
                        const userId = userList.item;
                        return await fetchListDetails(userId);
                    })
                );
            }

            const createdUser = await user.create(newUser);
            res
                .status(201)
                .json({ message: "User created successfully", user: createdUser });
        } catch (error) {
            console.error(
                `Failed to search list with ID ${additionalId}: ${error.message}`
            );
        }
    }

    static async updateUser(req, res) {
        try {
            const id = req.params.id;
            await user.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "User updated successfully." });
        } catch (error) {
            res
                .status(500)
                .json({ message: `${error.message} - failed to update user.` });
        }
    }

    static async deleteUser(req, res) {
        try {
            const id = req.params.id;
            await user.findByIdAndDelete(id);
            res.status(200).json({ message: "User deleted successfully" });
        } catch (error) {
            res
                .status(500)
                .json({ message: `${error.message} - failed to delete user.` });
        }
    }

    static async loginUser(req, res) {
        const { username, password } = req.body;

        const authenticationResult = await authenticateUser(username, password);

        if (authenticationResult.success) {
            res.status(200).json({
                message: `Login successfully. Welcome ${username}!`,
                user: authenticationResult.user,
            });
        } else {
            res
                .status(401)
                .json({
                    message: "Authentication failed",
                    error: authenticationResult.message,
                });
        }
    }
}

export default UserController;
