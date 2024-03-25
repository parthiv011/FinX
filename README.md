# FinX
FinX is an financial application similar to Quicko with features like income and expense tracking, budgeting tools, tax calculations and reporting.


## Here's a more granular breakdown of your finance application, including requests, pages, models, and other details:

### 1. Requests (API Endpoints):

#### User Management:
1. /api/users/register (POST): Creates a new user account.
2. /api/users/login (POST): Authenticates a user and returns a token for secure access.
3. /api/users/me (GET): Retrieves the currently logged-in user's profile information.

#### Financial Data:
1. /api/categories (GET): Fetches all available financial transaction categories.
2. /api/categories (POST): Creates a new custom category (optional).
3. /api/transactions (GET): Retrieves a user's financial transactions based on filters (date range, category).
4. /api/transactions (POST): Creates a new financial transaction (income or expense).
5. /api/transactions/:id (GET): Retrieves a specific transaction by its ID.
6. /api/transactions/:id (PUT): Updates an existing transaction.
7. /api/transactions/:id (DELETE): Deletes a transaction.
8. /api/taxes/calculate (POST): (Optional) Calculates tax liability based on user income and deductions (consult tax professionals).


### Technologies 

1. Typescript
2. Node(express)
3. PostgresQl
4. Prisma
5. React + Redux
6. Chakra UI
7. Docker for Containerization

### Deployments

AWS 
