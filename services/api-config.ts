const base_url = process.env.NEXT_PUBLIC_BASE_URL! 

const apiConfig = {
    signup: `${base_url}/user/signup`,
    login: `${base_url}/user/login`,
    verify: `${base_url}/user/verify`,
    forgot: `${base_url}/user/forgot`,
    reset: `${base_url}/user/reset`,
    update: `${base_url}/user/update-user`,
}

export default apiConfig;