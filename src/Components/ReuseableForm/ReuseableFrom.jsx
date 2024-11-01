import { Children } from "react";

const ReuseableFrom = ({formTitle, handleSubmit, submitBtnText= 'Submit' ,Children}) => {

   const handleLocalSubmit = e => {
    e.preventDefault();
    const data = {
        name: e.target.name.value,
        email: e.target.email.value,
        password: e.target.password.value
    }
    handleSubmit(data);
   }

    return (
        <div>
            {Children}
            <form onSubmit={handleLocalSubmit}>
                <input type="text" name="name"/>
                <br />
                <input type="email" name="email" id=""></input>
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value={submitBtnText} />
            </form>
        </div>
    );
};

export default ReuseableFrom;