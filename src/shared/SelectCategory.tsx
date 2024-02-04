import React, { useEffect, useMemo, useState } from 'react'
import { Dropdown, DropdownProps } from 'semantic-ui-react';
import { useFetch } from '../hooks/useFetch';
import { Pagination } from '../models/response';
import { Category } from '../feature/category/model/category';
import { by_name } from '../feature/category/service/category.api';
import { DropdownOpt } from '../models/semantic-ui';

const SelectCategory = ({ onChange } : props) => {

    const [ search, setSearch ] = useState('');

    const { data, run, status } = useFetch<Pagination<Category>>();

    const [ filtered, setFiltered ] = useState<DropdownOpt[]>([]);

    useEffect(()=>{

        if(!search) return;

        run(()=>by_name(search));

    }, [search]);


    useEffect(()=>{

        if(status != 'ok') return;

        let converted : DropdownOpt[] = data!.data.map(v =>{
            return { 
                key:v.id , value : v.id, text: v.name 
            }
        })

        setFiltered(converted);
        

    }, [data]);



    useEffect(()=>{},[search]);

    return (
        <Dropdown
            placeholder='Select Country'
            fluid
            search
            selection
            options={filtered}
            value={search}
            onSearchChange={handleSearchrChange}
            text='Select Category'
             onChange={onChange}
        />
    );

    function handleSearchrChange(event : React.SyntheticEvent<HTMLElement, Event>){

        const value = (event.target as HTMLInputElement).value;
        
        setSearch(value);

    };

}

type props = {
    onChange( event: React.SyntheticEvent<HTMLElement, Event>, data: DropdownProps):void | undefined
}

export default SelectCategory