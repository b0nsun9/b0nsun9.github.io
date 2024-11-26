'use client'

import { usePathname } from "next/navigation";
import styles from "./NavigationBar.module.css";
import "./NavigationBar.css";

const navLinks = [
	{ href: "/", label: "Home" },
	// { href: "/projects", label: "Projects" },
	{ href: "/about", label: "About" },
];

export default function NavigationBar() {

	const pathname = usePathname();

	return (
		<nav className={styles['blog-nav']}>
			<div className={styles['blog-links']}>
				{
					navLinks.map((link) => (
							<a 
								key={link.label} 
								href={link.href} 
								className={ pathname === link.href ? 'currentPath' : 'notCurrentPath'}
							>
								{link.label}
							</a>
					))		
				}
			</div>
		</nav>
	);
}