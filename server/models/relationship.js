import customerJobs from "./customerJob.js";
import freelancerServices from "./freelancerService.js";
import Customer from "./customer.js";
import Freelancer from "./freelancer.js";
import Category from "./category.js";
import subCategory from "./subCategory.js";

// * Freelancer Ve Hizmet ilişkisi
// Her Freelancer birden fazla Hizmet sunabilir.
Freelancer.hasMany(freelancerServices);
// Bir Hizmet sadece bir Freelancer'a ait olabilir
freelancerServices.belongsTo(Freelancer);

// Her Freelancer sadece bir kategoriye ait olacak
Freelancer.belongsTo(Category);

// Her Hizmet bir Alt Kategoriye ait olacak
freelancerServices.belongsTo(subCategory);

// * Customer ve Jobs ilişkisi
// Bir müşteri birden fazla iş ilanı yayınlayabilir
Customer.hasMany(customerJobs);
// Bir iş ilanı sadece bir Müşteriye ait olabilir
customerJobs.belongsTo(Customer);

// Bir iş ilanı bir Alt Kategoriye ait olacak
customerJobs.belongsTo(subCategory);

// * Category ve Sub Category ilişkisi
// Bir kategori birçok alt kategoriye sahip olabilir
Category.hasMany(subCategory);
// Bir Alt Kategori sadece bir kategoriye ait olabilir
subCategory.belongsTo(Category);

// * Sub Category ve Freelancer Service ilişkisi
// Bir Servise bir Alt Kategoriye ait olacak
freelancerServices.belongsTo(subCategory);
