import React, { useEffect, useCallback } from 'react';
import useOrders from '../../hooks/useOrders';
import TableRow from './OrderTableRow/TableRow';
import styles from './user-orders-panel.module.css';

const UserOrdersPanel = () => {
  const { getToOrderDetailsPage, getAllOrders, allOrders } = useOrders();
  const goToOrderPage = id => {
    getToOrderDetailsPage(id);
  };
  useEffect(useCallback(() => getAllOrders(), [getAllOrders]), []);

  return (
    <div className={styles.ordersWraper}>
      <h3>Your orders</h3>
      <table className={styles.ordersTable}>
        <thead className={styles.tableHead}>
          <tr>
            <th>Date</th>
            <th>Number of items</th>
            <th>Total price</th>
            <th>Order details</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {allOrders.length > 0 &&
            allOrders.map(({ id, createdAt, pieces }) => {
              const total = pieces.reduce(
                (acc, item) => acc + item.count * item.product.price,
                0,
              );
              const itemsNumber = pieces.length;
              const changePage = () => goToOrderPage(id);
              return (
                <TableRow
                  key={id}
                  date={createdAt}
                  totalPrice={total}
                  itemsNumber={itemsNumber}
                  onChangePage={changePage}
                />
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default UserOrdersPanel;
