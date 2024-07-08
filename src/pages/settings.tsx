
import { Profile } from "../components/profile/profile.component";

import { User } from "../types/User.class";
import { HeroSettings } from "../components/settings-profile/settings-profile.component";
import { getCookie } from "../services/MaPiantalaCookies.service";
//import axios from "axios";

export function SettingsPage() {

  return (
    <>
      <div className="h-96 w-full">
        <Profile user={getCookie('user')}></Profile>
      </div>

      <HeroSettings
      onSubmission={async (data:User) =>{
        console.log(data.email)
        console.log(data.password)
       
        //await axios.post('/user/signin',{firstName: data.firstName, lastName: data.lastName, email: data.email, password : data.password, passwordConfirm : data.passwordConfirm, profilePicture : data.profilePicture, copertinePicture: data.copertinePicture})

      }  }
      oldUser={getCookie('user')}
    />
    </>
  );

}