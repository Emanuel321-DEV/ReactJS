import { FaGithub } from "react-icons/fa"
import { FiX } from "react-icons/fi"
// signIn: funcao que faaz a autenticacao do usuario
// useSession: retorna se o usuario esta ou nao logado
import {signIn, signOut ,useSession} from 'next-auth/react';

import style from "./styles.module.scss";

export function SigninButton(){
    const { data: session } = useSession();

    return session ? (
        <button 
        type="button"
        className={style.signInButton}
        onClick={() => signOut()}
        >       
            <span>
                <FaGithub color="#04d361"/>
            </span>
            {session.user.name}
            <FiX color="#737380" className={style.closeIcon}/>
        </button> 
    ) : (
        <button 
        type="button"
        className={style.signInButton}
        onClick={()=> signIn('github')}
        > 
            <span>
                <FaGithub color="#eba417"/>
            </span>
                Sign with Github
        </button> 
    )
}