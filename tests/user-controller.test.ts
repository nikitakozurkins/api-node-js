import { test, expect } from '@playwright/test';
import { StatusCodes } from "http-status-codes";

let baseURL: string = 'http://localhost:3000/users';

test.describe('User management API', () => {

    test('find user: should return a user by ID', async ({ request }) => {
        const responseUserCreate = await request.post(`${baseURL}`);
        const responseUserCreateBody = await responseUserCreate.json();
        const responseFindUser = await request.get(`${baseURL}/${responseUserCreateBody.id}`);
        const responseFindUserBody = await responseFindUser.json();
        expect.soft(responseUserCreate.status()).toBe(StatusCodes.CREATED);
        expect.soft(responseFindUser.status()).toBe(StatusCodes.OK);
        expect.soft(responseFindUserBody.id).toBe(responseUserCreateBody.id);
    });

    test('find user: should return 404 if user not found', async ({ request }) => {
        const userId = 228;
        const responseFindUser = await request.get(`${baseURL}/${userId}`);
        expect(responseFindUser.status()).toBe(StatusCodes.NOT_FOUND);
    });

    test('create user: should add a new user', async ({ request }) => {
        const responseUserCreate = await request.post(`${baseURL}`);
        const responseUserCreateBody = await responseUserCreate.json();
        const responseFindUser = await request.get(`${baseURL}/${responseUserCreateBody.id}`);
        const responseFindUserBody = await responseFindUser.json();
        expect.soft(responseUserCreate.status()).toBe(StatusCodes.CREATED);
        expect.soft(responseFindUser.status()).toBe(StatusCodes.OK);
        expect.soft(responseFindUserBody.id).toBe(responseUserCreateBody.id);
        expect.soft(responseFindUserBody.email).toBe(responseUserCreateBody.email);
        expect.soft(responseFindUserBody.phone).toBe(responseUserCreateBody.phone);
        expect.soft(responseFindUserBody.name).toBe(responseUserCreateBody.name);
    });

    test('delete user: should delete a user by ID', async ({ request }) => {
        const responseUserCreate = await request.post(`${baseURL}`);
        const responseUserCreateBody = await responseUserCreate.json();
        const responseDeleteUser = await request.delete(`${baseURL}/${responseUserCreateBody.id}`);
        const responseDeleteUserBody = await responseDeleteUser.json();
        expect.soft(responseDeleteUser.status()).toBe(StatusCodes.OK);
        expect.soft(responseDeleteUserBody[0].id).toBe(responseUserCreateBody.id);
    });

    test('delete user: should return 404 if user not found', async ({ request }) => {
        const userId = 228;
        const responseDeleteUser = await request.delete(`${baseURL}/${userId}`);
        expect(responseDeleteUser.status()).toBe(StatusCodes.NOT_FOUND);
    });
});
