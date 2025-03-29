import { assert } from "chai";
import multiply from "../multiply.js";
import {describe, it} from "node:test";

describe("Multiplication function", () => {
  it("should return 4 when you multiply 2 by 2", () => {
    assert.strictEqual(multiply(2, 2), 4);
  });
});