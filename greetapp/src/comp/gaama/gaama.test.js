import { render, screen } from '@testing-library/react';
import Gamma from './gaama';

test('renders gaama ', () => {
    render(<Gamma name="Neeraj" />)
    const linkElement = screen.getByText("Gamma Neeraj");
  expect(linkElement).toBeInTheDocument();
});
// test('renders gaama ', () => {
//     render(<Gamma  />)
//     const linkElement = screen.getByText("Gamma");
//   expect(linkElement).toBeInTheDocument();
// });
test('renders paragraph', () => {
    render(<Gamma  />)
    const pElement = screen.getByText("My name", {exact : false});
  expect(pElement).toBeInTheDocument();
});