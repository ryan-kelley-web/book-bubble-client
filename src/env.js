let API_URL =  '';

switch(window.location.hostname){
    case 'localhost':
    case '127.0.0.1':
        API_URL = 'http://localhost:5000';
        break;
    case 'book-bubble.herokuapp.com':
        API_URL = 'http://book-bubble-server.herokuapp.com';
        break;
}

export default API_URL;