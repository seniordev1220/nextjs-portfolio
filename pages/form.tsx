import { FormEvent, useRef } from "react"

const Forms = () => {
    const emailInputRef=useRef() as React.MutableRefObject<HTMLInputElement>;
    const feedbackInputRef=useRef() as React.MutableRefObject<HTMLInputElement>;
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const email=emailInputRef.current.value;
        const password=feedbackInputRef.current.value
        
    }
    console.log(process.env.mongo_name)
    return <>
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Your Email</label>
            <input type='email' id="email" ref={emailInputRef} />
            <label htmlFor="password"></label>
            <input type='password' id="password" />
            <button></button>
        </form>
    </>
}
export default Forms