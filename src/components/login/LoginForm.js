import styles from "@/styles/pages/login.module.css";
import Link from "next/link";
import {useState} from "react";

export default function LoginForm({setLogin, handleLogin}) {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    return(
        <>
            <div style={{width: '100%', height: '20%', display: 'flex', color: '#333'}}>

                <div style={{
                    height: '100%',
                    width: '100%',
                    textAlign: 'center',
                    justifyContent: 'center',
                    alignContent: 'center'
                }}>

                    <h1>Login</h1>

                </div>

            </div>

            <form style={{width: '100%', height: '60%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px'}}
                onSubmit={(e) => handleLogin(e, {email, password})}>

                <label>E-mail:</label>
                <input
                    className={styles.inputFocus}
                    type="email"
                    placeholder={"Email"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{borderRadius: '10px', width: '100%', height: '10%', backgroundColor: '#f8f8ff'}}
                    required/>

                <label>Senha:</label>
                <input
                    className={styles.inputFocus}
                    type="password"
                    placeholder={"Senha"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    style={{borderRadius: '10px', width: '100%', height: '10%', backgroundColor: '#f8f8ff'}}
                    required/>

                <Link href="/forgot-password" style={{textDecoration: 'none', color: '#123524', textAlign: 'right'}}>Esqueci
                    minha senha</Link>

                <button
                    style={{
                        backgroundColor: '#123524',
                        color: '#FFF',
                        borderRadius: '10px',
                        width: '100%',
                        height: '5vh',
                        marginTop: '20px',
                        fontWeight: 'bold',
                        borderWidth: '1px',
                        boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)',
                        cursor: 'pointer'
                    }}
                    type="submit">Entrar
                </button>
            </form>

            <div style={{width: '100%', height: '20%'}}>
                <div style={{width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <p style={{color: '#333'}}>Não possui uma conta?</p>
                    <button onClick={() => setLogin(false)} style={{color: '#123524', marginLeft: '10px', border: 'none', background: 'inherit', cursor: 'pointer'}}>Cadastrar-se</button>
                </div>
            </div>
        </>
    );
}