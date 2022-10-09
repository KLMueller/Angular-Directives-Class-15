***As of 10//09, entire exercise completed minus the bonus and search-results not yet used. All working functions are coming from navabr and randomColor Directive.
<br>
***As of 10/08, only completed up to step #3.  Still a work in progress

# Class15AngularDirectives

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

Class Exercise Instructions

1. Create a new Angular application.

2. Generate two components using the CLI:

"navbar": a component that displays an input box and a search button.
"search-results": a component that displays a list of your search history.

3. The "NavbarComponent" should contain an input and a button.

The input should use two-way-binding to update a variable in your typescript file.

The button should have a click listener that runs a function that adds the currentSearchTerm to an array of searches.

4. The "SearchResultsComponent" should loop through the searchHistory array and display all the searches you have previously inputed.

Display the text of the search on its own line

5. Create a new Directive called "RandomBGColorDirective".

This directive should take in an elementRef and give it a random background color.
Publish your project to GitHub!

Bonus: Listen for a hover event inside your "RandomBgColorDirective" that updates the background color of that element to a new color.
