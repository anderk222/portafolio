
export function add_query(state: URLSearchParams, new_params: NewQueryParams) {

    let new_state = state;

    for (let key of Object.keys(new_params)) {

            new_state.set(key, new_params[key as name_queries]!);
  
    }  

    return new_state;

}


export function remove_query(state: URLSearchParams, queries: name_queries | name_queries[]) {

    let new_state = state

    if (typeof queries == 'string') new_state.delete(queries);
    else queries.forEach(key => new_state.delete(key));

    return new_state;

}

export type NewQueryParams = { [key in name_queries]?: string }

type name_queries = 'page' | 'count' | 'current' | 'name' | 'category';