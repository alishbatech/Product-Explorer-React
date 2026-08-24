import { useState } from "react"

function useToggle() {
 const [value, setValue] = useState(false);

    const handleToogle = () => {
        setValue(prev => !prev)
    }

    return [value,handleToogle]
}

export default useToggle