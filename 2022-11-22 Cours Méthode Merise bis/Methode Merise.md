LA MÉTHODE MERISE

Quand nous construisons directement les tables de bases de données dans une application de gestion de base de données (SQL, Orcale, Azure, MySQL), nous sommes exposés à deux types de problèmes.

1.  Nous ne savons pas toujours dans quelle table placer certaines colonnes, par exemple, l'adresse de livraison peut se mettre dans la table des clients ou dans la table des commandes.
2.  Nous avons du mal à prévoir les tables de jonction intermédiaires, c-à-d entre les tables principales, par exemple la table des interprètations qui est indispensable entre les tables des films et des acteurs.

Il est donc nécessaire de recourir à une étape préliminaire de conception. Ne pas hésiter à procéder à cette étape sur papier.

Pour résoudre ces différentes problématiques, nous utiliserons la Méthode Merise.

MODÈLE CONCEPTUEL DE DONNÉES

Avant de réfléchir au shéma relationnel d'une application, il est bon de modéliser la problématique à traiter d'un point de vue conceptuel et indépendamment du logiciel utilisé.

LES ENTITÉS

Une entité est une population d'individus homogènes. Par exemple, les produit ou articles vendus par une entreprise peuvent être regroupés dans une même entité : ARTICLES.

D'un article à l'autre, les informations ne changent pas la nature de l'article; il peut s'agir par exemple de la désignation du prix unitaire, de la commerciabilité.

Par contre, les articles et les clients ne peuvent pas être regroupés car les informations ne sont pas homogènes. Il faut donc leur réserver deux entités distinctes: ARTICLES et CLIENTS (fig1.jpg).

LES ASSOCIATIONS

Une association est une liaison qui a une signification précise entre plusieurs entités. Dans notre exemple (fig2.jpg), l'association 'commander' est une liaison évidente entre les entités ARTICLES et CLIENTS, tandis que l'association 'livrer' établit le lien sémantique entre les entités ARTICLES et FOURNISSEURS.

Nous remarquons que dans l'ensemble, les entités CLIENTS et FOURNISSEURS ne sont pas liées directement, mais indirectement, via l'entité ARTICLES, ce qui est assez naturel.

LES ATTRIBUTS & LES IDENTIFIANTS

Un attribut est une propriété d'une entité ou d'une association. Le prix unitaire est un attribut de l'entité ARTICLES, le nom de famille est un attribut del'entité CLIENTS, la quantité commandée est un attribut de l'association COMMANDER et la date de livraison est un attribut de l'association LIVRER (fig3.jpg).

Une entité et ses attributs ne doivent traiter que d'un seul sujet afin d'assurer la cohérence au modèle. Dans notre exemple, il est prféférable de ne pas mettre les informations relatives aux fournisseurs dans ARTICLES mais plutôt dans FOURNISSEURS.

Ensuite, chaque individu d'une entité doit être identifiable de manière unique, c'est pourquoi toutes les entités doivent posséder un attribut SANS DOUBLON : L'IDENTIFIANT (fig4.jpg).

Une entité possède au moins un attribut, son identifiant. Au contraire, une association peut être dépourvue d'attribut.

LES CARDINALITÉS

La cardinalité d'un lien entre une entité et une association précise le minimum et le maximum de fois que l'individu de l'entité peut être concerné par l'association.

Un client a commandé au moins un article et peut commander n articles (fig4.jpg), donc entre 1 et n fois, tandis qu'un article ne peut avoir été commandé qu'entre 0 et n fois, même si ce n'est pas le même n que précédemment.

