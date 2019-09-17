import * as types from './../contants/actionType';
var initalState = [];

var myReduers = (state = initalState, action) => {
    switch (action.type) {
        case types.LIST_ALL_MENU:

            return state;

        default: state;
    }
    return state;
}

export default myReduers