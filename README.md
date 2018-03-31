# burger-handlebars-app

Eat-Da-Burger! is a restaurant app that lets users input the names of burgers they'd like to eat, and devour them. 

--------
This app was built with MySQL, Node, Express, Sequelize, and Handlebars. Sequelize routes data in the app, and Handlebars generates the HTML.

![burger photo](https://raw.githubusercontent.com/ColeSantiago/sequelizedBurger/master/public/assets/img/burger-readme.png)

How the app works for the user:
--
*  Whenever a user submits a burger's name, the app will display the burger on the left side of the page.

*  If there is no input, the user will be promted to fill in a burger.

*  Each burger in the waiting area also has a Devour it! button, and an additional text box to add in a guest name. When the user fills in a name and clicks the devour it button, the burger will move to the right side of the page with the name of the user who ate it along with it.

*  If there is no guest name, the user will be prompted to fill in a guest name.

*  The app will store every burger  and guest in a database on their own tables, joined by what burger the guest devoured.

*  The burger table will also keep track of what burgers have been devoured or not.

It can be run on a node server with a mysql database, or found at:
https://burgersequelize-colesantiago.herokuapp.com/