import React from 'react';
import T from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import EditSharpIcon from '@material-ui/icons/EditSharp';
import useModal from '../../../hooks/useModal';
import Modal from '../../Modal';
import { UpdateProductModalDescr } from '../../Modal/ModalDiscriptions';
import FormikContainer from '../../NewProductForm/FormikContainer/FormikContainer';

const UserProductBtnSection = ({
  productInCart,
  addToCart,
  removeFromCard,
}) => {
  const { isShowing, toggle } = useModal();
  return (
    <div>
      <IconButton
        style={{ color: '#81b29a' }}
        aria-label="upload picture"
        component="span"
        onClick={toggle}
      >
        <EditSharpIcon />
      </IconButton>
      <IconButton
        style={{ color: '#d0454c' }}
        aria-label="upload picture"
        component="span"
      >
        <DeleteForeverSharpIcon />
      </IconButton>
      {isShowing && (
        <Modal
          onClose={toggle}
          ModalDiscription={UpdateProductModalDescr}
          ModalContent={FormikContainer}
        />
      )}
    </div>
  );
};

UserProductBtnSection.propTypes = {
  productInCart: T.shape({
    id: T.string.isRequired,
    name: T.string.isRequired,
    price: T.number.isRequired,
    origin: T.string.isRequired,
  }).isRequired,
  addToCart: T.func.isRequired,
  removeFromCard: T.func.isRequired,
};
export default UserProductBtnSection;
