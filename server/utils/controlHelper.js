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
            return false;
        }
    } else {
        return false;
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
            return false;
        }
    } else {
        return false;
    }
};

const emailControl = async (email) => {
    if (email !== null || validator.isLength(email, { min: 4, max: 100 })) {
        if (validator.isEmail(email)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
};

const usernameControl = (username) => {
    if (
        username === null ||
        validator.isLength(username, { min: 2, max: 50 })
    ) {
        if (validator.isAlphanumeric(username)) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
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
