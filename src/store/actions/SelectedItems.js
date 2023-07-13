export const ITEM_SELECTED = "ITEM_SELECTED"
export const ITEM_DESCRIPTION = "ITEM_DESCRIPTION"

export const ItemSelected = (item) => ({
    type: ITEM_SELECTED,
    item,
})

export const itemDescription = (item) => ({
    type: ITEM_DESCRIPTION,
    item,
})