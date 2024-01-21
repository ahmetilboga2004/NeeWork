import subCategory from "../models/subCategory.js";
import ch from "../utils/controlHelper.js";

export const getSubCategory = async (req, res) => {
  try {
    const id = req.params.id;
    if (!ch.idControl(id)) {
      return res.status(401).json({
        error: "Lütfen geçerli bir id numarası girin",
      });
    }
    const subcategory = await subCategory.findByPk(id);
    if (subcategory) {
      console.log(subcategory);
      res.status(200).json({
        data: subcategory,
        message: "Alt Kategori bilgisi başarıyla alındı.",
      });
    } else {
      console.log("Alt kategori bilgisi alınamadı");
      res.status(401).json({
        error: "Alt kategori bilgisi alınamadı",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error:
        "Alt Kategori bilgisi alınırken bir hata oluştu. Lütfen daha sonra tekrar deneyin!",
    });
  }
};

export const getAllSubCategory = async (req, res) => {
  try {
    const subcategories = await subCategory.findAll();
    if (subcategories.length > 0) {
      console.log(subcategories);
      res.status(200).json({
        data: subcategories,
        message: "Tüm Alt Kategoriler başarıyla alındı.",
      });
    } else {
      console.log("\n\n\nAlt Kategori bulunamadı");
      res.status(401).json({
        error: "Alt Kategoriler bulunamadı",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error:
        "Alt Kategoriler alınırken bir hata oluştu. Lütfen daha sonra tekrar deneyin!",
    });
  }
};

export const addSubCategory = async (req, res) => {
  try {
    const { name, categoryId } = req.body;
    const subcategory = await subCategory.create({
      name: name,
      categoryId: categoryId,
    });
    if (subCategory) {
      console.log(subcategory);
      console.log("\n\n\n");
      res.status(200).json({
        data: subcategory,
        message: "Alt kategori başarıyla eklendi.",
      });
    } else {
      console.log(subcategory);
      console.log("\n\n\nAlt kategori eklenirken bir hata oluştu");
      res.status(401).json({
        error: "Alt kategori bilgisi eklenemedi!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Alt Kategori eklenirken bir hata oluştu",
    });
  }
};

export const addBulkSubCategory = async (req, res) => {
  try {
    const subCategoriesDatas = req.body;
    const subcategories = await subCategory.bulkCreate(subCategoriesDatas);
    if (subcategories) {
      console.log(subcategories);
      res.status(200).json({
        data: subcategories,
        message: "Alt kategoriler başarılı bir şekilde eklendi",
      });
    } else {
      console.log("\n\n\nAlt kategoriler ekleenemedi");
      res.status(401).json({
        error: "Alt kategoriler eklenemedi!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error:
        "Alt Kategoriler eklenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin!",
    });
  }
};

export const updateSubCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const newData = req.body;
    if (!ch.idControl(id)) {
      return res.status(401).json({
        error: "Lütfen geçerli bir id numarası girin",
      });
    }
    const subcategory = await subCategory.findByPk(id);
    if (subcategory) {
      const [updatedSubCategory] = await subCategory.update(newData, {
        where: {
          id: id,
        },
      });
      if (updatedSubCategory > 0) {
        console.log(updatedSubCategory);
        console.log("\n\n\nAlt Kategori başarıyla güncellendi");
        res.status(200).json({
          data: subcategory,
          message: "Alt Kategori başarıyla güncellendi",
        });
      } else {
        console.log("Alt Kategori güncellenemedi");
        res.status(401).json({
          error: "Alt Kategori bilgisis güncellenemedi!",
        });
      }
    } else {
      console.log("Alt kategori bilgisi bulunamadı");
      res.status(401).json({
        error: "Güncellemek istediğiniz Alt Kategori bilgisi bulunamadı!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error:
        "Allt KAtegori güncellenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin",
    });
  }
};

export const deleteSubCategory = async (req, res) => {
  try {
    const id = req.params.id;
    if (!ch.idControl(id)) {
      return res.status(401).json({
        error: "Lütfen geçerli bir id numarası girin",
      });
    }
    const subcategory = await subCategory.findByPk(id);
    if (subcategory) {
      console.log(subcategory);
      const deleteSubCategory = await subCategory.destroy({
        where: {
          id: id,
        },
      });
      if (deleteSubCategory === 1) {
        console.log("Alt kategori bilgisi başarıyla silindi");
        res.status(200).json({
          data: subcategory,
          message: "Alt kategori bilgisi başarıyla silindi",
        });
      } else {
        console.log("Alt kategori bilgisi silinemedi");
        res.status(401).json({
          error: "Alt kategori bilgisi silinemedi",
        });
      }
    } else {
      console.log("Alt kategori bilgisi bulunamadı");
      res.status(401).json({
        error: "Silmek istediğiniz alt kategori bilgisi bulunamadı",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error:
        "Alt kategori silinirken bir hata oluştu. Lütfen daha sonra tekrar deneyin!",
    });
  }
};
