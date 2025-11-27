// Google Sheets POST 요청 테스트

const googleScriptUrl = 'https://script.google.com/macros/s/AKfycbxuJ4HDjW0jVonsxyjX--3EeDO-RfPM3iblQeojv-yriOHUHOzHPlsEo-U-tr6YSZH8yw/exec';

const testData = {
  name: '테스트 이름',
  email: 'test@example.com',
  phone: '010-1234-5678'
};

console.log('Sending test data to Google Sheets...');
console.log('Data:', testData);

fetch(googleScriptUrl, {
  method: 'POST',
  redirect: 'follow',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(testData),
})
  .then(response => {
    console.log('Response status:', response.status);
    return response.text();
  })
  .then(text => {
    console.log('Response:', text);
  })
  .catch(error => {
    console.error('Error:', error);
  });
