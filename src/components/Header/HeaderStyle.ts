import styled from 'styled-components';

export const HedearStyle = styled.div`
	border-bottom: 0.1rem solid ${({ theme }) => theme.colors.logocolor};
	width: 100%;

	@media only screen and (min-width: 0px) and (max-width: 390px) {
	}
`;
export const HeaderWrapper = styled.div`
	margin: 0 4rem;
	height: 10rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	box-sizing: border-box;
	@media only screen and (min-width: 391px) and (max-width: 768px) {
	}
	@media only screen and (min-width: 0px) and (max-width: 390px) {
		margin: 0;
		width: 100%;
		justify-content: space-evenly;
		ul {
			padding: 0;
			align-items: center;
			li {
				padding: 0;
				margin: 0 2rem;
				// a {
				// 	padding: 0;
				// 	margin: 0;
				img {
					width: 3rem;
				}
				// }
			}
		}
	}
`;
export const Logo = styled.img`
	width: 6.3rem;
`;
export const MenuUl = styled.ul`
	padding: 0 3rem;
	list-style: none;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
`;
export const MenuLi = styled.li`
	margin: 0 3rem;
	a {
		text-decoration: none;
		font-size: 2rem;
		color: black;
		padding: 1rem 1.5rem;
	}
`;
export const Option = styled.img`
	width: 3.4rem;
	height: 3.4rem;
	cursor: pointer;
`;
export const SearchImage = styled.img`
	cursor: pointer;
`;
