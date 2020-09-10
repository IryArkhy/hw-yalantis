import React, { useEffect, useHistory, useParams } from 'react';
import { useSelector } from 'react-redux';
import useOrders from '../../hooks/useOrders';
import { getOrder } from '../../redux/selectors/selectors';

const testData = {
  id: 'string',
  pieces: [
    {
      product: {
        id: 'string',
        name: 'string',
        price: 0,
        origin: 'europe',
        createdAt: 'string',
        updatedAt: 'string',
        isEditable: true,
      },
      count: 0,
    },
  ],
  createdAt: 'string',
};
const UserOrdersPanel = () => {
  // const { pieces, createdAt, id } = testData;
  const { getToOrderDetailsPage, getOrderById } = useOrders();
  const params = useParams();
  const history = useHistory();
  const id = params.productId;
  const goToOrderPage = () => getToOrderDetailsPage(id);
  const returnToPreviusPage = () => history.goBack();

  useEffect(() => {
    getOrderById(id);
  }, [getOrderById, id]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Number of items</th>
            <th>Total price</th>
            <th>Order details</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {/* <td>{createdAt}</td>
            <td>{pieces.length}</td> */}
            <td>1000</td>
            <td>Details</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserOrdersPanel;
