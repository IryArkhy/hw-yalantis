import React from 'react';
import T from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import EditSharpIcon from '@material-ui/icons/EditSharp';

const UserProductBtnSection = ({ onOpenModal, onDeleteProduct }) => {
  return (
    <div>
      <IconButton
        style={{ color: '#81b29a' }}
        aria-label="upload picture"
        component="span"
        onClick={onOpenModal}
      >
        <EditSharpIcon />
      </IconButton>
      <IconButton
        style={{ color: '#d0454c' }}
        aria-label="upload picture"
        component="span"
        onClick={onDeleteProduct}
      >
        <DeleteForeverSharpIcon />
      </IconButton>
    </div>
  );
};

UserProductBtnSection.propTypes = {
  onOpenModal: T.func.isRequired,
  onDeleteProduct: T.func.isRequired,
};
export default UserProductBtnSection;
