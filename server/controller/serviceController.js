import freelancerServices from "../models/freelancerService.js";
import Freelancer from "../models/user.js";
import Op from "@sequelize/core";
import Category from "../models/category.js";
import subCategory from "../models/subCategory.js";
import ch from "../utils/controlHelper.js";
import User from "../models/user.js";

export const getService = async (req, res) => {
    try {
        const id = req.params.id;
        if (!ch.idControl(id)) {
            return res.status(400).json({
                error: "Lütfen geçerli bir id numarası girin",
            });
        }
        const service = await freelancerServices.findByPk(id, {
            include: {
                model: User,
                attributes: [
                    "id",
                    "firstName",
                    "lastName",
                    "meslek",
                    "username",
                    "role",
                ],
            },

            attributes: [
                "id",
                "title",
                "details",
                "shortDesc",
                "price",
                "createdAt",
            ],
        });
        console.log(
            "\n\n\nHİZMET BİLGİSİ " + JSON.stringify(service) + "\n\n\n"
        );
        if (service) {
            console.log("\n\n\n" + JSON.stringify(service));
            res.status(200).json({
                data: service,
                message: "Hizmet bilgileri başarıyla alındı",
            });
        } else {
            console.log("\n\n\nBilgiler alınamadı");
            res.status(400).json({
                error: "Hizmet bulanamadı",
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Freelancer hizmet bilgileri alınırken bir sorun yaşandı. Lütfen daha sonra tekrar deneyin!",
        });
    }
};

export const getAllServices = async (req, res) => {
    try {
        const services = await freelancerServices.findAll({
            include: Freelancer,
        });
        if (services.length > 0) {
            console.log(services);
            res.status(200).json({
                data: services,
                message: "Bütün Hizmet bilgileri başarıyla alındı",
            });
        } else {
            console.log("\n\n\n Hizmet bilgileri bulanamadı");
            res.status(400).json({
                error: "Hizmet bilgileri bulunamadı",
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Hizmet bilgileri alınırken bir hata oluştu. Lütfen daha sonra tekrar deneyin!",
        });
    }
};

export const addService = async (req, res) => {
    try {
        const { formData, userId } = req.body;
        console.log("\n\n\nREQ BODY: " + formData + "\n\n\n");
        const service = await freelancerServices.create({
            title: formData.title,
            shortDesc: formData.shortDesc,
            details: formData.detailsDesc,
            price: formData.price,
            userId: userId,
            subcategoryId: 1,
        });
        if (service) {
            console.log("Yeni hizmet başarıyla oluştu: ", service);
            res.status(200).json({
                data: service,
                message: "Yeni Hizmet başarıyla oluşturuldu",
            });
        } else {
            console.log(service);
            res.status(400).json({
                error: "Hizmet oluşturma işlemi başarısız oldu!",
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Yeni Hizmet ekleme başarısız oldu. Lütfen daha sonra tekrar deneyin!",
        });
    }
};

export const deleteService = async (req, res) => {
    try {
        const id = req.params.id;
        if (!ch.idControl(id)) {
            return res.status(400).json({
                error: "Lütfen geçerli bir id numarası girin",
            });
        }
        const service = await freelancerServices.findByPk(id);
        const deleted = await freelancerServices.destroy({ where: { id: id } });
        if (service) {
            if (deleted === 1) {
                console.log("Hizmet bilgisi başarıyla silindi");
                return res.status(200).json({
                    data: service,
                    message: "Hizmet bilgisi başarıyla silindi",
                });
            } else {
                res.status(400).json({
                    error: "Hizmet bilgisi silinirken bir hata oluştu",
                });
            }
        } else {
            res.status(400).json({
                error: "Silmek istediğiniz hizmet bilgisi bulunamadı",
            });
        }
    } catch (error) {
        res.status(500).json({
            data: error,
            error: "silme işlemi yapılırken bir hata oluştu",
        });
    }
};

export const updateService = async (req, res) => {
    try {
        const newData = req.body;
        const id = req.params.id;
        if (!ch.idControl(id)) {
            return res.status(400).json({
                error: "Lütfen geçerli bir id numarası girin",
            });
        }
        const updatedService = await freelancerServices.findByPk(id);
        if (updatedService) {
            const [serviceCount, service] = await freelancerServices.update(
                newData,
                {
                    where: {
                        id: id,
                    },
                    returning: true,
                }
            );
            if (serviceCount > 0) {
                console.log(service);
                res.status(200).json({
                    data: service,
                    message: "Hizmet Başarıyla güncellendi",
                });
            } else {
                res.status(400).json({
                    error: "Hizmet güncellenemedi!",
                });
            }
        } else {
            console.log("Hizmet bulunamadı");
            res.status(400).json({
                error: "Güncellemek istediğiniz Hizmet bilgisi bulunamadı",
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: error,
        });
    }
};

export const categoryService = async (req, res) => {
    try {
        const category = req.params.category;

        // Kategori bilgisini bul
        const selectedCategory = await Category.findOne({
            where: {
                name: category,
            },
        });
        if (!selectedCategory) {
            console.log("Böyle bir kategori yok");
            res.status(400).json({
                error: "Böyle bir kategori yok",
            });
        } else {
            console.log("SELECTED CATEGORY", selectedCategory.toJSON()); // Kategori bilgisini daha anlamlı bir şekilde yazdır

            // Alt kategorileri bul
            const subCategories = await subCategory.findAll({
                where: {
                    categoryId: selectedCategory.id,
                },
            });
            if (subCategories.length > 0) {
                // * Alt kategori bilgilerini yazdır
                console.log(
                    "SUB CATEGORIES",
                    subCategories.map((subCat) => subCat.toJSON())
                );

                // * Alt kategorileri bir dizi haline getir
                const subCategoryIds = subCategories.map((subCat) => subCat.id);
                console.log("SUB CATEGORY IDs", subCategoryIds);

                // Tüm servisleri bul
                const allServices = await freelancerServices.findAll({
                    where: {
                        subcategoryId: subCategoryIds,
                    },
                });

                // Tüm servis bilgilirini yazdır
                console.log(
                    "ALL SERVICES",
                    allServices.map((service) => service.toJSON())
                );

                if (allServices.length > 0) {
                    console.log(allServices);
                    res.status(200).json({
                        data: allServices,
                        message: `${selectedCategory.name} kategorisine ait hizmet bilgileri alındı`,
                    });
                } else {
                    res.status(400).json({
                        error: `${selectedCategory.name} kategorisine ait hizmet bilgisi bulunamadı`,
                    });
                }
            } else {
                console.log(
                    `${selectedCategory.name} kategorisine ait bir alt kategori bulunamadı`
                );
                res.status(400).json({
                    error: `${selectedCategory.name} kategorisine ait bir alt kategori bulunamadı`,
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Seçtiğiniz kategoriye göre hizmet bilgisi alınırken bir hata oluştu. Lütfen daha sonra tekrar deneyin!",
        });
    }
};

export const subCategoryService = async (req, res) => {
    try {
        const { category, subcategory } = req.params;
        console.log(subcategory);
        const selectedCategory = await Category.findOne({
            where: {
                name: category,
            },
        });
        if (selectedCategory) {
            const selectedSubCategory = await subCategory.findOne({
                where: {
                    categoryId: selectedCategory.id,
                },
            });
            console.log(selectedSubCategory);
            console.log(selectedSubCategory.id);
            if (selectedSubCategory) {
                const allServices = await freelancerServices.findAll({
                    where: {
                        subcategoryId: selectedSubCategory.id,
                    },
                });
                if (allServices.length > 0) {
                    console.log(allServices);
                    res.status(200).json({
                        data: allServices,
                        message: `${selectedSubCategory.name} kategorisine ait tüm hizmetler başarıyla alındı`,
                    });
                } else {
                    console.log(
                        `${selectedSubCategory.name} kategorisine ait hizmet bilgisi bulunamadı`
                    );
                    res.status(400).json({
                        error: `${selectedSubCategory.name} kategorisine ait hizmet bilgisi bulunamadı!`,
                    });
                }
            } else {
                console.log(
                    `${selectedSubCategory.name} kategorisi bulunamadı`
                );
                res.status(400).json({
                    error: `${selectedSubCategory.name} kategorisi bulunamadı!`,
                });
            }
        } else {
            console.log(`${selectedCategory.name} kategorisi bulunamadı`);
            res.status(400).json({
                error: `${selectedCategory.name} kategorisi bulunamadı!`,
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Seçtiğiniz alt kategoriye ait hizmet bilgileri alınırken bir hata oluştu. Lütfen daha sonra tekrar deneyin!",
        });
    }
};

export const filterService = async (req, res) => {
    try {
        const {
            service_status,
            publish_date,
            est_delivery_time,
            service_price,
        } = req.query;
        const filters = {};
        if (service_status) {
            filters.status = service_status;
        }
        if (publish_date) {
            const startDate = new Date(publish_date);
            const endDate = new Date(startDate);
            console.log("\n\n\n", endDate);
            endDate.setDate(endDate.getDate() + 1); // Bir sonraki günü alır.
            filters.createdAt = { [Op.between]: [startDate, endDate] };
        }
        console.log(filters.createdAt);
        if (est_delivery_time) {
            filters.est_delivery_time = est_delivery_time;
        }
        if (service_price) {
            filters.price = service_price;
        }
        const services = await freelancerServices.findAll({
            where: filters,
        });
        if (services.length > 0) {
            console.log(services);
            res.status(200).json({
                data: services,
                message: "Hizmetler başarıyla filtrelendi",
            });
        } else {
            console.log("\n\n\nHizmetler Filtrelenemedi");
            res.status(400).json({
                error: "Hizmetler filtrelenemedi!",
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Hizmet Filtrelenirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
        });
    }
};
