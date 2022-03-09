import { getByTestId, render } from "@testing-library/react";
import Search from './Search';


test('check input field', ()=> {
    const { getByTestId } = render(<Search />);
    const inputField = getByTestId('textFieldTest');
    expect(inputField).toBeTruthy() // is the inputfield in the DOM;
});

