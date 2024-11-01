import { useState } from "react";


const StatefulForm = () => {

    const [email,setEmail] = useState(null);
    const [error, setError] = useState('')

    const handleSubmit = e => {
        e.preventDefault();
        if(email.length < 16 ){
            setError('email must be 6 characters or longer')
        }else{
            setError('')
            console.log(email);
        }
        
    }

    const handleEmailChange = e => {
        console.log(e.target.value);
        setEmail(e.target.value)
        
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" />
                <br />
                <input onChange={handleEmailChange} type="email" name="email" id=""></input>
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
            </form>
        </div>
    );
};

export default StatefulForm;