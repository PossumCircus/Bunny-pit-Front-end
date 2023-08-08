import { useState, useEffect } from 'react';
import {
	Routes,
	Route,
	useLocation,
	useNavigate,
} from 'react-router-dom';
import { checkTokenExpirationAndRefresh } from './utils/checkTokenExpirationAndRefresh';
import MainPage from './pages/Main/Main';
import MainHome from './pages/Mainhome/MainHome';
import UserMainPage from './pages/UserMain/UserMain';
import Chatting from './pages/Chatting/Chatting';
import Detail from './pages/UserMain/Detail/Detail';
import LoginPage from './pages/UserAccount/Login/Login';
import RegisterPage from './pages/UserAccount/Login/Register';
import UserEditPage from './pages/UserAccount/UserEdit/UserEdit';
import UserWithdrawalPage from './pages/UserAccount/UserWithdrawal/UserWithdrawal';
import UploadPost from './pages/UserMain/UploadPost/UploadPost';

function App() {
	const [isLogin, setIsLogin] = useState(false);
	const location = useLocation();

	useEffect(() => {
		const pathsWithoutTokenCheck = ['/login', '/register', '/'];
		if (!pathsWithoutTokenCheck.includes(location.pathname)) {
			checkTokenExpirationAndRefresh();
		}
	}, [location.pathname])

	return (
		<>
			<Routes>
				<Route path='/' element={<MainPage />} />
				{!isLogin && ( //로그인 안되어 있을 경우 register, login으로.
					<>
						<Route path='/register' element={<RegisterPage />} />
						<Route path='/login' element={<LoginPage />} />
						<Route path='/user/edit' element={<UserEditPage />} />
						<Route path='/user/withdrawal' element={<UserWithdrawalPage />} />
					</>
				)}
				{/* {isLogin && ( // 로그인 했을 때만 렌더링
						<>
							<Route path='/useredit' element={<UserEditPage />} />
						</>
					)} */}
				<Route path='/post' element={<UserMainPage />} />
				<Route path='/post/user/:email' element={<UserMainPage />} />
				<Route path='/post/:postId' element={<Detail />} />
				<Route path='/post/upload' element={<UploadPost />} />
				<Route path='/mainhome' element={<MainHome />} />
				<Route path='/chatting/*' element={<Chatting />} />
			</Routes>
		</>
	);
}
export default App;


	// const location = useLocation();

	// // location pathname 변경시마다 로그인 확인
	// useEffect(() => {
	// 	if (localStorage.getItem('isLogin') == '1') {
	// 		setIsLogin(true);
	// 	} else {
	// 		setIsLogin(false);
	// 	}
	// }, [location.pathname])
	// // 웹 진입시 로그인 확인
	// useEffect(() => {
	// 	const checkLogin = () => {
	// 		if (localStorage.getItem('isLogin') == '1') {
	// 			setIsLogin(true);
	// 		} else {
	// 			setIsLogin(false);
	// 		}
	// 	}
	// 	// 초기 로그인 상태 설정
	// 	checkLogin();

	// 	// localStorage 변경시마다 로그인 상태 재설정
	// 	window.addEventListener('storage', checkLogin);
	// 	return () => {
	// 		window.removeEventListener('storage', checkLogin)
	// 	};
	// }, []);
