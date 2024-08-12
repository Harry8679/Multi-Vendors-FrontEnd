import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";

export const admin_login = createAsyncThunk(
    'admin/admin_login', async(info) => {
        console.log(info);
        try {
            const { data } = await api.post('/admin-login', info, { withCredentials: true });
        } catch (e) {}
    }
);

export const authReducer = createSlice({
    name: 'auth',
    initialState: {
        successMessage: '',
        errorMessage: '',
        loader: '',
        userInfo: ''
    },
    reducers: {
        // Vos reducers ici (si nécessaire)
    },
    extraReducers: (builder) => {
        builder
            // Exemple d'un case pour un action type spécifique
            .addCase('someActionType', (state, action) => {
                // Logique pour gérer cette action
            })
            // Vous pouvez enchaîner plusieurs .addCase() pour d'autres actions
            .addMatcher(
                // Exemple d'utilisation de matcher pour une logique plus complexe
                (action) => action.type.startsWith('somePrefix/'),
                (state, action) => {
                    // Logique pour les actions correspondantes
                }
            )
            .addDefaultCase((state, action) => {
                // Logique par défaut pour toutes les actions non capturées
            });
    },
});

export default authReducer.reducer;
