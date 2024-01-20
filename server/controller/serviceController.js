import freelancerServices from "../models/freelancerService.js";
import validator from "validator";

// * My Modules
import ch from "../utils/controlHelper.js";

export const getService = async (req, res) => {
  try {
    const id = req.params.id;
    if (!ch.idControl(id)) {
      return res.status(401).json({
        error: "Lütfen geçerli bir id numarası girin",
      });
    }
    const service = await freelancerServices.findByPk(id);
    console.log("\n\n\nHİZMET BİLGİSİ " + service + "\n\n\n");
    if (service) {
      console.log("\n\n\n" + service);
      res.status(200).json({
        data: service,
        message: "Hizmet bilgileri başarıyla alındı",
      });
    } else {
      console.log("\n\n\nBilgiler alınamadı");
      res.status(401).json({
        error: "Hizmet bulanamadı",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error:
        "Freelancer hizmet bilgileri alınırken bir sorun yaşandı. Lütfen daha sonra tekrar deneyin!",
    });
  }
};

export const getAllServices = async (req, res) => {
  try {
    const services = await freelancerServices.findAll();
    if (services.length > 0) {
      console.log(services);
      res.status(200).json({
        data: services,
        message: "Bütün Hizmet bilgileri başarıyla alındı",
      });
    } else {
      console.log("\n\n\n Hizmet bilgileri bulanamadı");
      res.status(401).json({
        error: "Hizmet bilgileri bulunamadı",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error:
        "Hizmet bilgileri alınırken bir hata oluştu. Lütfen daha sonra tekrar deneyin!",
    });
  }
};

export const addService = async (req, res) => {
  try {
    const { name, shortDesc, details, price, freelancerId } = req.body;
    const service = await freelancerServices.create({
      name: name,
      shortDesc: shortDesc,
      details: details,
      price: price,
      freelancerId: freelancerId,
    });
    if (service) {
      console.log("Yeni hizmet başarıyla oluştu: ", service);
      res.status(200).json({
        data: service,
        message: "Yeni Hizmet başarıyla oluşturuldu",
      });
    } else {
      console.log(service);
      res.status(401).json({
        error: "Hizmet oluşturma işlemi başarısız oldu!",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error:
        "Yeni Hizmet ekleme başarısız oldu. Lütfen daha sonra tekrar deneyin!",
    });
  }
};

export const deleteService = async (req, res) => {
  try {
    const id = req.params.id;
    if (!ch.idControl(id)) {
      return res.status(401).json({
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
        res.status(401).json({
          error: "Hizmet bilgisi silinirken bir hata oluştu",
        });
      }
    } else {
      res.status(401).json({
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
      res.status(401).json({
        error: "Lütfen geçerli bir id numarası girin",
      });
    }
    const updatedService = await freelancerServices.findByPk(id);
    if (updatedService) {
      const [service] = await freelancerServices.update(newData, {
        where: {
          id: id,
        },
      });
      if (service > 0) {
        console.log(service);
        res.status(201).json({
          data: service,
          message: "Hizmet Başarıyla güncellendi",
        });
      } else {
        res.status(401).json({
          error: "Hizmet güncellenemedi!",
        });
      }
    } else {
      console.log("Hizmet bulunamadı");
      res.status(401).json({
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
