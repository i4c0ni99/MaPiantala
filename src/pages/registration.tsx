
import { HeroRegister } from "../components/registration/registrationCard.component";
import { User } from "../types/User.class";
import { axiosInstance } from "../utils/axiosInstance";


export function RegistrationPage() {


    return (
        <div className=" card pt-32 size-3/4 mx-auto">
            <HeroRegister
                onSubmission={async (data: User) => {
                    console.log(data.email)
                    console.log(data.password)

                    await axiosInstance.post('http://localhost:3000/user/signup', { firstName: data.firstName, lastName: data.lastName, email: data.email, password: data.password, passwordConfirm: data.passwordConfirm })

                }

                }

            />
        </div>
    );
}
