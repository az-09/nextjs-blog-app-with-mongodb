import Link from 'next/link';

import styles from './Nav.module.css';

export default function Nav() {
    return (
        <nav className={styles.nav}>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link href="/">
                        <a>All Posts</a>
                    </Link>
                </li>
                <li>
                    <Link href="/add-post">
                        <a>Add Post</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}