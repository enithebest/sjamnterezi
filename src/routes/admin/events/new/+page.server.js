import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';
import { error } from '@sveltejs/kit';
import { put } from '@vercel/blob';
import { BLOB_READ_WRITE_TOKEN } from '$env/static/private';
 

export async function load() {
	let connection = await createConnection();
	let [rows] = await connection.execute('SELECT * FROM locations');
	let [rows2] = await connection.execute('SELECT * FROM category');

	return {
		locations: rows,
		categories:rows2,
	};
}
export const actions = {
	createEvent: async ({ request }) => {
		const formData = await request.formData();
        const uploadedImage = formData.get("image");
        console.log(uploadedImage);
        if (!uploadedImage) {
            throw error(400, { message: "No file to upload." });
          }
          const { url } = await put(uploadedImage.name, uploadedImage, { access: "public", token:BLOB_READ_WRITE_TOKEN });
		console.log(formData);
		const connection = await createConnection();
		const [result] = await connection.execute(
			'INSERT INTO events(title, description, start_date, end_date, url, start_time, location_Id, category_Id, image) VALUES (?,?,?,?,?,?,?,?,?)',
			[
			formData.get('title'),
			formData.get('description'),
			formData.get('startDate'),
			formData.get('endDate'),
			formData.get('url'),
			formData.get('startTime'),
			formData.get('locationId'),
			formData.get('categoryId'),
			url


		]
		);
		if (result.affectedRows) {
			redirect(303, '/admin/events');
		}
		return { uploaded: url}
	}
};

