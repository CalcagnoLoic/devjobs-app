# DevJobs app

## Lancement du serveur frontend

Bien se positionner dans le dossier `frontend` avant de commencer. 

### Installation des paquets

```cmd
$ npm i
```

### Lancement du serveur local

```cmd
$ npm run dev
```

## Lancement du serveur backend

Bien se positionner dans le dossier `backend` avant de commencer. 

### Installation et activation de l'environnement virtuel

**Attention**, pour *MacOS*, la deuxième ligne de commande peut être différente

```cmd
$ python -m venv env

////Activation de l'environnement virtuel
// Windows
$ source env/Scripts/activate

// Mac
$ source env/bin/activate
```

### Installation des paquets

```cmd
$ pip install -r requirements.txt
```

Si nouvelle installation de faite dans l'environnement virtuel, ne pas oublier de lancer 

```cmd
$ pip freeze > requirements.txt
```

### Lancement du serveur local

```cmd
python run.py run
```