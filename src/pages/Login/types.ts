export interface IFormLogin {
    email: string;
    password: string;
    isValid: boolean;
}

export const defaultValues: IFormLogin = {
    email: '',
    password: '',
    isValid: false,
}