import { User } from "../types/User.class";
import { getCookie, setUserCookie } from "../services/MaPiantalaCookies.service";
import { CardSettings } from "../components/settings-profile/settings-profile.component";
import { axiosInstance } from "../utils/axiosInstance";

export function SettingsPage() {
    //const user = useState<User>()
    //console.log('useState:',user)
    
    return (
        <>
            <main>
                <CardSettings
                    onSubmission={async (data: User) => {
                        console.log(data.email)
                        console.log(data.password)
                        setUserCookie(data)
                        await axiosInstance.patch(`/user/`,{firstName: data.firstName, lastName: data.lastName, email: data.email, password : data.password, passwordConfirm : data.passwordConfirm, profilePicture : data.profilePicture, copertinePicture: data.copertinePicture})
                    }}
                    oldUser={getCookie('user')}
                />
            </main>
        </>
    );


}