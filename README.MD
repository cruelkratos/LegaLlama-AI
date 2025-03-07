# LegaLlama
LegaLlama is an advanced AI Agent powered by the Mira FLows SDK, designed to assist with resolving legal queries. It offers the following key features:
1. *Legal Query Analysis* : Submit a legal question, and LegaLlama will analyze it using its <b>RAG system</b> . You’ll receive detailed comments and personalized suggestions drawn from relevant Reddit discussions to help guide your understanding.
2. *Reddit Posting* : If you're not satisfied with the analysis, you can easily post your query directly to Reddit with just a click, ensuring that you get diverse perspectives and expert insights.
3. *Legal Document Analysis* : Upload a legal document in PDF format, and LegaLlama will help you extract relevant information. You can ask specific questions regarding the document and get informed responses.
LegaLlama provides an intuitive, streamlined way to navigate legal questions, making complex legal matters more accessible and understandable.

Group Members (in alphabetical order)

| S.No. | Name             | devfolio ID    |
| ----- | ---------------- | -------------- |
| 1.    | Garv Sethi       | cruelkratos    |
| 2.    | Kunal Bansal     | fr092          |

# Requirements
- Nodejs 
- Python (between 3.9 and 3.13)

The *Frontend* is deployed on [Vercel](https://lega-llama-ai.vercel.app/)

[Video Demo!](https://youtu.be/pYZt9jmlIgw?si=0hI1DpeDAAAggc7F)

# Steps for Installation: 
1. Clone the repository in your local directory using the command `git clone https://github.com/cruelkratos/LegaLlama-AI.git`
2. Change directory to cloned Repository `cd LegaLlama-AI`
3. Install frontend dependencies `cd legal-assitant && npm install`
4. Now we will be Installing backend dependencies
6. Creation and activating the virtual environment:
`python -m venv mira`
`env\Scripts\activate.bat`
7. Install dependencies `pip install -r requirements.txt`

# Steps to run frontend:
1. `cd legal-assitant`
2. `npm run dev`

# Steps to run the Flask-Server:
1. `python server.py`

# Feedback
If you have any feedback or suggestions, please reach out to us at garv_s@cs.iitr.ac.in or bansalkunal2005@gmail.com
