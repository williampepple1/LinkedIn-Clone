import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './features/userSlice';
import { auth } from './firebase';
import "./Login.css";

function Login() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const dispatch = useDispatch();

    const loginToApp = (e) =>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
        .then(userAuth =>{
            dispatch(login({
                email: userAuth.email,
                uid: userAuth.uid,
                displayName: userAuth.user.displayName,
                profileUrl: userAuth.user.photoURL,
            })
          );
        }).catch(error =>alert(error));
    }
    const register = () =>{
        if (!name){
            return alert("Please enter your Full name");
        }
        auth.createUserWithEmailAndPassword(email, password)
        .then((userAuth) =>{
            userAuth.user.updateProfile({
                displayName: name,
                photoUrl: profilePic,
            }).then(()=>{
                dispatch(login({
                    email: userAuth.user.email,
                    uid: userAuth.user.uid,
                     displayName: name,
                    photoUrl: profilePic,
                }))
            })
        }).catch(error =>alert(error));
    }
    return (
        <div className="login">
            <img src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png?itok=q_lR0Vks" alt="" />
            <form>
                <input placeholder="Full name(required for registration)" value={name } onChange={(e)=>setName(e.target.value)} type="text"/>
                <input placeholder="Profile pic (optional)" value={profilePic} onChange={(e)=>setProfilePic(e.target.value)} type="text"/>
                <input placeholder="Email" value={email} type="email" onChange={(e)=> setEmail(e.target.value)}/>
                <input placeholder="Password" value={password} onChange={(e)=> setPassword(e.target.value)} type="password"/>
                <button type="submit" onClick={loginToApp}>Sign In</button>
            </form>
        <p>Not a member?{"  "}
            <span className="login_register" onClick={register}>Register Now</span>
        </p>
        </div>
    )
}

export default Login
