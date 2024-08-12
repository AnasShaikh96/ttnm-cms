import { api } from './api-client';

async function loginWithEmailAndPassword(data: any) {
  return api.post('/login', data);
}

const authConfig = {
  loginFn: async (data: any) => {
    const response = await loginWithEmailAndPassword(data);
    return response;
  },
};

// export const { useLogin } = configureAuth(authConfig);

export { authConfig };
