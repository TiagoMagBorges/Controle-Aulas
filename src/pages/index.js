import Link from "next/link";
import Logo from "@/components/logo";
import styles from "@/styles/pages/index.module.css";

export default function Home() {
    return (
        <div className={'main-background'}>

            <nav className={'navbar'}>

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
                    <Link href="/login" style={{
                        textDecoration: 'none',
                        color: 'inherit',
                    }}>Login / Criar Conta</Link>
                </div>

            </nav>

            <main className={'main-container'}>
                Página Inicial
            </main>
        </div>
    );
}