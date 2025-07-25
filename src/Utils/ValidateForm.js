export const checkValidData = (email,password,fullName) =>{
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);;
    const isPasswordValid = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(password);
    const isFullNameValid = /^[a-zA-Z]+([ '-][a-zA-Z]+)*$/.test(fullName);

    if(!isEmailValid) return "Email is not valid!";
    if(!isPasswordValid) return "Password is not valid!";
    if(!isFullNameValid) return "Full Name is not valid!"
    return null;
}