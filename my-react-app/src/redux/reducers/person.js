import { ADDPERSON } from "../constant"

const initState = [{id: '001', name: 'tome', age: 18}]
export default function personReducer(preState=initState, action) {
    const {type, data} = action
    switch (type) {
        case ADDPERSON:
            if (data != undefined)
                return [data, ...preState]
            else
                return preState
        default:
            return preState
    }
}