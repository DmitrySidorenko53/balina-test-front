export default class RegisterModel {
    constructor(email, password, confirmPassword, personalDataAgreement) {
        this.email = email;
        this.password = password;
        this.confirmPassword = confirmPassword;
        this.personalDataAgreement = personalDataAgreement;
    }
}