import customerJobs from "./customerJob.js";
import freelancerServices from "./freelancerService.js";
import Customer from "./customer.js";
import Freelancer from "./freelancer.js";
import subCategory from "./subCategory.js";
import Session from "./session.js";
import User from "./user.js";
import Category from "./category.js";

// * USER - FREELANCER İLİŞKİSİ
// Bir kullanıcı birden fazla freelancer'a sahip olabilir
User.hasMany(Freelancer);
// Bir Freelancer sadece bir User'a ait olabilir
Freelancer.belongsTo(User);

// * USER - CUSTOMER İLİŞKİSİ
// Bir kullanıcı birden fazla customer'a sahip olabilir
User.hasMany(Customer);
// Bir Customer sadece bir User'a ait olabilir
Customer.belongsTo(User);

// * USER - SESSİON İLİŞKİSİ
// Bir User birden fazla oturuma sahip olabilir
User.hasMany(Session);
// Bir Session sadece bir User'a ait olabilir
Session.belongsTo(User);

// * FREELANCER - SERVİCE İLİŞKİSİ
// Bir Freelancer birden fazla hizmete sahip olabilir
Freelancer.hasMany(freelancerServices);
// Bir Hizmet sadece bir Freelancer'a ait olabilir
freelancerServices.belongsTo(Freelancer);

// * USER - FREELANCER SERVİCE İLİŞKİSİ
// Bir Service sadece bir User'a ait olabilir
freelancerServices.belongsTo(User);

// * CUSTOMER - JOB İLİŞKİSİ
// Bir Customer birden fazla iş ilanına sahip olabilir
Customer.hasMany(customerJobs);
// Bir İş ilanı sadece bir Customer'a ait olabilir
customerJobs.belongsTo(Customer);

// * CATEGORY - SUBCATEGORY İLİŞKİSİ
// Bir Category birden fazla alt kategoriye sahip olabilir
Category.hasMany(subCategory);
// Bir Alt kategori sadece bir Categoriye ait olabilir
subCategory.belongsTo(Category);

// * FREELANCER - CATEGORY İLİŞKİSİ
// Bir Freelancer sadece bir category'e ait olabilir
Freelancer.belongsTo(Category);
// Bir Category'e ait birden fazla Freelancer olabilir
Category.hasMany(Freelancer);
