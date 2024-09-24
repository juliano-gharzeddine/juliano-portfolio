module.exports = {
    apps: [
        {
            name: "client",  // Name for the React app
            script: "npm",
            args: "run preview",  // Command to start the React app
            cwd: "./client",  // Directory where your React app (client) is located
            env: {
                NODE_ENV: "production",  // Environment variable for production
            }
        },
        {
            name: "server",  // Name for the Python Flask app
            script: "python3",  // Path to the Python interpreter inside the virtual environment
            args: "main.py",  // Path to your Flask app's main script
            cwd: "./server",  // Directory where Flask's main.py is located
            env: {
                FLASK_ENV: "production",  // Optional environment variables for Flask
            }
        }
    ]
};
