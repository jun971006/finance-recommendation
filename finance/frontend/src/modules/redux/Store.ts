import { configureStore, Middleware } from "@reduxjs/toolkit";
import RootReducer from "./RootReducer";
import { useDispatch } from "react-redux";

/**
 * 애플리케이션의 '상태'를 관리하기 위한 Stroe 구성
 */
export const store = configureStore({
    // combined된 여러개의 리듀서를 store에 저장합니다.
    reducer: RootReducer

    
});

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store;