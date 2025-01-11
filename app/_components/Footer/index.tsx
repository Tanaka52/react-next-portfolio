import Link from'next/link';
import styles from "./index.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <nav className={styles.nav}>
                <ul className={styles.items}>
                    <li className={styles.item}>
                        <Link href="/news">ニュース</Link>
                    </li>
                    <li className={styles.item}></li>
                        <Link href="/members">メンバー</Link>
                    <li className={styles.item}>
                        <Link href="/contact">お問い合わせ</Link>
                    </li>
                </ul>
            </nav>
            <p className={styles.cr}>©︎ SIMPLE.All Rights Reseerved 2024</p>
        </footer>
    )
}