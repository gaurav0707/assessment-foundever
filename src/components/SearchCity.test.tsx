import { cleanup, screen, render } from "@testing-library/react";
import SearchCity from "./SearchCity";
import { SearchCityI } from "../shared/model/City";

afterEach(cleanup);

it("input box should be present in the screen", () => {
  render(
    <SearchCity onSelectedCity={(city: SearchCityI) => console.log(city)} />
  );
  const inputNode1 = screen.getByTestId("search-city-input");
  expect(inputNode1).toBeInTheDocument();
});
