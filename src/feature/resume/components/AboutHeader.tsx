import { Button, Divider } from "semantic-ui-react";
import { social } from "../../../helpers";
import { User } from "../../user/model/user";
import { Profile } from "../../profile/model/profile";

const AboutHeader = ({ user, profile }: props) => {

    return (
        <>
            <section className="flex justify-between items-center" >
                <div className="flex items-center gap-4">
                    {profile.img && (
                        <img
                            src={profile.img}
                            alt={user.name}
                            className="w-24 h-24 rounded-full object-cover"
                        />
                    )}
                    <div>
                        <h1 className="text-5xl" >
                            {user.name}
                        </h1>
                        <p className="text-xs" >{profile.position}</p>

                        <p>{profile.detail}</p>
                    </div>
                </div>
                <div>
                    <Button
                        onClick={() => outNav(social.linkedin)}
                        circular color='linkedin' size="mini" icon='linkedin' />
                    <Button
                        onClick={() => outNav(social.github)}
                        circular color='black' size="mini" icon='github' />
                </div>
            </section>
            <Divider inverted />
        </>
    );

};

type props = {
    user : User
    profile : Profile
}

function outNav(url: string) {

    window.open(url, '_blank')


}

export default AboutHeader;