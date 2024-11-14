import Link from "next/link";
import Logo from "@/components/logo";
import styles from "@/styles/pages/login.module.css";

export default function Login() {
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
                    <h2>Login</h2>
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
                    <h1>Logo com alguma mensagem.</h1>
                </div>
            </main>

        </div>
    );
}