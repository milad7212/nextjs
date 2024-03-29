import { ApiRegister } from '../../../services/apiRegister/ApiRegister';
import * as Types from '../../types/product'; // constants
// action of accounting list
export const getProduct = (
    activeHojreh,
    product_status,
    price_from,
    price_to,
    inventory_from,
    inventory_to,
    order_by) => async dispatch => {
        // try
        try {
            if (activeHojreh.length > 0) {
                const getProduct = async () => {
                    let params = { product_status, price_from, price_to, inventory_from, inventory_to, order_by }
                    let loadData = null;
                    let dataUrl = `/app/api/v1/get-shop-products/${activeHojreh}/`;
                    let response = await ApiRegister().apiRequest(loadData, 'get', dataUrl, true, params);
                    return response;
                }

                let response = await getProduct();
                // dispatch
                dispatch({
                    type: Types.GET_PRODUCT,
                    payload: response
                });
            }

        } catch (error) {

        }
    }