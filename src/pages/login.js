import Link from "next/link";
import Logo from "@/components/logo";
import {useState} from "react";
import styles from "@/styles/pages/login.module.css";
import LoginForm from "@/components/login/LoginForm";
import LoginController from "@/controllers/LoginController";
import RegisterForm from "@/components/login/RegisterForm";

export default function Login() {

    const [login, setLogin] = useState(true);

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');

    const [birthDate, setBirthDate] = useState('');

    const handleLogin = async (e, user) => {
        e.preventDefault();
        let response = await LoginController.login(user);
        // TODO: handle response
    }

    const handleRegister = async (e, userData) => {
        e.preventDefault();
        let response = await LoginController.register(userData);
        // TODO: handle response
    }

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

                    {login ?
                        <LoginForm
                            handleLogin={handleLogin}
                            setLogin={setLogin}/>
                        :
                        <div style={{width: '100%', height: '100%', justifyContent: 'center', alignContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                            <h1>Mensagem</h1>
                            <h2>Logo</h2>
                        </div>
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
                    {login ?
                        <h1>Bem vindo de volta!</h1>
                        :
                        <RegisterForm/>
                    }
                </div>
            </main>

        </div>
    );
}