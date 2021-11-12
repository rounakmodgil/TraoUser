
const NODE_ENV="development"
const getAppConfig = () => {
    if (NODE_ENV === 'development') {
        return {
            apiBaseUrl: 'https://admin.trao.in',
        };
    } 

    return {
        apiBaseUrl: 'https://admin.trao.in/',
    };
};

export default getAppConfig;
