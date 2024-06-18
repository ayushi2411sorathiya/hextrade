import * as Yup from 'yup';

export const formSchema = Yup.object({
    name:Yup.string().min(2).max(25).required("Please enter your name"),
    email:Yup.string().email().required("Please enter your email"),
    phoneNumber: Yup.string()
    .required("Please enter your phone number")
    .matches(
        /^\d{10}$/, // Adjust the regular expression as needed
        "Phone number must be exactly 10 digits"
    ),
    city:Yup.string().min(2).max(25).required("Please enter your city name"),
    message:Yup.string().min(2).max(250).required("Please enter message"),

})