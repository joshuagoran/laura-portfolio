import { type MouseEvent, type ReactNode, useCallback } from "react";
import { useNavigate } from "react-router-dom";

type TransitionLinkProps = {
    to: string;
    children: ReactNode;
    className?: string;
};

export default function TransitionLink({
    to,
    children,
    className,
}: TransitionLinkProps) {
    const navigate = useNavigate();

    const handleClick = useCallback(
        (e: MouseEvent<HTMLAnchorElement>) => {
            e.preventDefault();

            if (!document.startViewTransition) {
                navigate(to);
                return;
            }

            document.startViewTransition(() => {
                navigate(to);
            });
        },
        [navigate, to],
    );

    return (
        <a href={to} onClick={handleClick} className={className}>
            {children}
        </a>
    );
}
