import styled from 'styled-components';

export const Container = styled.div`
	margin: 0;
`;
export const FirstSection = styled.div`
	width: 100%;
	height: 71rem;
	margin: 0 auto;
	background: linear-gradient(
		180deg,
		#7954f8 0%,
		rgba(251, 155, 249, 0.62) 55.73%,
		rgba(251, 155, 249, 0) 100%
	);
`;
export const Header = styled.div`
	padding: 4rem 8rem;
	display: flex;
	align-item: center;
	justify-content: space-between;
`;
export const Logo = styled.img`
	width: 15rem;
	@media (max-width: 768px) {
		width: 10rem;
	}
	@media (max-width: 390px) {
		width: 8rem;
	}
`;
export const BtnContainer = styled.div`
	margin-top: 4rem;
`;
export const LogIn = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	margin-right: 2rem;
	color: ${({ theme }) => theme.colors.background};
	font-weight: 800;
	font-size: 2rem;
	@media (max-width: 390px) {
		font-size: 1.5rem;
	}
`;

export const SignUp = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	color: ${({ theme }) => theme.colors.background};
	font-weight: 800;
	font-size: 2rem;
	@media (max-width: 390px) {
		font-size: 1.5rem;
	}
`;
export const MainContent = styled.div`
	margin-top: 13rem;
	margin-left: 8rem;
	@media (max-width: 390px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-left: 0;
	}
`;
export const BigText1 = styled.p`
	color: ${({ theme }) => theme.colors.background};
	font-size: 8rem;
	font-weight: 900;

	@media (max-width: 768px) {
		font-size: 6rem;
	}
	@media (max-width: 390px) {
		font-size: 3rem;
	}
`;
export const BigText2 = styled.p`
	color: ${({ theme }) => theme.colors.pointcolor};
	font-size: 8rem;
	font-weight: 900;
	margin-top: -5.5rem;
	@media (max-width: 390px) {
		font-size: 6rem;
		margin-top: 0rem;
	}
`;
export const MidText = styled.p`
	color: ${({ theme }) => theme.colors.text};
	font-size: 3rem;
	font-weight: 700;
	letter-spacing: 0.2rem;
	line-height: 5rem;
	@media (max-width: 768px) {
		font-size: 2.5rem;
	}
	@media (max-width: 390px) {
		font-size: 1.5rem;
		line-height: 2rem;
	}
`;
export const ImgContainer = styled.div`
	margin-left: 60%;
	margin-top: -55rem;
	position: relative;
	@media (max-width: 768px) {
		margin-left: 50%;
	}
	@media (max-width: 390px) {
		margin-left: 20%;
		margin-top: 4rem;
	}
`;

export const MainAvatar = styled.img`
	width: 80%;
`;
export const SecondSection = styled.div`
	width: 100%;
	height: 71rem;
	margin: 20rem auto;
	display: flex;
	@media (max-width: 390px) {
		height: 130rem;
	}
`;
export const LeftSection = styled.div`
	margin-left: 8rem;
	height: 37rem;
	width: 70rem;
	position: relative;
	@media (max-width: 390px) {
		height: 40rem;
	}
`;
export const LeftImage = styled.img`
	width: 50%;
	@media (max-width: 768px) {
		width: 70%;
	}
	@media (max-width: 390px) {
		width: 60%;
		margin-top: 20rem;
		margin-left: 0;
	}
`;
export const DetailImage = styled.img`
	width: 60%;
	position: absolute;
	@media (max-width: 768px) {
		display: none;
	}
`;

export const RightSection = styled.div`
	margin-left: auto;
	margin-right: 8rem;
	height: 37rem;
	width: 70rem;
	border-radius: 3.7rem;
	position: relative;
	@media (max-width: 390px) {
		left: 20rem;
	}
`;
export const RightImage = styled.img`
	width: 80%;
	position: absolute;
	top: -10rem;
	@media (max-width: 768px) {
		top: -5rem;
		left: 10rem;
	}
	@media (max-width: 390px) {
		width: 60%;
		left: 10rem;
	}
`;
export const RightDetailImage = styled.img`
	width: 90%;
	position: absolute;
	left: -35rem;
	top: 10rem;
	@media (max-width: 768px) {
		width: 60%;
		top: 20rem;
		left: -10rem;
	}
	@media (max-width: 390px) {
		width: 50%;
		left: 10rem;
	}
`;
export const RightContent = styled.div`
	margin-left: auto;
	margin-right: 15rem;
	@media (max-width: 390px) {
		margin-left: 0;
		margin-right: 0;
	}
	@media (max-width: 390px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-left: -73rem;
		margin-top: 90rem;
	}
`;
export const LastContent = styled.div`
	margin-left: auto;
	margin-right: 15rem;
	@media (max-width: 390px) {
		margin-left: 0;
		margin-right: 0;
	}
	@media (max-width: 390px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-left: -68rem;
		margin-top: -10rem;
	}
`;
export const LeftContent = styled.div`
	margin-left: 8rem;
	margin-right: 15rem;
	@media (max-width: 390px) {
		margin-top: 50rem;
		margin-right: -80rem;
		margin-left: 13rem;
	}
`;
export const MidContent = styled.p`
	font-size: 6rem;
	font-weight: 700;
	@media (max-width: 768px) {
		font-size: 4rem;
	}
	@media (max-width: 390px) {
	}
`;
export const MidSecContent = styled.p`
	font-size: 3rem;
	@media (max-width: 768px) {
		font-size: 2rem;
	}
`;
export const MidImage = styled.img`
	width: 100%;
	position: absolute;
	left: -100px;
	@media (max-width: 390px) {
		display: none;
	}
`;
export const ThirdSection = styled.div`
	margin-top: -30rem;
	display: flex;
	background-color: #9ff984;
	padding: 20rem 0;
	@media (max-width: 390px) {
		height: 75rem;
	}
`;
export const FourthSection = styled.div`
	margin-top: 0rem;
	display: flex;
	background-color: ${({ theme }) => theme.colors.background};
	padding: 20rem 0;
	@media (max-width: 390px) {
		height: 0;
	}
`;
export const HalfCircle = styled.div`
	height: 62rem;
	background: linear-gradient(
		360deg,
		#7954f8 0%,
		rgba(251, 155, 249, 0.62) 55.73%,
		rgba(251, 155, 249, 0) 100%
	);
	border-bottom-left-radius: 50% 80%;
	border-bottom-right-radius: 50% 80%;
	margin-bottom: 20rem;
	display: flex;
	justify-content: center;

	@media (max-width: 390px) {
		border-bottom-left-radius: 70% 80%;
		border-bottom-right-radius: 70% 80%;
	}
`;
export const ShareBtn = styled.button`
	width: 53rem;
	height: 12rem;
	background: ${({ theme }) => theme.colors.background};
	border-radius: 3rem;
	border: none;
	color: ${({ theme }) => theme.colors.pointcolor};
	font-size: 3rem;
	font-weight: 700;
	margin-top: 20rem;
	cursor: pointer;
	transition: transform 0.3s;
	&:hover {
		transform: scale(1.1);
	}

	@media (max-width: 390px) {
		font-size: 2rem;
		width: 25rem;
		height: 8rem;
	}
`;
