export interface Memo {
    _id: string;
    title: string;
    memo: string;
    created: string;
    modified: string;
}

export const defaultMemo: Memo = {
    _id: '',
    title: '',
    memo: '',
    created: '',
    modified: '',
};

export const defaultItem: Memo[] = [defaultMemo];

export interface OneMemoState {
    pageTitle: string;
    targetMemo: Memo;
}

export interface OneMemoAction {
    type: string;
    payload: OneMemoState;
}

export interface SeveralMemoState {
    pageTitle: string;
    item: Memo[];
}

export interface SeveralMEmoAction {
    type: string;
    payload: SeveralMemoState;
}

export interface FormProps {
    targetMemo: Memo;
}

export interface MemoContentProps {
    memoItems: Memo[];
}
