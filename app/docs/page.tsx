/* eslint-disable react/no-unescaped-entities */
import { Link } from "@nextui-org/link";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";

import { title } from "@/components/primitives";

export default function DocsPage() {
  return (
    <div className="flex flex-col items-center gap-10 p-10">
      {/* Introduction */}
      <section className="max-w-4xl text-center">
        <h1 className={title({ size: "lg" })}>Documentation</h1>
        <p className="text-white-600 mt-4">
          Welcome to the official documentation page! This guide will help you
          understand how to use, contribute to, and extend the projects,
          templates, and resources available on this site. Whether you're a
          beginner or an experienced developer, you'll find everything you need
          here to get started and collaborate effectively.
        </p>
      </section>

      {/* Getting Started */}
      <section className="max-w-4xl">
        <h2 className="text-3xl font-semibold mb-2">Getting Started</h2>
        <p className="text-white-600 mb-4">
          Before diving into the projects, ensure you have the required tools
          installed. Follow the steps below to set up your environment and run
          your first project.
        </p>
        <h3 className="text-xl font-medium mb-2">Prerequisites</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Node.js (version 14+)</li>
          <li>Git</li>
          <li>MongoDB (if using the database-related projects)</li>
        </ul>
        <h3 className="text-xl font-medium mb-2">Installation</h3>
        {/* Wrap the code block in a div to avoid errors */}
        <div className="bg-white-100 p-4 rounded-md mb-4">
          <Code>{`git clone <repository_url>\ncd project-name\nnpm install\nnpm run dev`}</Code>
        </div>
        <p className="text-white-600">
          Now, you’re ready to start developing! If you encounter issues, check
          the troubleshooting section below.
        </p>
      </section>

      {/* Project Structure */}
      <section className="max-w-4xl">
        <h2 className="text-3xl font-semibold mb-2">Project Structure</h2>
        <p className="text-white-600 mb-4">
          Here's a breakdown of the file and folder structure of each project,
          so you can understand where to find key components and how the
          codebase is organized.
        </p>
        {/* Wrap the code block in a div */}
        <div className="bg-white-100 p-4 rounded-md mb-4">
          <Code>{`/src\n  /components\n  /pages\n  /utils\n  index.js\n  package.json`}</Code>
        </div>
        <p className="text-white-600">
          The core components and pages are located in the `src` directory. The
          `components` folder contains reusable UI elements, while `pages`
          defines the routes and views.
        </p>
      </section>

      {/* Key Features & Core Concepts */}
      <section className="max-w-4xl">
        <h2 className="text-3xl font-semibold mb-2">Core Concepts</h2>
        <p className="text-white-600 mb-4">
          These projects focus on delivering scalable, high-performance systems.
          The following key concepts are applied throughout the development:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Backend Development:</strong> APIs are built using Node.js
            and Express.js for creating RESTful services.
          </li>
          <li>
            <strong>Frontend Development:</strong> The UI is crafted with modern
            JavaScript frameworks like React and Next.js.
          </li>
          <li>
            <strong>Database Management:</strong> MongoDB is used for handling
            data efficiently.
          </li>
        </ul>
      </section>

      {/* API Documentation */}
      <section className="max-w-4xl">
        <h2 className="text-3xl font-semibold mb-2">API Documentation</h2>
        <p className="text-white-600 mb-4">
          If your project includes APIs, here are the available endpoints,
          methods, and parameters. This will help you interact with the backend
          services easily.
        </p>
        <h3 className="text-xl font-medium mb-2">Endpoints</h3>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>GET /api/users:</strong> Fetch a list of users.
          </li>
          <li>
            <strong>POST /api/users:</strong> Create a new user.
          </li>
          <li>
            <strong>PUT /api/users/:id:</strong> Update user details.
          </li>
          <li>
            <strong>DELETE /api/users/:id:</strong> Remove a user.
          </li>
        </ul>
      </section>

      {/* Contributing */}
      <section className="max-w-4xl">
        <h2 className="text-3xl font-semibold mb-2">Contributing</h2>
        <p className="text-white-600 mb-4">
          Contributions are welcome! Follow the guidelines below to contribute
          to the projects.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Fork the repository and clone it locally.</li>
          <li>Create a new branch for your feature or bugfix.</li>
          <li>
            Ensure the code passes all tests and follows coding standards.
          </li>
          <li>
            Submit a pull request with a detailed explanation of your changes.
          </li>
        </ul>
      </section>

      {/* Testing & Deployment */}
      <section className="max-w-4xl">
        <h2 className="text-3xl font-semibold mb-2">Testing & Deployment</h2>
        <p className="text-white-600 mb-4">
          Projects include unit and integration tests to ensure reliability.
          Here's how you can run the tests and deploy the application to
          production.
        </p>
        <h3 className="text-xl font-medium mb-2">Running Tests</h3>
        <div className="bg-white-100 p-4 rounded-md mb-4">
          <Code>{`npm run test`}</Code>
        </div>
        <h3 className="text-xl font-medium mb-2">Deployment</h3>
        <p className="text-white-600 mb-4">
          To deploy, follow these instructions for deploying on platforms like
          Vercel or Heroku.
        </p>
      </section>

      {/* FAQs & Troubleshooting */}
      <section className="max-w-4xl">
        <h2 className="text-3xl font-semibold mb-2">FAQs & Troubleshooting</h2>
        <p className="text-white-600 mb-4">
          Having issues? Check out the FAQs or troubleshooting tips to resolve
          common problems.
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>Q:</strong> What do I do if the server doesn't start?
            <br />
            <strong>A:</strong> Ensure Node.js is installed and check the logs
            for specific errors.
          </li>
          <li>
            <strong>Q:</strong> How do I connect to the database?
            <br />
            <strong>A:</strong> Ensure MongoDB is running locally or configure a
            remote database in the environment variables.
          </li>
        </ul>
      </section>

      {/* License */}
      <section className="max-w-4xl">
        <h2 className="text-3xl font-semibold mb-2">License</h2>
        <p className="text-white-600 mb-4">
          This project is open-source and available under the MIT license.
        </p>
        <Link
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="https://opensource.org/licenses/MIT"
        >
          View License
        </Link>
      </section>
    </div>
  );
}
