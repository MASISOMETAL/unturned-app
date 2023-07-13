import { UnturnedAPI } from "../../services/UnturnedAPI";
import { ITEM_SELECTED, ITEM_DESCRIPTION } from "../actions/SelectedItems";

const initialState = {
    itemSelected: [],
    melee: UnturnedAPI.item.weapons.melee,
    ranged: UnturnedAPI.item.weapons.ranged,
    magazines: UnturnedAPI.item.weapons.magazines,
    attachments: UnturnedAPI.item.weapons.attachments,
    explosive: UnturnedAPI.item.weapons.explosive,
    //
    food: UnturnedAPI.item.items.food,
    drink: UnturnedAPI.item.items.drink,
    medicine: UnturnedAPI.item.items.medicine,
    equipament: UnturnedAPI.item.items.equipament,
    materials: UnturnedAPI.item.items.materials,
    itemDescription: {},
}

const WeaponReducer = (state = initialState, action) => {
    switch (action.type) {
        case ITEM_SELECTED:
            return {
                ...state,
                itemSelected: action.item
            };
        case ITEM_DESCRIPTION:
            //console.log(action.item)
            return {
                ...state,
                itemDescription : action.item
            };
        default:
            return state;
    }
}

export default WeaponReducer;