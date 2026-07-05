import { PageHeading } from "../../components/PageHeading"

export const Page = () =>
{
    return (
        <>
            <PageHeading headingString="Contact" />
            <div style={{width: "100", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <p>Phone: 07484140475</p>
                <p>Email: JamesRichardBland@gmail.com</p>
                <a href = "https://www.linkedin.com/in/james-richard-bland/">Linkedin</a>
            </div>
        </>
    )
}