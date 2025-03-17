const Product = require("../../models/Product");

const deleteProduct = async (req, res) => {
  try {
    // Obtener el ID del producto de los parámetros
    const productId = req.params.productID;

    // Usar el método delete del modelo Product
    const result = await Product.delete(productId);

    // Verificar el resultado
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: "Product not found" });
    }

    // Responder con éxito
    res.status(200).json({
      message: "Product deleted successfully",
      productId: productId,
    });
  } catch (error) {
    console.error("Error deleting product:", error);
    res
      .status(500)
      .json({ error: "Internal server error while deleting product" });
  }
};

module.exports = deleteProduct;
