import {useState} from "react";
import styles from "@/styles/pages/login.module.css";

export default function RegisterForm({setLogin, handleRegister}){

    const [option, setOption] = useState('notSelected');

    const [name, setName] = useState('');

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [confirmPassword, setConfirmPassword] = useState('');

    const [birthDate, setBirthDate] = useState('');

    const [cpf, setCPF] = useState('');

    return(
        <>
            {option === 'notSelected' ?
                <div style={{width: '50%', height: '30%', display: 'flex', flexDirection: 'column'}}>
                    <div style={{width: '100%', height: '40%', textAlign: 'center'}}>
                        <h2>Criar conta como</h2>
                    </div>

                    <div style={{width: '100%', height: '60%', display: 'flex', justifyContent: 'space-around', alignContent: 'center'}}>
                        <button style={{width: '40%', height: '50%', backgroundColor: '#123524', color: '#FFF', borderRadius: '10px', cursor: 'pointer'}} onClick={() => setOption('student')}>Aluno</button>
                        <button style={{width: '40%', height: '50%', backgroundColor: '#123524', color: '#FFF', borderRadius: '10px', cursor: 'pointer'}} onClick={() => setOption('teacher')}>Professor</button>
                    </div>
                </div>
                : option === 'student' ?
                    <>
                        <div style={{
                            width: '100%',
                            height: '20%',
                            display: 'flex',
                            color: '#333',
                            textAlign: 'center',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <h2>Crie sua conta como aluno</h2>
                        </div>
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
                                className={styles.inputFocus}
                                type="text"
                                placeholder={"Nome"}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                style={{borderRadius: '10px', width: '100%', height: '10%', backgroundColor: '#f8f8ff'}}
                                required/>

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

                            <label>Confirmar Senha:</label>
                            <input
                                className={styles.inputFocus}
                                type="password"
                                placeholder={"Senha"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                style={{borderRadius: '10px', width: '100%', height: '10%', backgroundColor: '#f8f8ff'}}
                                required/>

                            <label>Data de Nascimento:</label>
                            <input
                                className={styles.inputFocus}
                                type="date"
                                value={birthDate}
                                onChange={(e) => setBirthDate(e.target.value)}
                                style={{
                                    borderRadius: '10px',
                                    color: '#999',
                                    width: '100%',
                                    height: '10%',
                                    backgroundColor: '#f8f8ff'
                                }}
                                required/>

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
                                    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)'
                                }}
                                type="submit">
                                Cadastrar
                            </button>
                        </form>
                    </>
                    :
                    <>
                        <div style={{
                            width: '100%',
                            height: '20%',
                            display: 'flex',
                            color: '#333',
                            textAlign: 'center',
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}>
                            <h2>Crie sua conta como professor</h2>
                        </div>
                        <form
                            style={{
                                width: '100%',
                                height: '75%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between',
                                padding: '20px'
                            }}
                            onSubmit={(e) => handleRegister(e)}>
                            <label>Nome:</label>
                            <input
                                className={styles.inputFocus}
                                type="text"
                                placeholder={"Nome"}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                style={{borderRadius: '10px', width: '100%', height: '10%', backgroundColor: '#f8f8ff'}}
                                required/>

                            <label>CPF:</label>
                            <input
                                className={styles.inputFocus}
                                type="text"
                                placeholder={"CPF"}
                                value={cpf}
                                onChange={(e) => setCPF(e.target.value)}
                                style={{borderRadius: '10px', width: '100%', height: '10%', backgroundColor: '#f8f8ff'}}
                                required/>

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

                            <label>Confirmar Senha:</label>
                            <input
                                className={styles.inputFocus}
                                type="password"
                                placeholder={"Senha"}
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                style={{borderRadius: '10px', width: '100%', height: '10%', backgroundColor: '#f8f8ff'}}
                                required/>

                            <label>Data de Nascimento:</label>
                            <input
                                className={styles.inputFocus}
                                type="date"
                                value={birthDate}
                                onChange={(e) => setBirthDate(e.target.value)}
                                style={{
                                    borderRadius: '10px',
                                    color: '#999',
                                    width: '100%',
                                    height: '10%',
                                    backgroundColor: '#f8f8ff'
                                }}
                                required/>

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
                                    boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.5)'
                                }}
                                type="submit">
                                Cadastrar
                            </button>
                        </form>
                    </>
            }
        </>
    );
}