import { Icon, Label, Popup } from "semantic-ui-react";

const Skills = ()=>{


    return(
        <section className="flex flex-col gap-2 pb-24">

                    <h4 className="text-xl font-semibold">
                        Habilidades
                    </h4>
                    <div className="flex flex-wrap gap-2">

                        <Popup
                            content="Dominio de herramienta 60%"
                            trigger={<Label>
                                <Icon name="js square" />
                                60%
                                <Label.Detail>JavaScript</Label.Detail>
                            </Label>} />

                        <Popup
                            content="Dominio de herramienta 60%"
                            trigger={<Label>
                                60%
                                <Label.Detail>TypeScript</Label.Detail>
                            </Label>} />

                            <Popup
                            content="Dominio de herramienta 60%"
                            trigger={<Label>
                                <Icon name="react" />
                                60%
                                <Label.Detail>React</Label.Detail>
                            </Label>} />

                            <Popup
                            content="Dominio de herramienta 70%"
                            trigger={<Label>
                                <Icon name="angular" />
                                70%
                                <Label.Detail>Angular</Label.Detail>
                            </Label>} />

                            <Popup
                            content="Dominio de herramienta 60%"
                            trigger={<Label>
                                60%
                                <Label.Detail>Spring Boot</Label.Detail>
                            </Label>} />

                            <Popup
                            content="Dominio de herramienta 66%"
                            trigger={<Label>
                                66%
                                <Label.Detail>PostgreSQL</Label.Detail>
                            </Label>} />

                            <Popup
                            content="Dominio de herramienta 50%"
                            trigger={<Label>
                                <Icon name="css3" />
                                50%
                                <Label.Detail>CSS</Label.Detail>
                            </Label>} />

                            <Popup
                            content="Dominio de herramienta 40%"
                            trigger={<Label>
                                40%
                                <Label.Detail>Java</Label.Detail>
                            </Label>} />
                            <Popup
                            content="Dominio de herramienta 40%"
                            trigger={<Label>
                                40%
                                <Label.Detail>Figma</Label.Detail>
                            </Label>} />

                            <Popup
                            content="Dominio de herramienta 30%"
                            trigger={<Label>
                                <Icon name="docker" />
                                30%
                                <Label.Detail>Docker</Label.Detail>
                            </Label>} />

                            <Popup
                            content="Dominio de herramienta 60%"
                            trigger={<Label>
                                60%
                                <Label.Detail>SQL</Label.Detail>
                            </Label>} />

                            <Popup
                            content="Dominio de herramienta 50%"
                            trigger={<Label>
                                <Icon name="html5" />
                                50%
                                <Label.Detail>HTML</Label.Detail>
                            </Label>} />

                            <Popup
                            content="Dominio de herramienta 50%"
                            trigger={<Label>
                                <Icon name="node js" />
                                50%
                                <Label.Detail>NodeJS</Label.Detail>
                            </Label>} />

                    </div>
                </section>
    )


}

export default Skills;