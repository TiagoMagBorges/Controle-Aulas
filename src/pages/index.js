export default function Home() {
    return (
        <>
            <nav style={{
                width: '100vw',
                height: '7vh',
                position: 'fixed',
                top: '0%',
                backgroundColor: 'black',
                color: 'white',}}>
                <h1>Navbar</h1>
            </nav>
            <main style={{
                width: '100vw',
                height: '100vh',
                paddingTop: '7vh',
                color: 'white',
                backgroundColor: '#123524',
            }}>
                <h1>Main Content</h1>
            </main>
            <footer>
                <h1>Footer</h1>
            </footer>
        </>
    );
}