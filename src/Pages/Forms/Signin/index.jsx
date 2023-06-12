import { useState } from "react";
import "./styles.css";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseConfig } from "../../../Firebase/db_connection_form";
import { getDatabase, ref, update } from "firebase/database";
import { initializeApp } from "firebase/app";

export const SigninPage = () => {
    const [feedbackMessage, setFeedbackMessage] = useState("");
    const navigate = useNavigate();

    const app = initializeApp(firebaseConfig)
    const auth = getAuth();
    const database = getDatabase(app);

    function login(e) {
        e.preventDefault();

        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;

        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                var loginDate = new Date();

                update(ref(database, "users/" + user.uid), {
                    last_login: loginDate,
                })

                alert("Sucessfull Login");
                sucessfullLogin(user.uid);
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

                alert(errorMessage);
            });
    }

    function sucessfullLogin(userId) {
        localStorage.setItem("token", "token");


        navigate(`ToDoApp/${userId}`);
    }



    return (
        <>
            <div id="signinform" className="form-container">
                <form className="form" onSubmit={login} action="">
                    <span>Login</span>
                    <div className="input-group">
                        <input id="email" type="email" className="form-control" placeholder="name@example.com" required />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>

                    <div className="input-group">
                        <input id="password" type="password" className="form-control" placeholder="Password" required />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>

                    <div className="feedback-message error-message">
                        <span>{}</span>
                    </div>

                    <button type="submit">Login</button>

                    <div className="second-option-group">
                        <span>Doesn't have an account yet? <Link to="ToDoApp/signup">sign-up</Link></span>
                    </div>
                </form>
            </div>
        </>
    )
}