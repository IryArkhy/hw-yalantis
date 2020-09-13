import React from 'react';
import T from 'prop-types';
import { format } from 'date-fns';
import styles from './order-details.module.css';
import PiecesTable from './PiecesTable';
import 'react-toastify/dist/ReactToastify.css';

const OrderDetails = ({ order }) => {
  const { createdAt, pieces } = order;
  const totalPrice =
    pieces &&
    pieces.reduce((acc, item) => acc + item.count * item.product.price, 0);
  const fomatedDate = createdAt && format(new Date(createdAt), 'dd.MM.yy');
  return (
    <section className={styles.orderSection}>
      <h3>OrderDetails</h3>
      <table className={styles.orderTable}>
        <tbody>
          <tr>
            <th>Creation date </th>
            <th>{fomatedDate}</th>
          </tr>
          <tr>
            <th>Items: </th>
            <th>
              <PiecesTable pieces={pieces} />
            </th>
          </tr>
          <tr>
            <th>Total Price: </th>
            <th>{totalPrice}</th>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

OrderDetails.propTypes = {
  order: T.shape({
    id: T.string,
    createdAt: T.string,
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
  }).isRequired,
};
export default OrderDetails;
