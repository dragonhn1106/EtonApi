import * as types from './../contants/actionType';
var initalState = [{
        menu_cha: 'INTRODUCTION',
        menu_con: [{
            name: '',
            status: ''
        }]

    },
    {
        menu_cha: 'AUTHENTICATION',
        menu_con: [{
            name: 'Authorization',
            status: true
        }],


    }

];

var myReduers = (state = initalState, action) => {
    switch (action.type) {
        case types.LIST_ALL_MENU:

            return state;

        default:
            return state;
    }
}

export default myReduers