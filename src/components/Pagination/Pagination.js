import React from 'react';
import T from 'prop-types';
import CustomBtn from '../Buttons/CustomButton';

const Pagination = ({ styles, page, pages, onChangePage }) => {
  return (
    <div className={styles}>
      <CustomBtn
        actionCallback={onChangePage}
        text="Previous"
        isDisabled={page === 1}
      />
      <p>
        Page: {page}/{pages}
      </p>
      <CustomBtn
        text="Next"
        isDisabled={page === pages}
        actionCallback={onChangePage}
      />
    </div>
  );
};

Pagination.propTypes = {
  styles: T.string.isRequired,
  page: T.number.isRequired,
  pages: T.number.isRequired,
  onChangePage: T.func.isRequired,
};

export default Pagination;
