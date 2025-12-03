import {useDispatch} from 'react-redux'
import {AppDispatch} from "../../app/state.ts";


export const useAppDispatch = useDispatch.withTypes<AppDispatch>()