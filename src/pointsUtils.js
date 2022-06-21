import axios from 'axios'
import {storePoints} from './testDataPoints'

export const loadAll = () => (storePoints);

export const loadPoints = (productId) => (
    productId != 0 ? storePoints.filter(point => point.product_id == productId) : storePoints
);

export const addPoint = (userId, productId, username) => {
    let maxId = 0;
    for(let i = 0; i < storePoints.length; i++){
        if( maxId < storePoints[i].id ) maxId = storePoints[i].id;
    }
    storePoints.push({
        id: maxId,
        user_id: userId,
        product_id: productId,
        username: username,
        point: 0
    });
    return storePoints;
};
  
export const updatePoint = (pid, point) => {
    storePoints[pid].point = point;
};

export const deletePoint = (pid) => {
    return storePoints.filter(function(ele){ 
        return ele.id != pid; 
    });
};
