import Link from "next/link";
import Logo from "@/components/logo";
import {useState} from "react";
import styles from "@/styles/pages/login.module.css";

export default function Login() {

    const [login, setLogin] = useState(true);

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');

    const [birthDate, setBirthDate] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        console.log('Login:', email, password);
    }

    const handleRegister = (e) => {
        e.preventDefault();
        console.log('Register:', name, email, password, confirmPassword, birthDate);
    }

    // TODO: Email confirmation, blur the left part of the screen and add the option to input the code sent to the email
    // in the right part of the screen, and a button to resend the code and another to cancel the registration.

    return (
        <div className={'main-background'}>

            <div className={'navbar'}>

                <Logo/>

                <div style={{
                    width: '10%',
                    height: '100%',
                    alignItems: 'center',
                    alignContent: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    marginLeft: 'auto',
                }}>

                    <Link href="/" style={{
                        textDecoration: 'none',
                        color: 'inherit',
                    }}>Página Inicial</Link>

                </div>

            </div>

            <main className={'main-container'}>

                <div style={{
                    width: '30%',
                    height: '100%',
                    borderTopLeftRadius: '20px',
                    borderBottomLeftRadius: '20px',
                    borderRight: '2px solid #CCC',
                    boxShadow: '2px 0 5px rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <div style={{
                        width: '100%',
                        height: '10%',
                        display: 'flex',
                        color: '#333'
                    }}>

                        <div style={{height: '100%', width: '50%', textAlign: 'center', justifyContent: 'center', alignContent: 'center'}}>
                            <button
                                style={{border: 'none', background: 'none', color: 'inherit', cursor: 'pointer'}}
                                onClick={() => setLogin(true)}><h2>Login</h2></button>
                        </div>

                        <div style={{height: '100%', width: '50%', textAlign: 'center', justifyContent: 'center', alignContent: 'center'}}>
                            <button
                                style={{border: 'none', background: 'none', color: 'inherit', cursor: 'pointer'}}
                                onClick={() => setLogin(false)}><h2>Cadastrar</h2></button>
                        </div>

                    </div>

                    {
                        login ? (
                            <form
                                style={{width: '100%', height: '30%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '20px'}}
                                onSubmit={(e) => handleLogin(e)}>
                                <label>E-mail:</label>
                                <input
                                    type="email"
                                    placeholder={"Email"}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required/>

                                <label>Senha:</label>
                                <input
                                    type="password"
                                    placeholder={"Senha"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required/>

                                <button type="submit">Entrar</button>
                            </form>
                        ) : (
                            <form
                                style={{
                                    width: '100%',
                                    height: '60%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    padding: '20px'
                                }}
                                onSubmit={(e) => handleRegister(e)}>
                                <label>Nome:</label>
                                <input
                                    type="text"
                                    placeholder={"Nome"}
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required/>

                                <label>E-mail:</label>
                                <input
                                    type="email"
                                    placeholder={"Email"}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required/>

                                <label>Senha:</label>
                                <input
                                    type="password"
                                    placeholder={"Senha"}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required/>

                                <label>Confirmar Senha:</label>
                                <input
                                    type="password"
                                    placeholder={"Senha"}
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required/>

                                <label>Data de Nascimento:</label>
                                <input
                                    type="date"
                                    value={birthDate}
                                    onChange={(e) => setBirthDate(e.target.value)}
                                    required/>

                                <button type="submit">Cadastrar</button>
                            </form>
                        )
                    }
                </div>

                <div style={{
                    width: '70%',
                    height: '100%',
                    borderTopRightRadius: '20px',
                    borderBottomRightRadius: '20px',
                    backgroundColor: "#f8f8ff",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    {login ? <h1>Bem vindo de volta!</h1> : <h1>Crie sua conta!</h1>}
                </div>
            </main>

        </div>
    );
}