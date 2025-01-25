import { ADDPERSON } from "../constant"

const initState = [{id: '001', name: 'tome', age: 18}]
export default function personReducer(preState=initState, action) {
    const {type, personData} = action
    switch (type) {
        case ADDPERSON:
            return [personData, ...preState]
        default:
            return preState
    }
}