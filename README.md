# Frontend test #3

[![Netlify Status](https://api.netlify.com/api/v1/badges/d122e24b-76c0-4823-9a59-7197eae1dec7/deploy-status)](https://app.netlify.com/sites/example-bcfa14/deploys)

<details>
  <summary>Getting started</summary>
  <div>

    ## Instructions

    - (Optional): Project can be opened in a devcontainer.
    - Install dependencies `npm i`.
    - Run the application `npm run dev`.

    ## Approach

    - Initially started by making a request to Foursquare endpoint in order to see the shape of the data returned and create a `SearchResultType` from this.
    - Build a basic structure to the app... a form and some basically markedup search results.
    - With the basic data fetching, I moved quickly onto working with `localStorage` to persist results from queries made with the form.
    - Finally I went back to tidying up the look and feel of the application, adding in a drawer model to display "more" information about a query entry.

    ## Thoughts

    Given more time:

    - I'd write some tests. Admittedly this isn't something I've had to do a latest role, but a previous role did require me to write tests with [`react-testing-library`](https://testing-library.com/docs/react-testing-library/intro/) so I do have experience with this.
    - I'd perhaps think about whether pagination could be required pagination to render larger amounts of data.
    - I'd address more of the a11y where required too given more time.
    - Break my working into regular commits, I was far too conscious of spending too much time on the project.
    - Probably shy away from CSS modules in future, they felt restricting in the way I should structure things. This might also be a symptom of having never used them before.
    - I'm a big proponent of utility classes to build applications at scale. Something like Tailwind or similar could have been used here to save a bunch of time, but I wanted to address the requirement "Showcase your CSS chops. Try and do some amount of original CSS styling".
    - I'd also address the fact that the localStorage hook doesn't handle deleting entries at the moment.

  </div>
</details>

<details>
  <summary>Task brief (supplied)</summary>
  <div>

    Build a simple interface to search for venues in London using the Foursquare API.

    ## User Story

    A user visits a website with two text fields:

    - Authentication Key (an API key for the Foursquare API)
    - Venue Name

    After entering an authentication key and venue name, the user is presented with a list of venues to choose from. Clicking on a venue in the list should display details about the venue, such as the venue's address or category.

    The website should cache search results for five minutes. When the user searches for a venue name that has been previously queried within the last five minutes, the page should display cached results rather than performing a new request to the Foursquare API.

    ## Requirements

    - App must work as described in the User Story.
    - Showcase your CSS chops. Try and do some amount of original CSS styling.
    - Include a README alongside your code test detailing how to run it.

    This repo includes a basic scaffold using [vite](https://vitejs.dev/guide/) which you are welcome use as a starting point — just run `npm install` and then `npm run dev` to get started. However, if you'd prefer to use something else, feel free to use any library or framework of choice.

    Follow the directions from the recruiter on how to submit the exercise. Please do not publish your code publicly on GitHub or any other site. :warning:

    ## Nice to haves

    - TypeScript Support
    - Unit Tests

    ## Resources

    #### Obtaining Foursquare Credentials

    To get access to the Foursquare API you need to create a developer account. Follow the steps in the [Foursquare docs](https://location.foursquare.com/developer/reference/places-api-overview) to:

    - Sign up
    - Create a new project
    - Generate an API key

    #### Authentication

    To authenticate a request to the Foursquare API, the authenication key should be passed in the `Authorization` header. See the [authentication docs](https://location.foursquare.com/developer/reference/authentication).

    #### Foursquare Nearby Places Endpoint

    - [Foursquare docs](https://location.foursquare.com/developer/reference/places-nearby)
    - https://api.foursquare.com/v3/places/nearby?ll=51.509223%2C-0.113492&query={venueName}

  </div>
</details>
