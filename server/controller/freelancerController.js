import Freelancer from "../models/freelancer.js";
import validator from "validator";

// * My Modules
import ch from "../utils/controlHelper.js";

export const redirectFindJobPage = (req, res) => {
  res.redirect("/freelancer/find-job");
};

export const findJobPage = (req, res) => {
  res.render("freelancer/find_job");
};

export const myServicesPage = (req, res) => {
  res.render("freelancer/my_services");
};

export const postServicePage = (req, res) => {
  res.render("freelancer/post_service");
};

export const profilePage = (req, res) => {
  res.render("freelancer/profile");
};

export const getAllFreelancer = async (req, res) => {
  try {
    const freelancers = await Freelancer.findAll();
    if (freelancers.length > 0) {
      res.status(201).json({
        data: freelancers,
        message: "Freelancerlar başarıyla listelendi",
      });
    } else {
      res.status(401).json({
        error: "Kayıtlı Freelancer bulunamadı",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Freelancer Listesi alınırken bir hata oluştu",
    });
    console.log(error);
  }
};

export const getFreelaner = async (req, res) => {
  try {
    const id = req.params.id;
    if (!ch.idControl(id)) {
      return res.status(401).json({
        error: "Lütfen geçerli bir id numarası girin",
      });
    }
    const freelaner = await Freelancer.findOne({ where: { id: id } });
    if (freelaner) {
      res.status(201).json({
        data: freelaner,
        message: "Freelancer bilgisi başarıyla alındı",
      });
    } else {
      res.status(401).json({
        error: "Freelancer bulunamadı",
      });
    }
  } catch (error) {
    res.status(500).json({
      error:
        "Freelancer bilgileri alınırken bir hata oluştu. Lütfen bir süre sonra tekrar deneyin",
    });
    console.log(error);
  }
};

export const addFreelancer = async (req, res) => {
  try {
    const { firstName, lastName, email, username } = req.body;
    let errors = {};

    let existingEmail = await Freelancer.findOne({
      where: { email: email },
    });
    if (existingEmail) {
      errors.email =
        "Bu E-posta hesabı zaten kullanılıyor lütfen başka bir hesap deneyin";
    }
    let existingUsername = await Freelancer.findOne({
      where: { username: username },
    });
    if (existingUsername) {
      errors.username =
        "Bu kullanıcı adı zaten kullanılıyor. Lütfen başka bir kullanıcı adı deneyin";
    }

    ch.firstNameControl(firstName);
    ch.lastNameControl(lastName);
    ch.emailControl(email);
    ch.usernameControl(username);

    if (Object.keys(errors).length > 0) {
      console.log(errors);
      return res.status(400).json({ errors });
    } else {
      await Freelancer.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
      });
      return res.status(201).json({
        message: "Kayıt işlemi başarıyla tamamlandı",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Kayıt işlemi sırasında bir hata oluştu lütfen tekrar deneyin",
    });
  }
};

export const deleteFreelancer = async (req, res) => {
  try {
    const id = req.params.id;
    if (!ch.idControl(id)) {
      return res.status(401).json({
        error: "Lütfen geçerli bir id numarası girin",
      });
    }
    const freelancer = await Freelancer.findByPk(id);
    if (freelancer) {
      const deleted = await Freelancer.destroy({
        where: {
          id: id,
        },
      });
      if (deleted === 1) {
        res.status(200).json({
          data: freelancer,
          message: "Freelancer başarılı bir şekilde silindi",
        });
      } else {
        res.status(401).json({
          error: "Freelancer silinemedi!",
        });
      }
    } else {
      res.status(401).json({
        error: "Silmek istediğiniz Freelancer bulunamadı",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      error: "Silme işlemi başarısız oldu",
    });
  }
};

export const updateFreelancer = async (req, res) => {
  try {
    const updateData = req.body;
    console.log(updateData);
    const id = req.params.id;
    if (!ch.idControl(id)) {
      return res.status(401).json({
        error: "Lütfen geçerli bir id numarası girin",
      });
    }
    const updatedFreelancer = await Freelancer.findByPk(id);
    if (updatedFreelancer) {
      const [freelancer] = await Freelancer.update(updateData, {
        where: {
          id: id,
        },
      });
      if (freelancer > 0) {
        console.log(freelancer);
        return res.status(201).json({
          data: updatedFreelancer,
          message: "Freelancer başarıyla güncellendi",
        });
      } else {
        res.status(401).json({
          error: "Freelancer güncellenirken bir hata oluştu",
        });
      }
    } else {
      console.log("Güncellemek istediğiniz Freelancer Bulunamadı");
      res.status(401).json({
        error: "Güncellemek istediğiniz Freelancer Bulunamadı",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: "Güncelleme işlemi başarısız oldu Lütfen tekrar deneyin",
    });
    console.log(error);
  }
};
