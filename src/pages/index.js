import Link from "next/link";
import Logo from "@/components/logo";

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
                Teste
            </main>
        </div>
    );
}