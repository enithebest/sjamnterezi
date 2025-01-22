import { createConnection } from '$lib/db/mysql';

export async function load({locals}) {

	if(!locals.user ||locals.user.role !=='admin'){
		redirect(302,'/login');
	}
	let connection = await createConnection();
	let [rows] = await connection.execute('SELECT * FROM category LIMIT 10');

	return {
		category: rows
	};
}
export const actions = {
	deleteEvent: async ({ request }) => {
		const formData = await request.formData();
		const id = formData.get('id');
		const connection = await createConnection();
		try{
			await connection.execute('DELETE FROM category WHERE id = ?', [id]);
		}catch(e){
			console.error(e);
			return{
				success: false,
				message:"Deletion not possiple"
			}

		}
		
	}
};
