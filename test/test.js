import { assert } from "chai";
import multiply from "../multiply.js";
import {describe, it} from "node:test";

describe("Multiplication function", () => {
  it("should return 1 when you multiply 1 by 1", () => {
    assert.strictEqual(multiply(1, 1), 1);
  });

  it("should return 4 when you multiply 2 by 2", () => {
    assert.strictEqual(multiply(2, 2), 4);
  });

  it("should return 9 when you multiply 3 by 3", () => {
    assert.strictEqual(multiply(3, 3), 9);
  });

  it("should return 16 when you multiply 4 by 4", () => {
    assert.strictEqual(multiply(4, 4), 16);
  });

  it("should return 1035 when you multiply 23 by 45", () => {
    assert.strictEqual(multiply(23, 45), 1035);
  });
});