import colors from 'colors';

const logger = (req, res, next) => {
    const methodColors = {
        GET: 'green',
        POST: 'blue',
        PUT: 'yellow',
        DELETE: 'red'
    };

    const color = methodColors[req.method] || white;

    const message = `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`;

    console.log(
        message[color]
    );
    next();
};

export default logger;