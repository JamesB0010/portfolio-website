import { PageLinks } from "./navbarHeader/PageLinks";
import { forwardRef, useCallback, useImperativeHandle, useState } from "react";

export interface NavbarSideDrawerImperatives {
    toggleOpen: () => void;
}

interface NavbarSideDrawerProps
{
    onPageLinkClicked: () => void;
}

export const NavbarSideDrawer = forwardRef<NavbarSideDrawerImperatives, NavbarSideDrawerProps>(({onPageLinkClicked}, ref) =>
{
    const [open, setOpen] = useState<boolean>(false);

    useImperativeHandle(ref, () => ({
        toggleOpen: () => setOpen((prev) => !prev),
    }), []);

    const easeFunc = open ? "ease-in-out": "ease-in"

    const pageLinkClickedCallback = useCallback(() =>
    {
        setOpen(false);
        onPageLinkClicked();
    }, [onPageLinkClicked]);

    return (
        <div className="navbar-side-drawer-body" style={{width: open ? "10rem" : "0rem", transition: `width 0.6s ${easeFunc}`}}>
            {open && 
            <div style={{display: "flex", flexDirection: "column", height: "100%", width: "100%", justifyContent: "flex-start", alignItems: "flex-start", marginLeft: "7%"}}>
                <PageLinks onPageLinkClicked={pageLinkClickedCallback}/>
            </div>}
        </div>
    );
});