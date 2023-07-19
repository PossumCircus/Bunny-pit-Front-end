export const emailValidation = (email: string): boolean => {
    return (
        email.match(/^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/) !== null
    );
}

export const passwordValidation = (password: string): boolean => {
    const regex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@#$%^&+=!]).{8,}$/;
    return regex.test(password) && (password.length >= 8 && password.length <= 20)
};

export const nickNameValidation = (userName: string): boolean => {
    return userName.length >= 2 && userName.length <= 8;
}

