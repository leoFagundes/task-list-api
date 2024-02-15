import { list } from "../models/List.js";

class ListController {
    static async getLists(req, res) {
        try {
            const lists = await list.find({});
            res.status(200).json(lists);
        } catch (error) {
            res.status(500).json({ message: `${error} - failed to fetch lists.` });
        }
    }

    static async getListById(req, res) {
        try {
            const id = req.params.id;
            const listFound = await list.findById(id);
            res.status(200).json(listFound);
        } catch (error) {
            res
                .status(500)
                .json({ message: `${error} - failed to fetch list by id.` });
        }
    }

    static async createList(req, res) {
        try {
            const newList = await list.create(req.body);
            res.status(201).json({
                message: "List created successfully",
                list: newList,
            });
        } catch (error) {
            res
                .status(500)
                .json({ message: `${error.message} - failed to create list` });
        }
    }

    static async updateList(req, res) {
        try {
            const id = req.params.id;
            await list.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "List updated successfully." });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - failed to update list.`,
            });
        }
    }

    static async deleteList(req, res) {
        try {
            const id = req.params.id;
            await list.findByIdAndDelete(id);
            res.status(200).json({ message: "List deleted successfully" });
        } catch (error) {
            res.status(500).json({
                message: `${error.message} - failed to delete list.`,
            });
        }
    }
}

export default ListController;
