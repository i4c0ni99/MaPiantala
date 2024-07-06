
import { HeroRegister } from "../components/registration/registrationCard.component";
import { User } from "../types/User.class";
import { axiosInstance } from "../utils/axiosInstance";


export function RegistrationPage() {


  return (
    <HeroRegister
      onSubmission={async (data:User) =>{
        console.log(data.email)
        console.log(data.password)
       
        await axiosInstance.post('http://localhost:3000/user/signup',{firstName: data.firstName, lastName: data.lastName, username: data.username, email: data.email, password : data.password, passwordConfirm : data.passwordConfirm})

      }
      
      }

    />
  );
}
