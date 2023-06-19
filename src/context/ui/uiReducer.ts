import { UiState } from '.'; 

type UiActionType = 
    |{ type: '[UI] - Set_Theme', payload: string }

export const uiReducer = (state: UiState, action: UiActionType): UiState => {
    switch (action.type) {
        case '[UI] - Set_Theme':
            return {
                ...state,
                theme: action.payload
            }
        default:
            return state;
    }
}