import React, { useState } from 'react';
import { Container, Row, Col, Navbar, Card, Button, Form } from 'react-bootstrap';

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, title: 'Fazer compras' },
    { id: 2, title: 'Estudar React' },
    { id: 3, title: 'Praticar esportes' },
  ]);

  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTaskObj = { id: tasks.length + 1, title: newTask };
      setTasks([...tasks, newTaskObj]);
      setNewTask('');
    }
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <Container className="mt-3">
        <Row>
          <Col>
            <h2>Lista de Tarefas</h2>
            <Form>
              <Form.Group controlId="formTask">
                <Form.Control
                  type="text"
                  placeholder="Adicione uma nova tarefa"
                  value={newTask}
                  onChange={(e) => setNewTask(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" onClick={addTask}>Adicionar Tarefa</Button>
            </Form>
            <hr />
            {tasks.map(task => (
              <Card key={task.id} className="mb-3">
                <Card.Body>
                  <Card.Title>{task.title}</Card.Title>
                  <Button variant="danger" size="sm" onClick={() => deleteTask(task.id)}>Excluir</Button>
                </Card.Body>
              </Card>
            ))}
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
