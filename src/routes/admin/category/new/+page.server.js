import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';

export const actions = {
	createEvent: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData);
		const connection = await createConnection();
		
		const [result] = await connection.execute(
			'INSERT INTO category(title, description) VALUES (?,?)',
			[formData.get('title'), formData.get('description')]
		);
		if (result.affectedRows) {
			redirect(303, '/admin/category');
		}
	}
};
