const { CategoriesModel } = require("../Models");

module.exports = {
    getAllCategories: async (req, res) => {
        const users = await CategoriesModel.find({});
        console.log(users);

        try {
            res.json({
                message: "berhasil ambil data semua user",
                data: users,
            });
        } catch (err) {
            console.log(err);
            res.status(500);
        }
    }
}
