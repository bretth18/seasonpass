// accounts.ts contains helper functions to obtain environment variables for our dev env


import 'dotenv/config';


export function accounts(): string {

    const key = process.env['PRIVATE_KEY'];

    if (key && key !== '') {
        return key;
    } else {
        return 'poop';
    }
 
}