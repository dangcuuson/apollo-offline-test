import { handleActions, Action } from 'redux-actions';
import { StoreState } from 'myRedux';
import { MenuQueryResponse } from 'myGraphql';

// Types & Payloads
type MenuDataState = StoreState['menuData'];

type SetMenuPayload = MenuQueryResponse;
type Payload = SetMenuPayload;

const SET_MENU = 'SET_MENU';

// Actions
export const setMenu = ({ ...payload }: Payload) => {
    return { type: SET_MENU, payload };
};

// Reducers
const initialState: MenuDataState | null = null;

export const menuDataReducer = handleActions<MenuDataState, Payload>(
    {
        [SET_MENU]:
        (state: MenuDataState, action: Action<SetMenuPayload>): MenuDataState => {
            if (!action.payload) {
                return state;
            }

            return { ...state, ...action.payload };
        }
    },
    initialState as any
);
