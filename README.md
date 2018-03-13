# readit

Readit - a read-only 'clone' of reddit.com

## Known Issues and Pending Development
Currently runs stable in Chrome, have had  CORS issues in Firefox and Mobile web browsers, still looking into fixing those.

Currently the comments page shows the root comments that reply to the post. It also shows the children comments that reply to the root comments.
   - Looking into a working solution that will be able to display all nested child comments instead of only the direct replies to root comment.

## Future Development
Create a route that renders user data when a user is selected from within the app.

Set up OAuth and a login page so the user can actually log into their reddit account and see their homepage / subreddit's

Up-vote and Down-vote functionality

Allow a user to post comments

Allow a user to post into a subreddit.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with NPM)
* [Ember CLI](https://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/zenmasterjobo/Readit.git`
* `cd readit`
* `npm install`

## Running / Development

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

### Deploying

Specify what it takes to deploy your app.

 - Patience
 
## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](https://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)
