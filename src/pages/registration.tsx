import { useState } from "react";
import { HeroRegister } from "../components/registration/registrationCard.component";
import { User } from "../types/User.class";
import ky from "ky"

export function RegistrationPage() {

  const[userpost,setuserPost] = useState({})

  return (
    <HeroRegister
      user={new User(1,"", "", "", "", "", "", false, "","")}
      onSubmission={async (data:User) =>{
        setuserPost({firstname: data.firstName,lastname: data.lastName,email: data.email,password : data.password,passworConfirm: data.passwordConfirm})
        await ky.post('http://localhost:3000/user/signup',{json:userpost})
      }
      
      }

    />
  );
}
