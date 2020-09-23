import React from 'react';
import T from 'prop-types';
import { format } from 'date-fns';

const TableRow = ({ date, onChangePage, pieces }) => {
  const formatedDate = date && format(new Date(date), 'dd.MM.yyyy');

  const totalPrice = pieces.reduce(
    (acc, item) => acc + item.count * item.product.price,
    0,
  );
  const itemsNumber = pieces.length;
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
  pieces: T.arrayOf(
    T.shape({
      count: T.number,
      product: T.shape({
        price: T.number,
      }),
    }).isRequired,
  ).isRequired,
  onChangePage: T.func.isRequired,
};
export default TableRow;
