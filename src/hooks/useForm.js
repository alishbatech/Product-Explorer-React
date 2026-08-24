import { useState } from "react";

export default function useForm(initialValues = {}, callback) {
    const [values, setValues] = useState(initialValues)

    const handleChange=(e)=>{
         const {name,value}=e.target;
         setValues(prev=>({
            ...prev,
            [name]:value
         }))
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        if(callback) callback(values)
    }

    const handleReset=()=>{
        setValues(initialValues)
    }


    return {
        values,
        handleChange,
        handleSubmit,
        handleReset
    }
}