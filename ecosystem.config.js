module.exports = {
    apps: [
        {
            name: "client",  // Name for the React app
            script: "npm",
            args: "start",  // Command to start the React app
            cwd: "./client",  // Directory where your React app (client) is located
            env: {
                NODE_ENV: "production",  // Environment variable for production
            }
        },
        {
            name: "server",  // Name for the Flask app
            script: "./virtualenv/bin/python",  // On Linux/macOS (or './venv/Scripts/python.exe' for Windows)
            args: "main.py",  // Path to your Flask app's entry point (main.py)
            cwd: "./server",  // Directory where Flask's main.py is located
            interpreter: "./virtualenv/bin/python",  // Path to the Python interpreter inside the virtual environment (same as script)
            env: {
                FLASK_ENV: "production",  // Environment variable for production
            }
        },
    ],
};

