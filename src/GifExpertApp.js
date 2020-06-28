import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One punch']);

    return (
        <div>
            <h1>Gif Expert App</h1>
            <hr/>

            <AddCategory setCategories={ setCategories }/>

            <ol>
                {
                    categories.map( category => (
                     <GifGrid 
                        category={ category }
                        key={ category }
                     />
                    ))
                    
                }
            </ol>

        </div>
    )
}
