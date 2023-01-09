# ***<u>Le jeu de la vie</u>***


### ***La grille***

La simulation de vie se passe sur une grille de 1000 px / 1000 px.
Chaque cycle des cellules naissent et/ou meurent.
Une cellule est un pixel.

### ***Les règles***

Une cellule nait lorsque 3 de ses 8 voisines est vivantes et reste en vie tant qu'il reste 2 à trois cellules vivantes.
Si il y a au moins de 2 on dit qu'elle meurt d'isolement.
Et plus de 3, on dit qu'elle meurt de surpopulation.


### ***Les Controls***

- Le pinceau / gomme : permet de créer des cellules sur la grille avec votre souris ou de les supprimer.
- Control du temps des cycles : slider permettant de gérer les cycles par secondes.
- Pause/Lecture : bouton permettant de mettre les cycle en pause ou non.
- Reset : bouton qui réinitialise la grille à zero et met en pause.
- Random : bouton qui génèrent des cellules aléatoirement sur la grille.