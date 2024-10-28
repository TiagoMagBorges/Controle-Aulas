import Link from "next/link";

export default function Home() {
    return (
        <div style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#0F0F0F',
            flexDirection: 'column',
        }}>
            <nav style={{
                width: '100%',
                height: '10%',
                display: 'flex',
                alignItems: 'center',
                margin: 'auto',
                flexDirection: 'row',
                color: 'white',
            }}>

                <div style={{
                    width: '10%',
                    height: '100%',
                    alignItems: 'center',
                    alignContent: 'center',
                    justifyContent: 'center',
                    display: 'flex',
                    fontWeight: 'bold',
                    fontSize: '25px',
                    textShadow: '0 0 10px #CCC, 0 0 20px #CCC, 0 0 30px #CCC, 0 0 40px #CCC, 0 0 50px #CCC',
                }}>SEP
                </div>

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

            <main style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                width: '99%',
                height: '90%',
                padding: '20px',
                backgroundColor: '#FFF',
                margin: 'auto',
                borderRadius: '20px',
            }}>
                Teste
            </main>
        </div>
    );
}