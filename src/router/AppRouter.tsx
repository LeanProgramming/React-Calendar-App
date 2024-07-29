import { Navigate, Route, Routes } from 'react-router-dom';
import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar';

type AuthStatus = 'authenticated' | 'not-authenticated';

export const AppRouter = () => {
	const authStatus: AuthStatus = 'authenticated';

	return (
		<Routes>
			{
				(authStatus === 'not-authenticated') 
					? <Route path='/auth/*' element={<LoginPage />} />
					: <Route path='/*' element={<CalendarPage />} />
			}

			<Route path='/*' element={<Navigate to='/auth/login' />} />
		</Routes>
	);
};
