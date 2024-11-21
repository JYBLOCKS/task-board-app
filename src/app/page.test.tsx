import { render } from "@/utils/test-config-utils";
import Home from "./page";

describe("Home", () => {
  it("should render home page", () => {
    render(<Home />);
  });
});
