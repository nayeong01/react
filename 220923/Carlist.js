import React,{useState, useEffect} from 'react';
import {SERVER_URL} from '../constants.js';
import {DataGrid} from '@mui/x-data-grid';
import { Snackbar } from '@mui/material';
import AddCar from './AddCar.js';
import EditCar from './EditCar.js';

function Carlist() {

    const [cars, setCars]=useState([]);
    const [open, setOpen]=useState(false);

    <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={()=>setOpen(false)}
        message="Car deleted"/>

    const columns =[
        {field:'brand', headerName:'Brand',width:200},
        {field:'model', headerName:'Model',width:200},
        {field:'color', headerName:'Color',width:200},
        {field:'year', headerName:'Year',width:150},
        {field:'price',headerName:'Price',width:150},
        {
            field: '_links.car.href',
            headerName: '',
            sortable: false,
            filterable: false,
            renderCell: row =>
            <EditCar
                data={row}                                                                                                                                                                                                                                                               
                updateCar={updateCar} />
        },
            
        {
            field:'_links.self.href',
            headerName:"",
            sortable:false,
            fliterable:false,
            renderCell:row=>
            <button
                onClick={()=> onDelClick(row.id)}>Delete
                </button>
        }
    ];
    
    useEffect(()=>{
        fetchCars();
    },[]);

    const fetchCars=()=>{
        fetch(SERVER_URL +'api/cars')
        .then(response=>response.json())
        .then(data=>setCars(data._embedded.cars))
        .catch(err=>console.error(err));
    }

    const onDelClick = (url)=>{
        if (window.confirm("Are you sure to delete?")){
        fetch(url, {method:'DELETE'})
        .then(response=> {
            if(response.ok){
            fetchCars();
            setOpen(true);
            } else {
                alert("Something went wrong!");
            }
        })
        .catch(err=>console.error(err))
    }
}

    const addCar =(car)=>{
        fetch(SERVER_URL+'api/cars',
        {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body: JSON.stringify(car)
        })
        .then(response=>{
            if (response.ok) {
                fetchCars();
            } else {
                alert("Something went wrong!");
            }
        })
        .catch(err=> console.error(err))
    }

    const updateCar = (car, link)=>{
        fetch(link,
            {
                method:'PUT',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(car)
            })
            .then(response=>{
                if(response.ok) {
                    fetchCars();
                } else {
                    alert("Sometiond went wrong!");
                }
            })
            .catch(err=>console.error(err))
    }

    return (
        <React.Fragment>
            <AddCar addCar={addCar}/>

        <div style={{height:500, width:'100%'}}>
            <DataGrid
                rows={cars}
                columns={columns}
                disableSelectionOnClick={true}
                getRowId={row=>row._links.self.href}/>
                <Snackbar
                open={open}
                autoHideDuration={2000}
                onClose={()=> setOpen(false)}
                message="Car deleted"/>
        </div>
        </React.Fragment>
    );
}

export default Carlist;