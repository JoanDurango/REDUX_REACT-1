import { createSlice} from '@reduxjs/toolkit';

//Definir el Slice para el componente Counter
const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        //Definir cual es el reducer para incrementar el contador
        increment: state => state + 1,
        //Definir cual es el reducer para decrementar el contador
        decrement: state => state - 1
    }
});

//Definir eñ Slice para el componente User
const userSlice = createSlice({
    name: 'user',
    initialState: {name: ''},
    reducers: {
        setName: (state, action) => {
            return { ...state, name: action.payload };
        }
    }
});

//Exportar las acciones de los slices
export const {increment, decrement} = counterSlice.actions;
export const { setName } = userSlice.actions;

//Exportar los reducers
export const counterReducer = counterSlice.reducer;
export const userReducer = userSlice.reducer;