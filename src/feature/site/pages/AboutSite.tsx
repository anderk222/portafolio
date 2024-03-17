import { Container, Header } from "semantic-ui-react";

function AboutSite() {

    return (

        <Container className="text-lg" >
            <Header size='large'>About this site</Header>
            <p className="whitespace-nowrap" >
                The purpose of this website is to showcase my skills as a software developer.
                <br />
                serves as a platform for potential employers and collaborators to gain insight into my capabilities and contributions to the field.

            </p>
            <br />
            <section>
                <Header size='medium'>Styling</Header>
                <p className="whitespace-pre-wrap" >

                The visual styling of the website was thoughtfully crafted using a combination of 
                <a href="https://tailwindcss.com/" target="__blank" className="cursor-pointer text-blue-500 font-medium " > Tailwind CSS </a> 
                and  <a href="https://semantic-ui.com/" target="__blank" className="cursor-pointer text-blue-500 font-medium ">Semantic UI</a>. 
                Additionally, we’ve adorned the interface with a collection of beautiful icons sourced from 
                <a href="https://www.flaticon.com/" target="__blank" className="cursor-pointer text-blue-500 font-medium "> Flaticon</a>,  These icons not only enhance the aesthetics but also provide intuitive visual cues for users. 🎨✨

                </p>
            </section>
            <br />
            <section>
                <Header size='medium'>Development</Header>
                <p>
                The website was built using a powerful combination of 
                <a href="https://react.dev/" target="__blank" className="cursor-pointer text-blue-500 font-medium " > React </a> for the frontend, 
                <a href="https://vitejs.dev/" target="__blank" className="cursor-pointer text-blue-500 font-medium " > Vite </a> for fast and efficient development, and 
                <a href="https://spring.io/" target="__blank" className="cursor-pointer text-blue-500 font-medium " > Spring Boot </a> for the backend. This stack ensures a seamless user experience, efficient code bundling, and robust server-side functionality. 🚀🌟

                </p>
            </section>
        </Container>

    );

}

export default AboutSite;