const { CategoriesModel } = require("../Models");


module.exports = {
    getAllCategories: async (req, res) => {
        const categori = await CategoriesModel.find({});
        console.log(categori);

        try {
            res.json({
                message: "berhasil ambil data semua user",
                data: categori,
            });
        } catch (err) {
            console.log(err);
            res.status(500);
        }
    },

    // 1. buat get categori by ID
    getCategoriesByID: async (req, res) => {
        const { id } = req.param
        const categori = await CategoriesModel.findById(id)
        res.json({
            data: categori
        })
    },
    // 2. buat add categori
    addCategories: (req, res) => {
        const data = req.body
        const categori = new CategoriesModel(data)
        categori.save()

        res.json("success add data categori")
    },


    // 5. isi data categori

    updateCategoriesByID: async (req, res) => {
        const { id } = req.params
        const categori = await CategoriesModel.updateOne(id)
        res.json({

            data: categori
        })
    },
}
