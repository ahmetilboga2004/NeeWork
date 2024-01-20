import validator from "validator";

const idControl = (id) => {
  if (!validator.isNumeric(id)) {
    console.log("Yanlış id no");
    return false;
  } else {
    return true;
  }
};
const firstNameControl = (firstName) => {
  if (
    firstName !== null ||
    validator.isLength(firstName, {
      min: 1,
      max: 50,
    })
  ) {
    if (validator.isAlpha(firstName)) {
      return true;
    } else {
      errors.firstName = "Lütfen adınızı kontrol edin!";
    }
  } else {
    errors.firstName = "Lütfen Adınızı girin";
  }
};
const lastNameControl = (lastName) => {
  if (
    lastName !== null ||
    validator.isLength(lastName, {
      min: 1,
      max: 50,
    })
  ) {
    if (validator.isAlpha(lastName)) {
      return true;
    } else {
      errors.lastName = "Lütfen Soyadınızı kontrol edin!";
    }
  } else {
    errors.lastName = "Lütfen Soyadınızı girin!";
  }
};

const emailControl = async (email) => {
  if (email !== null || validator.isLength(email, { min: 4, max: 100 })) {
    if (validator.isEmail(email)) {
      return true;
    } else {
      errors.email = "Lütfen E-Posta hesabınızı kontrol edin!";
    }
  } else {
    errors.email = "Lütfen E-Posta hesabınızı girin!";
  }
};

const usernameControl = (username) => {
  if (username === null || validator.isLength(username, { min: 2, max: 50 })) {
    if (validator.isAlphanumeric(username)) {
      return true;
    } else {
      errors.username = "Lütfen kullanıcı adınızı kontrol edin.";
    }
  } else {
    errors.username = "Lütfen Kullanıcı adınızı girin!";
  }
};

// control helper => ch
const ch = {
  idControl,
  firstNameControl,
  lastNameControl,
  emailControl,
  usernameControl,
};

export default ch;
