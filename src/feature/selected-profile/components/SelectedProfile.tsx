import { Item, ItemContent, ItemDescription, ItemGroup, ItemHeader, ItemImage, ItemMeta } from "semantic-ui-react";

import { useEffect } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { SelectedProfile as SelectedProfileType } from "../model/SelectedUser";
import { getActiveProfile } from "../service/select-profile.api";
import { env } from "../../../environments/var-environments";


function SelectedProfile({profile} :props){

    const { data, status, error, run, setData } = useFetch<SelectedProfileType>();

    useEffect(()=>{

        if(profile) setData(profile);

    },[profile]);

    useEffect(()=>{

        run(getActiveProfile);

    },[]);


    return(

        <ItemGroup>
        { status==='ok' && <Item>
            <ItemImage size='tiny' src={data?.img || env.fallback_prof_img} />
            <ItemContent>
                <ItemHeader>{data?.name}</ItemHeader>
                <ItemMeta>
                    <span className='price'>{data?.mail}</span>
                </ItemMeta>
                <ItemDescription>Active since {data?.createAt.substring(0,10)+' at '+ data?.createAt.substring(11,16)}</ItemDescription>
            </ItemContent>
        </Item>
        }
    </ItemGroup>
    )
}

type props = {

    profile? : SelectedProfileType

}

export default SelectedProfile;