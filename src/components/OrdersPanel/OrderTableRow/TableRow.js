import React from 'react';
import T from 'prop-types';
import { format } from 'date-fns';

const TableRow = ({ date, itemsNumber, totalPrice, onChangePage }) => {
  const formatedDate = date && format(new Date(date), 'dd.MM.yyyy');

  return (
    <>
      <tr>
        <td>{formatedDate}</td>
        <td>{itemsNumber}</td>
        <td>{totalPrice}$</td>
        <td>
          <button type="button" onClick={onChangePage}>
            Details
          </button>
        </td>
      </tr>
    </>
  );
};
TableRow.defaultProps = {
  date: '',
};
TableRow.propTypes = {
  date: T.string,
  itemsNumber: T.number.isRequired,
  totalPrice: T.number.isRequired,
  onChangePage: T.func.isRequired,
};
export default TableRow;
