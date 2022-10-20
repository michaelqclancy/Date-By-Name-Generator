document.addEventListener('DOMContentLoaded', function() {
    start();
});

var name = "";
var date = "";
var search = "";

var input_name;
var input_date;
var find;
var surprise;

var dates = [
    "Abseiling", "Acrobatic Class", "Acting Class", "Aerobics Class", "Amusement Park", " Aquarium", "Arcade", "Aromatherapy", "Art Gallery", "Auction",
    "Bakery", "Ballet", "Bar", "Baseball Game", "Basketball Game", "Bed And Breakfast", "Belly Dance", "Bingo", "Blimp Ride", "Botanical Garden",
    "Cabaret", "Cafe", "Carnival", "Casino", "Cinema", "Cocktails", "Coffee", "Concert", "Cooking Class", "Crossfit",
    "Dance", "Darts", "Deep Sea", "Dirt Bike", "Disco", "Diner", "Dinner Theather", "Drag Show", "Drawing", "Drive-In",
    "Early Bird Special", "Eatery", "Elegant", "Escape Room", "Estate Sale", "Exercise", "Exhibit", "Extreme", "Exotic Eats", "Expo",
    "Face a Fear", "Fancy", "Farm", "Fashion Show", "Festival", "Fine Dining", "Flea Market", "Food Tour", "Football", "Forest",
    "Gala", "Gaming", "Garden", "Greenhouse", "Ghost Tour", "Go-Karts", "Golf", "Gourmet Dining", "Guitar Lesson", "Gymnastics",
    "Happy Hour", "Harbor", "Haunted House", "Hayride", "Helicopter Ride", "Hiking", "Hockey", "Hookah Bar", "Horseback Riding", "Hot Air Balloon", 
    "Ice Cream", "Ice Skating", "Ikea", "Improv Class", "Improv Show", "Indie Band", "Indoor Swimming", "Inline Skating", "Inspiration Board", "Island Getaway", 
    "Jacuzzi", "Jam Out", "Java", "Jazz", "Jeep", "Jetski", "Jogging", "Jousting", "Judo", "Juggle",  
    "Karaoke", "Karting", "Kayak", "Kebabs", "Keg", "Kite Flying", "Kite Surfing", "Kickboxing", "Knitting", "K-Pop Club",
    "Lake", "Lasertag", "Learn", "Leisure", "Lightshow", "Limo", "Line Dancing", "Live Music", "Lounge", "Luau",
    "Magic Show", "Makeover", "Marina", "Massage", "Masquerade", "Meteor Shower", "Mini Golf", "Movie", "Museum", "Musical",
    "National Park", "Nature", "Nerdy", "NFL", "Night Class", "Night Market", "Nightclub", "Noodles", "Novelty", "Nursery ",
    "Observatory", "Ocean", "Old Fashioned", "Opera", "Orchard", "Ordinary", "Orienteering", "Origami", "Outdoor", "Oxygen Bar", 
    "Paddleboat", "PADI", "Pageant", "Painting", "Parade", "Park", "Petting Zoo", "Photography", "Picnic", "Planetarium",
    "Quadruple Date", "Quality", "Quarters", "Quiet", "Quilt", "Quirky", "Quiz", "QEII", "Quick", "Queen", "Queer",
    "Racquetball", "Ranch", "Rappel", "Resort", "Restaurant", "Road Trip", "Rock Band", "Rock Climb", "Roller Coasters", "Rooftop Bar", 
    "Salsa Dancing", "Scavenger Hunt", "Scuba Diving", "Seafood", "Skiing", "Skydive", "Snorkling", "Spa", "Street Art", "Surfing", "Symphony",
    "Tandem Biking", "Tango", "Tasting", "Technology-Free", "Tennis", "Theater", "Theme Park", "Tour", "Tourist Attractions", "Tubing", 
    "U-Pick", "Ukulele", "Underground", "Underwater", "Unwinding", "Uplifiting", "Unplugged", "Urban", "Upcycling", "University",
    "Variety Show", "Viewing", "Villa", "Vineyard", "Vintage Shops", "Virtual Reality", "Voice Lessons", "Volleyball", "Volunteer", "Voyage",
    "Walking Tour", "Waltz", "Weekend Getaway", "Weird", "Whale Watching", "White Water Rafting", "Wind Surfing", "Woodworking", "Wrestling", "Writing", 
    "Xbox", "Xplore", "Xhibit", "Xtreme Sports", "Xylophone", "X Marks The Spot", "Xmas", "X Of Something", "Xterior Dining", "Xclusive",
    "Yacht", "Yard Sale", "Yellow Things", "Yelp a New Restaurant", "Yes Dates", "Yoga", "Yurt Camping", "Yard Date", "You", "YouTube",
    "Zero Gravity", "Zipline", "Zoo", "Zumba", "Zodiac", "Zombies", "Zero Waste", "Zero Dollar"
]

var description = [
    "awesome", "breathtaking", "cool", "delightful", "exciting", "fabulous", "great", "heavenly", "incredible", "just right", "like a knee slapper", "marvelous",
    "nifty", "okay", "phenominal", "quite fun", "remarkable", "sensational", "tantilizing", "unbelievable", "very romantic", "wonderful", "extraordinary", "like a yes", "like a zinger"
]

function start () {
    input_name = document.getElementById("input_name");
    input_date = document.getElementById("input_date");
    output = document.getElementById("output");
    find = document.getElementById("find_date");
}

function generate () {
    name = input_name.value;
    date = input_date.value;
    
    selection = ""

    if (name != "" && date != "")
    {
        find.style.display = "inline-block";
        
        num = Math.floor(Math.random() * 2);
        if (num) {
            selection = dateByLetter(name.charAt(0).toUpperCase());
        } else {
            selection = dateByLetter(date.charAt(0).toUpperCase());
        }

        output.innerHTML = aOrAn(selection.charAt(0)) + `<strong>` + selection + `</strong>` + " date sounds " + randomDescription() + "!";
    }
    else
    {
        output.innerHTML = "We need the names of the two love birds!"
    }
}

function dateByLetter (letter) {
    var list = [];

    for(var i = 0; i < dates.length; i++)
    {
        if (dates[i].charAt(0) == letter) {
            list.push(dates[i]);
        }
    }

    num = Math.floor(Math.random() * list.length);

    search = list[num];

    find.innerHTML = `Find ` + list[num] + ` Dates Near Me`;

    return list[num];
}

function find_date () {
    open("https://www.google.com/search?q=Find+" + search + "+Dates+Near+Me");
}

function surprise_date () {
    num = Math.floor(Math.random() * dates.length);

    open("https://www.google.com/search?q=Find+" + dates[num] + "+Dates+Near+Me&btnI");
}

function aOrAn (letter) {
    const vowels = ['A', 'E', 'I', 'O', 'U', 'a', 'e', 'i', 'o', 'u']
    
    if (vowels.includes(letter))
    {
        return "An ";
    }

    return "A ";
}

function randomDescription() {
    num = Math.floor(Math.random() * description.length);

    return description[num];
}