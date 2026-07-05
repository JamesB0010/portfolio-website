interface PageHeadingProps 
{
    headingString: string;
}

export const PageHeading = ({headingString}: PageHeadingProps) =>
{
    return (
        <div className="page-heading-container">
            <h1>{headingString}</h1>
        </div>
    )
}