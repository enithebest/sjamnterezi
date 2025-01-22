import { createConnection } from '$lib/db/mysql';
import { redirect } from '@sveltejs/kit';

export const actions = {
    logout: async ({ locals, cookies }) => {
        if (!locals.user) {
            redirect(302, '/');
        }

        // Delete the current session in the database
        const connection = await createConnection();
        await connection.execute(
            'UPDATE users SET session_token = NULL, session_expiration = NULL WHERE id = ?',
            [locals.user.id]
        );

        // Delete session cookie
        cookies.delete('session', { path: '/' });

        // Redirect to the home page
        redirect(302, '/');
    },

    deleteUser: async ({ locals, cookies }) => {
        if (!locals.user) {
            redirect(302, '/');
        }

        try {
            // Delete the user from the database
            const connection = await createConnection();
            await connection.execute('DELETE FROM users WHERE id = ?', [locals.user.id]);

            // Delete session cookie
            cookies.delete('session', { path: '/' });

            // Redirect to the home page
            redirect(302, '/');
        } catch (error) {
            console.error('Error deleting user:', error);
            throw error;
        }
    }
};
