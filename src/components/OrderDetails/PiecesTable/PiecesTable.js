import React from 'react';
import T from 'prop-types';
import styles from './pieces-table.module.css';

const PiecesTable = ({ pieces }) => {
  return (
    <table className={styles.innerPiecesTable}>
      <thead className={styles.tableHead}>
        <tr>
          <th>Name</th>
          <th>Count</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody className={styles.tableBody}>
        {pieces &&
          pieces.map(item => (
            <tr key={item.id}>
              <th>{item.product.name}</th>
              <th>{item.count}</th>
              <th>{item.product.price}</th>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

PiecesTable.defaultProps = {
  pieces: null,
};

PiecesTable.propTypes = {
  pieces: T.arrayOf(
    T.shape({
      id: T.string.isRequired,
      count: T.number.isRequired,
      product: T.shape({
        isEditable: T.bool.isRequired,
        id: T.string.isRequired,
        name: T.string.isRequired,
        price: T.number.isRequired,
        origin: T.string.isRequired,
        createdAt: T.string.isRequired,
        updatedAt: T.string.isRequired,
      }).isRequired,
    }),
  ),
};
export default PiecesTable;
