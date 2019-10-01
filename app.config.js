import path from "path";
const config = {
    server : {
        ip : '0.0.0.0',
        port : process.env.serverPort || 4500
    }
};

export default config;