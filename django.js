const lessons = [
    //
    {
        title: "Introduction à Django et installation de l’environnement",
        description: "Apprenez à installer Python et Django, et préparez votre environnement pour débuter un projet Django.",
        content: `
        <h3>Bienvenue dans votre formation Django !</h3>
        <p>Avant de créer votre premier projet Django, vous devez comprendre les bases et installer correctement votre environnement de développement.</p>

        <h4>Qu’est-ce que Django ?</h4>
        <p><strong>Django</strong> est un framework web open-source basé sur Python. Il permet de créer des sites dynamiques, puissants et sécurisés très rapidement. Il repose sur le principe du <strong>MVT (Model-View-Template)</strong>, une architecture qui sépare la logique métier, les données et la présentation.</p>

        <h4>Pré-requis</h4>
        <p>Avant d’installer Django, vous devez avoir <strong>Python</strong> installé sur votre ordinateur. Django fonctionne avec Python 3.8 ou une version ultérieure.</p>
        
        <div class="note">
            <strong>Note :</strong> Vous pouvez vérifier si Python est déjà installé avec la commande suivante :
        </div>
    `,
        code_space: `python --version`,
        content_after: `
        <p>Si Python est installé, vous verrez un résultat semblable à :</p>
    `,
        code_space_2: `Python 3.10.6`,
        content_after_2: `
        <h4>Installer Python</h4>
        <p>Si Python n’est pas installé, téléchargez-le depuis le site officiel :</p>
        <p><a href="https://www.python.org/downloads/" target="_blank">https://www.python.org/downloads/</a></p>

        <p>Pendant l’installation :</p>
        <ul>
            <li>Cochez <strong>Add Python to PATH</strong> avant de cliquer sur “Install”.</li>
            <li>Attendez la fin de l’installation, puis vérifiez à nouveau la version avec <code>python --version</code>.</li>
        </ul>

        <h4>Installer pip (le gestionnaire de paquets Python)</h4>
        <p>Pip est souvent installé avec Python par défaut. Pour vérifier, utilisez :</p>
    `,
        code_space_3: `pip --version`,
        content_after_3: `
        <p>Si pip n’est pas installé, vous pouvez le télécharger et l’installer manuellement depuis :</p>
        <p><a href="https://pip.pypa.io/en/stable/installation/" target="_blank">https://pip.pypa.io/en/stable/installation/</a></p>

        <h4>Installer Django</h4>
        <p>Une fois Python et pip installés, vous pouvez installer Django avec cette commande :</p>
    `,
        code_space_4: `pip install django`,
        content_after_4: `
        <p>Cette commande télécharge et installe la dernière version de Django.</p>

        <div class="note">
            <strong>Astuce :</strong> Vous pouvez créer un environnement virtuel avant d’installer Django pour isoler votre projet.
        </div>

        <h4>Créer un environnement virtuel (optionnel mais recommandé)</h4>
        <p>Un environnement virtuel vous permet de gérer les dépendances de votre projet sans interférer avec le système global. Voici comment en créer un :</p>
    `,
        code_space_5: `
# Créer un environnement virtuel nommé "venv"
python -m venv venv

# Activer l'environnement virtuel
# Sous Windows :
venv\\Scripts\\activate

# Sous macOS / Linux :
source venv/bin/activate
    `,
        content_after_5: `
        <p>Une fois activé, vous verrez le nom de l’environnement (ex: <strong>(venv)</strong>) au début de votre ligne de commande.</p>
        <p>Ensuite, installez Django dans cet environnement virtuel :</p>
    `,
        code_space_6: `pip install django`,
        content_after_6: `
        <p>Vérifiez l’installation de Django avec la commande suivante :</p>
    `,
        code_space_7: `django-admin --version`,
        content_after_7: `
        <p>Vous devriez obtenir un numéro de version, par exemple :</p>
    `,
        code_space_8: `5.1.2`,
        content_after_8: `
        <div class="note">
            <strong>Félicitations 🎉</strong> Vous avez installé Python, pip et Django avec succès ! 
        </div>

        <h4>Étape suivante</h4>
        <p>Dans la prochaine leçon, nous allons créer un dossier dédié à votre premier projet Django, initialiser le projet et comprendre la structure de base générée par Django.</p>
    `
    },
    {
        title: "Créer un projet et une application Django",
        description: "Apprenez à créer un projet Django, à comprendre sa structure et à créer votre première application.",
        content: `
        <h3>Création de votre premier projet Django</h3>
        <p>Maintenant que Django est installé, il est temps de créer votre premier <strong>projet</strong> !</p>

        <h4>Qu’est-ce qu’un projet Django ?</h4>
        <p>Un <strong>projet Django</strong> est l’ensemble complet de fichiers et de configurations qui composent votre site web. 
        Il contient les paramètres globaux de l’application (base de données, sécurité, applications incluses, routes, etc.).</p>
        <p>En résumé, un projet Django agit comme le <strong>cerveau central</strong> qui coordonne plusieurs applications.</p>

        <h4>Créer un projet Django</h4>
        <p>Ouvrez votre terminal dans le dossier où vous souhaitez créer le projet. Exécutez la commande suivante :</p>
    `,
        code_space: `django-admin startproject monprojet`,
        content_after: `
        <p>Cette commande va créer un nouveau dossier appelé <strong>monprojet</strong> avec la structure suivante :</p>
    `,
        code_space_2: `
monprojet/
    manage.py
    monprojet/
        __init__.py
        settings.py
        urls.py
        asgi.py
        wsgi.py
    `,
        content_after_2: `
        <h4>Problème possible sur Windows</h4>
        <p>Sur certains systèmes Windows, la commande <code>django-admin startproject</code> peut ne pas fonctionner correctement. 
        Dans ce cas, utilisez plutôt la commande suivante :</p>
    `,
        code_space_3: `python -m django startproject monprojet`,
        content_after_3: `
        <p>Cette alternative exécute Django directement via Python, ce qui contourne certains problèmes de configuration du PATH sous Windows.</p>

        <div class="note">
            <strong>Astuce :</strong> Si vous utilisez un environnement virtuel, assurez-vous qu’il est bien activé avant d’exécuter la commande.
        </div>

        <h4>Vérifier le projet</h4>
        <p>Pour vous assurer que tout fonctionne, entrez dans le dossier du projet et lancez le serveur de développement :</p>
    `,
        code_space_4: `
cd monprojet
python manage.py runserver
    `,
        content_after_4: `
        <p>Si tout est correct, ouvrez votre navigateur et accédez à <strong>http://127.0.0.1:8000/</strong>. 
        Vous verrez la page d’accueil de Django confirmant que votre projet est bien lancé.</p>

        <h4>Structure d’un projet Django</h4>
        <ul>
            <li><strong>manage.py :</strong> Un outil en ligne de commande pour interagir avec votre projet.</li>
            <li><strong>settings.py :</strong> Contient toutes les configurations globales du projet.</li>
            <li><strong>urls.py :</strong> Gère la correspondance entre les URL et les vues (pages) de votre application.</li>
            <li><strong>wsgi.py / asgi.py :</strong> Points d’entrée pour les serveurs web.</li>
        </ul>

        <h3>Création d’une application Django</h3>
        <p>Un projet Django peut contenir plusieurs <strong>applications</strong>. 
        Une application représente une partie spécifique de votre site (exemple : blog, compte utilisateur, tableau de bord…).</p>

        <p>Vous pouvez voir une application comme un <strong>module indépendant</strong> du projet. 
        Cela facilite la maintenance et la réutilisation du code.</p>

        <h4>Créer une application</h4>
        <p>Pour créer une application, utilisez la commande suivante à la racine de votre projet (là où se trouve <code>manage.py</code>) :</p>
    `,
        code_space_5: `python manage.py startapp blog`,
        content_after_5: `
        <p>Cette commande crée un dossier <strong>blog/</strong> contenant la structure suivante :</p>
    `,
        code_space_6: `
blog/
    __init__.py
    admin.py
    apps.py
    models.py
    tests.py
    views.py
    migrations/
    `,
        content_after_6: `
        <h4>Rôle des fichiers principaux</h4>
        <ul>
            <li><strong>models.py :</strong> Définit la structure de la base de données (vos tables).</li>
            <li><strong>views.py :</strong> Contient la logique des pages (contrôle de ce que voit l’utilisateur).</li>
            <li><strong>admin.py :</strong> Gère l’administration du site.</li>
            <li><strong>apps.py :</strong> Contient les configurations spécifiques à l’application.</li>
        </ul>

        <div class="note">
            <strong>Important :</strong> Après avoir créé une application, il faut la déclarer dans le fichier <code>settings.py</code> du projet.
        </div>

        <h4>Exemple pratique</h4>
        <p>Imaginons que vous créez un site de blog. Vous pourriez avoir :</p>
        <ul>
            <li>Une application <strong>articles</strong> pour gérer les publications.</li>
            <li>Une application <strong>utilisateurs</strong> pour gérer les comptes.</li>
            <li>Une application <strong>commentaires</strong> pour gérer les interactions.</li>
        </ul>

        <p>Chaque application est autonome, mais elles communiquent via le projet Django principal.</p>

        <div class="note">
            <strong>Félicitations 🎉</strong> Vous avez appris à créer un projet et une application Django !
        </div>

        <h4>Prochaine étape</h4>
        <p>Dans la prochaine leçon, nous allons apprendre à <strong>configurer votre projet Django</strong> : 
        connexion de l’application, configuration de la base de données et préparation du serveur pour le développement.</p>
    `
    },
    {
        title: "Configuration de base du projet Django",
        description: "Apprenez à configurer votre projet Django : ajout d’une application, migrations et configuration des URLs.",
        content: `
        <h3>Configuration initiale de votre projet Django</h3>
        <p>Maintenant que votre projet et votre première application sont créés, il est temps de procéder à la configuration de base du projet. 
        Ces réglages sont indispensables pour que Django reconnaisse votre application et puisse interagir avec la base de données.</p>

        <h4>1️⃣ Ajouter l’application dans <code>settings.py</code></h4>
        <p>Ouvrez le fichier <strong>monprojet/settings.py</strong>. Vous y trouverez une variable appelée <strong>INSTALLED_APPS</strong>. 
        C’est ici que Django liste toutes les applications actives du projet.</p>
        <p>Ajoutez votre application (exemple : <code>blog</code>) dans cette liste :</p>
    `,
        code_space: `
# monprojet/settings.py

INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'blog',  # Ajout de votre application ici
]
    `,
        content_after: `
        <div class="note">
            <strong>Important :</strong> Le nom à mettre dans <code>INSTALLED_APPS</code> correspond au nom du dossier de votre application.
        </div>

        <h4>2️⃣ Effectuer les migrations de base de données</h4>
        <p>Les <strong>migrations</strong> permettent à Django de créer automatiquement les tables nécessaires dans la base de données (SQLite par défaut).</p>
        <p>Exécutez les commandes suivantes dans le terminal :</p>
    `,
        code_space_2: `
python manage.py makemigrations
python manage.py migrate
    `,
        content_after_2: `
        <p>Ces commandes vont générer et appliquer les fichiers de migration pour votre base de données. 
        Django va ainsi créer toutes les tables nécessaires (utilisateurs, sessions, etc.).</p>

        <h4>3️⃣ Configurer les URLs du projet</h4>
        <p>Ouvrez le fichier <strong>monprojet/urls.py</strong>. Il contient les routes principales du projet. 
        Pour connecter les URLs de votre application, vous devez importer la fonction <code>include</code> :</p>
    `,
        code_space_3: `
# monprojet/urls.py

from django.contrib import admin
from django.urls import path, include  # import d'include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('blog.urls')),  # liaison avec les URLs de l'application
]
    `,
        content_after_3: `
        <p>La ligne <code>path('', include('blog.urls'))</code> signifie que toutes les URLs définies dans l’application <strong>blog</strong> seront accessibles depuis la racine du site.</p>

        <div class="note">
            <strong>Attention :</strong> Si vous n’avez pas encore créé le fichier <code>urls.py</code> dans votre application, Django affichera une erreur. Créons-le maintenant.
        </div>

        <h4>4️⃣ Créer le fichier <code>urls.py</code> dans l’application</h4>
        <p>Dans le dossier de votre application (ex : <strong>blog/</strong>), créez un nouveau fichier nommé <strong>urls.py</strong>.</p>
        <p>Ajoutez le code suivant à l’intérieur :</p>
    `,
        code_space_4: `
# blog/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
]
    `,
        content_after_4: `
        <p>Ce fichier définit les URLs propres à votre application. Ici, nous déclarons une route vide (<code>''</code>) 
        qui pointera vers une fonction <strong>home</strong> que nous créerons bientôt dans <code>views.py</code>.</p>

        <h4>5️⃣ Vérification du projet</h4>
        <p>Avant de passer à la suite, vérifiez que tout est bien en place :</p>
        <ul>
            <li>L’application est bien ajoutée dans <code>INSTALLED_APPS</code>.</li>
            <li>Les migrations ont été effectuées sans erreur.</li>
            <li>Le fichier <code>urls.py</code> du projet contient la ligne <code>include('blog.urls')</code>.</li>
            <li>Le fichier <code>urls.py</code> de l’application existe et importe <code>views</code>.</li>
        </ul>

        <div class="note">
            <strong>Félicitations 🎉</strong> Votre projet Django est maintenant prêt à gérer des routes et des vues !
        </div>

        <h4>Prochaine leçon</h4>
        <p>Dans la prochaine leçon, nous allons découvrir les <strong>vues (views)</strong> et leur rôle dans le système de routage Django. 
        Vous apprendrez comment afficher du contenu sur vos pages web à partir du code Python.</p>
    `
    },
    {
        title: "Introduction aux vues dans Django",
        description: "Apprenez à créer votre première vue Django et à afficher un message simple dans le navigateur.",
        content: `
        <h3>Découverte des vues (Views) dans Django</h3>
        <p>Les <strong>vues</strong> sont le cœur de votre application Django. 
        Elles définissent la logique de traitement de chaque requête et déterminent ce qui sera affiché dans le navigateur.</p>

        <h4>1️⃣ Rappel sur les migrations</h4>
        <p>Avant d’exécuter votre projet, assurez-vous que toutes les <strong>migrations</strong> ont bien été effectuées. 
        Les migrations permettent de synchroniser vos modèles avec la base de données.</p>
        <p>Vous devez exécuter ces deux commandes chaque fois que vous modifiez vos modèles (fichier <code>models.py</code>) :</p>
    `,
        code_space: `
python manage.py makemigrations
python manage.py migrate
    `,
        content_after: `
        <p>Si aucune modification n’a été faite sur les modèles, ces commandes ne feront rien — mais il est toujours bon de les exécuter pour s’assurer que tout est à jour.</p>

        <h4>2️⃣ Créer une première vue</h4>
        <p>Les vues se trouvent dans le fichier <strong>views.py</strong> de votre application (ex : <code>blog/views.py</code>).</p>
        <p>Ouvrez ce fichier et ajoutez le code suivant :</p>
    `,
        code_space_2: `
# blog/views.py

from django.http import HttpResponse

def home(request):
    return HttpResponse("<h1>Bienvenue sur mon premier site Django !</h1>")
    `,
        content_after_2: `
        <p>Ici, nous avons créé une fonction <strong>home</strong> qui retourne un message HTML simple à afficher dans le navigateur. 
        Django utilise l’objet <code>HttpResponse</code> pour envoyer du contenu au client.</p>

        <h4>3️⃣ Lier la vue à une URL</h4>
        <p>Assurez-vous que votre fichier <strong>blog/urls.py</strong> contient bien la route suivante :</p>
    `,
        code_space_3: `
# blog/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
]
    `,
        content_after_3: `
        <p>Cette configuration indique que lorsque l’utilisateur accède à la racine du site (ex : <strong>http://127.0.0.1:8000/</strong>), 
        Django exécutera la vue <code>home</code> et affichera son contenu.</p>

        <h4>4️⃣ Lancer le serveur et tester</h4>
        <p>Dans votre terminal, assurez-vous d’être dans le dossier du projet, puis lancez le serveur de développement :</p>
    `,
        code_space_4: `
python manage.py runserver
    `,
        content_after_4: `
        <p>Ouvrez ensuite votre navigateur et accédez à l’adresse suivante :</p>
        <p><strong>http://127.0.0.1:8000/</strong></p>

        <p>Vous devriez voir le message : <em>“Bienvenue sur mon premier site Django !”</em></p>

        <div class="note">
            <strong>Félicitations 🎉</strong> Vous venez de créer et d’afficher votre première vue Django !
        </div>

        <h4>Prochaine leçon</h4>
        <p>Dans la prochaine leçon, nous allons apprendre à utiliser les <strong>templates</strong> Django pour séparer le contenu HTML 
        de la logique Python et créer des pages web plus propres et dynamiques.</p>
    `
    },
    {
        title: "Découverte des Templates dans Django",
        description: "Apprenez à créer et utiliser les templates Django pour structurer vos pages HTML.",
        content: `
        <h3>Introduction aux templates dans Django</h3>
        <p>Les <strong>templates</strong> sont les fichiers qui contiennent le code HTML de votre application. 
        Ils permettent de séparer la <strong>logique Python</strong> (dans les vues) du <strong>contenu visuel</strong> (dans les pages web).</p>

        <h4>Pourquoi utiliser des templates ?</h4>
        <ul>
            <li>Pour garder un code clair et bien organisé.</li>
            <li>Pour réutiliser facilement des morceaux de page (en-têtes, pieds de page, etc.).</li>
            <li>Pour générer du contenu dynamique (afficher des données depuis la base de données, des formulaires, etc.).</li>
        </ul>

        <h4>Structure recommandée des templates</h4>
        <p>Dans Django, il est recommandé de créer un dossier <strong>templates</strong> à l’intérieur de chaque application, 
        puis un sous-dossier portant le même nom que l’application. C’est à cet endroit que seront placés vos fichiers HTML.</p>

        <p>Exemple de structure :</p>
    `,
        code_space: `
blog/
    templates/
        blog/
            home.html
            about.html
    views.py
    urls.py
    models.py
    admin.py
    `,
        content_after: `
        <div class="note">
            <strong>Astuce :</strong> Cette organisation permet à Django de savoir exactement où chercher vos templates, 
            même si plusieurs applications ont des fichiers HTML portant le même nom.
        </div>

        <h4>1️⃣ Créer deux templates HTML</h4>
        <p>Dans votre dossier <code>blog/templates/blog/</code>, créez deux fichiers :</p>
        <ul>
            <li><code>home.html</code></li>
            <li><code>about.html</code></li>
        </ul>

        <p>Contenu du fichier <strong>home.html</strong> :</p>
    `,
        code_space_2: `
<!-- blog/templates/blog/home.html -->
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Accueil</title>
</head>
<body>
    <h1>Bienvenue sur la page d'accueil !</h1>
    <p>Ceci est votre première page Django avec un template HTML.</p>
    <a href="{% url 'about' %}">Aller vers la page À propos</a>
</body>
</html>
    `,
        content_after_2: `
        <p>Contenu du fichier <strong>about.html</strong> :</p>
    `,
        code_space_3: `
<!-- blog/templates/blog/about.html -->
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>À propos</title>
</head>
<body>
    <h1>À propos de ce site</h1>
    <p>Ce site a été créé pour apprendre les bases de Django étape par étape.</p>
    <a href="{% url 'home' %}">Retour à la page d'accueil</a>
</body>
</html>
    `,
        content_after_3: `
        <h4>2️⃣ Créer les vues correspondantes</h4>
        <p>Ouvrez le fichier <strong>blog/views.py</strong> et ajoutez les deux vues suivantes :</p>
    `,
        code_space_4: `
# blog/views.py

from django.shortcuts import render

def home(request):
    return render(request, 'blog/home.html')

def about(request):
    return render(request, 'blog/about.html')
    `,
        content_after_4: `
        <p>La fonction <code>render()</code> permet de charger un fichier HTML et de l’envoyer comme réponse au navigateur.</p>

        <h4>3️⃣ Configurer les URLs</h4>
        <p>Ouvrez votre fichier <strong>blog/urls.py</strong> et modifiez-le comme suit :</p>
    `,
        code_space_5: `
# blog/urls.py

from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
]
    `,
        content_after_5: `
        <p>La première URL affiche la page d’accueil, et la seconde (<code>/about/</code>) affiche la page “À propos”. 
        Grâce aux balises <code>{% url 'nom' %}</code> dans les fichiers HTML, vous pouvez naviguer facilement entre les deux pages.</p>

        <h4>4️⃣ Tester dans le navigateur</h4>
        <p>Lancez votre serveur si ce n’est pas déjà fait :</p>
    `,
        code_space_6: `
python manage.py runserver
    `,
        content_after_6: `
        <p>➡️ Allez ensuite sur :</p>
        <ul>
            <li><strong>http://127.0.0.1:8000/</strong> → affiche la page d’accueil</li>
            <li><strong>http://127.0.0.1:8000/about/</strong> → affiche la page À propos</li>
        </ul>

        <div class="note">
            <strong>Félicitations 🎉</strong> Vous venez de créer vos premiers templates Django et de les relier à vos vues et URLs !
        </div>

        <h4>Prochaine leçon</h4>
        <p>Dans la prochaine leçon, nous allons découvrir comment gérer les <strong>fichiers statiques</strong> 
        (images, CSS, JavaScript) pour embellir vos pages et leur donner du style.</p>
    `
    },
    {
        title: "Gestion des Fichiers Statiques dans Django",
        description: "Apprenez à créer, organiser et utiliser les fichiers statiques (CSS, JS, images) dans un projet Django.",
        content: `
        <h3>Introduction aux fichiers statiques</h3>
        <p>Les <strong>fichiers statiques</strong> sont tous les fichiers qui ne changent pas en fonction du contenu du site : 
        ce sont vos fichiers <strong>CSS</strong>, <strong>JavaScript</strong> et <strong>images</strong>.</p>

        <h4>Exemples de fichiers statiques :</h4>
        <ul>
            <li>Les feuilles de style <code>.css</code> pour la mise en page</li>
            <li>Les fichiers <code>.js</code> pour les interactions dynamiques</li>
            <li>Les images, icônes et logos du site</li>
        </ul>

        <div class="note">
            <strong>But :</strong> Les fichiers statiques permettent de rendre votre site plus esthétique et interactif.
        </div>

        <h3>1️⃣ Création et structure du dossier <code>static</code></h3>
        <p>Par convention, chaque application Django peut contenir un dossier nommé <strong>static</strong>.
        À l’intérieur, on crée un sous-dossier portant le même nom que l’application pour éviter les conflits entre plusieurs apps.</p>

        <h4>Exemple de structure :</h4>
    `,
        code_space: `
blog/
    static/
        blog/
            css/
                style.css
            js/
                script.js
            images/
                logo.png
    templates/
        blog/
            home.html
    views.py
    urls.py
    `,
        content_after: `
        <p>➡️ Ainsi, Django saura où chercher vos fichiers statiques lorsque vous les appellerez dans vos pages HTML.</p>

        <h3>2️⃣ Exemple de fichier CSS</h3>
        <p>Créez un fichier <strong>style.css</strong> dans <code>blog/static/blog/css/</code> :</p>
    `,
        code_space_2: `
/* blog/static/blog/css/style.css */
body {
    background-color: #f5f5f5;
    font-family: 'Poppins', sans-serif;
    text-align: center;
}

h1 {
    color: #1a73e8;
}

button {
    background-color: #1a73e8;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 8px;
    cursor: pointer;
}

button:hover {
    background-color: #155ab6;
}
    `,
        content_after_2: `
        <h3>3️⃣ Exemple de fichier JavaScript</h3>
        <p>Créez un fichier <strong>script.js</strong> dans <code>blog/static/blog/js/</code> :</p>
    `,
        code_space_3: `
// blog/static/blog/js/script.js
document.addEventListener('DOMContentLoaded', function() {
    const btn = document.querySelector('button');
    btn.addEventListener('click', function() {
        alert('Bienvenue sur Django avec des fichiers statiques ! 🎉');
    });
});
    `,
        content_after_3: `
        <h3>4️⃣ Lier les fichiers statiques à un template HTML</h3>
        <p>Pour utiliser les fichiers statiques, Django doit d’abord les “charger” dans le template.</p>
        <p>Dans le fichier HTML, vous devez ajouter <code>{% load static %}</code> tout en haut du document.</p>

        <h4>Exemple complet :</h4>
    `,
        code_space_4: `
<!-- blog/templates/blog/home.html -->
{% load static %}
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Accueil - Django Statique</title>
    <!-- Lien vers le fichier CSS -->
    <link rel="stylesheet" href="{% static 'blog/css/style.css' %}">
</head>
<body>
    <h1>Bienvenue sur ma page avec des fichiers statiques</h1>
    <p>Nous venons d'ajouter du style et du JavaScript à Django !</p>

    <button>Clique-moi</button>

    <!-- Lien vers le fichier JS -->
    <script src="{% static 'blog/js/script.js' %}"></script>
</body>
</html>
    `,
        content_after_4: `
        <p>➡️ En visitant la page, vous verrez le style CSS appliqué et le message JavaScript apparaître au clic sur le bouton.</p>

        <div class="note">
            <strong>Important :</strong> Assurez-vous d’avoir bien ajouté <code>'django.contrib.staticfiles'</code> dans la liste <code>INSTALLED_APPS</code> du fichier <code>settings.py</code> 
            (ce qui est fait par défaut dans tout nouveau projet Django).
        </div>

        <h3>5️⃣ Lancer le serveur pour tester</h3>
        <p>Exécutez la commande suivante dans votre terminal :</p>
    `,
        code_space_5: `
python manage.py runserver
    `,
        content_after_5: `
        <p>➡️ Ouvrez ensuite <strong>http://127.0.0.1:8000/</strong> pour voir votre page avec le style et le script chargés.</p>

        <div class="note">
            <strong>Félicitations 🎉</strong> Vous maîtrisez désormais les fichiers statiques dans Django !
        </div>

        <h4>Prochaine leçon</h4>
        <p>La prochaine leçon sera un <strong>résumé global</strong> de tout ce que nous avons vu jusque-là : 
        création du projet, configuration, vues, templates et fichiers statiques.</p>
    `
    },
    {
        title: "Résumé général et projet pratique Django",
        description: "Consolidez vos connaissances en créant un petit projet Django simple, reprenant toutes les notions vues jusqu’ici.",
        content: `
        <h3>Résumé général et projet pratique</h3>
        <p>Dans cette leçon, nous allons créer un petit projet Django complet pour mettre en pratique toutes les notions que nous avons apprises :</p>
        <ul>
            <li>Création d’un projet et d’une application</li>
            <li>Configuration des settings et URLs</li>
            <li>Création de vues simples</li>
            <li>Utilisation de templates pour l’affichage HTML</li>
            <li>Utilisation de fichiers statiques (CSS et JS)</li>
            <li>Gestion des migrations</li>
        </ul>

        <h4>1️⃣ Création du projet</h4>
        <p>Nommons notre projet <strong>portfolio</strong> :</p>
    `,
        code_space: `
django-admin startproject portfolio
# ou si problème Windows
python -m django startproject portfolio
    `,
        content_after: `
        <h4>2️⃣ Création de l’application principale</h4>
        <p>Créons une application nommée <strong>siteweb</strong> :</p>
    `,
        code_space_2: `
python manage.py startapp siteweb
    `,
        content_after_2: `
        <h4>3️⃣ Ajouter l’application dans <code>settings.py</code></h4>
        <p>Ouvrez <code>portfolio/settings.py</code> et ajoutez :</p>
    `,
        code_space_3: `
INSTALLED_APPS = [
    ...,
    'siteweb',
]
    `,
        content_after_3: `
        <h4>4️⃣ Effectuer les migrations de base</h4>
        <p>Pour que tout soit synchronisé avec la base de données :</p>
    `,
        code_space_4: `
python manage.py makemigrations
python manage.py migrate
    `,
        content_after_4: `
        <h4>5️⃣ Créer les templates</h4>
        <p>Structure du dossier templates :</p>
    `,
        code_space_5: `
siteweb/
    templates/
        siteweb/
            index.html
            contact.html
    static/
        siteweb/
            css/style.css
            js/script.js
    `,
        content_after_5: `
        <p>Exemple de <strong>index.html</strong> :</p>
    `,
        code_space_6: `
{% load static %}
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Mon Mini Portfolio</title>
    <link rel="stylesheet" href="{% static 'siteweb/css/style.css' %}">
</head>
<body>
    <h1>Bienvenue sur mon mini site Django</h1>
    <p>Découvrez mes projets et mes compétences.</p>
    <a href="{% url 'contact' %}">Contactez-moi</a>

    <script src="{% static 'siteweb/js/script.js' %}"></script>
</body>
</html>
    `,
        content_after_6: `
        <p>Exemple de <strong>contact.html</strong> :</p>
    `,
        code_space_7: `
{% load static %}
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Contact</title>
    <link rel="stylesheet" href="{% static 'siteweb/css/style.css' %}">
</head>
<body>
    <h1>Contactez-moi</h1>
    <p>Envoyez un message via le formulaire (non fonctionnel dans cette démo).</p>
    <a href="{% url 'index' %}">Retour à l'accueil</a>
</body>
</html>
    `,
        content_after_7: `
        <h4>6️⃣ Créer les vues dans <code>views.py</code></h4>
    `,
        code_space_8: `
# siteweb/views.py
from django.shortcuts import render

def index(request):
    return render(request, 'siteweb/index.html')

def contact(request):
    return render(request, 'siteweb/contact.html')
    `,
        content_after_8: `
        <h4>7️⃣ Configurer les URLs de l’application</h4>
    `,
        code_space_9: `
# siteweb/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('contact/', views.contact, name='contact'),
]
    `,
        content_after_9: `
        <h4>8️⃣ Configurer les URLs du projet</h4>
        <p>Dans <code>portfolio/urls.py</code> :</p>
    `,
        code_space_10: `
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('siteweb.urls')),
]
    `,
        content_after_10: `
        <h4>9️⃣ Ajouter les fichiers CSS et JS</h4>
        <p>Exemple simple :</p>
    `,
        code_space_11: `
/* siteweb/static/siteweb/css/style.css */
body { font-family: 'Poppins', sans-serif; text-align: center; }
h1 { color: #1a73e8; }
a { color: #155ab6; text-decoration: none; margin-top: 20px; display: inline-block; }

/* siteweb/static/siteweb/js/script.js */
document.addEventListener('DOMContentLoaded', function() {
    console.log('Mini site Django prêt !');
});
    `,
        content_after_11: `
        <h4>10️⃣ Lancer le serveur et tester</h4>
        <p>Dans le terminal :</p>
    `,
        code_space_12: `
python manage.py runserver
    `,
        content_after_12: `
        <p>➡️ Rendez-vous sur <strong>http://127.0.0.1:8000/</strong> pour voir la page d'accueil et <strong>/contact/</strong> pour la page de contact.</p>

        <h4>Conseils pour bien progresser :</h4>
        <ul>
            <li>Testez toujours vos pages après chaque modification.</li>
            <li>Organisez vos fichiers : templates et statics doivent être propres et nommés clairement.</li>
            <li>Pratiquez la création de petites applications pour bien comprendre le fonctionnement de Django.</li>
        </ul>

        <h4>Devoir pratique :</h4>
        <p>Créez une troisième page “Projets” dans la même application :</p>
        <ul>
            <li>Créer le template <code>projects.html</code> avec un style simple.</li>
            <li>Ajouter la vue correspondante dans <code>views.py</code>.</li>
            <li>Créer l’URL et ajouter un lien depuis la page d’accueil pour y accéder.</li>
        </ul>

        <div class="note">
            <strong>Objectif :</strong> Ce devoir permet de récapituler toutes les notions vues : vues, templates, URLs, fichiers statiques et navigation entre pages.
        </div>
    `
    },
    {
        title: "Introduction au système d'authentification Django",
        description: "Présentation du système d'authentification de Django : fonctionnement, flux des données et utilisation dans les templates.",
        content: `
        <h3>Qu’est-ce qu’un système d’authentification ?</h3>
        <p>Un <strong>système d’authentification</strong> permet de vérifier l’identité des utilisateurs et de contrôler l’accès aux ressources d’un site web. 
        Il repose sur la création de comptes utilisateurs avec des identifiants uniques (souvent un email ou un nom d’utilisateur) et un mot de passe.</p>

        <h4>Fonctionnement général :</h4>
        <ol>
            <li>Un utilisateur remplit un formulaire d’identification avec ses informations (login et mot de passe).</li>
            <li>Ces informations sont envoyées au serveur via une requête HTTP POST.</li>
            <li>Django vérifie les informations par rapport à la base de données.</li>
            <li>Si les identifiants sont corrects, l’utilisateur est authentifié et une session est créée.</li>
            <li>La session permet de conserver l’état de connexion de l’utilisateur pour toutes les pages du site.</li>
        </ol>

        <h4>Flux des données :</h4>
        <p>Lorsqu’un utilisateur se connecte :</p>
        <ul>
            <li>Les informations du formulaire sont récupérées côté serveur via <code>request.POST</code>.</li>
            <li>Django utilise le module <code>django.contrib.auth</code> pour vérifier les identifiants.</li>
            <li>Une fois connecté, l’utilisateur est accessible via <code>request.user</code> dans vos vues.</li>
            <li>Dans vos templates, vous pouvez utiliser <code>{{ request.user.username }}</code> ou d’autres variables pour afficher des informations personnalisées.</li>
        </ul>

        <h4>Exemple de réutilisation des données dans un template :</h4>
        <p>Si un utilisateur est connecté, vous pouvez afficher son nom :</p>
    `,
        code_space: `
<!-- template HTML -->
{% if request.user.is_authenticated %}
    <p>Bonjour {{ request.user.username }} !</p>
{% else %}
    <p>Bonjour visiteur, veuillez vous connecter.</p>
{% endif %}
    `,
        content_after: `
        <h4>Résumé :</h4>
        <ul>
            <li>Un système d’authentification sécurise l’accès au site et permet de gérer les utilisateurs.</li>
            <li>Django gère les sessions et la vérification des identifiants de manière intégrée.</li>
            <li>Les données de l’utilisateur connecté peuvent être récupérées dans vos vues (<code>request.user</code>) et réutilisées dans vos templates (<code>{{ request.user.username }}</code>).</li>
        </ul>

        <div class="note">
            <strong>Prochaine leçon :</strong> Nous allons créer un <strong>système d’inscription</strong> complet pour permettre aux utilisateurs de créer leur compte et de se connecter.
        </div>
    `
    },
    {
        title: "Système d'inscription Django",
        description: "Apprenez à créer un formulaire d'inscription fonctionnel avec Django, gérer les erreurs et enregistrer les utilisateurs.",
        content: `
        <h3>Création du formulaire d'inscription</h3>
        <p>Avant de créer la logique côté serveur, nous devons créer le template qui affichera le formulaire.</p>

        <h4>1️⃣ Comprendre POST, GET et CSRF</h4>
        <ul>
            <li><strong>GET :</strong> méthode qui récupère les données depuis le serveur. Utilisée pour afficher des pages ou préremplir des formulaires.</li>
            <li><strong>POST :</strong> méthode qui envoie des données au serveur. Utilisée pour créer ou modifier des ressources, comme un nouvel utilisateur.</li>
            <li><strong>{% csrf_token %}</strong> : Django protège vos formulaires contre les attaques CSRF. Il est indispensable dans tout formulaire POST.</li>
        </ul>

        <h4>2️⃣ Créer le template HTML</h4>
        <p>Dans votre dossier <code>templates/app/</code>, créez un fichier <code>inscription.html</code> :</p>
    `,
        code_space: `
{% load static %}
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Inscription</title>
    <link rel="stylesheet" href="{% static 'app/css/style.css' %}">
</head>
<body>
    <h1>Créer un compte</h1>

    <!-- Affichage des messages d'erreur ou de succès -->
    {% if messages %}
        <ul>
            {% for message in messages %}
                <li>{{ message }}</li>
            {% endfor %}
        </ul>
    {% endif %}

    <form method="POST">
        {% csrf_token %}
        <input type="text" name="username" placeholder="Nom d'utilisateur" required>
        <input type="email" name="email" placeholder="Email" required>
        <input type="password" name="password" placeholder="Mot de passe" required>
        <input type="password" name="confirm" placeholder="Confirmer le mot de passe" required>
        <button type="submit">S'inscrire</button>
    </form>
</body>
</html>
    `,
        content_after: `
        <h3>3️⃣ Créer la vue d'inscription</h3>
        <p>Ouvrez le fichier <code>views.py</code> de votre application et ajoutez la vue suivante :</p>
    `,
        code_space_2: `
# app/views.py

from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from django.contrib import messages

def inscription(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        confirm = request.POST.get('confirm')

        if password != confirm:
            messages.error(request, "Les mots de passe ne correspondent pas.")
        elif User.objects.filter(username=username).exists():
            messages.error(request, "Ce nom d'utilisateur est déjà utilisé.")
        else:
            user = User.objects.create_user(username=username, email=email, password=password)
            messages.success(request, "Inscription réussie ! Connectez-vous.")
            return redirect('connexion')  # Redirection vers la page de connexion

    return render(request, 'app/inscription.html')
    `,
        content_after_2: `
        <h4>Explications :</h4>
        <ul>
            <li>Nous récupérons les données du formulaire via <code>request.POST.get()</code>.</li>
            <li>Si les mots de passe ne correspondent pas, un message d'erreur est affiché.</li>
            <li>Si le nom d'utilisateur existe déjà, un message d'erreur est également affiché.</li>
            <li>Si tout est correct, l'utilisateur est créé avec <code>User.objects.create_user()</code> et un message de succès s'affiche.</li>
            <li>Ensuite, l’utilisateur est redirigé vers la page de connexion (<code>redirect('connexion')</code>).</li>
        </ul>

        <h4>Conseils :</h4>
        <ul>
            <li>Toujours utiliser <code>{% csrf_token %}</code> dans vos formulaires POST pour la sécurité.</li>
            <li>Tester le formulaire avec différents scénarios pour vérifier la gestion des erreurs.</li>
            <li>Vous pouvez personnaliser les messages pour les rendre plus conviviaux.</li>
        </ul>

        <div class="note">
            <strong>Prochaine leçon :</strong> Nous verrons comment créer le <strong>système de connexion</strong>, pour permettre aux utilisateurs déjà inscrits de se connecter et d’accéder à des pages sécurisées.
        </div>
    `
    },
    {
        title: "Système de connexion et déconnexion Django",
        description: "Apprenez à créer un système complet de connexion, afficher les informations de l'utilisateur et gérer la déconnexion.",
        content: `
        <h3>1️⃣ Création de la page de connexion</h3>
        <p>Dans votre dossier <code>templates/app/</code>, créez un fichier <code>connexion.html</code> :</p>
    `,
        code_space: `
{% load static %}
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Connexion</title>
    <link rel="stylesheet" href="{% static 'app/css/style.css' %}">
</head>
<body>
    <h1>Connexion</h1>

    <!-- Affichage des messages -->
    {% if messages %}
        <ul>
            {% for message in messages %}
                <li>{{ message }}</li>
            {% endfor %}
        </ul>
    {% endif %}

    <form method="POST">
        {% csrf_token %}
        <input type="text" name="username" placeholder="Nom d'utilisateur" required>
        <input type="password" name="password" placeholder="Mot de passe" required>
        <button type="submit">Se connecter</button>
    </form>

    <p>Pas encore inscrit ? <a href="{% url 'inscription' %}">Créer un compte</a></p>
</body>
</html>
    `,
        content_after: `
        <h3>2️⃣ Vue de connexion</h3>
        <p>Dans <code>views.py</code>, ajoutez la logique suivante :</p>
    `,
        code_space_2: `
# app/views.py
from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login, logout
from django.contrib import messages

def connexion(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(username=username, password=password)

        if user:
            login(request, user)
            return redirect('accueil')  # Redirection vers la page d'accueil
        else:
            messages.error(request, "Nom d’utilisateur ou mot de passe incorrect.")

    return render(request, 'app/connexion.html')
    `,
        content_after_2: `
        <h3>3️⃣ Création de la page d'accueil</h3>
        <p>Cette page affichera les informations de l'utilisateur connecté :</p>
    `,
        code_space_3: `
<!-- templates/app/accueil.html -->
{% load static %}
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Accueil</title>
    <link rel="stylesheet" href="{% static 'app/css/style.css' %}">
</head>
<body>
    <h1>Bienvenue {{ request.user.username }}</h1>
    <p>Email : {{ request.user.email }}</p>

    <a href="{% url 'deconnexion' %}">Se déconnecter</a>
</body>
</html>
    `,
        content_after_3: `
        <h4>Note :</h4>
        <p>Pour qu’une page soit visible :</p>
        <ul>
            <li>La vue doit être définie dans <code>views.py</code>.</li>
            <li>L’URL doit être configurée dans <code>urls.py</code> de l’application ou du projet.</li>
            <li>Le template doit exister dans le dossier <code>templates/app/</code>.</li>
        </ul>

        <h3>4️⃣ Configuration des URLs</h3>
        <p>Dans <code>app/urls.py</code> :</p>
    `,
        code_space_4: `
# app/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('', views.inscription, name='inscription'),  # page racine = inscription
    path('connexion/', views.connexion, name='connexion'),
    path('accueil/', views.accueil, name='accueil'),
    path('deconnexion/', views.deconnexion, name='deconnexion'),
]
    `,
        content_after_4: `
        <h3>5️⃣ Vue de déconnexion</h3>
        <p>Pour permettre à l’utilisateur de se déconnecter :</p>
    `,
        code_space_5: `
# app/views.py
def deconnexion(request):
    logout(request)
    return redirect('inscription')
    `,
        content_after_5: `
        <h4>Explications :</h4>
        <ul>
            <li><code>authenticate()</code> vérifie que les identifiants sont corrects.</li>
            <li><code>login(request, user)</code> crée une session pour l'utilisateur connecté.</li>
            <li><code>logout(request)</code> détruit la session et redirige vers la page d'inscription.</li>
            <li>Les templates contiennent des liens pour naviguer entre inscription, connexion et accueil.</li>
        </ul>

        <h4>Conseil :</h4>
        <p>Testez toujours chaque scénario :</p>
        <ul>
            <li>Connexion avec un utilisateur existant</li>
            <li>Connexion avec des identifiants incorrects</li>
            <li>Déconnexion et retour à la page d'inscription</li>
        </ul>

        <div class="note">
            <strong>Prochaine leçon :</strong> Nous pourrons aborder la gestion des droits d’accès et des pages protégées pour des utilisateurs connectés seulement.
        </div>
    `
    },
    {
        title: "Résumé complet : Authentification et administration Django",
        description: "Récapitulatif sur l'inscription, la connexion, la déconnexion, l'affichage des informations, la structure du projet et la création d'un superuser pour l'administration.",
        content: `
        <h3>1️⃣ Récapitulatif du système d'inscription</h3>
        <p>Le système d'inscription permet à un utilisateur de créer un compte :</p>
        <ul>
            <li>Formulaire HTML avec champs : nom, email, mot de passe et confirmation.</li>
            <li>Utilisation de <code>POST</code> pour envoyer les données au serveur et <code>GET</code> pour afficher le formulaire.</li>
            <li>Protection avec <code>{% csrf_token %}</code> pour sécuriser les requêtes POST.</li>
            <li>Vérification côté serveur : correspondance des mots de passe, unicité du nom d’utilisateur.</li>
            <li>Création de l’utilisateur avec <code>User.objects.create_user()</code> et affichage de messages via <code>django.contrib.messages</code>.</li>
        </ul>

        <h3>2️⃣ Récapitulatif du système de connexion</h3>
        <ul>
            <li>Formulaire de connexion avec champs nom d’utilisateur et mot de passe.</li>
            <li>Utilisation de <code>authenticate()</code> pour vérifier les identifiants.</li>
            <li>Création de la session avec <code>login(request, user)</code>.</li>
            <li>Redirection vers une page d’accueil sécurisée après connexion.</li>
        </ul>

        <h3>3️⃣ Déconnexion</h3>
        <ul>
            <li>La fonction <code>logout(request)</code> supprime la session de l’utilisateur.</li>
            <li>Redirection vers la page d’inscription après déconnexion.</li>
        </ul>

        <h3>4️⃣ Affichage des informations utilisateur</h3>
        <p>Dans vos templates, vous pouvez accéder aux informations de l’utilisateur connecté :</p>
    `,
        code_space: `
<p>Nom d'utilisateur : {{ request.user.username }}</p>
<p>Email : {{ request.user.email }}</p>
    `,
        content_after: `
        <h3>5️⃣ Présentation d’un projet Django</h3>
        <p>Un projet Django est composé de plusieurs éléments :</p>
        <ul>
            <li><strong>Projet :</strong> contient la configuration globale, les settings, URLs, wsgi/asgi.</li>
            <li><strong>Application :</strong> unité fonctionnelle qui contient les vues, modèles, templates et statics.</li>
            <li><strong>Templates :</strong> fichiers HTML pour afficher le contenu.</li>
            <li><strong>Fichiers statiques :</strong> CSS, JS, images pour le style et l’interactivité.</li>
            <li><strong>Base de données :</strong> stocke les utilisateurs, messages, etc.</li>
        </ul>

        <h4>Exemple de structure :</h4>
    `,
        code_space_2: `
monprojet/
    manage.py
    monprojet/
        settings.py
        urls.py
        wsgi.py
        asgi.py
    app/
        views.py
        urls.py
        models.py
        templates/
            app/
                inscription.html
                connexion.html
                accueil.html
        static/
            app/
                css/
                js/
    `,
        content_after_2: `
        <p>Chaque élément a un rôle précis pour rendre le projet fonctionnel et organisé.</p>

        <h3>6️⃣ Création d’un superuser pour l’admin</h3>
        <p>Le superuser permet d’accéder à l’espace <strong>admin Django</strong>, gérer les utilisateurs, visualiser et modifier les données :</p>

        <h4>Pourquoi un superuser ?</h4>
        <ul>
            <li>Accès complet à l'administration.</li>
            <li>Possibilité de gérer tous les modèles et données sans coder.</li>
            <li>Indispensable pour tester et administrer un site Django en production ou en développement.</li>
        </ul>

        <h4>Comment créer un superuser ?</h4>
    `,
        code_space_3: `
python manage.py createsuperuser
# Ensuite, suivez les instructions pour définir :
# Nom d'utilisateur
# Email
# Mot de passe
    `,
        content_after_3: `
        <h4>Accéder à l'espace admin :</h4>
        <ul>
            <li>Lancez le serveur : <code>python manage.py runserver</code></li>
            <li>Rendez-vous sur <strong>http://127.0.0.1:8000/admin/</strong></li>
            <li>Connectez-vous avec le superuser créé.</li>
            <li>Vous pouvez alors visualiser tous les utilisateurs, leurs informations et gérer vos modèles.</li>
        </ul>

        <h4>Résumé global :</h4>
        <ul>
            <li>Inscription : création de comptes utilisateurs.</li>
            <li>Connexion : authentification et création de sessions.</li>
            <li>Déconnexion : suppression de la session.</li>
            <li>Affichage des informations : utilisation de <code>request.user</code> et {{}} dans les templates.</li>
            <li>Administration : superuser pour gérer toutes les données via <code>/admin/</code>.</li>
            <li>Projet Django : structure claire avec projet + applications + templates + statics + base de données.</li>
        </ul>

        <div class="note">
            <strong>Prochaine leçon :</strong> Introduction au système de discussion et messagerie dans Django pour apprendre à créer des échanges entre utilisateurs.
        </div>
    `
    },
    {
        title: "Introduction aux modèles et préparation à la discussion",
        description: "Présentation des modèles Django, leur rôle et comment les créer pour préparer la création d'un système de discussion ou d'un produit.",
        content: `
        <h3>1️⃣ Qu’est-ce qu’un modèle (model) Django ?</h3>
        <p>Un modèle est une classe Python qui définit la structure de vos données et la manière dont elles seront stockées dans la base de données.</p>
        <ul>
            <li>Chaque modèle correspond à une table dans la base de données.</li>
            <li>Chaque attribut du modèle correspond à une colonne dans la table.</li>
            <li>Django fournit des champs prédéfinis comme <code>CharField</code>, <code>EmailField</code>, <code>DateTimeField</code>, <code>IntegerField</code>, etc.</li>
        </ul>

        <h4>Rôle des modèles :</h4>
        <ul>
            <li>Définir la structure des données</li>
            <li>Créer automatiquement les tables correspondantes dans la base de données via les migrations</li>
            <li>Fournir une interface Python pour interagir avec les données (CRUD)</li>
        </ul>

        <h3>2️⃣ Création d’un modèle</h3>
        <p>Dans votre application, ouvrez <code>models.py</code> et créez une classe :</p>
    `,
        code_space: `
# app/models.py
from django.db import models

class Message(models.Model):
    auteur = models.CharField(max_length=100)
    contenu = models.TextField()
    date_creation = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.auteur} : {self.contenu[:20]}"
    `,
        content_after: `
        <h4>Explications :</h4>
        <ul>
            <li><code>Message</code> est le nom du modèle qui sera utilisé comme table dans la base de données.</li>
            <li><code>auteur</code> : champ texte pour le nom de l’utilisateur.</li>
            <li><code>contenu</code> : champ texte pour le message.</li>
            <li><code>date_creation</code> : date et heure automatique de création.</li>
            <li>La méthode <code>__str__</code> permet d’afficher une représentation lisible de chaque instance du modèle.</li>
        </ul>

        <h3>3️⃣ Points importants :</h3>
        <ul>
            <li>Après avoir créé ou modifié un modèle, il faut effectuer <code>makemigrations</code> puis <code>migrate</code> pour appliquer les changements à la base de données.</li>
            <li>Les modèles sont la base de tout système dynamique : discussions, produits, utilisateurs, etc.</li>
            <li>La prochaine leçon utilisera ce modèle pour créer un exemple concret : la création d’un produit et d’un mini système de discussion.</li>
        </ul>

        <div class="note">
            <strong>Prochaine leçon :</strong> Création d’un produit, intégration dans la base de données, et mise en place d’un mini système de discussion.
        </div>
    `
    },
    {
        title: "Création d’un produit Django",
        description: "Apprenez à créer un modèle de produit, le gérer via l’admin, créer un formulaire d’ajout et afficher les produits sur la page d’accueil.",
        content: `
        <h3>1️⃣ Création du modèle Product</h3>
        <p>Dans <code>models.py</code> de votre application, créez un modèle simple :</p>
    `,
        code_space: `
from django.db import models
from django.contrib.auth.models import User

class Product(models.Model):
    createur = models.ForeignKey(User, on_delete=models.CASCADE)
    nom = models.CharField(max_length=200)
    description = models.TextField()
    prix = models.DecimalField(max_digits=10, decimal_places=2)
    date_creation = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.nom
    `,
        content_after: `
        <p><strong>Après avoir créé le modèle :</strong></p>
        <ul>
            <li>Exécutez <code>python manage.py makemigrations</code></li>
            <li>Puis <code>python manage.py migrate</code> pour créer la table dans la base de données.</li>
        </ul>

        <h3>2️⃣ Configuration de l'admin</h3>
        <p>Pour gérer les produits dans l’admin, ouvrez <code>admin.py</code> :</p>
    `,
        code_space_2: `
from django.contrib import admin
from .models import Product

admin.site.register(Product)
    `,
        content_after_2: `
        <h3>3️⃣ Création du formulaire HTML pour ajouter un produit</h3>
        <p>Créez un fichier <code>ajouter_produit.html</code> dans <code>templates/app/</code> :</p>
    `,
        code_space_3: `
{% load static %}
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Ajouter un produit</title>
    <link rel="stylesheet" href="{% static 'app/css/style.css' %}">
</head>
<body>
    <h1>Ajouter un produit</h1>

    <form method="POST">
        {% csrf_token %}
        <input type="text" name="nom" placeholder="Nom du produit" required>
        <textarea name="description" placeholder="Description" required></textarea>
        <input type="number" step="0.01" name="prix" placeholder="Prix" required>
        <button type="submit">Ajouter</button>
    </form>

    <p><a href="{% url 'accueil' %}">Retour à l'accueil</a></p>
</body>
</html>
    `,
        content_after_3: `
        <h3>4️⃣ Vue pour ajouter un produit</h3>
        <p>Dans <code>views.py</code> :</p>
    `,
        code_space_4: `
from django.shortcuts import render, redirect
from .models import Product
from django.contrib.auth.decorators import login_required

@login_required
def ajouter_produit(request):
    if request.method == 'POST':
        nom = request.POST.get('nom')
        description = request.POST.get('description')
        prix = request.POST.get('prix')

        Product.objects.create(
            createur=request.user,
            nom=nom,
            description=description,
            prix=prix
        )
        return redirect('accueil')  # Redirection vers la page d'accueil

    return render(request, 'app/ajouter_produit.html')
    `,
        content_after_4: `
        <h3>5️⃣ Modification de la vue d'accueil pour afficher les produits</h3>
        <p>Dans <code>views.py</code>, modifiez la vue d'accueil :</p>
    `,
        code_space_5: `
from .models import Product

@login_required
def accueil(request):
    produits = Product.objects.all()
    return render(request, 'app/accueil.html', {'produits': produits})
    `,
        content_after_5: `
        <h3>6️⃣ Modification du template d'accueil pour afficher les produits</h3>
        <p>Dans <code>accueil.html</code> :</p>
    `,
        code_space_6: `
<h1>Bienvenue {{ request.user.username }}</h1>
<p>Email : {{ request.user.email }}</p>

<h2>Produits :</h2>
<ul>
    {% for produit in produits %}
        <li>{{ produit.nom }} - {{ produit.prix }}€ - Ajouté par {{ produit.createur.username }}</li>
    {% empty %}
        <li>Aucun produit disponible</li>
    {% endfor %}
</ul>

<p><a href="{% url 'ajouter_produit' %}">Ajouter un produit</a></p>
<a href="{% url 'deconnexion' %}">Se déconnecter</a>
    `,
        content_after_6: `
        <h3>7️⃣ Configuration des URLs</h3>
        <p>Dans <code>app/urls.py</code> :</p>
    `,
        code_space_7: `
from django.urls import path
from . import views

urlpatterns = [
    path('', views.inscription, name='inscription'),
    path('connexion/', views.connexion, name='connexion'),
    path('accueil/', views.accueil, name='accueil'),
    path('deconnexion/', views.deconnexion, name='deconnexion'),
    path('ajouter-produit/', views.ajouter_produit, name='ajouter_produit'),
]
    `,
        content_after_7: `
        <h4>Résumé :</h4>
        <ul>
            <li>Modèle Product avec createur, nom, description, prix et date de création.</li>
            <li>Migration obligatoire après création du modèle.</li>
            <li>Configuration de l'admin pour gérer les produits via /admin/.</li>
            <li>Template pour ajouter un produit avec formulaire POST.</li>
            <li>Vue pour gérer la création du produit et redirection vers l'accueil.</li>
            <li>Affichage des produits sur la page d'accueil.</li>
            <li>URLs correctement configurées pour toutes les pages.</li>
        </ul>

        <div class="note">
            <strong>Prochaine leçon :</strong> Création d’un forum de discussion pour permettre aux utilisateurs d’échanger des messages.
        </div>
    `
    },
    {
        title: "Système de discussion entre utilisateurs",
        description: "Création d'un chat simple entre deux utilisateurs avec modèles, vues et templates dans Django.",
        content: `
        <h3>1️⃣ Création du modèle Message</h3>
        <p>Dans <code>models.py</code> de votre application, créez une classe pour stocker les messages :</p>
    `,
        code_space: `
from django.db import models
from django.contrib.auth.models import User

class Message(models.Model):
    sender = models.ForeignKey(User, related_name='messages_envoyes', on_delete=models.CASCADE)
    receiver = models.ForeignKey(User, related_name='messages_recus', on_delete=models.CASCADE)
    contenu = models.TextField()
    date_creation = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.sender.username} -> {self.receiver.username} : {self.contenu[:20]}"
    `,
        content_after: `
        <p>Après création du modèle :</p>
        <ul>
            <li>Exécutez <code>python manage.py makemigrations</code> et <code>python manage.py migrate</code>.</li>
            <li>Vous pouvez également l’enregistrer dans l’admin pour tester via <code>admin.py</code>.</li>
        </ul>

        <h3>2️⃣ Liste des utilisateurs</h3>
        <p>Nous allons créer une page qui affiche tous les utilisateurs avec un lien vers la discussion :</p>
    `,
        code_space_2: `
# views.py
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required

@login_required
def liste_utilisateurs(request):
    utilisateurs = User.objects.exclude(id=request.user.id)
    return render(request, 'app/liste_utilisateurs.html', {'utilisateurs': utilisateurs})
    `,
        content_after_2: `
        <p>Template <code>liste_utilisateurs.html</code> :</p>
    `,
        code_space_3: `
{% load static %}
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Liste des utilisateurs</title>
</head>
<body>
    <h1>Liste des utilisateurs</h1>
    <ul>
        {% for user in utilisateurs %}
            <li>
                {{ user.username }} - <a href="{% url 'discussion' user.id %}">Discuter</a>
            </li>
        {% empty %}
            <li>Aucun utilisateur disponible</li>
        {% endfor %}
    </ul>
    <p><a href="{% url 'accueil' %}">Retour à l'accueil</a></p>
</body>
</html>
    `,
        content_after_3: `
        <h3>3️⃣ Vue de la discussion</h3>
        <p>Créons maintenant la vue qui affichera les messages entre l’utilisateur connecté et un autre :</p>
    `,
        code_space_4: `
# views.py
from .models import Message
from django.shortcuts import get_object_or_404

@login_required
def discussion(request, user_id):
    receiver = get_object_or_404(User, id=user_id)
    if request.method == 'POST':
        contenu = request.POST.get('contenu')
        if contenu:
            Message.objects.create(sender=request.user, receiver=receiver, contenu=contenu)
            return redirect('discussion', user_id=receiver.id)

    messages_envoyes = Message.objects.filter(sender=request.user, receiver=receiver)
    messages_recus = Message.objects.filter(sender=receiver, receiver=request.user)
    tous_messages = messages_envoyes.union(messages_recus).order_by('date_creation')

    return render(request, 'app/discussion.html', {'receiver': receiver, 'messages': tous_messages})
    `,
        content_after_4: `
        <h3>4️⃣ Template de discussion</h3>
        <p>Créez <code>discussion.html</code> :</p>
    `,
        code_space_5: `
{% load static %}
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Discussion avec {{ receiver.username }}</title>
</head>
<body>
    <h1>Discussion avec {{ receiver.username }}</h1>

    <div class="messages">
        {% for msg in messages %}
            <p><strong>{{ msg.sender.username }} :</strong> {{ msg.contenu }}</p>
        {% empty %}
            <p>Aucun message pour le moment.</p>
        {% endfor %}
    </div>

    <form method="POST">
        {% csrf_token %}
        <input type="text" name="contenu" placeholder="Votre message" required>
        <button type="submit">Envoyer</button>
    </form>

    <p><a href="{% url 'liste_utilisateurs' %}">Retour à la liste des utilisateurs</a></p>
</body>
</html>
    `,
        content_after_5: `
        <h3>5️⃣ Configuration des URLs</h3>
        <p>Dans <code>app/urls.py</code> :</p>
    `,
        code_space_6: `
from django.urls import path
from . import views

urlpatterns = [
    path('', views.inscription, name='inscription'),
    path('connexion/', views.connexion, name='connexion'),
    path('accueil/', views.accueil, name='accueil'),
    path('deconnexion/', views.deconnexion, name='deconnexion'),
    path('ajouter-produit/', views.ajouter_produit, name='ajouter_produit'),
    path('utilisateurs/', views.liste_utilisateurs, name='liste_utilisateurs'),
    path('discussion/<int:user_id>/', views.discussion, name='discussion'),
]
    `,
        content_after_6: `
        <h4>Résumé :</h4>
        <ul>
            <li>Modèle Message avec sender, receiver, contenu et date de création.</li>
            <li>Page pour afficher la liste des utilisateurs avec lien vers discussion.</li>
            <li>Vue de discussion qui récupère et affiche tous les messages entre deux utilisateurs.</li>
            <li>Template pour envoyer et visualiser les messages en temps réel après POST.</li>
            <li>URLs configurées pour liste des utilisateurs et discussions individuelles.</li>
        </ul>

        <div class="note">
            <strong>Prochaine leçon :</strong> Nous pourrons ajouter des fonctionnalités avancées : notifications, affichage en temps réel, interface améliorée et historique des conversations.
        </div>
    `
    },
    {
        title: "Résumé complet : Système de discussion Django",
        description: "Présentation détaillée d'un système complet de discussion entre utilisateurs avec Django, incluant modèles, vues, templates, URLs et administration.",
        content: `
        <h3>1️⃣ Présentation générale du système de discussion</h3>
        <p>Un système de discussion permet à des utilisateurs connectés d’échanger des messages entre eux.  
        Dans notre projet, chaque utilisateur peut :</p>
        <ul>
            <li>Créer un compte et se connecter via le système d'authentification.</li>
            <li>Voir la liste des autres utilisateurs disponibles pour discuter.</li>
            <li>Ouvrir une conversation individuelle avec un autre utilisateur.</li>
            <li>Envoyer et recevoir des messages affichés dans l’ordre chronologique.</li>
        </ul>

        <h3>2️⃣ Structure et organisation du projet</h3>
        <p>Le projet Django est organisé ainsi :</p>
        <ul>
            <li><strong>Projet :</strong> configuration globale (settings.py, urls.py, wsgi.py/asgi.py)</li>
            <li><strong>Application :</strong> contient les modèles, vues, templates, fichiers statiques</li>
            <li><strong>Templates :</strong> pages HTML pour l’inscription, connexion, accueil, liste des utilisateurs et discussion</li>
            <li><strong>Modèles :</strong> <code>User</code> pour les utilisateurs et <code>Message</code> pour les messages</li>
            <li><strong>URLs :</strong> chaque page a une URL définie pour permettre la navigation</li>
        </ul>

        <h3>3️⃣ Modèle Message</h3>
        <p>Chaque message est stocké dans la base avec :</p>
        <ul>
            <li><code>sender</code> : utilisateur qui envoie le message</li>
            <li><code>receiver</code> : utilisateur qui reçoit le message</li>
            <li><code>contenu</code> : texte du message</li>
            <li><code>date_creation</code> : date et heure d’envoi automatique</li>
        </ul>
        <p>Chaque modification de modèle est suivie de <code>makemigrations</code> et <code>migrate</code>.</p>

        <h3>4️⃣ Administration</h3>
        <ul>
            <li>Le modèle <code>Message</code> est enregistré dans <code>admin.py</code> pour pouvoir consulter toutes les conversations depuis l’interface admin.</li>
            <li>Un superuser permet de se connecter à <code>/admin/</code> pour voir les utilisateurs et messages.</li>
        </ul>

        <h3>5️⃣ Vues</h3>
        <p>Les principales vues du système :</p>
        <ul>
            <li><code>liste_utilisateurs</code> : affiche tous les utilisateurs disponibles pour discuter, sauf l’utilisateur connecté.</li>
            <li><code>discussion</code> : récupère tous les messages entre deux utilisateurs et permet l’envoi de nouveaux messages via POST.</li>
            <li>La vue de discussion trie les messages par <code>date_creation</code> pour un affichage chronologique.</li>
        </ul>

        <h3>6️⃣ Templates</h3>
        <p>Templates principaux :</p>
        <ul>
            <li><code>liste_utilisateurs.html</code> : liste les utilisateurs avec un lien vers la discussion.</li>
            <li><code>discussion.html</code> : affiche les messages existants et le formulaire pour envoyer un nouveau message.</li>
            <li>Liens de navigation vers l’accueil et la déconnexion sont inclus.</li>
        </ul>

        <h3>7️⃣ URLs</h3>
        <ul>
            <li><code>/utilisateurs/</code> : page listant tous les utilisateurs</li>
            <li><code>/discussion/&lt;id_user&gt;/</code> : page de discussion individuelle avec un utilisateur spécifique</li>
            <li>Les URLs pour l’inscription, connexion, accueil et déconnexion sont également configurées pour permettre la navigation complète du site.</li>
        </ul>

        <h3>8️⃣ Fonctionnement global</h3>
        <p>Voici le flux complet :</p>
        <ol>
            <li>L’utilisateur se connecte ou s’inscrit via le système d’authentification.</li>
            <li>Il accède à la page d’accueil et peut naviguer vers la liste des utilisateurs.</li>
            <li>En cliquant sur un utilisateur, il accède à la page de discussion avec cet utilisateur.</li>
            <li>Les messages sont envoyés via POST et stockés dans la base de données.</li>
            <li>Chaque message est affiché dans l’ordre chronologique et peut être consulté depuis l’admin.</li>
            <li>L’utilisateur peut se déconnecter à tout moment.</li>
        </ol>

        <h3>9️⃣ Points importants</h3>
        <ul>
            <li>Toutes les vues de discussion sont protégées par <code>@login_required</code>.</li>
            <li>Le modèle Message permet de relier un sender à un receiver pour créer des dialogues privés.</li>
            <li>L’affichage dynamique utilise <code>request.user</code> et {{}} dans les templates.</li>
            <li>Les migrations doivent toujours être effectuées après modification des modèles.</li>
            <li>La configuration de l’admin permet de consulter et modérer les messages si nécessaire.</li>
        </ul>

        <div class="note">
            <strong>Prochaine leçon :</strong> Améliorations possibles : notifications pour nouveaux messages, interface type chat, style CSS amélioré, et affichage des conversations en temps réel.
        </div>
    `
    }
    //Ensuite ??? ici cest bilan sur les discussion
];

