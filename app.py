from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
def main():
    return render_template("main.html")


@app.route('/sign-in')
def detail():
    return render_template("sign-in.html")

@app.route('/sign_up')
def detail():
    return render_template("sign-up.html")


if __name__ == '__main__':
    app.run('0.0.0.0', port=5000, debug=True)