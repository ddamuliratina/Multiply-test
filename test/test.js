import { assert } from "chai";
import multiply from "../multiply.js";
import {describe, it} from "node:test";

describe("Multiplication function", () => {
  it("should return 1 when you multiply 1 by 1", () => {
    assert.strictEqual(multiply(1, 1), 1);
  });
});