interface SocialIconProps {
    image: any;
}

export const SocialIcon = ({image}: SocialIconProps) =>
{
    console.log("image: ", image);
    return (
        <img src={image} alt="Social Icon" className="social-icon" />
    )
}