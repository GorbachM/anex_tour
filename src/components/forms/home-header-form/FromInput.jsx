import {Col, Dropdown, FloatingLabel, Form} from "react-bootstrap";
import React, {useState} from "react";

const FromInput = () => {
    const [selectedItem, setSelectedItem] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    const items = ['Москва', 'Минск']; // Пример списка элементов

    const handleInputChange = (inputValue) => {
        const filtered = items.filter((item) =>
            item.toLowerCase().includes(inputValue.toLowerCase())
        );
        setFilteredItems(filtered);
    };

    const handleItemClick = (itemValue) => {
        setSelectedItem(itemValue);
        setFilteredItems([]); // Очистить список фильтрованных элементов
    };

    return (
        <Col className="p-0 border-0">
            <Dropdown>
                <Dropdown.Toggle className="p-0 border-0" variant="none">
                    <FloatingLabel
                        className="fw-normal text-submit"
                        controlId="floatingInput"
                        label="ОТКУДА"
                    >
                        <Form.Control
                            className="select-form-start fs-5 shadow-none"
                            value={selectedItem}
                            placeholder=""
                            onChange={(e) => { setSelectedItem(e.target.value);
                            handleInputChange(e.target.value);
                            }}
                        />
                    </FloatingLabel>
                </Dropdown.Toggle>

                <Dropdown.Menu className="from-input-show p-4 fs-6 fw-bold lh-lg">
                    {filteredItems.length > 0
                        ? filteredItems.map((item, index) => (
                            <Dropdown.Item key={index} onClick={() => handleItemClick(item)}>
                                {item}
                            </Dropdown.Item>
                        ))
                        : items.map((item, index) => (
                            <Dropdown.Item key={index} onClick={() => handleItemClick(item)}>
                                {item}
                            </Dropdown.Item>
                        ))}
                </Dropdown.Menu>
            </Dropdown>
        </Col>
    )
}

export default FromInput;
