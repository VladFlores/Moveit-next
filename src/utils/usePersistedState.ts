import { useEffect, useState } from "react";
import Cookies from 'js-cookie';

function usePersistent(key: string, initialState: any) {
    const [state, setState] = useState(() => {
        const cookiesValue = Cookies.get(key);

        if (cookiesValue) {
            return JSON.parse(cookiesValue);
        } else {
            return initialState;
        }
    });

    useEffect(() => {
        Cookies.set(key, JSON.stringify(state));
    }, [key, state]);

    return [state, setState]
}

export default usePersistent;