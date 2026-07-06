import { PageHeading } from "../../components/PageHeading"

export const Page = () =>
{
    return (
        <>
            <PageHeading headingString="Contact" />
            <div style={{width: "100", height: "80vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "flex-start"}}>
                <p>Phone: 07484140475</p>
                <p>Email: JamesRichardBland@gmail.com</p>
                <a href = "https://www.linkedin.com/in/james-richard-bland/">Linkedin</a>
            </div>
        </>
    )
}