import axios from 'axios';
import { Dispatch } from 'redux';
import { memo } from '../../helpers/memorize';
import { Repository, ElementsToMap, FailedAction, SucceedAction } from './searchTypes';

export const IS_FETCHING = "search:IS_FETCHING";
export const FETCHING_SUCCEED = "search:FETCHING_SUCCED";
export const FETCHING_FAILED = "search:FETCHING_FAILED";

const fetchingSucceed = (data: Repository[]): SucceedAction => ({ type: FETCHING_SUCCEED, data })
const fetchingFailed = (error: string): FailedAction => ({ type: FETCHING_FAILED, error })

const _fetchResults = (query: string) => async (dispatch: Dispatch) => {
    try {
        const { data } = await axios.get(`https://api.github.com/search/repositories?q=${query}`);
        const results: Repository[] = data.items.map((el: ElementsToMap) => ({
            name: el.name,
            owner: el.owner.login,
            stars: el.stargazers_count,
            createdAt: el.created_at
        }));
        dispatch(fetchingSucceed(results));
    } catch (error) {
        dispatch(fetchingFailed(error));
    }
};

export const fetchResults = memo(_fetchResults);