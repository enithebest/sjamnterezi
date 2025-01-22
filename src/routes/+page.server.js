import { createConnection } from '$lib/db/mysql';
 
export async function load({locals}) {
 
    let connection = await createConnection();
    let [rows] = await connection.execute('SELECT  * FROM events');
    let [categories] = await connection.execute('select * from category');
    return {
        events: rows,
        categories : categories,
        user: locals.user
    };

}