function renderLessons() {
    const lessonsGrid = document.getElementById('lessonsGrid');

    lessons.forEach((lesson, index) => {
        const lessonCard = document.createElement('div');
        lessonCard.className = 'lesson-card';
        lessonCard.innerHTML = `
            <h3>
                <span class="lesson-number">${index + 1}</span>
                ${lesson.title}
            </h3>
            <p>${lesson.description}</p>
        `;

        lessonCard.addEventListener('click', () => openLesson(lesson));
        lessonsGrid.appendChild(lessonCard);
    });
}

function openLesson(lesson) {
    const modal = document.getElementById('lessonModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const lessonContent = document.getElementById('lessonContent');

    modalTitle.textContent = lesson.title;
    modalDescription.textContent = lesson.description;

    let contentHTML = lesson.content;

    if (lesson.code_space) {
        contentHTML += createCodeBlock(lesson.code_space);
    }

    if (lesson.content_after) {
        contentHTML += lesson.content_after;
    }

    if (lesson.code_space_2) {
        contentHTML += createCodeBlock(lesson.code_space_2);
    }

    if (lesson.content_after_2) {
        contentHTML += lesson.content_after_2;
    }

    if (lesson.code_space_3) {
        contentHTML += createCodeBlock(lesson.code_space_3);
    }

    if (lesson.content_after_3) {
        contentHTML += lesson.content_after_3;
    }

    if (lesson.code_space_4) {
        contentHTML += createCodeBlock(lesson.code_space_4);
    }

    if (lesson.content_after_4) {
        contentHTML += lesson.content_after_4;
    }

    lessonContent.innerHTML = contentHTML;

    attachCopyListeners();

    modal.classList.add('show');


}

function createCodeBlock(code) {
    const id = 'code-' + Math.random().toString(36).substr(2, 9);
    return `
        <div class="code-block">
            <button class="copy-btn" data-code-id="${id}">Copier</button>
            <pre id="${id}">${escapeHtml(code)}</pre>
        </div>
    `;
}

function escapeHtml(text) {
    const map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;'
    };
    return text.replace(/[&<>"']/g, m => map[m]);
}

function attachCopyListeners() {
    const copyButtons = document.querySelectorAll('.copy-btn');

    copyButtons.forEach(button => {
        button.addEventListener('click', function() {
            const codeId = this.getAttribute('data-code-id');
            const codeElement = document.getElementById(codeId);
            const code = codeElement.textContent;

            navigator.clipboard.writeText(code).then(() => {
                const originalText = this.textContent;
                this.textContent = 'Copié !';
                this.classList.add('copied');

                setTimeout(() => {
                    this.textContent = originalText;
                    this.classList.remove('copied');
                }, 2000);
            });
        });
    });
}

const closeModal = document.getElementById('closeModal');
const modal = document.getElementById('lessonModal');

closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});

renderLessons();
