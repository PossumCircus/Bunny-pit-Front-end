import styled from 'styled-components';

export const ModalWrapper = styled.div`
	position: fixed;
	width: 50%;
	height: 50%;
	background-color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 2rem;
	border: 1px solid ${({ theme }) => theme.colors.strongpurple};
	z-index: 999;
	top: 10%;
	left: 25%;
`;
export const ExitImage = styled.img`
	cursor: pointer;
	position: absolute;
	top: 5rem;
	left: 75rem;
`;
export const SearchBarContainer = styled.div`
	position: absolute;
	top: 0;
	margin-top: 0;
	margin-bottom: 8rem;
`;
export const SearchResult = styled.div`
	z-index: 9999;
	display: flex;
	flex-direction: column;
	max-height: 70vh;
	overflow-y: auto;
`;

export const ResultText = styled.p`
	font-size: 2.5rem;
	cursor: pointer;
	&:hover {
		background-color: #f5f5f5;
	}
`;
export const ProfileImage = styled.img`
	width: 7rem;
	height: 7rem;
	border-radius: 50%;
	margin-right: 2rem;
`;
export const NoResultText = styled.p`
	font-size: 2rem;
	color: ${({ theme }) => theme.colors.strongpurple};
`;
export const ResultContainer = styled.div`
	display: flex;
`;