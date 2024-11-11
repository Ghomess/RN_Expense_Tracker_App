import axios from 'axios';
import { API_URL } from '@env';

const BACKEND_URL = API_URL;
export async function storeExpenses(expensesData) {
  const response = await axios.post(
    BACKEND_URL + '/expenses.json',
    expensesData,
  );
  const id = response.data.name;
  return id;
}

export async function fetchExpenses() {
  const response = await axios.get(BACKEND_URL + '/expenses.json');

  const expenses = [];

  console.log(response.data);
  for (const key in response.data) {
    const expenseObj = {
      id: key,
      amount: response.data[key].amount,
      date: new Date(response.data[key].date),
      description: response.data[key].description,
    };
    expenses.push(expenseObj);
  }
  return expenses;
}

export function updateExpense(id, expenseData) {
  return axios.put(BACKEND_URL + `/expenses/${id}.json`, expenseData);
}

export function deleteExpense(id, expenseData) {
  return axios.delete(BACKEND_URL + `/expenses/${id}.json`);
}
