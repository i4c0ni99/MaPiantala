import { HeroRegister } from "../components/registration/registrationCard.component";
import { User } from "../types/User.class";

export function RegistrationPage() {
  return (
    <HeroRegister
      user={new User("", "", "", "", "", "", false, "")}
      onSubmission={(data: User) => data}
    />
  );
}
