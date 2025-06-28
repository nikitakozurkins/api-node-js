// tests/api.spec.ts
import { test, expect } from '@playwright/test';
let baseURL: string = 'http://localhost:3000/users';

test.describe('User management API', () => {

    test('all users: should return empty array when no users', async ({ request }) => {
        const response = await request.get(`${baseURL}`);
        expect(response.status()).toBe(200);
        const responseBody = await response.text()
        expect(responseBody).toBe('[]');
    });

    test('find user: should return a user by ID', async ({ request }) => {

    });

    test('find user: should return 404 if user not found', async ({ request }) => {

    });

    test('create user: should add a new user', async ({ request }) => {

    });

    test('delete user: should delete a user by ID', async ({ request }) => {

    });

    test('delete user: should return 404 if user not found', async ({ request }) => {

    });


});
