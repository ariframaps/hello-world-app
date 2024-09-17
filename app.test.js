const request = require("supertest");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

describe("GET /", () => {
  it("should return Hello World", async () => {
    const res = await request(app).get("/");
    expect(res.text).toBe("Hello World!");
    expect(res.statusCode).toBe(200);
  });
});

describe("GET /coba", () => {
  it("should return Hello Coba Coy", async () => {
    const res = await request(app).get("/coba");
    expect(res.text).toBe("Hello Coba Coy!");
    expect(res.statusCode).toBe(200);
  });
});
