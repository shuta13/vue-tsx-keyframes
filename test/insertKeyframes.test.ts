import keyframes from "../src/index";

describe("insertKeyframes", () => {
  describe("keyframes", () => {
    it("exec keyframes func", () => {
      const motion = `
        @keyframes horizontal {
          0% {
            transform:translateX(-8px);
          }
          100% {
            transform:translateX(8px);
          }
        }
      `;
      expect(keyframes(motion)).not.toBeNull();
    });
  });
});
