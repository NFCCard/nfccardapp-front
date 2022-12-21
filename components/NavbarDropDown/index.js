import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { Modal, LoginModal } from "components";
import { NavbarDropDownWrapper } from "./styles";
import { useLogin } from "hooks/Auth/useAuth";
import Link from "next/link";
import { AppContext } from "../../context/AppContextProvider";
import LogoutModal from "../logoutModal";
import Cookies from "js-cookie";

function NavbarDropDown({ isUserLoggedIn, user }) {
	const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
	const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
	const { mutate: loginMutate, isLoading: loginIsLoading, status: loginStatus } = useLogin();
	const { storage } = useContext(AppContext);

	useEffect(() => {
		if (loginStatus === "success") {
			setIsLoginModalOpen(false);
		}
	}, [loginStatus]);

	const loginHandler = (val) => {
		loginMutate(val);
	};
	const logoutHandler = () => {
		Cookies.remove("_s");
		window.location.reload();
	};
	return (
		<>
			<NavbarDropDownWrapper>
				{isUserLoggedIn && user ? (
					<div className='dropdown'>
						<button
							className='btn-main'
							type='button'
							data-bs-toggle='dropdown'
							aria-expanded='false'
						>
							<div className='d-flex align-align-items-center justify-content-center gap-2'>
								{user && (
									<Image
										src={user.avatar}
										alt='avatar'
										width='25px'
										height='25px'
										style={{ borderRadius: "50%" }}
									/>
								)}
								<span>{user?.name}</span>
							</div>
						</button>
						<ul className='dropdown-menu w-100 p-0'>
							<li className='p-1'>
								<Link href={`/${storage?.userInfo?.username}`}>
									<a className='text-decoration-none text-dark'>پروفایل</a>
								</Link>
							</li>
							<li className='p-1'>
								<Link href={`/${storage?.userInfo?.username}/edit`}>
									<a className='text-decoration-none text-dark'>ویرایش پروفایل</a>
								</Link>
							</li>
							<hr className='m-0' />
							<li className='p-1'>
								<button
									className='btn btn-outline-danger w-100'
									onClick={() => setIsLogoutModalOpen(true)}
								>
									خروج
								</button>
							</li>
						</ul>
					</div>
				) : (
					<button
						className='btn-main'
						onClick={() => !isUserLoggedIn && setIsLoginModalOpen(true)}
					>
						ورود به حساب کاربری
					</button>
				)}
			</NavbarDropDownWrapper>
			<Modal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)}>
				<LoginModal
					loginHandler={(val) => loginHandler(val)}
					isLoginLoading={loginIsLoading}
				/>
			</Modal>
			<Modal isOpen={isLogoutModalOpen} onClose={() => setIsLogoutModalOpen(false)}>
				<LogoutModal onClose={() => setIsLogoutModalOpen(false)} onLogout={logoutHandler} />
			</Modal>
		</>
	);
}

export default NavbarDropDown;
