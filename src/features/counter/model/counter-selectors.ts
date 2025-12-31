import {RootState} from "@/app/state.ts";
import {CounterTypes} from "@/app/App.tsx";

export const selectCounter = (state: RootState): CounterTypes => state.counter;