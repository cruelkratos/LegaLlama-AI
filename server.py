import os
from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
from main import legal_analysis_for_query
from main import legal_analysis_for_file
from main import reddit_post
app = Flask(__name__)
CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

@app.route('/receive_query', methods=['POST'])
def receive_query():
    data = request.get_json()

    if not data or 'text' not in data:
        return jsonify({"error": "Invalid request data"}), 400
    
    if data['text'] == '':
        return jsonify({"message1": "Enter Valid Query", "message2": "Enter Valid Query"}), 400

    text = data['text']
    ai_response, reddit_suggestions = legal_analysis_for_query(text)

    return jsonify({"message1": ai_response, "message2": reddit_suggestions}), 200


@app.route('/receive_docs', methods=['POST'])
def receive_docs():
    query = request.form.get('query')
    file = request.files.get('file')

    if not query or query == '':
        return jsonify({"message1": "Missing Query", "message2": "Missing Query"}), 400
    if not file:
        return jsonify({"message1": "Missing File", "message2": "Missing File"}), 400

    file_path = f'uploads/{file.filename}'
    file.save(file_path)
    
    ai_response = legal_analysis_for_file(query, f'uploads/{file.filename}')

    os.remove(file_path)

    return jsonify({"message1": ai_response, "message2": "Reddit Comments"}), 200

@app.route('/post_to_reddit',methods=['POST'])
@cross_origin()
def post_to_reddit():
    query = request.get_json()
    text = query['text']
    post_url = reddit_post(text)
    return jsonify({"message1": post_url}), 200


if __name__ == "__main__":
    app.run(debug=True,port=5001)