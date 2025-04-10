import { Posts } from '@/App'
import { Button, Image, Table } from '@chakra-ui/react'
interface Props {
  items:Posts[]
}

const Admin = ({items}:Props) => {
  return (
    <div>
      <Table.Root size="sm">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeader textAlign={'center'}>Image</Table.ColumnHeader>
            <Table.ColumnHeader textAlign={'center'}>Title</Table.ColumnHeader>
            <Table.ColumnHeader textAlign={'center'}>Author</Table.ColumnHeader>
            <Table.ColumnHeader textAlign={'center'}>Date</Table.ColumnHeader>
            <Table.ColumnHeader textAlign={'center'}>Likes</Table.ColumnHeader>
            <Table.ColumnHeader textAlign={'center'}></Table.ColumnHeader>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {items.map((item) => (
            <Table.Row key={item.id}>
              <Table.Cell textAlign={'center'}><Image width={'100%'} objectFit={'cover'} h={'120px'} src={item.img} /></Table.Cell>
              <Table.Cell textAlign={'center'}>{item.title}</Table.Cell>
              <Table.Cell textAlign={'center'}>{item.author}</Table.Cell>
              <Table.Cell textAlign={'center'}>{item.date}</Table.Cell>
              <Table.Cell textAlign={'center'}>{item.likes}</Table.Cell>
              <Table.Cell textAlign={'center'}>
                <Button>Edit</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  )
}

export default Admin
