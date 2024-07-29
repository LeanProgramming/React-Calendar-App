import { onCloseDateModal, onOpenDateModal } from '../store';
import { useAppDispatch, useAppSelector } from './redux';

export const useUiStore = () => {
	const dispatch = useAppDispatch();

	const { isDateModalOpen } = useAppSelector(state => state.ui);

	const openDateModal = () => {
		dispatch(onOpenDateModal());
	};

	const closeDateModal = () => {
		dispatch(onCloseDateModal());
	};

	return {
		isDateModalOpen,
		openDateModal,
		closeDateModal,
	};
};
