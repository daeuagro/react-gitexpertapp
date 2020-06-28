import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue(e.target.value);
    }

    const handleSumbit = ( e ) => {
        
        e.preventDefault();

        if( inputValue.trim().length > 2 ){
            setCategories( cats =>  [inputValue, ...cats]);
            setInputValue('');
        }


    }

    return (
        <form onSubmit={ handleSumbit }>
            
            <h2>Add category</h2>
            <input 
                type="text"
                value={ inputValue }
                onChange= { handleInputChange }
            />
        </form>
    )
}

AddCategory.protoTypes = {
    PropTypes: PropTypes.func.isRequired
}
