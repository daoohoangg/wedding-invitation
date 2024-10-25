import { useState } from "react";
import { Link } from 'react-router-dom';
function Forms() {
    const [userName,setUserName] = useState("");
    const [userWish,setUserWish] = useState("");
    const clearForm = (e) => {
        e.preventDefault();
        setUserName();
        console.log("Thank You!");
    };
    return (
        <div className="Forms">
            <form onSubmit={clearForm}>
                <fieldset className="center QnA">
                    <h1>Cho tụi mình biết tên, biệt danh của bạn nhaaa!</h1>
                    <input type="text" id="name" 
                    placeholder="Tên của bạn là..." 
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}/>
                    <h1>Gửi lời chúc của bạn tới chúng mình nhé</h1>
                    <input className="" type="text" id="text" 
                    placeholder="Gửi lời chúc của bạn tới chúng mình nhé..." 
                    value={userWish}
                    onChange={(e) => setUserWish(e.target.value)}/>
                    <div></div>
                    <Link to={"/"} className="send underline" type = "submit">Lắng nghe câu chuyện của chúng mình nhé!</Link>
                </fieldset>
            </form>
        </div>
  );
}
export default Forms;
