import { test, expect } from '@playwright/test';
import { StatusCodes } from "http-status-codes";

let baseURL: string = 'http://localhost:3000/users';

test('all users: should return empty array when no users', async ({ request }) => {
    const response = await request.get(`${baseURL}`);
    const responseBody = await response.text()
    expect.soft(response.status()).toBe(StatusCodes.OK);
    expect.soft(responseBody).toBe('[]');
});