const { ProductsModel } = require("../Models");

module.exports = {
    getAllProducts: async (req, res) => {
        const users = await ProductsModel.find({});
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

    // Get Product

    // Get Product/:id

    // Get Product/byCategori

}
