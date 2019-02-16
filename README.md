DjangoIngv
==========

Execution of the following recruitment assignment:
https://gist.github.com/synasius/ca399142820f2b3f779493f6d306db42

TL;DR: fetch and show Ingv data.

Available on Heroku
-------------------

Here: https://shielded-crag-96247.herokuapp.com/

How to run locally
------------------

Anywhere on your system:
```
virtualenv -p python3 venv
source venv/bin/activate
git clone https://github.com/eFFeeMMe/QuakeData.git
cd QuakeData
pip install -r requirements.txt
export SECRET_KEY='lasicurezzaprimadituttomiraccomando'
python manage.py ingvpoll
python manage.py runserver
```

Notes to recruiters
-------------------

Il progetto django si chiama tutorial perché per fare di fretta sono partito dal tutorial di Django e ad un certo punto ho cominciato ad integrare la business logic richiesta lì dentro. Per il resto ho cercato di fare tutto in maniera pulita, o almeno per quanto ho potuto visti i limiti di tempo.

Troverete APScheduler perché ho effettuato un test ma alla fine ho usato lo scheduler semplice di Heroku che chiama periodicamente `python manage.py ingvpoll`

Non sono sicuro di avere gestito tutti i casi limite possibili ma nemmeno dovrebbe prendere fuoco spontaneamente ogni 5 minuti.