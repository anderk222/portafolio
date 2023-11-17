import { Divider } from "semantic-ui-react"

const Education = () => {

    return (

        <section className="flex flex-col gap-2">

            <h4 className="text-xl font-semibold">
                Educación
            </h4>

            <article className="">
                <p className="font-semibold">Tecnologia en Desarrollo de Software</p>
                <p className="text-neutral-800" >Instituto Superio Tecnologico Yavirac</p>
                <p className="text-xs text-end " >2020-2023</p>
                <Divider inverted />
            </article>

        </section>
    )

}

export default Education;