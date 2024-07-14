import { User } from "../types/User.class";
import {
  getCookie,
  setUserCookie,
} from "../services/MaPiantalaCookies.service";
import { CardSettings } from "../components/settings-profile/settings-profile.component";
import { updateUser } from "../services/users.service";
import { Profile } from "../components/profile/profile.component";

export function SettingsPage() {
  const user = getCookie("user");

  return (
    <>
      <main>
        <div className="h-96 w-full">
          <Profile user={user}></Profile>
        </div>
        <CardSettings
          onSubmission={async (data: User) => {
            console.log(data.email);
            console.log(data.password);
            setUserCookie(data);
            updateUser;
            window.localStorage;
          }}
          oldUser={getCookie("user")}
        />
      </main>
    </>
  );
}
