const { CategoriesModel } = require("../Models");

module.exports = {
	getAllCategories: async (req, res) => {
		const category = await CategoriesModel.find({});
		console.log(category);

		try {
			res.json({
				message: "berhasil ambil data semua category",
				data: category,
			});
		} catch (err) {
			console.log(err);
			res.status(500);
		}
	},

	// 1. buat get categori by ID
	getCategoriesByID: async (req, res) => {
		const { id } = req.param;
		const category = await CategoriesModel.findById(id);
		res.json({
			data: category,
		});
	},
	// 2. buat add categori
	addCategories: (req, res) => {
		const data = req.body;
		const category = new CategoriesModel(data);
		category.save();

		res.json("success add data categori");
	},

	// 5. isi data categori

	updateCategoriesByID: async (req, res) => {
		const { id } = req.params;
		const category = await CategoriesModel.updateOne({ id: id });
		res.json({
			data: category,
		});
	},

	deleteCategoriesByID: async (req, res) => {
		const { id } = req.params
		const category = await CategoriesModel.deleteOne({ id: id })
		res.json({
			massage: "success",
			data: category
		})
	}
};
