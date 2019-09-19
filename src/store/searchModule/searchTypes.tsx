import { Action } from "redux";

export interface Repository {
    name: string;
    owner: string;
    stars: number;
    createdAt: string;
}

export interface ElementsToMap {
    name: string;
    owner: Owner;
    stargazers_count: number;
    created_at: string;
}

interface Owner {
    login: string;
}

export interface SucceedAction extends Action {
    data: Repository[];
}

export interface FailedAction extends Action {
    error: string;
}

export type SearchAction = SucceedAction | FailedAction;
