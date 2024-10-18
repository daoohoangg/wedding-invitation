import { useState } from "react";
function Forms() {
    const [userName,setUserName] = useState("");
    const clearForm = (e) => {
        e.preventDefault();
        setUserName();
        console.log("Thank You!");
    };
    return (
        <div className="Forms">
            <form onSubmit={clearForm}>
                <fieldset>
                    <h1>Cho tụi mình biết tên, biệt danh của bạn nhaaa!</h1>
                    <input type="text" id="name" 
                    placeholder="Tên của bạn là..." 
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}/>
                    <div></div>
                    <button type = "submit">Lắng nghe câu chuyện của chúng mình nhé!</button>
                </fieldset>
            </form>
        </div>
  );
}
export default Forms;
