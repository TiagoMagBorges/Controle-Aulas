import styles from "@/styles/pages/login.module.css";
import Link from "next/link";
import { useState } from "react";

export default function LoginForm({ setLogin, handleLogin }) {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    return (
        <>
            <div className={styles.loginContainer}>
                <div className={styles.loginHeader}>
                    <p className={styles.loginTitle}>Login</p>
                </div>
            </div>

            <form className={styles.loginForm} onSubmit={(e) => handleLogin(e, { email, password })}>
                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Email:</label>
                </div>

                <div className={styles.inputContainer}>
                    <input
                        className={`${styles.inputFocus} ${styles.inputField}`}
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.formGroup}>
                    <label className={styles.formLabel}>Senha:</label>
                </div>

                <div className={styles.inputContainer}>
                    <input
                        className={`${styles.inputFocus} ${styles.inputField}`}
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <div className={styles.forgotPassword}>
                    <Link href="/forgot-password" className={styles.forgotPasswordLink}>
                        Esqueci minha senha
                    </Link>
                </div>

                <button className={styles.submitButton} type="submit">
                    Entrar
                </button>
            </form>

            <div className={styles.registerContainer}>
                <div className={styles.registerContent}>
                    <p className={styles.registerText}>Não possui uma conta?</p>
                    <button onClick={() => setLogin(false)} className={styles.registerButton}>
                        Cadastrar-se
                    </button>
                </div>
            </div>
        </>
    );
}