import customerJobs from "../models/customerJob.js";
import Category from "../models/category.js";
import subCategory from "../models/subCategory.js";

// * My Modules
import ch from "../utils/controlHelper.js";

export const getAllJob = async (req, res) => {
  try {
    const jobs = await customerJobs.findAll();
    if (jobs.length > 0) {
      console.log(jobs);
      res.status(200).json({
        data: jobs,
        message: "İş ilanları başarıyla alındı",
      });
    } else {
      console.log("İş ilanı bulunamadı");
      res.status(401).json({
        error: "İş İlanı bulunamadı",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "İş İlanları alınırken bir hata oluştu",
    });
  }
};

export const getJob = async (req, res) => {
  try {
    const id = req.params.id;
    if (!ch.idControl(id)) {
      return res.status(401).json({
        error: "Lütfen geçerli bir id numarası girin",
      });
    }
    const job = await customerJobs.findByPk(id);
    if (job) {
      console.log(job);
      res.status(200).json({
        data: job,
        message: "İş İlanı bilgisi başarıyla alındı",
      });
    } else {
      res.status(401).json({
        error: "İş İlanı bilgisi bulunamadı",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "İş İlanı bilgisi alınırken bir hata oluştu",
    });
  }
};

export const addJob = async (req, res) => {
  try {
    const { name, shortDesc, details, price } = req.body;
    const job = await customerJobs.create({
      name: name,
      shortDesc: shortDesc,
      details: details,
      price: price,
    });
    if (job) {
      console.log("Yeni iş ilanı başarıyla eklendi: ", job);
      res.status(200).json({
        data: job,
        message: "Yeni İş İlanı başarıyla yayınlandı",
      });
    } else {
      console.log("İş İlanı eklenemedi: ", job);
      res.status(401).json({
        error: "İş İlanı eklenirken bir hata oluştu!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error:
        "Yeni İş İlanı oluşturulurken bir hata oluştu. Lütfen daha sonra tekrar deneyin!",
    });
  }
};

export const deleteJob = async (req, res) => {
  try {
    const id = req.params.id;
    if (!ch.idControl(id)) {
      return res.status(401).json({
        error: "Lütfen geçerli bir id numarası girin",
      });
    }
    const job = await customerJobs.findByPk(id);
    if (job) {
      console.log(job);
      const deleted = await customerJobs.destroy(id);
      if (deleted === 1) {
        console.log("\n\n\n Başarıyla silindi");
        res.status(200).json({
          message: "İş İlanı bilgileri başarıyla silindi",
        });
      } else {
        console.log("\n\n\n İş ilanı silinemedi");
        res.status(401).json({
          error: "İş İlanı bilgileri silinemedi",
        });
      }
    } else {
      console.log("Silmek istediğiniz iş ilanı bilgileri bulunamadı");
      res.status(401).json({
        error: "Silmek istediğiniz iş ilanı bulunamadu",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "İş İlanı bilgileri silinirken bir hata oluştu",
    });
  }
};

export const subCategoryJob = async (req, res) => {
  try {
    const { category, subcategory } = req.params;
    const selectedCategory = await Category.findOne({
      where: {
        name: category,
      },
    });
    if (selectedCategory) {
      console.log(selectedCategory.name);
      const selectedSubCategory = await subCategory.findOne({
        where: {
          name: subcategory,
        },
      });
      if (selectedSubCategory) {
        console.log(selectedSubCategory.name);
        const allJob = await customerJobs.findAll({
          where: {
            subcategoryId: selectedSubCategory.id,
          },
        });
        if (allJob.length > 0) {
          console.log(allJob);
          res.status(200).json({
            data: allJob,
            message: `${selectedSubCategory.name} kategorisine ait iş ilanları başarıyla alındı`,
          });
        } else {
          console.log(
            `${selectedSubCategory.name} alt kategorisine ait iş ilanı bulunamadı`
          );
          res.status(401).json({
            error: `${selectedSubCategory.name} alt kategorisine ait iş ilanı bulunamadı`,
          });
        }
      } else {
        console.log(`${subcategory} alt kategorisi bulunamadı`);
        res.status(401).json({
          error: `${subcategory} alt kategorisi bulunamadı!`,
        });
      }
    } else {
      console.log(`${category} kategorisi bulunamadı`);
      res.status(401).json({
        error: `${category} kategorisi bulunamadı`,
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error:
        "Bu kategoriye ait iş ilanlarını alınırken bir hata oluştu. Lütfen daha sonra tekrar deneyin!",
    });
  }
};

export const updateJob = async (req, res) => {
  try {
    const newData = req.body;
    const id = req.params.id;
    if (!ch.idControl(id)) {
      return res.status(401).json({
        error: "Lütfen geçerli bir id numarası girin",
      });
    }
    const updatedJob = await customerJobs.findByPk(id);
    console.log(updatedJob);
    if (updatedJob) {
      const [job] = await customerJobs.update(newData, {
        where: {
          id: id,
        },
      });
      if (job > 0) {
        console.log("\n\n\nGüncelleme Başarılı: ", job);
        // Burda eğer gerçekten güncellenmişse bize güncel verileri döndürecek.
        // Güncellenmediyse güncellemeden sonra yeniden istek atacaz DB'ye
        console.log("işte güncellenen veriler: ", updatedJob);

        res.status(200).json({
          data: updatedJob,
          message: "Güncelleme işlemi başarılı",
        });
      } else {
        res.status(401).json({
          error: "Güncelleme işlemi başarısız oldu ",
        });
      }
    } else {
      console.log("Güncellemek istediğiniz İş İlanı bulunamadı");
      res.status(401).json({
        error: "Güncellemek istediğiniz İş İlanı bilgileri bulunamadı",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "İş İlanı bilgiliri güncellenirken bir hata oluştu",
    });
  }
};
