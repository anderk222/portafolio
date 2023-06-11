import { Container, Item, Segment } from 'semantic-ui-react'
import ItemKnowledge from './ItemKnowledge'

const ItemsKnowledge = () => {
    return (
        <Container>
        <Segment>
           
                <Item.Group divided className='w-full'  >
                    <ItemKnowledge />
                    <ItemKnowledge />
                    <ItemKnowledge />
                    <ItemKnowledge />
                    <ItemKnowledge />
                    <ItemKnowledge />
                    <ItemKnowledge />
                    <ItemKnowledge />
                </Item.Group>

           
        </Segment>
        </Container>
    )
}

export default ItemsKnowledge