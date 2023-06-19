import { User } from '@/interfaces'
import { UserState } from '.'


type UserActionType =
    | { type: '[User] SET_USER', payload: User }


export const userReducer = (state: UserState, action: UserActionType): UserState => {
    switch (action.type) {
        case '[User] SET_USER':
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}