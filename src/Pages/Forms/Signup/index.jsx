import { useEffect, useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../../../Firebase/db_connection_form";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
import { useNavigate } from "react-router-dom";

export const SignupPage = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [accountInfos, setAccountInfos] = useState([]);

    const navigate = useNavigate();

    const app = initializeApp(firebaseConfig)
    const auth = getAuth();
    const database = getDatabase(app);


    function createAccount(e) {
        e.preventDefault();
        let infos = [];

        var name = getElementValue("name");
        var email = getElementValue("email");
        var password = getElementValue("password");
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                set(ref(database, 'users/' + user.uid), {
                    email: email,
                    password: password,
                    name: name
                })
                    .then(() => {
                        // Data saved successfully!

                        alert("account created")
                        localStorage.setItem("token", "token");
                        navigate(`ToDoApp/${user.uid}`)
                    })
                    .catch((error) => {
                        // The write failed...

                        alert(error);
                    });


                // ...
            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                alert(errorMessage);
                // ..
            });
    }

    const getElementValue = (id) => {
        return document.getElementById(id).value
    }


    return (
        <>
            <div id="signupform" className="form-container">
                <form className="form" onSubmit={createAccount} action="">
                    <span>Create Account</span>

                    <div className="input-group">
                        <input id="name" type="text" name="name" className="form-control" placeholder="Thomas Wayne" />
                        <label htmlFor="floatingInput">Complete Name</label>
                    </div>

                    <div className="input-group">
                        <input id="email" type="email" name="email" className="form-control" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="input-group">
                        <input id="password" type="password" name="password" className="form-control" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="input-group">
                        <input id="confirm-password" type="password" name="confirm-password" className="form-control" placeholder="Confirm Password" />
                        <label htmlFor="floatingPassword">Confirm Password</label>
                    </div>


                    <div id="feedback-message" className="feedback-message">
                        <span></span>
                    </div>

                    <button type="submit">Create</button>

                    <div className="second-option-group">
                        <span>Already have an account? <Link to="ToDoApp/signin">sign-in</Link></span>
                    </div>
                </form>
            </div>
        </>
    )
}