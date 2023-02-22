
import React from "react"
import { useContext } from "react"
import { useState } from "react"

const WaitContext = React.createContext({
    wait: false,
    setWait: () => {},
})


export const WaitProvider = ( {children}) => {

        const [wait, setWait] = useState(false)

    return (
        <WaitContext.Provider value={{setWait: setWait, wait: wait}}>
            {children}
        </WaitContext.Provider>
    )

}

export const useWaitContext = () => useContext(WaitContext)