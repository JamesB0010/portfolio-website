interface SocialIconProps {
    image: string;
}

export const SocialIcon = ({image}: SocialIconProps) =>
{
    console.log("image: ", image);
    return (
        <img src={image} alt="Social Icon" className="social-icon" />
    )
}