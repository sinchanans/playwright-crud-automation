# Playwright CRUD Automation Framework

## Overview

This project is an end-to-end test automation framework developed using Playwright and TypeScript for the OrangeHRM web application. The framework automates critical employee management workflows and demonstrates modern QA automation practices.

## Features

* Login Automation
* Add Employee
* Search Employee
* Update Employee
* Delete Employee
* HTML Test Reports
* Reusable Login Utility
* Cross-Browser Testing Support

## Tech Stack

* Playwright
* TypeScript
* Node.js
* Git & GitHub
* GitHub Actions

## Project Structure

playwright-crud-automation/
├── tests/
│   ├── login.spec.ts
│   ├── addEmployee.spec.ts
│   ├── searchEmployee.spec.ts
│   ├── updateEmployee.spec.ts
│   └── deleteEmployee.spec.ts
├── utils/
│   └── login.ts
├── .github/workflows/
├── playwright.config.js
├── package.json
└── README.md

## Automated Test Scenarios

1. User Login
2. Add Employee
3. Search Employee
4. Update Employee Details
5. Delete Employee

## Run Tests

npm install
npx playwright test

## Generate HTML Report

npx playwright show-report

## Key Learning Outcomes

* UI Test Automation using Playwright
* Locator Strategies
* CRUD Workflow Testing
* Regression Testing
* Test Reporting
* GitHub Version Control
* CI/CD Integration

## Author

Sinchana N S
MCA Graduate | Aspiring QA Engineer | Playwright | TypeScript | Automation Testing
