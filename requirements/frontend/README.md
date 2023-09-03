# Frontend Task

## Description:
Your task is to build out a product page using the designs from [here](./designs/desktop-design.jpg). A [style guide](./style-guide.md) is also provided to reference the different colours available.

## Installation & Setup
Before you begin developing, create a branch from master and name it `firstName_lastNameInitial`, e.g. `git checkout -b james_g` and publish the branch to the remote repo.
- Configure the application by running `composer install && npm install`
- To run the application you need a minimum of php7.3 to serve the application. Once php is installed you may run `php artisan serve`
- Open a second terminal and run `npm run watch`
- By default you should be able to go to http://localhost:8000 in your browser and the application will be ready to use.

## Requirements:
- Use the design to create a pixel perfect UI using VueJS. There is a [style guide](./style-guide.md) with colours and sizes to help with development.
- 
- Make a GET request to `/client/products/fall-limited-edition-sneakers`. Use the response from the api to populate the data in the UI.

### Bonus:
- The api only has one slug that will return a response with product data, namely 'fall-limited-edition-sneakers'. Any other slug will return a 404 status code. The bonus task is to catch this error and create an appropriate 404 - Page Not Found view using VueJS. The design will be left to your creativity 😁.

## Need Clarification?
If you're having trouble interpreting the requirements please don't hesitate to email me at `james@medmate.com.au`

## Submission:
Once you have finalised the applicaiton, push the finished product to your branch (you may make as many commits as necessary). Create a pull request from your branch to base repository `Medmate-Australia-Pty/product-page-test` and base branch `master`. Please format the pull request name to be "Submission for <firstName_lastNameInitial>", e.g. "Submission for james_g".