import {create} from 'zustand'

const useShopStore = create((set) => ({
    data: {companyName: "azn", categoryName: "shoes", top: 5, minPrice: 0, maxPrice: 1000},
    setData: (key: any, value: any) => set((state: any)=> ({
        ...state.data,
        key: value
    }))
}))

export default useShopStore;