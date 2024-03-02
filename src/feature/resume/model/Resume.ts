import { Experience } from "../../experience/model/experience";
import { khowledge } from "../../knowledge/model/khowledge";
import { Profile } from "../../profile/model/profile";
import { User } from "../../user/model/user"
export interface Resume {
    user:        User;
    profile:     Profile;
    experiences: Experience[];
    education:   any[];
    skills : khowledge[]
}
