import Button from './Button';
import { getByTestId, queryByTestId, render } from "@testing-library/react";


test('check if button 1 exists', ()=> {
    const { getByTestId } = render(<Button />);
    const button = getByTestId('buttonTest');
    expect(button).toBeTruthy() // is the inputfield in the DOM;
});

test('check if button 2 exists', ()=> {
    const { queryByTestId } = render(<Button />);
    const button = queryByTestId('button2Test');
    expect(button).toBeFalsy() // second button starts hidden
});

