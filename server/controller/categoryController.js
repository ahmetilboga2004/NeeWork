import Category from "../models/category.js";

// * My Modules
import ch from "../utils/controlHelper.js";

export const getCategory = async (req, res) => {
  try {
    const id = req.params.id;
    if (!ch.idControl(id)) {
      return res.status(400).json({
        error: "Lütfen geçerli bir id numarası girin",
      });
    }
    const category = await Category.findByPk(id);
    console.log(category);

    if (category) {
      console.log(category);
      res.status(200).json({
        data: category,
        message: "Kategori bilgisi başarıyla alındı",
      });
    } else {
      console.log(category);
      res.status(400).json({
        error: "Kategori bilgisi alınırken bir hata oluştu",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error:
        "Kategori bilgisi alınırken bir hata oluştu. Lütfen daha sonra tekrar deneyin!",
    });
  }
};

export const getAllCategory = async (req, res) => {
  try {
    const categories = await Category.findAll();
    if (categories.length > 0) {
      console.log(categories);
      res.status(200).json({
        data: categories,
        message: "tüm Kategori bilgileri başarıyla alındı.",
      });
    } else {
      console.log("Kategori bilgisi bulanamadı");
      res.status(400).json({
        error: "Kategori bilgisi bulunamadı.",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error:
        "Kategoriler alınırken bir hata oluştu. Lütfen daha sonra tekrar deneyin!",
    });
  }
};

export const addCategory = async (req, res) => {
  try {
    const newData = req.body;
    const category = await Category.create(newData);
    console.log(category);
    if (category) {
      console.log(category);
      res.status(200).json({
        data: category,
        message: "Kategori kayıt işlemi başarılı",
      });
    } else {
      console.log(category);
      res.status(400).json({
        error: "Kategori ekleme işlemi başarısız oldu!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error:
        "Kategori kayıt edilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin!",
    });
  }
};

export const addBulkCategory = async (req, res) => {
  try {
    const newCategoryData = req.body;
    const categories = await Category.bulkCreate(newCategoryData);
    if (categories) {
      console.log(categories);
      res.status(200).json({
        data: categories,
        message: "Kategoriler başarılı bir şekilde eklendi",
      });
    } else {
      res.status(400).json({
        error: "Kategoriler eklenemedi!",
      });
    }
  } catch (error) {
    console.loh(error);
    res.status(500).json({
      error:
        "Kategoriler Eklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin!",
    });
  }
};

export const updateCategory = async (req, res) => {
  try {
    const updateData = req.body;
    console.log(updateData);
    const id = req.params.id;
    if (!ch.idControl(id)) {
      return res.status(400).json({
        error: "Lütfen geçerli bir id numarası girin",
      });
    }
    const updatedCategory = await Category.findByPk(id);
    if (updatedCategory) {
      const [category] = await Category.update(updateData, {
        where: {
          id: id,
        },
      });
      if (category > 0) {
        console.log(category);
        return res.status(200).json({
          data: updatedCategory,
          message: "Kategori başarıyla güncellendi",
        });
      } else {
        res.status(400).json({
          error: "Category güncellenirken bir hata oluştu",
        });
      }
    } else {
      console.log("Güncellemek istediğiniz Kategori Bulunamadı");
      res.status(400).json({
        error: "Güncellemek istediğiniz Kategori Bulunamadı",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Güncelleme işlemi başarısız oldu Lütfen tekrar deneyin",
    });
    console.log(error);
  }
};

export const deleteCategory = async (req, res) => {
  try {
    const id = req.params.id;
    if (!ch.idControl(id)) {
      return res.status(400).json({
        error: "Lütfen geçerli bir id numarası girin",
      });
    }
    const category = await Category.findByPk(id);
    if (category) {
      const deleteCategory = await Category.destroy({
        where: {
          id: id,
        },
      });
      if (deleteCategory === 1) {
        console.log("\n\n\n Kategori bilgisi başarıyla silindi");
        res.status(200).json({
          data: category,
          message: "Kategori bilgisi başarıyla silindi",
        });
      } else {
        console.log("\n\n\n Kategori bilgisi silinemedi");
        res.status(400).json({
          error: "Kategori bilgisi silinemedi",
        });
      }
    } else {
      console.log("Silmek istediğiniz kategori bilgisi bulunamadı");
      res.status(400).json({
        error: "Silmek istediğiniz kategori bilgisi bulunamadı",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error:
        "Kategori bilgisi silinirken bir hata oluştu. Lütfen daha sonra tekrar deneyin!",
    });
  }
};
