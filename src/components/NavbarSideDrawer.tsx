import { PageLinks } from "./navbarHeader/PageLinks";
import { forwardRef, useImperativeHandle, useState } from "react";

export interface NavbarSideDrawerImperatives {
    toggleOpen: () => void;
}

export const NavbarSideDrawer = forwardRef<NavbarSideDrawerImperatives, {}>((props, ref) =>
{
    const [open, setOpen] = useState<boolean>(false);

    useImperativeHandle(ref, () => ({
        toggleOpen: () => setOpen((prev) => !prev),
    }), []);

    const easeFunc = open ? "ease-in-out": "ease-in"

    return (
        <div className="navbar-side-drawer-body" style={{width: open ? "10rem" : "0rem", transition: `width 0.6s ${easeFunc}`}}>
            {open && 
            <div style={{display: "flex", flexDirection: "column", height: "100%", width: "100%", justifyContent: "flex-start", alignItems: "flex-start", marginLeft: "7%"}}>
                <PageLinks />
            </div>}
        </div>
    );
});