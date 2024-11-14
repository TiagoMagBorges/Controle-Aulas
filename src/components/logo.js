import Link from "next/link";

export default function Logo(){
    return (
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
        }}>
            <Link
                style={{
                    textDecoration: 'none',
                    color: 'inherit',
                }}
                href={'/'}>SEP</Link>
        </div>
    );
}