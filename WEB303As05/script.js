/*
    Assignment 05 Jackson Land W0812232
*/

$(document).ready(function () {
    // your code here
    class ContentItem {
        id;
        name;
        description;
        category;

        constructor(id, name, description,category) {
            this.id =id;
            this.name = name;
            this.description = description;
            this.category = category;
        }
            updateContentItem(id,name,description,category) {
                if((this.id == id) && (this.name != null) && (this.description != null) && (this.category != null)) {
                    this.name = name;
                    this.description = description;
                    this.category = category;
                }
            }
            get getId(){
                return this.id;
            }
            set setId(title){
                this.id = title + this.id;
            }
            toString(){
                console.log()
                $("#content-item-list").append("<div class='content-item-wrapper' id='content-item-"+this.id+"' style='border-style:double; width:80%; padding:10px; margin:15px'>"+
                "<h2>" + this.name + "</h2><p>"+this.description+"</p>"+"<div>"+this.category+"</div></div>");
             }
}
//list of fish
let ContentItemList = [
    new ContentItem(0,"Clownfish", "Clownfish typically live at the bottom of shallow seas in sheltered reefs or in shallow lagoons. They are not found in the Atlantic. Clownfish and sea anemones "+
    "have a symbiotic, mutualistic relationship, each providing many benefits to the other.", "Water type: Saltwater"),

    new ContentItem(1,"Angelfish", "Angel fish originate from the Amazon Basin, Orinoco Basin and various rivers in the Guiana Shield in tropical South America. "+ 
    "They are laterally compressed, with round bodies and elongated triangular dorsal and anal fins. This body shape allows them to hide among roots and plants, "+
    "Angelfish are ambush predators and prey on small fish and macroinvertebrates.", "Water type: Freshwater"),

    new ContentItem(2,"Swordfish", "Swordfish commonly reach 3 m (10 ft) in length. The swordfish relies on its great speed and agility in the water to catch its prey, "+
    "research suggest a maximum value of 36 km/h (22 mph). They have special organs next to their eyes to heat their eyes and brains", "Water type: Saltwater"),


    new ContentItem(3,"Beluga (sturgeon)", "Beluga Sturgeon also know as Great Sturgeon It is found primarily in the Caspian and Black Sea basins, and formerly in the Adriatic Sea. "+
    "It is the third-most-massive living species of bony fish. Heavily fished for the female's valuable roe, known as beluga caviar,", "Water type: Freshwater/ Saltwater"),

    new ContentItem(4,"Wolf Eel","Wolf Eel can grow up to 2.4 m (7 ft 10 in) in length and 18.4 kg (41 lb) in weight "+
    "Younger wolf eels are orange with big dark spots in the posterior part of the body. Once older they turn grey, brown greyish or dark olive","Water type: Saltwater" )
];
for(let i in ContentItemList){
    ContentItemList[i].toString()
}
});


