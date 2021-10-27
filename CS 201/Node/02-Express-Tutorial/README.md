# Menu

## Titles

Shows every foods title on the menu.

### __Get__
> http://localhost:3000/api/menu

<addr>
    

        "title": "buttermilk pancakes"
      },
      {
        "title": "diner double"
      },
      {
        "title": "godzilla milkshake"
      },
      {
        "title": "country delight"
      },
    
</addr>

<hr>
<hr>

## Categories

Shows all of the different food categories on the menu.

### __Get__
> http://localhost:3000/api/menu

<addr>
    
 
    [
      "breakfast",
      "lunch",
      "shakes"
    ]
    
</addr>

<hr>
<hr>

## Params

Sort by titles of each item on the menu using params.

### __Get__
> http://localhost:3000/api/menu/:id

<addr>

    {
      "id": 4,
      "title": "country delight",
      "category": "breakfast",
      "price": 20.99,
      "img": "./images/item-4.jpeg",
      "desc": "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, "
    }

</addr>

<hr>
<hr>

## Query

Search by the category each food item fits into

### __Get__
> http://localhost:3000/api/v1/query?search=

<addr>

    {
      "id": 3,
      "title": "godzilla milkshake",
      "category": "shakes",
      "price": 6.99,
      "img": "./images/item-3.jpeg",
      "desc": "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
    },
    {
      "id": 6,
      "title": "oreo dream",
      "category": "shakes",
      "price": 18.99,
      "img": "./images/item-6.jpeg",
      "desc": "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"
    },
    {
      "id": 9,
      "title": "quarantine buddy",
      "category": "shakes",
      "price": 16.99,
      "img": "./images/item-9.jpeg",
      "desc": "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
    }
</addr>

<hr>
<hr>

## Asc _(Ascending)_

Show every food item sorted by price from lowest to hghest

### __Get__
> http://localhost:3000/api/menu/v1/asc

<addr>

      "id": 3,
      "title": "godzilla milkshake",
      "category": "shakes",
      "price": 6.99,
      "img": "./images/item-3.jpeg",
      "desc": "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral."
    },
    {
      "id": 7,
      "title": "bacon overflow",
      "category": "breakfast",
      "price": 8.99,
      "img": "./images/item-7.jpeg",
      "desc": "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird "
    },
    {
      "id": 8,
      "title": "american classic",
      "category": "lunch",
      "price": 12.99,
      "img": "./images/item-8.jpeg",
      "desc": "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  "
    },
    {
      "id": 2,
      "title": "diner double",
      "category": "lunch",
      "price": 13.99,
      "img": "./images/item-2.jpeg",
      "desc": "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats "
    },
</addr>

<hr>
<hr>

## Dec _(decending)_

Show every food item sorted by price from highest to lowest.


### __Get__
> http://localhost:3000/api/menu/v1/dec

<addr>

      
      "id": 5,
      "title": "egg attack",
      "category": "lunch",
      "price": 22.99,
      "img": "./images/item-5.jpeg",
      "desc": "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up "
    },
    {
      "id": 4,
      "title": "country delight",
      "category": "breakfast",
      "price": 20.99,
      "img": "./images/item-4.jpeg",
      "desc": "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, "
    },
    {
      "id": 6,
      "title": "oreo dream",
      "category": "shakes",
      "price": 18.99,
      "img": "./images/item-6.jpeg",
      "desc": "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday"
    },
    {
      "id": 9,
      "title": "quarantine buddy",
      "category": "shakes",
      "price": 16.99,
      "img": "./images/item-9.jpeg",
      "desc": "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing."
    },
</addr>