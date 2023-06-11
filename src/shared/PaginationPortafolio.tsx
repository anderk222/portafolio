import { Container, Pagination } from 'semantic-ui-react'

const PaginationPortafolio = () => (
  <Container textAlign='center'>
 <Pagination
    boundaryRange={0}
    defaultActivePage={1}
    ellipsisItem={null}
    firstItem={null}
    lastItem={null}
    siblingRange={1}
    totalPages={10}
  />  </Container>
)

export default PaginationPortafolio