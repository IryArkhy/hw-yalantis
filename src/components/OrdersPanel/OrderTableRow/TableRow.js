import React from 'react';
import T from 'prop-types';
import styles from './table-row.module.css';

const TableRow = ({ date, itemsNumber, totalPrice, onChangePage }) => {
  return (
    <>
      <tr>
        <td>{date}</td>
        <td>{itemsNumber}</td>
        <td>{totalPrice}</td>
        <td>
          <button type="button" onClick={onChangePage}>
            Details
          </button>
        </td>
      </tr>
    </>
  );
};

TableRow.propTypes = {
  date: T.string.isRequired,
  itemsNumber: T.number.isRequired,
  totalPrice: T.string.isRequired,
  onChangePage: T.func.isRequired,
};
export default TableRow;
