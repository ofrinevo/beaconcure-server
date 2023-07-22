import { Router } from "express";
import {getFiles, getTable, getTableNamesInFile} from "../controllers/files";

export const index = Router();

index.get("/files", getFiles);
index.get("/file/:fileName", getTableNamesInFile);
index.get("/file/:fileName/:tableName", getTable);
