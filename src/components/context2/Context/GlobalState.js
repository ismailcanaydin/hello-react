import { createContext } from "react";

export const GlobalContext = createContext();

export const GlobalProvider = (props) => {
    return (
        <GlobalContext.Provider value={{ id: 23, deger: 'İsmail Can', links: ['Ana Sayfa', 'Ürünler', 'Seçenekler', 'Hakkımızda'] }}>
            {props.children}
        </GlobalContext.Provider>
    )
}