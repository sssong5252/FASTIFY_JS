const form = document.getElementById('signup-form');

form.addEventListener('submit', async (event) => {
  event.preventDefault(); // 폼 전송 기본 동작 막기

  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  const response = await fetch('/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (response.ok) {
    alert('회원가입이 완료되었습니다.');
  } else {
    const errorMessage = await response.text(); // 서버로부터의 에러 메시지를 받습니다.
    alert('회원가입에 실패했습니다. 에러: ' + errorMessage);
  }
});
