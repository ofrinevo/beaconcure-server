import { Request, Response } from "express";
import { readFileSync, readdirSync, readFile} from 'fs';

// const files = readdirSync('./files')
// console.log(files);
// const data = JSON.parse(readFileSync('/files'))

export const getFiles = async (req: Request, res: Response): Promise<void> => {
    const files = readdirSync('./files')
    console.log(files);
    res.send(files)
};

export const getTableNamesInFile = async (req: Request, res: Response): Promise<void> => {
    readFile('./files/' + req.params['fileName'], (err, data) => {
        console.log(req.params['fileName'])
        if (err){
            res.send('404')
        }
        const fileAsJson = JSON.parse(data)

        const tableNames = fileAsJson['tables'].map(table => table['title'])
        res.send(tableNames)
    })
};

export const getTable = async (req: Request, res: Response): Promise<void> => {
    readFile('./files/' + req.params['fileName'], (err, data) => {
        if (err){
            res.send('404')
        }
        const tableName = req.params['tableName']
        const fileAsJson = JSON.parse(data)

        const table = fileAsJson['tables'].filter(table => table['title'] === tableName)
        res.send(table[0])
    })
};
