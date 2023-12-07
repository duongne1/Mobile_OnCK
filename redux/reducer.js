const initialState = {
    id: "",
    username: "",
    password: "",
    english: [],
    vietnamese: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                id: action.user.id,
                username: action.user.username,
                password: action.user.password,
                english: action.user.english,
                vietnamese: action.user.vietnamese
            };
        case "ADD_VOCABULARY":
            return {
                ...state,
                english: [...state.english, { id: state.english.length + 1, content: action.english }],
                vietnamese: [...state.vietnamese, {id: state.vietnamese.length + 1, content: action.vietnamese}]
            };
            case "DELETE_VOCABULARY":
              let index = action.id;
              const updatedEnglish = state.english.filter(item => item.id !== action.id);
              const updatedVietnamese = state.vietnamese.filter(item => item.id !== action.id);
              return {
                ...state,
                english: updatedEnglish,
                vietnamese: updatedVietnamese,
              };
              case "UPDATE_VOCABULARY":
                return {
                  ...state,
                  english: state.english.map(item => {
                    if (item.id === action.id) {
                      return { ...item, content: action.updatedContent };
                    }return item;
                  } ),
                  vietnamese: state.vietnamese.map(item => {
                    if (item.id === action.id) {
                      return { ...item, content: action.updatedTranslation };
                    } return item;
                  } ) ,
                };                
        default:
            return state;
    }
}

export default reducer;