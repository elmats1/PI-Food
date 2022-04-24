const initialState = {
    recipes: [],
    allRecipes: [],
    types: [],
    detail: []
}

function rootReducer(state = initialState, action){
    switch(action.type) {
        case 'GET_RECIPES':
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload
            }
            case 'GET_RECIPES_NAME':
                return {
                    ...state,
                    recipes: action.payload
                }
                case 'POST_RECIPE':
                    return {
                        ...state
                    }
                    case 'FILTER_CREATED_RECIPE':
                        const createdFilter = action.payload === 'created' ? state.allRecipes.filter(el => el.creadoEnBase) : state.allRecipes.filter(el => !el.creadoEnBase)
                        return {
                            ...state,
                            dogs: action.payload === 'ALL' ? state.allRecipes : createdFilter                            
                        }
                        case 'ORDER_BY_NAME':
                            const sortedArr = action.payload === 'asc' ? state.dogs.sort(function(a, b) {
                                if(a.name > b.name) {
                                    return 1;
                                }
                                if(b.name > a.name) {
                                    return -1;
                                }
                                return 0;
                            }) : state.dogs.sort(function(a, b) {
                                if(a.name > b.name) {
                                    return -1;
                                }
                                if(b.name > a.name) {
                                    return 1;
                                }
                                return 0;
                            })
                            return {
                                ...state,
                                recipes: sortedArr
                            }
                            case 'GET_RECIPE_DETAIL':
                                return {
                                    ...state,
                                    detail: action.payload
                                }
                                default:
                                    return state;
    }
}

export default rootReducer;