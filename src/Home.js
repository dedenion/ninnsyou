import { signInWithPopup } from "firebase/auth";
import React from "react";
import { auth, provider } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";

function Home() {
    //サインインの状況を確認し、状態をuser変数に代入
    const [user] = useAuthState(auth);

    return (
    <div>
        {user ? (
            <>
                <UserInfo/>
                <SignOutButton/>
            </>
        ):(
            <SignInButton />
        )}
        
    </div>
    );
}

export default Home;

//button
function SignInButton() {
    const signInWithGoogle = () => {
        //firebaseを使ってグーグルでサインインする
        signInWithPopup(auth, provider);
    };

    return (
        <button onClick={signInWithGoogle}>
            <p>Googleでサインイン</p>
        </button>
    );
}

function SignOutButton() {
    return (
        <button onClick={() => auth.signOut()}>
            <p>サインアウト</p>
        </button>
    );
}

function UserInfo() {
    return (
        <div className="userInfo">
            <img src={auth.currentUser.photoURL} />
            <p>{auth.currentUser.displayName}</p>
        </div>
    );
}