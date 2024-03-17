import { Icon, Image, Label, Popup } from "semantic-ui-react";
import { khowledge } from "../../knowledge/model/khowledge";

const Skills = ({ skills }: props) => {


    return (
        <section className="flex flex-col gap-2 pb-24">

            <h4 className="text-xl font-semibold">
                Habilidades
            </h4>
            <div className="flex flex-wrap gap-2">
                { skills.map(skill=>(
                <Popup key={skill.id}
                content={`Dominio de herramienta ${skill.level}%`}
                trigger={<Label>
                    {skill.level}%
                    <Label.Detail>{skill.tool.name}</Label.Detail>
                </Label>} />
                ))}

            </div>
        </section>
    )
};

type props = { skills: khowledge[] }

export default Skills;