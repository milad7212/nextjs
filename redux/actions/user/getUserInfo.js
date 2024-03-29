import { ApiRegister } from '../../../services/apiRegister/ApiRegister';
import * as Types from '../../types/user'; // constants
// action of accounting list
export const getUserInfo = () => async dispatch => {
    // try
    try {

        const getProduct = async () => {
            let params = {}
            let loadData = null;
            let dataUrl = '/app/api/v1/get-user-info/';
            let response = await ApiRegister().apiRequest(loadData, 'get', dataUrl, true, params);
            return response;
        }

        let response = await getProduct();
        // dispatch
        dispatch({
            type: Types.USER_INFO,
            payload: response
        });

    } catch (error) {

    }
}