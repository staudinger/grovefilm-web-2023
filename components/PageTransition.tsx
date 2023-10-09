import React, { forwardRef, useMemo } from "react";
import { motion, HTMLMotionProps } from "framer-motion";

type PageTransitionProps = HTMLMotionProps<"div">;
type PageTransitionRef = React.ForwardedRef<HTMLDivElement>;

function PageTransition(
	{ children, ...rest }: PageTransitionProps,
	ref: PageTransitionRef
) {
	const onTheRight = { x: "100%" };
	const onTheBottom = { y: "100%" };
	const inTheCenter = { y: 0 };
	const onTheLeft = { x: "-100%" };
	const onTheTop = { y: "50%" };

	const transition = { duration: 0.6, ease: "easeInOut" };

	return (
		<motion.div
			ref={ref}
			initial={onTheBottom}
			animate={inTheCenter}
			exit={onTheTop}
			transition={transition}
			{...rest}
		>
			{children}
		</motion.div>
	);
}

export default forwardRef(PageTransition);
