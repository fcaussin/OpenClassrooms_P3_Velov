# OpenClassrooms_P3_Velov

Concevez une carte interactive de location de vélos.


## Énoncé

Vous devez développer une application simulant la réservation de vélos (Vélo'v) dans Lyon. Ces vélos sont répartis dans de nombreuses stations dans la ville. L'utilisateur doit pouvoir en réserver un depuis son navigateur (à condition qu'il reste des vélos disponibles à la station !). La réservation sera temporairement enregistrée sur le navigateur du visiteur.

Vous développerez l'application entièrement en JavaScript en affichant une carte à l'aide de l’API GoogleMaps avec la liste des stations de location de vélos disponibles dans la ville de Lyon.

Vous allez développer une carte permettant de réserver des vélos dans Lyon.


## Instructions

- Diaporama

La page d’accueil de l’application affichera un diaporama de photos et de textes expliquant le fonctionnement de l'application. Ce diaporama réagit également au clavier avec les touches gauche et droite pour reculer et avancer manuellement.

- Carte des vélos

En-­dessous du diaporama se trouve une carte exploitant l'API GoogleMaps avec la localisation de toutes les stations de vélos, positionnées à l’aide de marqueurs.
Un clic sur un marqueur affiche l’état de la station dans un panneau construit en HTML et
CSS à côté de la carte Google Maps.

La localisation et l'état de chaque station (ouverte, en travaux, combien de vélos et de places sont disponibles, etc.) est fourni via l'API de JCDecaux. Les données doivent provenir de l'API temps réel.

- Réservation d'un vélo

Il doit être possible de réserver un vélo disponible à la station sélectionnée en signant dans un champ libre implémenté à l’aide de l’API HTML5 Canvas. Une fois la signature validée, un vélo est marqué comme réservé à cette station.

Pour ce projet, la réservation n'aura en réalité aucun effet. Seul le navigateur de l'utilisateur "retiendra" que le vélo a été réservé.
Les données de réservation seront stockées dans le navigateur à l’aide de l’API HTML5 Web Storage et affichées dans un pied de page en­-dessous du panneau.

La réservation expire automatiquement au bout de 20 minutes et également lorsque le navigateur web se referme.

Le pied de page affiche en permanence l’état de la réservation (s’il y en a une), avec un décompte dynamique du temps restant avant expiration de la réservation.

Il ne peut y avoir qu'une réservation à la fois. Si une nouvelle réservation a lieu, elle remplace la précédente.

## Contraintes techniques

Vous pouvez utiliser la bibliothèque jQuery mais pas de plugins jQuery. Vous développerez donc le diaporama en entier vous-mêmes.

Le code JavaScript doit entièrement être conçu en programmation orientée objet.

Le code doit exploiter les API Google Maps et les API JCDecaux. Il doit également utiliser les API Web Storage et Canvas.

## Ressources complémentaires

En plus des cours du parcours, vous pouvez consulter les ressources suivantes pour vous aider :

- Chapitre "L'élément Canvas" du cours JavaScript


## Fichiers à fournir

Code HTML, CSS et JavaScript de l'application

## Soutenance

Pour cette soutenance, vous vous positionnerez comme un développeur présentant son travail à son CTO,  chef de projet ou responsable dans l’entreprise (selon le choix de votre mentor), pendant 25 minutes. Cette étape sera suivie de 5 minutes de questions/réponses.

## Compétences à valider

- Interagir avec la page et l'utilisateur
- Programmer en langage JavaScript
