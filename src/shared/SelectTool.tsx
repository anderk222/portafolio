import React, { useEffect, useState } from 'react'
import { Dropdown, DropdownProps } from 'semantic-ui-react';
import { useFetch } from '../hooks/useFetch';
import { Pagination } from '../models/response';
import { searchTools } from '../feature/tool/services/tool.api';
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

        let converted : {key: number, value: Tool, text: string}[] = data!.data.map(v =>{

            let obj = { 
                key:v.id , value : v, text: v.name 
            }

            return obj;
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
            onSearchChange={handleSearchrChange}
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

type DropdownOpt = {

    key: number;
    value: any;
    text: string;

} 

export default SelectTool