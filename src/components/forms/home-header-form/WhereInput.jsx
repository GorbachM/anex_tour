import React, {useState} from 'react';
import {FloatingLabel, Col, Form, Dropdown, Button} from 'react-bootstrap';
import {itemsWhereAll, itemsWherePopular} from '../../../data/itemsData.jsx';
import {handleItemClickPop, handleItemClick} from "../../../utils/handlers";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faArrowDown} from '@fortawesome/free-solid-svg-icons';

const WhereInput = () => {

    const [selectedItems, setSelectedItems] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const [checkedItems, setCheckedItems] = useState(new Array(itemsWhereAll.length).fill(false));
    const [checkedItemsPopular, setCheckedItemsPopular] = useState(new Array(itemsWherePopular.length).fill(false));
    const [showMenu, setShowMenu] = useState(false)
    const handleInputChange = (inputValue) => {
        const filtered = itemsWhereAll.filter((item) =>
            item.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredItems(filtered);
    };
    const handleClearClick = () => {
        setSelectedItems('');
        setFilteredItems([]);
        setCheckedItems(new Array(itemsWhereAll.length).fill(false));
        setCheckedItemsPopular(new Array(itemsWherePopular.length).fill(false));
    };

    const handleDropdownToggle = () => {
        setShowMenu(!showMenu);
    };

    return (
        <Col className="p-0 border-0">
            <Dropdown show={showMenu} onToggle={handleDropdownToggle}>
                <Dropdown.Toggle className="p-0 border-0" variant="none">
                    <FloatingLabel
                        className="fw-normal text-submit"
                        controlId="floatingInput"
                        label="КУДА"
                    >
                        <Form.Control
                            className="rounded-0 fs-5 shadow-none"
                            value={selectedItems}
                            placeholder=""
                            onChange={(e) => { setSelectedItems(e.target.value);
                                handleInputChange(e.target.value);
                            }}
                        />
                    </FloatingLabel>
                </Dropdown.Toggle>

                <Dropdown.Menu className="p-0 where-input-show fs-6 fw-bold lh-lg">
                    <div className="menu-tour-all row m-0" >
                        <div className="popularTour col-6">
                            <h5>Популярные</h5>
                            {itemsWherePopular.map((item, index) => (
                                <Dropdown.Item
                                    key={index}
                                    className="p-0 d-flex align-items-center"
                                    onClick={(e) => handleItemClickPop(e, index, checkedItemsPopular, setCheckedItemsPopular, itemsWherePopular, checkedItems, setCheckedItems, setSelectedItems, setFilteredItems, filteredItems)}
                                >
                                    <Form.Check
                                        type="checkbox"
                                        className="rounded-circle m-0 align-items-center"
                                        aria-label="option"
                                        checked={checkedItemsPopular[index]}
                                        onChange={() => handleItemClickPop(item, index)}
                                    />
                                    {item}
                                </Dropdown.Item>
                            ))}
                        </div>
                        <div className="allTour col-6 p-0">
                            <h5>Все страны</h5>
                            {filteredItems.length > 0
                                ? filteredItems.map((item, index) => (
                                    <Dropdown.Item
                                        className="p-0 d-flex align-items-center"
                                        key={index}
                                        onClick={(e) => handleItemClick(e, item, checkedItems, setCheckedItems, itemsWhereAll, checkedItemsPopular, setSelectedItems, setFilteredItems, filteredItems)}
                                    >

                                        <Form.Check
                                            type="checkbox"
                                            className="rounded-circle m-0 align-items-center"
                                            aria-label="option"
                                            checked={checkedItems[index]}
                                            onChange={() => handleItemClick(item, index)}
                                        />
                                        {item}

                                    </Dropdown.Item>
                                ))
                                : itemsWhereAll.map((item, index) => (
                                    <Dropdown.Item
                                        className="p-0 d-flex align-items-center"
                                        key={index}
                                        onClick={(e) => handleItemClick(e, item, checkedItems, setCheckedItems, itemsWhereAll, checkedItemsPopular, setSelectedItems, setFilteredItems)}
                                    >
                                        <Form.Check
                                            type="checkbox"
                                            className="rounded-circle m-0 align-items-center"
                                            aria-label="option"
                                            checked={checkedItems[index]}
                                            onChange={() => handleItemClick(item, index)}
                                        />
                                        {item}
                                    </Dropdown.Item>
                                ))}
                        </div>
                        <div className="tourCheck row ps-0 pe-0 m-0 align-items-center">
                            <a className="clearCheck col-6 m-0" onClick={handleClearClick}>Очистить</a>
                            <Button className="buttonCheck col-4 border-pill"
                                    onClick={handleDropdownToggle}
                                    variant="primary">ВЫБРАТЬ <FontAwesomeIcon className="arrow" icon={faArrowDown}/></Button>{' '}
                        </div>
                    </div>
                </Dropdown.Menu>
            </Dropdown>
        </Col>
    );
};

export default WhereInput;