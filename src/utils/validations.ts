export const REQUIRED_RULE = {
    required: "HELPER_REQUIRED"
}

export const MAX_LENGTH_RULE = (val: number) => {
    return {
        maxLength: {
            value: val,
            message: "Max length exceeded"
        }
    }
}
export const MIN_LENGTH_RULE_2 = {
    minLength: {
        value: 2,
        message: "HELPER_MINLENGTH_2"
    }

}

export const MIN_LENGTH_RULE_3 = {
    minLength: {
        value: 3,
        message: "USERCODE_MIN"
    }

}

// will allow special characters
export const ALPHABETS_NUMBERS_WITHOUT_SPACES_RULE = {
    pattern: {
        value: /^\S+$/,
        message: "HELPER_ALPHABETS_NUMBERS_ONLY_WITHOUT_SPACE"
    }
}

// will not allow special characters
export const ALPHABETS_WITHOUT_SPACES_RULE = {
    pattern: {
        value: /^(?!.*\d)\S+$/,
        message: "HELPER_ALPHABETS_ONLY_WITHOUT_SPACE"
    }
}

// will not allow special characters
export const NUMBERS_WITHOUT_SPACES_RULE = {
    pattern: {
        value: /^\d+$/,
        message: "HELPER_NUMBERS_ONLY_WITHOUT_SPACE"
    }
}

// // will not allow special characters (No need of this validation)
// export const ALPHABETS_NUMBERS_RULE = {
//     pattern: {
//         value: /^[A-Za-z0-9\s]+$/,
//         message: "HELPER_ALPHABETS_NUMBERS_ONLY"
//     }
// }

// will allow special characters
export const ALPHABETS_RULE = {
    pattern: {
        value: /^\D+$/,
        message: "HELPER_ALPHABETS_ONLY"
    }
}

export const NUMBERS_RULE = {
    pattern: {
        value: /^\s*\d+(\s+\d+)*\s*$/,
        message: "HELPER_NUMBERS_ONLY"
    }
}

export const EMAIL_RULE = {
    pattern: {
        value: /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: "HELPER_INVALID_INPUT"
    }
}
