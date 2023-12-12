# Solution

## My approach

- Initially started by making a request to Foursquare endpoint in order to see the shape of the data returned and create a `SearchResultType` from this.
- Build a basic structure to the app... a form and some basically markedup search results.
- With the basic data fetching, I moved quickly onto working with `localStorage` to persist results from queries made with the form.
- Finally I went back to tidying up the look and feel of the application, adding in a drawer model to display "more" information about a query entry.

## My thoughts

Given more time:

- I'd write some tests. previous roles did require me to write tests with [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro/) so I do have some experience with this.
- I'd think about whether pagination could be required to render larger amounts of data.
- I'd address more of the a11y where required too given more time.
- Break my working into regular commits, I was far too conscious of spending too much time on the project.
- Probably shy away from CSS modules in future, they felt restricting in the way I should structure things. This might also be a symptom of having never used them before.
- I'm a big proponent of utility classes to build applications at scale. Something like Tailwind or similar could have been used here to save a bunch of time, but I wanted to address the requirement "Showcase your CSS chops. Try and do some amount of original CSS styling".
- I'd also address the fact that the localStorage hook doesn't handle deleting entries at the moment.
