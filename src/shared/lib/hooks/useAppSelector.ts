import {useSelector} from 'react-redux'
import {RootState} from "@/app/state.ts";

export const useAppSelector = useSelector.withTypes<RootState>()