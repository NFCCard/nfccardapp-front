import React from "react";
import styled from "styled-components";

const Blob = styled.span`
	background-color: ${(props) => props.backgroundColor} !important;
`;
const BlobButton = ({
	backgroundColor,
	children,
	isLink,
	link,
	style,
	onClick,
	isTargetBlank = true,
}) => {
	return (
		<>
			{isLink ? (
				<a
					href={link}
					target={isTargetBlank && "_blank"}
					className='blob-btn'
					style={style}
				>
					{children}
					<span className='blob-btn__inner'>
						<span className='blob-btn__blobs'>
							<Blob
								backgroundColor={backgroundColor}
								className='blob-btn__blob'
							></Blob>
							<Blob
								backgroundColor={backgroundColor}
								className='blob-btn__blob'
							></Blob>
							<Blob
								backgroundColor={backgroundColor}
								className='blob-btn__blob'
							></Blob>
							<Blob
								backgroundColor={backgroundColor}
								className='blob-btn__blob'
							></Blob>
						</span>
					</span>
				</a>
			) : (
				<button className='blob-btn' style={style} onClick={onClick}>
					{children}
					<span className='blob-btn__inner'>
						<span className='blob-btn__blobs'>
							<Blob
								backgroundColor={backgroundColor}
								className='blob-btn__blob'
							></Blob>
							<Blob
								backgroundColor={backgroundColor}
								className='blob-btn__blob'
							></Blob>
							<Blob
								backgroundColor={backgroundColor}
								className='blob-btn__blob'
							></Blob>
							<Blob
								backgroundColor={backgroundColor}
								className='blob-btn__blob'
							></Blob>
						</span>
					</span>
				</button>
			)}
		</>
	);
};

export default BlobButton;
