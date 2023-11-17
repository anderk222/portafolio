import { Divider } from "semantic-ui-react"

const Experience = () => {

    return (

        <section className="flex flex-col gap-2">

            <h4 className="text-xl font-semibold">
                Experiencia
            </h4>

            <article className="">
                <p className="font-semibold">Pasante Desarrolldor FullStack</p>
                <p className="text-neutral-800 font-semibold " >Sistemas Ágiles </p>
                <p className="text-neutral-800 text-sm" >Desarrollo Fullstack usando Angular, PosgreSQL & Spring Boot</p>
                <p className="text-xs text-end " >Agos 22 - Oct 07 (2022)</p>
                <Divider inverted />
            </article>

            <article className="">
                <p className="font-semibold">Pasante Desarrolldor FullStack</p>
                <p className="text-neutral-800 font-semibold " >Sistemas Ágiles </p>
                <p className="text-neutral-800 text-sm" >Desarrollo Fullstack usando NextJS, Spring Boot & React Native</p>
                <p className="text-xs text-end " >Agos 22 - Oct 07 (2022)</p>
                <Divider inverted />
            </article>
        </section>
    )

};

export default Experience;