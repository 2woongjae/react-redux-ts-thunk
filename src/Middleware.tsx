import {Store} from 'redux';

export function middleware(store: Store<{ age: number; }>) {
    return (next: any) => (action: any) => {
        console.log(`before store : ${JSON.stringify(store.getState())}`); // before

        const returnValue = next(action); // 다음 미들웨어 호출, 없으면 실제 dispatch

        console.log(`after : ${JSON.stringify(store.getState())}`); // after

        return returnValue;
    };
}