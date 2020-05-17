const axios = require('axios');

(async () => {
  const {
    data: { token },
  } = await axios.post('http://localhost:3030/auth/login', {
    username: 'benardi',
    password: 'benardi123',
  });

  const { data } = await axios.get('http://localhost:3030/auth', {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });

  console.log(token);
})();
