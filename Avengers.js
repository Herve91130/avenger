const maxImages = 10;
const pathImage ="\images";
const avengers = [
    [0,  "Captain America.jpg", "Steven « Steve » Rogers, alias Captain America est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics. Créé par le scénariste Joe Simon et le dessinateur Jack Kirby, le personnage de fiction apparaît pour la première fois dans le comic book Captain America Comics #1, paru en décembre 1940n 3 mais avec la date de mars 1941 inscrite sur la couverture2."],
    [1,  "Captain Marvel.jpg", "Le docteur Robert Bruce Banner (souvent nommé Bruce Banner, son deuxième prénom), alias Hulk est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics. Créé par le scénariste Stan Lee et le dessinateur Jack Kirby, le personnage de fiction apparaît pour la première fois dans le comic book The Incredible Hulk (vol. 1) #1 en mai 1962"],
    [2,  "Hulk.jpeg","Le docteur Robert Bruce Banner (souvent nommé Bruce Banner, son deuxième prénom), alias Hulk est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics. Créé par le scénariste Stan Lee et le dessinateur Jack Kirby, le personnage de fiction apparaît pour la première fois dans le comic book The Incredible Hulk (vol. 1) #1 en mai 1962"]
    [3,  "Iron Man.jpg","Anthony « Tony » Stark, alias Iron Man (litt. « l'Homme de fer ») est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics. Créé par le scénariste Stan Lee, développé par Larry Lieber et conçu par les dessinateurs Don Heck et Jack Kirby, le personnage de fiction apparaît pour la première fois dans le comic book Tales of Suspense (vol. 1) #39 en mars 1963, scénarisé par Larry Lieber et dessiné par Don Heck."],
    [4,  "Spider.jpg","Peter Parker, alias Spider-Man (souvent écrit « Spiderman » de façon erronée1) est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics. Créé par le scénariste Stan Lee et le dessinateur Steve Ditko, le personnage de fiction apparaît pour la première fois dans le comic book Amazing Fantasy (vol. 1) #15 en août 1962."],
    [5,  "Thor.jpg","Thor Odinson, alias Thor est une divinité et un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics. Créé par l'éditeur Stan Lee, le scénariste Larry Lieber et le dessinateur Jack Kirby, le personnage de fiction apparaît pour la première fois dans le comic book Journey into Mystery (vol. 1) #83 en août 1962."]
    [6,  "Vision.jpg","La Vision (« The Vision » en VO)2 est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics.Une première version du personnage de fiction, Aarkus (en), est créée par le scénariste Joe Simon et le dessinateur Jack Kirby et date de l’âge d'or des comics, apparaissant pour la première fois dans le comic book Marvel Mystery Comics #13 en novembre 1940, publié par Timely Comics."],
    [7,  "Woleverine.jpg","Logan, alias Wolverine est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics. Créé par l'éditeur en chef de Marvel Comics Roy Thomas3, le scénariste Len Wein4 et le dessinateur John Romita, Sr.5, le personnage de fiction apparaît pour la première fois dans le comic book Incredible Hulk (vol. 1) #180 en octobre 1974."],
    [8,  "Arrow.jpg","Hawkeye est une mini-série créée par Jonathan Igla pour le service de streaming Disney+, basée sur le personnage de Marvel Comics du même nom. Il se déroule dans l'Univers cinématographique Marvel (MCU), partageant la continuité avec les films de la franchise. La série se déroule après les événements du film Avengers: Endgame (2019), dans le cadre de la phase IV du MCU, et présente le nouveau super-héros Kate Bishop/Hawkeye."]
    [9,  "Black Panther.jpg","Black Panther, ou Panthère noire au Québec, est un film de super-héros américain coécrit et réalisé par Ryan Coogler, sorti en 2018. Adapté du personnage de Marvel Comics T'Challa alias Black Panther (interprété par Chadwick Boseman), il s'agit du dix-huitième film de l'univers cinématographique Marvel et du sixième de la phase trois."],
    [10, "Black Widow.jpg","La Veuve noire (« Black Widow » en version originale) est le nom de deux personnages de fiction évoluant dans l'univers Marvel de la maison d'édition Marvel Comics."],
  ];

class Avengers {
    constructor() {
    }

    add (name, power, imageLink){
        this.name[maxImage] = name;
        this.power[maxImage] = power;
        this.image[maxImage] = imageLink;
        maxImage++;
    }

    getRandom () {
        return Math.floor (Math.random * maxImage);
    }

    displayLog () {
    }
}

