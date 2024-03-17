import { useState } from "react";

export function useCurrent<T>(initial: T): UseCurrent<T> {

    const [current, setCurrent] = useState<T>(initial);

    return { current, change, reset };

    function change(_data: T) { setCurrent(_data) };
    function reset() { setCurrent(initial) };

};

export type UseCurrent<T> = {

    current: T,
    change: (_data: T) => void,
    reset : ()=>void
};