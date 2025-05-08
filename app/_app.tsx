import { AppProps } from "next/app";
import { useRouter } from "next/navigation";

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	return (
		<div className="bg-black">
			<Component {...pageProps} />
		</div>
	);
}
