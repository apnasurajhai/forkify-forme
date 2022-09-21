import { async } from 'regenerator-runtime';

export const AJAX = async function (url, uploadData = undefined) {
  const fetchPro = uploadData
    ? fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(uploadData),
      })
    : fetch(url);
};

export const getJSON = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!res.ok) {
      throw new Error(`${data.message} (${res.status})`);
    }
  } catch (error) {
    console.log(error);
  }
};

export const sendJSON = async function (url, uploadData) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(uploadData),
    });
    if (!res.ok) {
      throw new Error(`${data.message} (${res.status})`);
    }
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
