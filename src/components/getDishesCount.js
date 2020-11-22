import { DISHES_DATA } from '../data/data';


export const getDishesCount = (dishesId) => {
    let count = 0;

    DISHES_DATA.map(data => {
        if (data.dishesId == dishesId) {
            count++;
        }
    });

    return count;
}