const axios = require("axios");
const { describe, it, expect } = require("vitest");

describe("API Service", () => {
  it("should fetch data successfully", async () => {
    const response = await axios.get(
      "http://localhost:8081/api/tasks/inCompleted"
    );
    expect(response.status).toBe(200);
    expect(response.data).toBeDefined();
  });

  it("should handle errors", async () => {
    try {
      await axios.get("https://api.example.com/invalid-endpoint");
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  });
});
