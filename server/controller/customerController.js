import Customer from "../models/customer.js";
import ch from "../utils/controlHelper.js";

export const getAllCustomer = async (req, res) => {
    try {
        const customers = await Customer.findAll();
        if (customers.length > 0) {
            res.status(200).json({
                data: customers,
                message: "Customerlar başarıyla listelendi",
            });
        } else {
            res.status(400).json({
                error: "Kayıtlı Customer bulunamadı",
            });
        }
    } catch (error) {
        res.status(500).json({
            error: "Customer Listesi alınırken bir hata oluştu",
        });
        console.log(error);
    }
};

export const getCustomer = async (req, res) => {
    try {
        const id = req.params.id;
        if (!ch.idControl(id)) {
            return res.status(400).json({
                error: "Lütfen geçerli bir id numarası girin",
            });
        }
        const customer = await Customer.findOne({ where: { id: id } });
        if (customer) {
            res.status(200).json({
                data: customer,
                message: "Customer bilgisi başarıyla alındı",
            });
        } else {
            res.status(400).json({
                error: "Customer bulunamadı",
            });
        }
    } catch (error) {
        res.status(500).json({
            error: "Customer bilgileri alınırken bir hata oluştu. Lütfen bir süre sonra tekrar deneyin",
        });
        console.log(error);
    }
};

export const addCustomer = async (req, res) => {
    try {
        const { firstName, lastName } = req.body;
        let errors = {};

        let existingEmail = await Customer.findOne({
            where: { email: email },
        });
        if (existingEmail) {
            errors.email =
                "Bu E-posta hesabı zaten kullanılıyor lütfen başka bir hesap deneyin";
        }
        let existingUsername = await Customer.findOne({
            where: { username: username },
        });
        if (existingUsername) {
            errors.username =
                "Bu kullanıcı adı zaten kullanılıyor. Lütfen başka bir kullanıcı adı deneyin";
        }

        // ch.firstNameControl(firstName);
        // ch.lastNameControl(lastName);
        // ch.emailControl(email);
        // ch.usernameControl(username);

        if (Object.keys(errors).length > 0) {
            console.log(errors);
            return res.status(400).json({ error: errors });
        }

        const customer = await Customer.create({
            firstName: firstName,
            lastName: lastName,
        });
        if (customer) {
            res.status(200).json({
                message: "Kayıt işlemi başarıyla tamamlandı",
            });
        } else {
            res.status(400).json({
                error: "Müşteri kayıt edilemedi!",
            });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error: "Kayıt işlemi sırasında bir hata oluştu lütfen tekrar deneyin",
        });
    }
};
export const deleteCustomer = async (req, res) => {
    try {
        const id = req.params.id;
        if (!ch.idControl(id)) {
            return res.status(400).json({
                error: "Lütfen geçerli bir id numarası girin",
            });
        }
        const customer = await Customer.findByPk(id);
        if (customer) {
            const deleted = await Customer.destroy({
                where: {
                    id: id,
                },
            });
            if (deleted === 1) {
                res.status(200).json({
                    data: customer,
                    message: "Customer başarılı bir şekilde silindi",
                });
            } else {
                res.status(400).json({
                    error: "Customer silinemedi!",
                });
            }
        } else {
            res.status(400).json({
                error: "Silmek istediğiniz Freelancer bulunamadı",
            });
        }
    } catch (error) {
        res.status(500).json({
            error: "Silme işlemi başarısız oldu",
        });
        console.log(error);
    }
};

export const updateCustomer = async (req, res) => {
    try {
        const updateData = req.body;
        const id = req.params.id;
        let errors = {};
        if (!ch.idControl(id)) {
            return res.status(400).json({
                error: "Lütfen geçerli bir id numarası girin",
            });
        }
        if (updateData.email) {
            const existEmail = await Customer.findOne({
                where: {
                    email: updateData.email,
                },
            });
            if (existEmail) {
                errors.email = "Bu Eposta hesabı zaten kullanılıyor";
            }
        }
        if (updateData.username) {
            const existUsername = await Customer.findOne({
                where: {
                    username: updateData.username,
                },
            });
            if (existUsername) {
                errors.username = "Bu kullanıcı adı zaten kullanılıyor";
            }
        }

        if (Object.keys(errors).length > 0) {
            console.log(errors);
            return res.status(400).json({ error: errors });
        }

        const updatedCustomer = await Customer.findByPk(id);
        if (updatedCustomer) {
            const [customer] = await Customer.update(updateData, {
                where: {
                    id: id,
                },
            });

            if (customer > 0) {
                console.log(customer);
                res.status(200).json({
                    data: updatedCustomer,
                    message: "Müşteri başarıyla güncellendi",
                });
            } else {
                res.status(400).json({
                    error: "Müşteri güncellenirken bir hata oluştu",
                });
            }
        } else {
            console.log("Güncellemek istediğiniz müşteri bilgileri bulunamadı");
            res.status(400).json({
                error: "Güncellemek istediğiniz Müşteri bilgileri bulunamadı",
            });
        }
    } catch (error) {
        res.status(500).json({
            error: "Güncelleme işlemi başarısız oldu Lütfen tekrar deneyin",
        });
        console.log(error);
    }
};
