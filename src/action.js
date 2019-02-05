import { CHANGE_SERARCH_FIELD } from './constants.js'

export setSearchField = (text) => ({
    type: 'CHANGE_SERARCH_FIELD',
    payload: text
})