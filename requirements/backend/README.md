# Backend Task

## Description:
Your job is to create a simple API to retrieve information about a product.

## Pre-Development
Before you begin developing, create a branch from master and name it `firstName_lastNameInitial`, e.g. `git checkout -b james_g` and publish the branch to the remote repo.  
There are also some things to configure before developing:
- Run `composer install`
- Configure your db credentials inside the .env file. Note: `mysql` is our preferred db, if you do not have mysql, sqlite will suffice. Just make sure to update the `.env.example` so we know which database type to use.
- Run `php artisan init`

> Note: A default user will be initialised for you to be able to login and retrieve a JWT token. The credentials can be found at `config/default-user.php`. This is mainly for efficiency so you don't have to waste time registering a user yourself (you may wish to do this if you please).

## Requirements:
1. **Product Properties:**  
All columns must be created using Laravel migrations.  
Each product should have the following properties:
    - id (primaryKey)
    - name (string)
    - description (text)
    - slug (string - unique)
    - price (integer)
    - discount (decimal - between 0 and 1 inclusive)
    - final_price (integer)
    - active (boolean)
> Note: not all properties need to be defined as columns. But perhaps as a computed property to be returned in the api response.

2. **Validation and Error Handling:**  
Implement validation rules for a product. Return appropriate error responses/codes with meaningful error messages for invalid requests.

### Bonus:
- Implement a cart model so that user's cart is persistent
- Write feature tests to ensure the functionality of your API endpoints. Use PHPUnit for writing tests.

## Need Clarification?
If you're having trouble interpreting the requirements please don't hesitate to email me at `james@medmate.com.au`

## Submission:
Once you have finalised the applicaiton, push the finished product to your branch (you may make as many commits as necessary). Create a pull request from your branch to base repository `Medmate-Australia-Pty/task-manager-test` and base branch `master`. Please format the pull request name to be "Submission for <firstName_lastNameInitial>", e.g. "Submission for james_g".