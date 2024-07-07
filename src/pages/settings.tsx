import { useContext } from "react";
import { Profile } from "../components/profile/profile.component";
import { MyContext } from "../services/MyContext";
import { User } from "../types/User.class";
import { HeroSettings } from "../components/settings-profile/settings-profile.component";
//import axios from "axios";

export function SettingsPage() {
  const userContext = useContext(MyContext).data.user

  return (
    <>
      <div className="h-96 w-full">
        <Profile user={userContext}></Profile>
      </div>

      <HeroSettings
      onSubmission={async (data:User) =>{
        console.log(data.email)
        console.log(data.password)
       
        //await axios.post('http://localhost:3000/user/signin',{json: {firstName: data.firstName, lastName: data.lastName, username: data.username, email: data.email, password : data.password, passwordConfirm : data.passwordConfirm, profilePicture : data.profilePicture, copertinePicture: data.copertinePicture}})

      }  }
      oldUser={userContext}
    />
    </>
  );

}