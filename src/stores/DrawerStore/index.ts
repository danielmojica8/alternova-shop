import create from 'zustand';

interface DrawerState {
	open: boolean;
	handleOpen: () => void;
}

const useDrawerStore = create<DrawerState>((set) => ({
	open: false,
	handleOpen: () => {
		set((state) => ({ open: !state.open }));
	},
}));

export default useDrawerStore;
