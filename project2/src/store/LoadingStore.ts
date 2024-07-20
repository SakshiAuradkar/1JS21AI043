import {create} from 'zustand'

const useLoadingStore = create((set) => ({
    loadingStates: {},
    setLoadingStates: (key: string, isLoading: boolean) => 
        set((state: any) => ({
        loadingStates: {
            ...state.loadingStates,
            [key]: isLoading,
        }
    }))
}))

export default useLoadingStore;