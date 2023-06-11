import React, { useEffect, useMemo, useState } from 'react'
import { Dropdown } from 'semantic-ui-react';

const SelectCategory = () => {

    const [ search, setSearch ] = useState('');

    const filtered = useMemo(() => [
        { key: 'Arabic', text: 'Arabic', value: 'Arabic' }
    ], [search]);

    useEffect(()=>{},[search]);

    return (
        <Dropdown
            placeholder='Select Country'
            fluid
            search
            selection
            options={filtered}
            onSearchChange={handlerChange}
            text='Select Language'
            onChange={()=>{}}
        />
    );

    function handlerChange(event : React.SyntheticEvent<HTMLElement, Event>){

        const value = (event.target as HTMLInputElement).value; 

    };

}

type props = {
    onSearchChange(event : React.SyntheticEvent<HTMLElement, Event>):void
}

export default SelectCategory