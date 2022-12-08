import React, { useEffect } from "react";
import Modal from "react-modal";
import { CSSTransition } from "react-transition-group";
function CustomModal({ children, isOpen, onClose, title, className, ...attr }) {
	useEffect(() => {
		Modal.setAppElement(document.getElementById("__next"));
	}, []);

	return (
		<Modal
			isOpen={isOpen}
			onRequestClose={onClose}
			contentLabel={title}
			portalClassName='portal'
			overlayClassName='bk-modal-backdrop'
			shouldCloseOnEsc
			style={{ inset: "unset" }}
		>
			<CSSTransition
				timeout={300000}
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
				{children}
			</CSSTransition>
		</Modal>
	);
}

export default CustomModal;
