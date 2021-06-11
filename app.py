from flask import Flask, render_template

app = Flask(__name__)
app.config['SEND_FILE_MAX_AGE_DEFAULT'] = 0 # serve pro navegador renderizar as alterações feitas no css. use tbm ctrl + F5

@app.route('/')

def home():
    nome = "Neymar"
    idade = 29
    emocao = True

    return render_template(
    'index.html',
    nome = nome,
    idade = idade,
    emocao = emocao,
    )

if __name__ == "__main__":
    app.run(debug=True)