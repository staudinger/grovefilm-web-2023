import styles from "./styles.module.css";

export default function HomeLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return <section className={styles.home}>{children}</section>;
}
