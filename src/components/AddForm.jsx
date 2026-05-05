import { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { ThemeContext } from '../context/theme.context';


function AddForm() {

  const { bootstrapTheme } = useContext(ThemeContext)

  return (
    <Form className='p-4'>
      
      <Form.Group className='m-2' data-bs-theme={bootstrapTheme}>
        <Form.Label htmlFor="title">Title</Form.Label>
        <Form.Control type="text" name="title"/>
      </Form.Group>

      <Form.Group className='m-2' data-bs-theme={bootstrapTheme}>
        <Form.Label htmlFor="description">Description</Form.Label>
        <Form.Control type="text" name="description"/>
      </Form.Group>

      <Form.Group className='m-2' data-bs-theme={bootstrapTheme}>
        <Form.Label htmlFor="content">Content</Form.Label>
        <Form.Control type="text" name="content"/>
      </Form.Group>

      <Button className='mt-2' variant='success'>Add new Book</Button>

    </Form>
  )
}

export default AddForm