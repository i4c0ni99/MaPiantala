import { Profile } from "../components/profile/profile.component";
import { User } from "../types/User.class";

export function ProfilePage() {
    return (
        <div className="h-96 w-full">
            <Profile user={new User(
                'email@example.com',
                'https://staticfanpage.akamaized.net/wp-content/uploads/sites/6/2019/08/image16.jpg',
                'Lorenzo',
                'Lamonaca',
                'HoldHappy39',
                'https://citynews-torinotoday.stgy.ovh/~media/horizontal-mid/19183715163212/campo-di-colza-collegno-campo-volo-foto-mario-alesina-2.jpg'
            )}></Profile>
        </div>
    )
}