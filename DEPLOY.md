# GitHub Pages Deployment Guide

Follow these steps to deploy Exam Buddy to GitHub Pages:

## Step 1: Create a GitHub Repository

1. Go to [github.com](https://github.com) and sign in (or create an account)
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name your repository (e.g., "exambuddy" or "exam-buddy")
5. Choose "Public" (required for free GitHub Pages)
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click "Create repository"

## Step 2: Initialize Git and Push Files

Open your terminal/command prompt in the project folder and run:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Exam Buddy app"

# Add your GitHub repository as remote (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

**Note:** Replace `YOUR_USERNAME` with your GitHub username and `YOUR_REPO_NAME` with your repository name.

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab (top menu)
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click "Save"
6. Wait a few minutes for GitHub to build your site
7. Your site will be available at:
   `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Step 4: Access Your Deployed Site

- GitHub will provide you with the URL after deployment
- It usually takes 1-2 minutes for the site to be live
- You can check the deployment status in the "Actions" tab

## Updating Your Site

Whenever you make changes:

```bash
git add .
git commit -m "Description of changes"
git push
```

Your changes will be live in 1-2 minutes!

## Troubleshooting

- **404 Error**: Make sure you selected the correct branch and root folder in Pages settings
- **Site not updating**: Wait a few minutes and refresh
- **Files not showing**: Make sure all files are committed and pushed to GitHub

## Custom Domain (Optional)

If you want to use a custom domain:
1. Add a `CNAME` file in your repository root with your domain name
2. Update your domain's DNS settings as per GitHub's instructions
3. Enable custom domain in Pages settings

