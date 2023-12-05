//WHEREINPUT
import {itemsWhereAll} from "../data/itemsData";

export const handleItemClickPop = (e, index, checkedItemsPopular, setCheckedItemsPopular, itemsWherePopular, checkedItems, setCheckedItems, setSelectedItems, setFilteredItems) => {
    const newCheckedItemsPopular = [...checkedItemsPopular];
    newCheckedItemsPopular[index] = !newCheckedItemsPopular[index];
    setCheckedItemsPopular(newCheckedItemsPopular);
    const selectedItemsPopular = itemsWherePopular.filter((item, idx) => newCheckedItemsPopular[idx]);
    const selectedItemsAll = itemsWhereAll.filter((item, idx) => checkedItems[idx]);
    const allSelectedItems = [...selectedItemsPopular, ...selectedItemsAll];
    const uniqueSelectedItems = allSelectedItems.filter((value, idx, self) => self.indexOf(value) === idx);
    setSelectedItems(uniqueSelectedItems.join(', '));
    setFilteredItems([]);
    e.stopPropagation();
};

export const handleItemClick = (e, item, checkedItems, setCheckedItems, itemsWhereAll, checkedItemsPopular, setSelectedItems, setFilteredItems) => {
    const newCheckedItems = [...checkedItems];
    const index = itemsWhereAll.indexOf(item);
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
    const selectedItemsAll = itemsWhereAll.filter((item, idx) => newCheckedItems[idx]);
    const selectedItemsPopular = itemsWhereAll.filter((item, idx) => checkedItemsPopular[idx]);
    const allSelectedItems = [...selectedItemsAll, ...selectedItemsPopular];
    const uniqueSelectedItems = allSelectedItems.filter((value, idx, self) => self.indexOf(value) === idx);
    setSelectedItems(uniqueSelectedItems.join(', '));
    setFilteredItems([]);
    e.stopPropagation();
};

//