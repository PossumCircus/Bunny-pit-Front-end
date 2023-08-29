import { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';
import AdminHeader from '../../../components/AdminHeader/AdminHeader';
import DefaultFooter from '../../../components/Footer/Footer';

import {
	Container,
	Title,
	ChangeButtonDiv,
	ButtonAnonymous,
	Buttonfriends,
	TableContainer,
} from './ReportManagementStyle';

import UserTableFriends from './FriendsHooks';
import UserTableSecret from './SecretHooks';

interface ApiData {
	_id: string;
	userId: string;
	email: string;
	name: string;
	content: string;
	reports: Report[];
	createdAt: string;
	updatedAt: string;
	__v: number;
}

type Report = {
	reportedBy: string;
	userId: string;
	reason: string;
	_id: string;
	createdAt: string;
};

const ReportManagement: React.FC = () => {
	const SECRET_DATA = 'http://localhost:3001/api/mainhome/secret/reported';
	const FRIEND_DATA = 'http://localhost:3001/api/mainhome/friends/reported';

	const [activeButton, setActiveButton] = useState<'anonymous' | 'friends'>(
		'anonymous',
	);
	const [showSecretUserTable, setShowSecretUserTable] = useState(true);

	const handleButtonClick = (buttonType: 'anonymous' | 'friends') => {
		setActiveButton(buttonType);
		setShowSecretUserTable(true);
	};

	const toggleTables = () => {
		setShowSecretUserTable(!showSecretUserTable);
	};

	const [userData, setUserData] = useState<ApiData[]>([]);
	const [secretUserData, setSecretUserData] = useState<ApiData[]>([]);
	const [filteredUserData, setFilteredUserData] = useState<ApiData[]>([]);

	useEffect(() => {
		axios
			.get(SECRET_DATA)
			.then((response) => {
				const fetchedData: ApiData[] = response.data;
				setUserData(fetchedData);
				setSecretUserData(fetchedData);
				console.log('성공', fetchedData);
			})
			.catch((error) => {
				console.error('데이터를 가져오는 중 오류 발생:', error);
			});
	}, []);

	useEffect(() => {
		axios
			.get(FRIEND_DATA)
			.then((response) => {
				const fetchedData: ApiData[] = response.data;
				setUserData(fetchedData);
				setFilteredUserData(fetchedData);
				console.log('성공', fetchedData);
			})
			.catch((error) => {
				console.error('데이터를 가져오는 중 오류 발생:', error);
			});
	}, []);

	return (
		<>
			<AdminHeader />
			<Container>
				<Title>신고 관리</Title>
				<ChangeButtonDiv>
					<ButtonAnonymous
						className={activeButton === 'anonymous' ? 'active' : ''}
						onClick={() => handleButtonClick('anonymous')}>
						익명 한마디 신고내역
					</ButtonAnonymous>
					<Buttonfriends
						className={activeButton === 'friends' ? 'active' : ''}
						onClick={() => handleButtonClick('friends')}>
						친구 한마디 신고내역
					</Buttonfriends>
				</ChangeButtonDiv>
			</Container>
			<TableContainer>
				{activeButton === 'anonymous' ? (
					showSecretUserTable && <UserTableSecret data={secretUserData} />
				) : (
					<UserTableFriends data={filteredUserData} />
				)}
			</TableContainer>

			<DefaultFooter />
		</>
	);
};

export default ReportManagement;