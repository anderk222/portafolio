import { Divider } from "semantic-ui-react"
import { Experience as Model } from "../../experience/model/experience";

const Experience = ({ experience }: props) => {

    return (

        <section className="flex flex-col gap-2">

            <h4 className="text-xl font-semibold">
                Experiencia
            </h4>

            {experience.map(value => (
                <article key={value.id} className="">
                    <p className="font-semibold">{value.position}</p>
                    <p className="text-neutral-800 font-semibold " >{value.company}</p>
                    <p className="text-neutral-800 text-sm" >{value.detail}</p>
                    <p className="text-xs text-end " >{value.startDate.toLocaleString()} hasta {value.endDate?.toLocaleString() || 'la actualidad'}</p>
                    <Divider inverted />
                </article>
            ))}

        </section>
    )

};

type props = { experience: Model[] }

export default Experience;