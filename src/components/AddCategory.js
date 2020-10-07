import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setCategories}) => {
    const [inputValue, setInputValue] = useState('');
    const changeInputValue = (e) => {
        setInputValue(e.target.value)
    }
    const handlerSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2) {
            setCategories(cats => [inputValue, ...cats])
            setInputValue('')
        }
    }

    return (
        <form onSubmit={handlerSubmit} >
            <input
                type="text"
                value={inputValue}
                onChange={changeInputValue}
            />

        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
