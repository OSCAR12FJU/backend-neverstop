import express from 'express';
import authRoutes from './src/app/routes/authRoutes.js'
import createRoutes, { files } from './src/app/routes/createProductRoute.js';

import cors from 'cors'
import multer from 'multer';

export const destockFile = multer({dest: './src/app/files/'});


const app = express();
app.use(express.json());
app.use(cors());

app.use("/files", express.static("./src/app/files"));

// app.use("/files", express.static("files"));


app.use('/api/auth', authRoutes);
app.use('/api/product',createRoutes);

const PORT = 3001;
app.listen( PORT, () =>{
    console.log(`Servidor corriendo en  http://localhost:${PORT}`);
}
)

