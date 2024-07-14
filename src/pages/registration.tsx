import { HeroRegister } from "../components/registration/registrationCard.component";
import { postUser } from "../services/users.service";
import { User } from "../types/User.class";

export function RegistrationPage() {
  return (
    <div className=" card pt-32 size-3/4 mx-auto">
      <HeroRegister
        onSubmission={async (data: User) => {
          await postUser(data);
        }}
      />
    </div>
  );
}
