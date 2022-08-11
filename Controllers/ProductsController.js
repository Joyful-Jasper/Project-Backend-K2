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
    },


    // 3. buat get prodcut by ID
    getProductsByID: async (req, res) => {
        const { id } = req.params
        const prodcut = await ProductsModel.findById(id)

        res.json({
            data: prodcut
        })
    },
    // 4. buat add product
    addProducts: (req, res) => {
        const data = req.body
        const prodcut = new ProductsModel(data)
        prodcut.save()

        res.json("success add data Products")
    },

    // 6. isi data product
    // const res = await Person.updateOne({ name: 'Jean-Luc Picard' }, { ship: 'USS Enterprise' });
    updateProductsByID: async (req, res) => {
        const id = req.params
        const prodcut = await ProductsModel.updateOne(id)

        res.json({
            id: prodcut
        })
    },



}
