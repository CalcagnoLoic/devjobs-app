import { it, describe, expect } from "vitest";
import { parseRequirements } from ".";

describe("parseRequirements Unit Test Suite", () => {
  const array = [
    "Build up our tech stack around Haskell and introduce best practices",
    "Contribute to the design of our conversational engine and the architecture supporting it",
    "Design new UIs, working closely with users, stakeholders and the backend team.",
    "Maximize robustness, performance, and scalability of solutions",
  ];

  const role =
    '["Help define our software engineering culture", "Write high quality software for the frontend", "Do code reviews", "Proactively solve the problems most important to the business"]';

  const requirements =
    '["Expert Node.js proficiency in a production environment", "Proficiency in developing REST APIs", "Expert proficiency with relational databases (MySQL) and optimizing SQL queries", "Extensive experience with microservices-based architecture in production", "Experience with CircleCI, Jenkins or similar CI/CD applications"]';

  it("should be render an array of string", () => {
    const result = parseRequirements(role);
    expect(Array.isArray(result)).toBe(true);
    expect(result.every((item) => typeof item === "string")).toBe(true);
  });

  it("should be render directly an array", () => {
    expect(parseRequirements(array)).toBe(array);
  });

  it("should be render roles into an array of string", () => {
    expect(parseRequirements(role)).toStrictEqual([
      "Help define our software engineering culture",
      "Write high quality software for the frontend",
      "Do code reviews",
      "Proactively solve the problems most important to the business",
    ]);
  });

  it("should be render requirements into an array of string", () => {
    expect(parseRequirements(requirements)).toStrictEqual([
      "Expert Node.js proficiency in a production environment",
      "Proficiency in developing REST APIs",
      "Expert proficiency with relational databases (MySQL) and optimizing SQL queries",
      "Extensive experience with microservices-based architecture in production",
      "Experience with CircleCI, Jenkins or similar CI/CD applications",
    ]);
  });
});
