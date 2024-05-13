import * as React from 'react';
import {
    Box, FormControl, InputLabel, OutlinedInput,
    Container, Button, TextField, 
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export default function ComposedTextField() {
    return (

        <Container maxWidth="sm">

            <Box
                component="form"
                sx={{
                    '& > :not(style)': { m: 2 },
                    
                }}
                noValidate
                autoComplete="off"
            >

                <h2>Agenda Tu Cita</h2>

                <FormControl color="error" fullWidth>
                    <InputLabel htmlFor="component-outlined">Nombre Equipo</InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        defaultValue="Nombre Equipo"
                        label="Nombre Equipo"
                    />
                </FormControl>

                <FormControl color="error" fullWidth>
                    <InputLabel htmlFor="component-outlined">Marca</InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        defaultValue="Marca"
                        label="Marca"
                    />
                </FormControl>

                <FormControl color="error" fullWidth>
                    <InputLabel htmlFor="component-outlined">Modelo</InputLabel>
                    <OutlinedInput
                        id="component-outlined"
                        defaultValue="Modelo"
                        label="Modelo"
                    />
                </FormControl>

                <LocalizationProvider dateAdapter={AdapterDayjs} >
                    
                    <DatePicker />
                </LocalizationProvider>

                <FormControl fullWidth>
                    <TextField
                        id="observa"
                        variant="filled"
                        defaultValue="Observaciones"
                        label="Observaciones"
                        color="error"
                        multiline
                        maxRows={4}
                    >
                    </TextField>
                </FormControl>

                <FormControl>
                    <Button
                        endIcon={<SendIcon />}
                        variant='contained'
                        color="error"
                        type="submit"
                    >
                        Enviar
                    </Button>
                </FormControl>

                <FormControl>
                    <Button
                        endIcon={<DeleteIcon />}
                        variant='contained'
                        color="error"
                        type="submit"
                    >
                        Cancelar
                    </Button>
                </FormControl>




            </Box>
        </Container>
    );
}
