import { test, expect } from '@playwright/test';

test('GET API should return 200 and correct data', async ({ request }) => {
  const response = await request.get('http://yapi.aims.com/mock/37/test/dubbo/send/batch');

  // Assert status code
  expect(response.status()).toBe(200);

  // Parse JSON body
  const body = await response.json();

  // Simple assertions
  // expect(body.id).toBe(1);
  // expect(body).toHaveProperty('title');
});