Une cardinalité minimale de 1 doit se justifier par le fait que les individus de l'entité en question ont besoin de l'association pour exister (un client n'existe pas avant d'avoir commandé quoi que ce soit et la cardinalité minimale de l'entité client dans l'association COMMANDER est 1). Dans tous les autres cas, la cardinalité minimale est 0 (une liste préétablie d'articles par exemple).

Notons que, dans notre exemple (fig5.jpg), un article peut être commandé par plusieurs clients. Cela provient du fait que tous les crayons rouges ne sont pas numérotés individuellement, mais portent un numéro d'article collectif. En toute rigueur, notre entité ARTICLES aurait du s'appeler TYPES ARTICLES. Ainsi, un crayon rouge peut être commandé par plusieurs clients, ce n'est simplement pas le même crayon à chaque fois. Il s'agit d'un choix de modélisation : le lecteur peut très légitimement faire le choix inverse qui consiste à numéroter individuellement chaque crayon.

La seule difficulté pour établir correctement les cardinalités est de se poser les questions suivantes :
    -   Côté client : un client peut commander combien d'articles ? => entre 1 et plusieurs.
    -   Côté article : un article peut être commandé par combien de clients ? => entre 0 et plusieurs.

LES ASSOCIATIONS PLURIELLES

Il est permis à une association d'être branchée plusieurs fois à la même entité, comme l'association binaire réflective (fig6.jpg).

Dans cet exemple issu d'une agence immobilière, une personne peut être propriétaire, résider principalement ou résider secondairement dans un logement géré par l'agence. Les logements qui ne sont pas gérés par l'agence ne figurent pas dans l'entité des logements, ce qui explique certaines cardinalités 0 du schéma. Nous supposons également qu'un logement n'est détenu que par une seule personne et que ce propriétaire figure obligatoirement dans l'entité PERSONNES.

LES ASSOCIATIONS RÉFLECTIVES

Il est permis à une association d'être branchée plusieurs fois à la même entité, comme l'association binaire réflective.

Dans cet exemple (fig7.jpg), tout employé est dirigé par un autre employé (sauf le directeur général) et un employé peut diriger plusieurs employés, ce qui explique les cardinalités sur le schéma.

LES ASSOCIATIONS NON BINAIRES

Lorsqu'autour d'une entité toutes les associations ont pour cardinalité maximale 1 au centre et n à l'extérieur, cette entité est candidate pour être remplacée par une association branchée à toutes les entités voisines avec des cardinalités identiques 0 et n.

La deuxième condition qu'il faut impérativement satisfaire est la règle de normalisation des attributs des associations. Cette règle conduit parfois à l'apparition d'association qui étalissent un lien logique entre trois entités ou plus.

Sur la figure 8 issue d'un cinéma, l'entité projections est uniquement entourée d'associaitons dont les cardinaltés maximales sont : 1 côté projection et n de l'autre côté. De plus, lq donnée d'un créneaus, d'un film et d'une salle de projection suffit à déterminer une projection unique. On peut donc la remplacer par une association projeter branchée aux trois entités SALLES, CRÉNEAUX HORAIRES et FILM. On parle alors d'association ternaire.

BONNES PRATIQUES

Normalisation des entités : tout entité qui est remplaçable par une association doit être remplacée. Voire figure 8.

Normalisation des noms :  le nom d'une entité, d'une association ou d'un attribut doit être unique.

Pour les entités, utiliser un nom commun pluriel (CLIENTS, PERSONNES, LOGEMENTS, etc.).

Pour les associations, utiliser un verbe à l'infinitif (SE LOGER, CONCERNER, DIRIGER, etc.), éventuellement à la forme passive (ÊTRE COMMANDÉ) et accompagné d'un adverbe (AVOIR LIEU DANS, PENDANT, À, etc.).

Pour les attributs, utiliser un nom commun singulier (NOM, NUMÉRO, DESCRIPTION), éventuellement accompagné du nom de l'entité ou de l'association dans laquelle il se trouve (nom du client, numéro de l'article).

Deux entités homogènes peuvent être fusionnées.

Si deux attributs contiennent les mêmes informations, alors la redondance induit non seulement un gaspillage d'espace mais également un grand risque d'incohérence. Sur la Figure 9, les adresses risquent de ne pas être les mêmes, et dans ces conditions, où faut-il livrer ?

Normalisation des identifiants : chaque entité doit posséder un identifiant.

- Éviter les identifiants composés de plusieurs attributs (comme un identifiant formé par les attributs nom et prénom) car, d'une part, c'est mauvais pour les performances et, d'autre part, l'unicité supposée par une telle démarche finit tôt ou tard par être démentie.
- Préférer les identifiants courts pour rendre la recherche la plus rapide possible (éviter notamment les chaînes de caractères comme un numéro de plaque d'immatriculation, un numéro de sécurité sociale ou un code postal).

Conclusion : l'identifiant doit être un nombre entier incrémenté automatiquement.

Normalisation des attributs : remplacer les attributs en plusieurs exemplaires en une association supplémentaire de cardinalité maximale n et ne pas ajouter d'attribut calculable à partir d'un autre attribut.

En effet, les attributs en plusieurs exemplaires posent des problèmes en mesure d'évolutivité des modèles (Figure 10). Par exemple l'employé peut avoir une résidence secondaire.

D'autre part, les attributs calculables induisent un risque d'incohérence entre les valeurs des attributs de base et celles des attributs calculés (Figure 11).

D'autres attributs calculables classiques sont à éviter, comme l'âge qui peut être calculé à partir de la date de naissance, ou encore le département calculabe à partir de la chaîne de caractères du code postal.

Normalisation des attributs d'associations: les attributs d'une association doivent dépendre directement de toutes les entités associations.

Sur la Figure 12, la quantité commandée dépend à la fois du numéro de client et du numéro d'article; par contre, la date de commande non. Il faut donc faire une entité commande à part, idem pour la livraison.

L'inconvénient de cette règle de normalisation est qu'elle est difficile à appliquer pour les associations qui ne possèdent pas d'attribut. Pour vérifier malgré tout qu'une association sans attribut est bien normalisée, on peut lui donner temporairement un attribut imaginaire (mais pertinent) qui permet de vérifier la règle.

Par exemple, entre les entités LIVRES et AUTEURS de la Figure 13, l'association ÉCRIRE ne possède pas d'attribut. Imaginons que nous ajoutions un attribut POURCENTAGE qui contient le pourcentage de livres écrit par chaque auteur (du même livre). Comme cet attribut pourcentage dépend à la fois du numéro du livre et du  numéro d'auteur, l'asssociation ÉCRIRE est bien normalisée.

Autre conséquence de la normalisation des attributs des associations : une entité avec un cardinalité de 1,1 ou de 0,1 aspire les attributs de l'association (Figure 14).

Normalisation des associations (Figure 15) : il faut éliminer les associations fantômes, c-à-d uand les cardinalités d'une association vers deux entités est de 1,1.
Il faut aussi éviter les associations inutiles (Figure 15b).

Normalisation des cardinalités : une cardinalité minimale est toujours 0 ou 1, tandis qu'une cardinalité maximale est toujours 1 ou n.

Cela siginifie que si une cardinalité maximale est connue et vaut 2, 3 ou plus, nous considérons malgré tout qu'elle est indéterminée et vaut n. Cela se justifie par le fait que même si nous connaissons n à un moment donné de la conception, il se peut que cette valeur évolue au cours du temps. Il vaut donc mieux considérer n comme une inconnue dès le départ.

Cela signifie également qu'on ne modélise pas les cardinalités minimales qui valent plus de 1, car ce genre de valeur est aussi amenée à évoluer. Par ailleurs, avec une cardinalité maximale, l'association n'aurait aucune signification.

MODÈLE LOGIQUE DE MLDR

Maintenant que le MCD est établi, on peut le traduire en différent systèmes logiques et notamment les bases de données relationnelles qui proposent une vision plus concrète pour modéliser la situation.

CLÉS PRIMAIRES ET CLÉS ÉTRANGÈRES

Les lignes d'une table doivent être uniques : cela signifie qu'une colonne (au moins) doit servir à les identifier. Il s'agit de la clé primaire de la table.

L'absence de valeur dans une clé primaire ne doit pas être autorisée. Autrement dit, la valeur vide (NULL) est interdite dans une colonne qui sert de clé primaire, ce qui n'est pas forcément le cas des autres colonnes, dont certaines peuvent ne pas être renseignées à toutes les lignes.

De plus, la valeur de la clé primaire d'une ligne ne devrait pas, en principe, changer au cours du temps.

Il se peut qu'une colonne 1 d'une table ne doive contenir que des valeurs prises par la colonne 2 d'une autre table (par exemple, le numéro de client sur une commande doit correspondre au vrai numéro de client).

Par convention, on souligne les clés primaires et on fait précéder les clés étrangères d'un dièze # dans la description des colonnes d'une table.

Remarques : 
    - une même table peut avoir plusieurs clés étrangères mais une seule clé primaire, éventuellement composée de plusieurs colonnes.
    - une colonne clé étrangère peut aussi être primaire (dans la même table).
    - une clé étrangère peut être composée (c'est le cas si la clé primaire référencée est composée).
    - Implicitement, chaque colonne qui compose une clé primaire ne peut pas recevoir la valeur NULL.
    - Par contre, si une colonne clé étrangère ne doit pas recevoir la valeur vide, alors if faut le préciser dans la description des colonnes.

SCHÉMA RELATIONNEL

On peut représenter les tables d'une base de données relationnelles par un schéma relationnel dans lequel les tables sont appelées relations et le lien entre les clés étrangères et leur clé primaire est symbolisé par un connecteur.

TRADUCTION D'UN MDC EN MLDR

Pour traduire un MCD en un MLDR, il suffit d'appliquer 5 règles.

Notations : on dit qu'une association binaire (entre deux entittés ou réflexive) est de type :
    - 1:1 (un à un) si aucune des deux cardinalités maximales n'est n.
    - 1:n (un à plusieurs) si une des deux cardinalités maximales est n.
    - n:m (plusieurs à plusieurs) si les deux cardinalités maximales sont n.

En fait, un schéma relationnel ne peut pas faire la différence entre 0,n et 1,n, par contre il peut le faire entre 0,1 et 1,1.

Règle 1 : toute entité devient une table dans laquelle les attributs deviennent des colonnes. L'identifiant de l'entité constitue alors la clé primaire de la table.

Règle 2: une association binaire de type 1,n disparait au profit d'une clé étrangère dans la table cotée 0,1 ou 1,1 qui référence la clé primaire de l'autre table. Cette clé étrangère ne peut pas recevoir la valeur vide si la cardinalité est 1,1, par exemple l'association LIVRER sur la Figure 17.

Il ne devrait pas y avoir d'attribut dans une association de type 1,n, mais s'il en reste, alors ils glissent vers la table côté 1.

Règle 3 : une association binaire de type n:m devient une table supplémentaire (parfois appelée table de jonction ou table de jointure) dont la clé primaire est composée de deux clés étrangères (qui référencent les deux clés primaires des deux tables en association). Les attributs de l'association deviennent des colonnes de cette nouvelle table.

Par exemple, l'association concernant la Figure 18 est traduite par la table supplémentaire ligne de commande.

Règle 4 : une association binaire de type 1:1 est traduite comme une association binaire de type 1:n, sauf que la clé étrangère se voit imposer une contrainte d'unicité en plus d'une éventuelle contrainte de non-vacuité (cette contrainte d'unicité impose à la colonne correspondante de ne prendre que des valeurs distinctes).

Si les association fantômes ont été éliminées, il devrait y avoir au moins un côté de cardinalité 0:1. C'est alors dans la table du côté opposé que doit aller la clé étrangère. Si les deux côtés sont de cardinalité 0:1, alors la clé étrangère peut être placée indifféremment dans l'une des deux tables (Figure 19).

En réalité, la règle 4 proposée ici considère qu'une association binaire de type 1:1 comme une association binaire de type n:m particulière. Il suffit pour cela d'ajouter une contrainte d'unicité sur chacune des clés étrangères de la table de jonction supplémentaire (Figure 20).

Règle 5 : une association non binaire est traduite par une table supplémentaire dont la clé primaire est composée d'autant de clés étrangères que d'entités en association. Les attributs de l'association deviennent des colonnes de cette nouvelle table (Figure 21).