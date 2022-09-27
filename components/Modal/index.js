import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { CSSTransition } from "react-transition-group";
import useClickOutside from "hooks/customs/useClickedOutSide";
function Modal({ children, isOpen, disableBackdropClose, onClose, title, className, ...attr }) {
	const [mounted, setMounted] = useState(false);
	const modalRef = useRef(null);
	
	useClickOutside(modalRef, onClose);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (mounted) {
		const modalRoot = document.getElementById("portal");
		return ReactDOM.createPortal(
			<CSSTransition
				timeout={300}
				in={isOpen}
				classNames={{
					enter: "hidden",
					enterActive: "active",
					enterDone: "active",
					exit: "active",
					exitActive: "hidden",
					exitDone: "hidden",
				}}
				unmountOnExit
			>
				<div className='bk-modal' ref={modalRef} {...attr}>
					<div
						className='bk-modal-backdrop'
						onClick={() => !disableBackdropClose && onClose()}
					></div>
					<div className={`bk-modal-wrapper ${className}`}>
						<div className='bk-modal-header'>
							<span>{title}</span>
							<span>
								<i className='fas fa-times bk-close-modal' onClick={onClose}></i>
							</span>
						</div>
						<div className='bk-modal-body'>{children}</div>
					</div>
				</div>
			</CSSTransition>,
			modalRoot
		);
	}
}

export default Modal;
