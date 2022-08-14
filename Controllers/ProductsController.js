const { ProductsModel } = require("../Models");

module.exports = {
	getAllProducts: async (req, res) => {
		const product = await ProductsModel.find({});

		try {
			res.json({
				message: "berhasil ambil data semua user",
				data: product,
			});
		} catch (err) {
			console.log(err);
			res.status(500);
		}
	},

	// 3. buat get prodcut by ID
	getProductsByID: async (req, res) => {
		const { id } = req.params;
		const product = await ProductsModel.findById(id);

		res.json({
			data: product,
		});
	},
	// 4. buat add product
	addProducts: async (req, res) => {
		const data = req.body;
		const product = new ProductsModel(data);
		product
			.save()
			.then(() => res.json("Success Adding Product"))
			.catch((err) => res.json("Validate Data Error"));
	},

	// 6. isi data product
	// const res = await Person.updateOne({ name: 'Jean-Luc Picard' }, { ship: 'USS Enterprise' });
	updateProductsByID: async (req, res) => {
		const { id } = req.params;
		const data = req.body;
		const product = await ProductsModel.updateOne({ id: id }, data);

		if (product.acknowledged === false) {
			res.json("Invalid data");
		} else {
			res.json("Success");
		}
	},

	deleteProductByID: async (req, res) => {
		const { id } = req.params
		const product = await ProductsModel.deleteOne({ id: id });
		res.json({
			massage: "success",
			data: product
		})
	},
};
