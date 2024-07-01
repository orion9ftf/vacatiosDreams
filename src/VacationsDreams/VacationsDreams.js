// VacationsDreams.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, TextField } from '@mui/material';

const VacationsDreams = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [editedData, setEditedData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:3001/')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
        setLoading(false);
      });
  };

  const handleEdit = (id) => {
    setEditingId(id);
    setEditedData(data.find(item => item.id === id));
  };

  const handleSave = () => {
    axios.put(`http://localhost:3001/vacations/${editingId}`, editedData)
      .then(response => {
        fetchData();
        setEditingId(null);
      })
      .catch(error => {
        console.error("There was an error saving the data!", error);
      });
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:3001/vacations/${id}`)
      .then(response => {
        fetchData();
      })
      .catch(error => {
        console.error("There was an error deleting the data!", error);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData(prevData => ({ ...prevData, [name]: value }));
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Nombre de emplead@</TableCell>
            <TableCell>email</TableCell>
            <TableCell>Lider</TableCell>
            <TableCell>Comienzo de vacaciones</TableCell>
            <TableCell>Fin de vacaciones</TableCell>
            <TableCell>Motivo</TableCell>
            <TableCell>Estado</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell>
                {editingId === item.id ? (
                  <TextField
                    name="name"
                    value={editedData.name}
                    onChange={handleChange}
                  />
                ) : (
                  item.name
                )}
              </TableCell>
              <TableCell>
                {editingId === item.id ? (
                  <TextField
                    name="description"
                    value={editedData.description}
                    onChange={handleChange}
                  />
                ) : (
                  item.description
                )}
              </TableCell>
              <TableCell>
                {editingId === item.id ? (
                  <Button onClick={handleSave}>Save</Button>
                ) : (
                  <>
                    <Button onClick={() => handleEdit(item.id)}>Edit</Button>
                    <Button onClick={() => handleDelete(item.id)}>Delete</Button>
                  </>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default VacationsDreams;
