import React, { useEffect } from "react";
import "./styles.css";

export interface ModalProps {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;

    center?: boolean;
    closeOnOverlayClick?: boolean;
    showCloseIcon?: boolean;
    animation?: "fade" | "slide" | "zoom";

    width?: string;
    overlayColor?: string;
}

export const Modal: React.FC<ModalProps> = ({
    open,
    onClose,
    children,
    center = true,
    closeOnOverlayClick = true,
    showCloseIcon = true,
    animation = "zoom",
    width = "500px",
    overlayColor = "rgba(0,0,0,0.5)"
}) => {

    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (open) document.addEventListener("keydown", handleEsc);

        return () => document.removeEventListener("keydown", handleEsc);
    }, [open]);

    if (!open) return null;

    return (
        <div className="dp-modal-overlay" style={{ background: overlayColor }} onClick={() => closeOnOverlayClick && onClose()} >
            <div className={`dp-modal ${animation} ${center ? "center" : ""}`} style={{ width }} onClick={(e) => e.stopPropagation()} >
                {showCloseIcon && (
                    <button className="dp-modal-close" onClick={onClose}>×</button>
                )}
                {children}
            </div>
        </div>
    );
};