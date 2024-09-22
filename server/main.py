import joblib
import pandas as pd
from flask import Flask, jsonify, request
from sklearn.feature_extraction.text import CountVectorizer
from nltk.corpus import stopwords
import nltk
from flask_cors import CORS  # Import flask_cors

nltk.download('stopwords')

# Initialize Flask app
app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# Load pre-trained model and CountVectorizer
nb_model = joblib.load('nb_spam_model.pkl')
cv = joblib.load('count_vectorizer.pkl')

# Define the route for prediction
@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()

    if 'email' not in data:
        return jsonify({'error': 'Email text is required'}), 400

    email_text = data['email']

    # Preprocess the email text
    email_features = cv.transform([email_text])

    # Predict using the pre-trained model
    prediction = nb_model.predict(email_features)

    # Return the result as a JSON response
    result = 'Spam' if prediction[0] == 1 else 'Not Spam'
    
    return jsonify({'prediction': result})

if __name__ == '__main__':
    app.run(port=5000)
