import os # lecture dossier local
import smtplib # email
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import sys # arrêter le programme
import urllib.request
import time
import subprocess

time.sleep(20)

path = 'C:/Users/St eloi borne/Downloads/'
url = "https://www.google.fr/" # URL à tester

try:
    response = urllib.request.urlopen(url)
    # Si la connexion est réussie, continuer avec le reste du code
except:
    print("Impossible de se connecter à", url)
    sys.exit() # Arrêter le programme en cas d'échec de la connexion


# Définir le nom du fichier et le nombre maximum de fichiers à rechercher
filename_prefix = "dataFormulaire ("
filename_extension = ").txt"
max_files = 100

# Initialiser la chaîne de caractères pour afficher les informations
message = "Bonjour,<br>\nDes visiteurs de notre borne interactive, on remplie le formulaire de contact. Voici leurs informations:<br>\n"

# ---

#fichiers_a = os.listdir(directory)

#print(fichiers_a)
#print("--")
#if "dataFormulaire (1).txt" in fichiers_a:
#    print("ok")
#else:
#    print("rien")

# ---
# Rechercher tous les fichiers correspondant au format "nom-du-fichier?.txt"
found_files = []
found_files.append("C:/Users/St eloi borne/Downloads/dataFormulaire.txt")
for i in range(0, max_files + 1):
    filename = filename_prefix + str(i) + filename_extension
    test = path + filename
    if os.path.isfile(test):
        found_files.append(test)

# Si aucun fichier n'est trouvé, arrêter le programme
if not found_files:
    print("Aucun fichier texte n'a été trouvé.")
    print(found_files)
    sys.exit()

print(found_files)

# Lire les données dans les fichiers et les ajouter au message


for file in found_files:
    with open(file, "r") as f:
        lines = f.readlines()
        if len(lines) > 0:
            data = eval(lines[0])
            message += f"- Nom complet : {data['nom']}<br>\n- Email : {data['email']}<br>\n- Numéro de téléphone : {data['telephone']}<br>\n- Formation : {data['choix']}<br>\n- sujet : {data['sujet']}<br>\n- informations complémentaires : {data['complémentaire']} <br>\n<br>\n"

            # Supprimer le fichier
            #os.remove(file)

# Ajouter le texte de fin
message += "Nous vous invitons à les contacter dès que possible pour leur faire parvenir la formation et leur faire découvrir nos offres.<br>\nCordialement."

# Afficher le message final
print(message)



# --- envoie de mail ---
# Paramètres SMTP pour Elastic Email
smtp_server = 'smtp.elasticemail.com'
smtp_port = 2525
smtp_username = 'thyestes_propkg@simplelogin.com'
smtp_password = ''

# Destinataire et expéditeur de l'email
from_email = 'thyestes_propkg@simplelogin.com'
to_email = 'thyestes_propkg@simplelogin.com'

# Corps et sujet du message
subject = 'inscription formulaire de borne - Liste de formulaire'
body = message

# Création du message
msg = MIMEMultipart()
msg['From'] = from_email
msg['To'] = to_email
msg['Subject'] = subject
msg.attach(MIMEText(body, 'html'))

# Connexion au serveur SMTP et envoi de l'email
with smtplib.SMTP(smtp_server, smtp_port) as server:
    server.login(smtp_username, smtp_password)
    server.sendmail(from_email, to_email, msg.as_string())

subprocess.Popen(["C:\\Users\\St eloi borne\\Desktop\\v2\\activESAIP\\back-end-programme\\delscript.bat"])

print("programme terminé, le mail est normalement envoyé")
