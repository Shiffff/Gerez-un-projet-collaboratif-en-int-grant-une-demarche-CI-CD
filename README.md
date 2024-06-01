# BobApp

Clone project:

> git clone XXXXX

## Front-end

Go inside folder the front folder:

> cd front

Install dependencies:

> npm install

Launch Front-end:

> npm run start;

### Docker

Build the container:

> docker build -t bobapp-front .

Start the container:

> docker run -p 8080:8080 --name bobapp-front -d bobapp-front

## Back-end

Go inside folder the back folder:

> cd back

Install dependencies:

> mvn clean install

Launch Back-end:

> mvn spring-boot:run

Launch the tests:

> mvn clean install

### Docker

Build the container:

> docker build -t bobapp-back .

Start the container:

> docker run -p 8080:8080 --name bobapp-back -d bobapp-back

# Processus de CI/CD pour le projet "BobApp"

Le projet "BobApp" utilise un processus de CI/CD pour automatiser les tests, l'analyse de code et le déploiement des applications Backend et Frontend. Voici un résumé des étapes impliquées dans ce processus :

## 1. Participation au Projet

Pour participer au projet, les contributeurs doivent suivre les étapes suivantes :

- Créer une branche à partir de la branche `dev`.
- Effectuer les modifications nécessaires dans la branche créée.
- Soumettre une Pull Request (PR) vers la branche `dev` pour examen.

La branche `main` est protégée, ce qui signifie que les modifications ne peuvent pas être directement fusionnées dans cette branche. Toutes les modifications doivent d'abord passer par la branche `dev` pour être évaluées et intégrées.

## 2. Processus de Test Backend

### Étapes :

1. **Build et Test avec Maven** : Les tests backend sont exécutés en utilisant Maven. Les résultats des tests sont générés.
2. **Analyse SonarCloud** : Une analyse du code est effectuée avec SonarCloud pour évaluer la qualité du code. Les critères de qualité sont définis comme suit :
   - Coverage inférieur à 80.0%
   - Duplicated Lines supérieur à 3.0%
3. **Construction et Push de l'image Docker** : Une fois que les tests et l'analyse sont réussis, une image Docker est construite et poussée sur Docker Hub.

## 3. Processus de Test Frontend

### Étapes :

1. **Installation des Dépendances et Exécution des Tests** : Les dépendances sont installées et les tests frontend sont exécutés.
2. **Analyse SonarCloud** : Une analyse du code est effectuée avec SonarCloud pour évaluer la qualité du code. Les critères de qualité sont définis comme suit :
   - Coverage inférieur à 80.0%
   - Duplicated Lines supérieur à 3.0%
3. **Construction et Push de l'image Docker** : Une fois que les tests et l'analyse sont réussis, une image Docker est construite et poussée sur Docker Hub.

## Conclusion

Le processus de CI/CD du projet "BobApp" garantit que toutes les modifications de code sont testées, analysées et déployées de manière automatisée. Les contributeurs sont encouragés à respecter les critères de qualité définis pour garantir la stabilité et la sécurité du projet.
