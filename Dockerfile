# Use the official Playwright image.
# It has all the necessary dependencies for Playwright.
# Using a specific version is recommended for stability.
FROM mcr.microsoft.com/playwright:v1.58.1-noble

# Set the working directory in the container.
WORKDIR /app

# Copy dependency-related files first to leverage Docker layer caching.
COPY package.json yarn.lock .yarnrc.yml ./
COPY .yarn ./.yarn
COPY playwright.config.ts ./

# Copy the rest of your application's code.
COPY . .

# Expose the port the Next.js app will run on.
EXPOSE 3000

ENV PLAYWRIGHT_BASE_URL=http://host.docker.internal:3000

# Set the default command to run Playwright tests.
# You can override this command when you run the container.
CMD ["yarn", "test:e2e"]
