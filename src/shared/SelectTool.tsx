import React, { useEffect, useState } from 'react'
import { Dropdown, DropdownProps } from 'semantic-ui-react';
import { useFetch } from '../hooks/useFetch';
import { Pagination } from '../models/response';
import { searchTools } from '../feature/tool/services/tool.api';
import { DropdownOpt } from '../models/semantic-ui';
import { Tool } from '../feature/tool/tool';

const SelectTool = ({ onChange } : props) => {

    const [ search, setSearch ] = useState('');

    const { data, run, status } = useFetch<Pagination<Tool>>();

    const [ filtered, setFiltered ] = useState<DropdownOpt[]>([]);

    useEffect(()=>{

        if(!search) return;

        run(()=>searchTools(search));

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
            placeholder='Select tool'
            fluid
            search
            selection
            options={filtered}
            value={search}
            onSearchChange={handleSearchrChange}
            text='Select tool'
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

export default SelectTool