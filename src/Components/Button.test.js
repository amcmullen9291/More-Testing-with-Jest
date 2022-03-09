import Button from './Button';
import { render, act, fireEvent, getByTestId, queryByTitle, queryByPlaceholderText } from "@testing-library/react";


test('check if button 1 exists', ()=> {
    const { getByTestId } = render(<Button />);
    const button = getByTestId('buttonTest');
    expect(button).toBeTruthy() // is the inputfield in the DOM;
});

test('check if button 2 exists', ()=> {
    const { queryByTestId, queryByTitle } = render(<Button />);
    const button = queryByTestId('button2Test');
    const buttonSecondCheck = queryByTitle('button2')
    expect(button).toBeFalsy(); // second button starts hidden
    expect(buttonSecondCheck).toBeFalsy() // added title attribute

});

test('renders second button onClick', async() => {
    await act(async () => {
        const { getAllByTestId } = render(<Button/>);
        const buttonList = getAllByTestId('buttonTest') // drawback- all the buttons have the same test ID
        await fireEvent.click(buttonList[0]);
        expect(getAllByTestId('buttonTest')).toHaveLength(2);
    })
})

