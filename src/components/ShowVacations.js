import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { show_alert } from '../functions';

const ShowVacations = () => {
  const url = 'http://localhost:3001/';
  const [vacations, setVacations] = useState([]);
  const [employee_name, setEmployeeName] = useState('');
  const [email, setEmail] = useState('');
  const [leader, setLeader] = useState('');
  const [start_date, setStartDate] = useState('');
  const [end_date, setEndDate] = useState('');
  const [type_vacation, setTypeVacation] = useState('');
  const [reason, setReason] = useState('');
  const [state, setState] = useState('');
  const [operation, setOperation] = useState('');
  const [title, setTitle] = useState('');

  useEffect(() => {
    getVacations();
  }, []);

  const getVacations = async () => {
    const respuesta = await axios.get(url);
    setVacations(respuesta.data);
  };

  const openModal = (op, id, employee_name, email, leader, start_date, end_date, type_vacation, reason, state) => {
    setEmployeeName('');
    setEmail('');
    setLeader('');
    setStartDate('');
    setEndDate('');
    setTypeVacation('');
    setReason('');
    setState('');
    setOperation(op);
    if (op === 1) {
      setTitle("Registrar Emplead@");
    } else if (op === 2) {
      setTitle("Editar Emplead@");
      setEmployeeName(employee_name);
      setEmail(email);
      setLeader(leader);
      setStartDate(start_date);
      setEndDate(end_date);
      setTypeVacation(type_vacation);
      setReason(reason);
      setState(state);
    }
    setTimeout(() => {
      document.getElementById('nombre').focus();
    }, 500);
  };

  const validates_c = () => {
    var params;
    var method;
    if (!employee_name || employee_name.trim() === '') {
      show_alert("Escribe el nombre del empleado", "warning");
    } else if (!email || email.trim() === '') {
      show_alert("Debes escribir su email", "warning");
    } else if (!leader || leader.trim() === '') {
      show_alert("Te falta el nombre del líder", "warning");
    } else if (!start_date || start_date.trim() === '') {
      show_alert("Debes poner la fecha de inicio de vacaciones", "warning");
    } else if (!end_date || end_date.trim() === '') {
      show_alert("Debes poner la fecha de término de vacaciones", "warning");
    } else if (!type_vacation || type_vacation.trim() === '') {
      show_alert("Debes poner el tipo de vacaciones", "warning");
    } else if (!reason || reason.trim() === '') {
      show_alert("No puedes dejar el motivo vacío", "warning");
    } else if (!state || state.trim() === '') {
      show_alert("Debes seleccionar el estado de las vacaciones", "warning");
    } else{
      if (operation === 1) {
        const params = {
          employee_name: employee_name.trim(),
          email: email.trim(),
          leader: leader.trim(),
          start_date: start_date.trim(),
          end_date: end_date.trim(),
          type_vacation: type_vacation.trim(),
          reason: reason.trim(),
          state: state.trim()
        };
        sendData('POST', params);
      } else {
        const params = {
          employee_name: employee_name.trim(),
          email: email.trim(),
          leader: leader.trim(),
          start_date: start_date.trim(),
          end_date: end_date.trim(),
          type_vacation: type_vacation.trim(),
          reason: reason.trim(),
          state: state.trim()
        };
        sendData('PUT', params);
      }
    }
  };

  const sendData = async(method,params) => {
    await axios({ method:method, url:url, data:params }).then(function(respuesta) {
      var tipo = respuesta.data[0];
      var msj = respuesta.data[1];
      show_alert(msj,tipo);
      if(tipo === 'success') {
        document.getElementById('btnCerrar').click();
        getVacations();
      }
    })
    .catch(function(error) {
      show_alert("Error en la solicitud", "error");
      console.log(error);
    });
  }

  return (
    <div className="App">
      <div className='container-fluid'>
        <div className='row mt-3'>
          <div className='col-md-4 offset-md-4'>
            <div className='d-grid mx-auto'>
              <button onClick={() => openModal(1)} className='btn btn-dark' data-bs-toggle='modal' data-bs-target="#modalVacations">
                <i className='fa-solid fa-circle-plus'></i> Añadir
              </button>
            </div>
          </div>
        </div>

        <div className='row mt-3 center'>
          <div className='col-12 col-lg-10 offset-0 offset-lg-2'>
            <div className='table-responsive'>
              <table className='table table-bordered'>
                <thead>
                  <tr>
                    <th>Id</th>
                    <th>Email</th>
                    <th>Leader</th>
                    <th>Start Date</th>
                    <th>End Date</th>
                    <th>Type of Vacation</th>
                    <th>Reason</th>
                    <th>State</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody className='table-group-divider'>
                  {vacations.map((vacation) => (
                    <tr key={vacation.id}>
                      <td>{vacation.employee_name}</td>
                      <td>{vacation.email}</td>
                      <td>{vacation.leader}</td>
                      <td>{vacation.start_date}</td>
                      <td>{vacation.end_date}</td>
                      <td>{vacation.type_vacation}</td>
                      <td>{vacation.reason}</td>
                      <td>{vacation.state}</td>
                      <td>
                        <button
                          onClick={() =>
                            openModal(
                              2,
                              vacation.id,
                              vacation.employee_name,
                              vacation.email,
                              vacation.leader,
                              vacation.start_date,
                              vacation.end_date,
                              vacation.type_vacation,
                              vacation.reason,
                              vacation.state
                            )
                          }
                          className='btn btn-warning'
                          data-bs-toggle="modal"
                          data-bs-target="#modalVacations"
                        >
                          <i className='fa-solid fa-edit'></i>
                          Editar
                        </button>
                        &nbsp;
                        <button className='btn btn-danger'>
                          <i className='fa-solid fa-trash'></i>
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      <div id="modalVacations" className='modal fade' aria-hidden="true">
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <label className='h5'>{title}</label>
              <button type='button' className='btn-close' data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className='modal-body'>
              <input type="hidden" id="id"></input>
              <div className='input-group mb-3'>
                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                <input
                  type="text"
                  id="nombre"
                  className='form-control'
                  placeholder="Nombre"
                  value={employee_name}
                  onChange={(e) => setEmployeeName(e.target.value)}
                ></input>
              </div>

              <div className='input-group mb-3'>
                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                <input
                  type="text"
                  id="email"
                  className='form-control'
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
              </div>

              <div className='input-group mb-3'>
                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                <input
                  type="text"
                  id="leader"
                  className='form-control'
                  placeholder="Lider"
                  value={leader}
                  onChange={(e) => setLeader(e.target.value)}
                ></input>
              </div>

              <div className='input-group mb-3'>
                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                <input
                  type="text"
                  id="startDate"
                  className='form-control'
                  placeholder="Desde"
                  value={start_date}
                  onChange={(e) => setStartDate(e.target.value)}
                ></input>
              </div>

              <div className='input-group mb-3'>
                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                <input
                  type="text"
                  id="endDate"
                  className='form-control'
                  placeholder="Hasta"
                  value={end_date}
                  onChange={(e) => setEndDate(e.target.value)}
                ></input>
              </div>

              <div className='input-group mb-3'>
                <span className='input-group-text'><i className='fa-solid fa-comment'></i></span>
                <input
                  type="text"
                  id="type"
                  className='form-control'
                  placeholder="Tipo de Vacaciones"
                  value={type_vacation}
                  onChange={(e) => setTypeVacation(e.target.value)}
                ></input>
              </div>

              <div className='input-group mb-3'>
                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                <input
                  type="text"
                  id="reason"
                  className='form-control'
                  placeholder="Motivo"
                  value={reason}
                  onChange={(e) => setReason(e.target.value)}
                ></input>
              </div>

              <div className='input-group mb-3'>
                <span className='input-group-text'><i className='fa-solid fa-gift'></i></span>
                <input
                  type="text"
                  id="state"
                  className='form-control'
                  placeholder="Estado"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                ></input>
              </div>

              <div className='d-grid col-6 mx-auto'>
                <button onClick={() => validates_c()} className='btn btn-success'>
                  <i className='fa-solid fa-floppy-disk'></i> Guardar
                </button>
              </div>

              <div className='modal-footer'>
                <button type="button" id="btnCerrar" className='btn btn-secondary' data-bs-dismiss="modal">Cerrar</button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
  )
}

export default ShowVacations;