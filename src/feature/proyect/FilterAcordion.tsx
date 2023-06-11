import { Accordion, AccordionTitleProps, Container, Form, Menu } from 'semantic-ui-react';
import { useState } from 'react';
import FormSerach from './FormSearch';

const FilterAcordion =()=>{

const [open,setOpen] = useState(false);

  return(
      <Accordion fluid styled>
        <Menu.Item >
          <Accordion.Title
            active={open}
            content='Search'
            index={0}
            onClick={handleClick}
          />
          <Accordion.Content active={open} content={<FormSerach />} />
        </Menu.Item>
      </Accordion>
   )


  function handleClick(event : any, data : AccordionTitleProps){
       setOpen(!open);
    
  }
}

export default FilterAcordion;