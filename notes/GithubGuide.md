# Git and GitHub Guide for Next.js Project

## Introduction
Welcome to our Next.js project! This guide will help you get started with Git and GitHub, essential tools for collaborating on software projects.

## What is Git?
Git is a version control system that lets you manage and keep track of your source code history.

## What is GitHub?
GitHub is a cloud-based hosting service that lets you manage Git repositories.

## Prerequisites
- Install Git: [Download here](https://git-scm.com/downloads)
- Create a GitHub account: [Sign up](https://github.com/join)
- Basic understanding of command line.

## Configuring Git
First, configure your Git username and email using the terminal:
```bash
git config --global user.name "Your Name"
git config --global user.email "your_email@example.com"
```

## Cloning the Repository
```bash
git clone https://github.com/saka01/canteenly.git
```
## Creating a new branch
```bash
git checkout -b <your-branch-name>
```

## Switching Branch
```bash 
git checkout <branch-name>
```
## Checking the Status before pushing code
```bash
git status
```
## Making Changes and Committing
```bash
git add .
git commit -m "Add a descriptive message about your changes"

```
## Pushing Changes to Github
```bash
git push origin <your-branch-name>
```

## Creating a Pull Request
To merge your changes into the main branch, create a pull request:

- Go to the repository on GitHub.
- Click on 'Pull requests' > 'New pull request'.
- Select your branch and provide a description of your changes.
- Click 'Create pull request'.
### Code Review
- Team members can review the pull request and suggest changes.
- Once approved, the changes can be merged into the main branch.
### Updating Your Local Repository
Regularly update your local repository with changes from the main branch:

```bash 
git checkout main
git pull origin main
```
### Resolving Merge Conflicts
If there are conflicts between your branch and the main branch, resolve them by editing the conflicted files and then commit the resolved changes.

### Best Practices
- Regularly commit and push changes to your branch.
- Keep your branch updated with the main branch.
- Write clear and descriptive commit messages.