import { create } from "zustand";

// persisting store data
// import { persist } from "zustand/middleware";
// for localStorage, AsyncStorage, IndexedDB, etc

type TotalStoreType = {
	total: number;
	setTotal: (number: number) => void;
	clearTotal: () => void;
};

export const useTotalStore = create<TotalStoreType>()((set, _get) => ({
	total: 0,
	setTotal: (number: number) => set(() => ({ total: number })),
	clearTotal: () => set(() => ({ total: 0 })),
}));
