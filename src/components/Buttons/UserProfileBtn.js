import React from 'react';
import clsx from 'clsx';
import { btn, userBtn, orange, yellow } from './buttons.module.css';

const UserProfileBtn = () => {
  return (
    <svg
      className={clsx(btn, userBtn)}
      enableBackground="new 0 0 512 512"
      height="512"
      viewBox="0 0 512 512"
      width="512"
    >
      <path
        className={orange}
        d="m256 0-160.398 256 160.398 256c141.385 0 256-114.615 256-256s-114.615-256-256-256z"
        fill="#FDC367"
      />
      <path
        className={yellow}
        d="m0 256c0 141.385 114.615 256 256 256v-512c-141.385 0-256 114.615-256 256z"
        fill="#F2CC8F"
      />
      <path
        d="m256 60-65.788 105 65.788 105c57.99 0 105-47.01 105-105s-47.01-105-105-105z"
        fill="#81B29A"
      />
      <path
        d="m151 165c0 57.99 47.01 105 105 105v-210c-57.99 0-105 47.01-105 105z"
        fill="#8FCFBE"
      />
      <path
        d="m424.649 335.443c-19.933-22.525-48.6-35.443-78.649-35.443h-90l-60 76 60 76c70.322 0 135.636-38.01 170.454-99.198l5.306-9.325z"
        fill="#81B29A"
      />
      <path
        d="m166 300c-30.049 0-58.716 12.918-78.649 35.443l-7.11 8.035 5.306 9.325c34.817 61.187 100.131 99.197 170.453 99.197v-152z"
        fill="#8FCFBE"
      />
    </svg>
  );
};

export default UserProfileBtn;
