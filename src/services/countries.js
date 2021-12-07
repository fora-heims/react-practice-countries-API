import { checkError, client } from './client.js';

export async function getCountries() {
  const response = await client.from('countries').select();
  return checkError(response);
}
