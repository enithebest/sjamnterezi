import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';

export async function load({locals}) {

	if(!locals.user ||locals.user.role !=='admin'){
		redirect(302,'/login');
	}
	let connection = await createConnection();
	let [rows] = await connection.execute('SELECT e.id, e.title, l.name AS locationName FROM events as e LEFT JOIN locations as l ON e.location_id = l.id;');
	let [rows2] = await connection.execute('SELECT e.id,  e.title,   c.title AS categoryTitle FROM events AS e LEFT JOIN category AS c ON  e.category_id = c.id;')
	return {
		events: rows,
		categories: rows2
	};
	
}


export const actions = {
	deleteEvent: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get('id');
		const connection = await createConnection();
		const [result] = await connection.execute('DELETE FROM events WHERE id = ?', [id]);
	}
};
