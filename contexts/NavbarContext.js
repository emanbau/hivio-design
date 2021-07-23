import { createContext, useState } from 'react'

// Context for inNavbar for general styling (ex. landing page copy)
export const NavbarContext = createContext({
    inNavbar: false,
    setInNavbar: () => { },
    scrollPast80: false,
    setScrollPast80: () => { },
});

export function NavbarContextProvider({ children }) {
    const [inNavbar, setInNavbar] = useState(false);

    const setInNavbarHandle = () => {
        setInNavbar(!inNavbar)
    }

    const [scrollPast80, setScrollPast80] = useState(false);

    const setScrollPast80Handle = (boolean) => {
        setScrollPast80(boolean)
    }

    return (
        <NavbarContext.Provider value={{ inNavbar: inNavbar, setInNavbar: setInNavbarHandle, scrollPast80: scrollPast80, setScrollPast80: setScrollPast80Handle }}>
            {children}
        </NavbarContext.Provider>
    )
}

