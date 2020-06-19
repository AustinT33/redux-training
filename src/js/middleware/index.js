import { ADD_ARTICLE } from "../constants/action-types";

const badWords = ["nate", "ope"];

export function badWordsMiddlware({ dispatch }) {
    return function(next) {
        return function(action) {
            if (action.type === ADD_ARTICLE) {
                const foundWord = badWords.filter(word =>
                    action.payload.title.includes(word)
                );

                if (foundWord.length) {
                    return dispatch({ type: "FOUND_BAD_WORD" });
                }
            }
            return next(action);
        };
    };
}