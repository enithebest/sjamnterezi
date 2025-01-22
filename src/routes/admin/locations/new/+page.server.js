import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';

export const actions = {
	createLocation: async ({ request }) => {
		const formData = await request.formData();
		console.log(formData);
		const connection = await createConnection();
		const [result] = await connection.execute(
			'INSERT INTO locations(name, description) VALUES (?,?)',
			[formData.get('title'), formData.get('description')]
		);
		if (result.affectedRows) {
			redirect(303, '/admin/locations');
		}
	}
};
