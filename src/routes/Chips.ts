import { Request, Response, Router } from 'express';
import { BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { ParamsDictionary } from 'express-serve-static-core';

import { paramMissingError } from '@shared/constants';

import { spawn } from 'child_process';

// Init shared
const router = Router();

/******************************************************************************
 *                      Get All Chips - "GET /api/chips/all"
 ******************************************************************************/

router.get('/all', async (req: Request, res: Response) => {
    const users = 'HiHi';
    const ls = spawn('src/apps/loop');
    let result: Array<any> = [];
    ls.stdout.on('data', (data: any) => {
        data = data.toString();
        if (data < 0) {
            console.log('Start Block!');
        } else if (data > 0) {
            console.log('End Block!');
        } else {
            result.push(data);
        }
        console.log(result);
    });

    return res.status(OK).json({ result });
});

export default router;
