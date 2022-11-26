import create from 'zustand';

interface DialogState {
	open: boolean;
	json: any;
	setOpen: () => void;
	setJson: (json: any) => void;
}

const useDialogJSONStore = create<DialogState>((set) => ({
	open: false,
	json: null,
	setJson: (json) => {
		set(() => ({ json }));
	},
	setOpen: () => {
		set((state) => ({ open: !state.open }));
	},
}));

export default useDialogJSONStore;
