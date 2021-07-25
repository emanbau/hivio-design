import { createContext, useState, useContext } from 'react'

// Context for inNavbar for general styling (ex. landing page copy)
export const NavbarContext = createContext({
    inNavbar: false,
    setInNavbar: () => { },
});

export function NavbarContextProvider({ children }) {
    const [inNavbar, setInNavbar] = useState(false);

    const setInNavbarHandle = () => {
        setInNavbar(!inNavbar)
    }

    return (
        <NavbarContext.Provider value={{ inNavbar: inNavbar, setInNavbar: setInNavbarHandle }}>
            {children}
        </NavbarContext.Provider>
    )
}

export function useNavbarContext () {
    return useContext(NavbarContext);
}

