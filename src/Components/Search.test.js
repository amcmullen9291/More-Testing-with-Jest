import { render, act, fireEvent } from "@testing-library/react";
import Search from './Search';


test('check input field', ()=> {
    const { getByTestId } = render(<Search />);
    const inputField = getByTestId('textFieldTest');
    expect(inputField).toBeTruthy() // is the inputfield in the DOM;
});


test('changes state with input', async() => {
    await act(async() => {
        const { getByTestId } = render(<Search />);
        const inputSearch = getByTestId('textFieldTest');
        const nameSearch = "Anthony";  //simulates writing "Anthony" in the text field
        const enteredSearch = getByTestId('registeredSearch');
        await fireEvent.change(inputSearch, {target: {value: nameSearch}});
        expect(enteredSearch.innerHTML).toBe(nameSearch);
    })
})