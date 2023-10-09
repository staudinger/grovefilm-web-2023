import { AnimatePresence } from "framer-motion";
import { AppProps } from "next/app";
import { useRouter } from "next/navigation";

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	return (
		<AnimatePresence initial={false} mode="popLayout">
			<div className="bg-slate-900">
				<Component {...pageProps} />
			</div>
		</AnimatePresence>
	);
}
