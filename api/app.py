from flask import Flask, request, render_template
from geopy.distance import geodesic

#pozicia usera
app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    userPos = None
    if request.method == 'POST':
        userPos = request.form.get('userPos')
    return render_template('index.html', userPos=userPos)

if __name__ == '__main__':
    app.run(debug=True)


