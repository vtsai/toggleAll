import { render, screen, act } from '@testing-library/react';
import App from './App';

test('Toggle All', async () => {
  const { queryByTestId, queryAllByTestId } = screen
  await act(async () => {
    render(<App />);
  });
  const tAll = queryByTestId('toggleAll');
  const emails = await queryAllByTestId('emails');

  // three emails with checkboxes should be present
  expect(emails.length).toEqual(3);

  // clicking toggleAll should set toggleAll to true
  tAll.click();
  expect(tAll.checked).toEqual(true);

  // each email should be checked
  emails.forEach(email => {
    expect(email.checked).toEqual(true);
  });

  // clicking toggleAll should set toggleAll to false
  tAll.click();
  expect(tAll.checked).toEqual(false);

  // each email should be unchecked
  emails.forEach(email => {
    expect(email.checked).toEqual(false);
  });
});

test('Toggle One', async () => {
  const { queryByTestId, queryAllByTestId } = screen
  await act(async () => {
    render(<App />);
  });
  const tAll = queryByTestId('toggleAll');
  const emails = await queryAllByTestId('emails');

  // three emails with checkboxes should be present
  expect(emails.length).toEqual(3);

  // individually check each email
  emails.forEach(email => {
  	email.click();
    expect(email.checked).toEqual(true);
  });

  // toggleAll should be checked
  expect(tAll.checked).toEqual(true);

  // uncheck the first email
  emails[0].click();

  // toggleAll should be unchecked
  expect(tAll.checked).toEqual(false);

  // clicking toggleAll should set toggleAll to true
  tAll.click();
  expect(tAll.checked).toEqual(true);

  // each email should be checked
  emails.forEach(email => {
    expect(email.checked).toEqual(true);
  });

  // clicking toggleAll should set toggleAll to false
  tAll.click();
  expect(tAll.checked).toEqual(false);

  // each email should be unchecked
  emails.forEach(email => {
    expect(email.checked).toEqual(false);
  });
});