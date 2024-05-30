
import { User } from "../../types/User.class";
import { HeroImageAccount } from "./image-profileCard.component";
interface IImageProfile{
  user : User
}
export const UserImage : React.FC<IImageProfile> = ({user}) => {
  return (
    <>
      <dialog
        id="my_modal_5"
        className="modal max-sm: size-3/4 mx-auto my-auto"
      >
        <div className="size-auto">
          <HeroImageAccount user = {user} />
        </div>
      </dialog>
    </>
  );
};
