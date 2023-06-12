import { useState } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
    const [navUnscrolled, setNavScrolled] = useState(false);
    const navigate = useNavigate();

    const logout =  () => {
        
        localStorage.getItem("token") ? localStorage.removeItem("token") : alert("you need to login");

        navigate("ToDoApp/signin");
    }

    function toggleNavScrolled() {
        document.addEventListener("scroll", (e) => {


            if (pageYOffset > 0) {
                setNavScrolled(true);
            }
            else {
                setNavScrolled(false);
            }
        })
    };

    document.addEventListener("DOMContentLoaded", () => {
        if (pageYOffset > 0) {
            setNavScrolled(true);
        }
    });

    toggleNavScrolled();

    return (
        <>
        <nav className={` ${navUnscrolled ? "scrolled" : ""}`}>
            <span>WhatNow</span>
            <ul>
                <li>Home</li>
                <li><a onClick={logout}>Logout</a></li>
            </ul>
        </nav>
        </>
    )
}