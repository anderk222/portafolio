import { Divider } from "semantic-ui-react"
import { Education as Model } from "../../education/model/education"

const Education = ({ education }: props) => {

    return (

        <section className="flex flex-col gap-2">

            <h4 className="text-xl font-semibold">
                Educación
            </h4>
            {education.map(data => (
                <article key={data.id} className="">
                    <p className="font-semibold">{data.career}</p>
                    <p className="text-neutral-800" >{data.istName}</p>
                    <p className="text-xs text-end " >
                        {data.startDate.toString()}-{data.startDate?.toString() || 'Actualmente'}</p>
                    <Divider inverted />
                </article>
            ))}

            {!education.length && <>
                <p>No se ha registrado educacion</p> 
                {/* <Divider inverted /> */}
                </>}

        </section>
    )

}

type props = {
    education: Model[]
}

export default Education;