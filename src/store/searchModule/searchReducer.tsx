import { FETCHING_FAILED, FETCHING_SUCCEED } from "./searchAction";
import { SearchAction, SucceedAction } from "./searchTypes";

const initState = { results: [], error: "" };

export const searchReducer = (state = initState, action: SearchAction) => {
    switch (action.type) {
        case FETCHING_SUCCEED:
            return { ...state, results: (action as SucceedAction).data, error: "" };
        case FETCHING_FAILED:
            return { ...state, error: "Coś poszło nie tak" }
        default: {
            return state;
        }
    }
};