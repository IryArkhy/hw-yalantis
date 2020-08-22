import React from 'react';
import clsx from 'clsx';
import { Button } from 'theme-ui';
import styles from './buttons.module.css';

export const CartButton = () => {
  return (
    <svg viewBox="0 0 512 512" className={clsx(styles.btn, styles.btnCart)}>
      <g>
        <path
          style={{
            fill: '#E07A5F',
          }}
          d="M451.938,374.154H156.023c-6.878,0-12.844-4.747-14.391-11.448L67.02,39.385H14.769  C6.613,39.385,0,32.772,0,24.616S6.613,9.846,14.769,9.846h64c6.878,0,12.844,4.747,14.391,11.448l74.612,323.321h284.166  c8.157,0,14.769,6.613,14.769,14.769C466.708,367.541,460.095,374.154,451.938,374.154z"
          data-original="#6972DA"
          className="active-path"
          data-old_color="#6972DA"
        />
        <path
          style={{
            fill: '#3FA875',
          }}
          d="M508.764,74.466c-2.803-3.503-7.046-5.542-11.533-5.542H92.402c-4.501,0-8.756,2.052-11.558,5.575  s-3.845,8.13-2.833,12.515l45.444,196.923c1.547,6.701,7.514,11.448,14.391,11.448h315.077c6.908,0,12.893-4.788,14.409-11.527  L511.64,86.935C512.625,82.557,511.567,77.97,508.764,74.466z"
          data-original="#1692FF"
          className=""
          data-old_color="#1692FF"
        />
        <path
          style={{
            fill: '#E07A5F',
          }}
          d="M216.615,393.846c-29.86,0-54.154,24.293-54.154,54.154c0,29.86,24.293,54.154,54.154,54.154  s54.154-24.293,54.154-54.154C270.769,418.14,246.476,393.846,216.615,393.846z"
          data-original="#6972DA"
          className="active-path"
          data-old_color="#6972DA"
        />
        <g>
          <path
            style={{
              fill: '#FFB229',
            }}
            d="M393.846,393.846c-29.86,0-54.154,24.293-54.154,54.154c0,29.86,24.293,54.154,54.154,54.154   c29.86,0,54.154-24.293,54.154-54.154C448,418.14,423.707,393.846,393.846,393.846z"
            data-original="#4F5EC6"
            className=""
            data-old_color="#4F5EC6"
          />
          <path
            style={{
              fill: '#FFB229',
            }}
            d="M451.938,344.616H256v29.538h195.938c8.157,0,14.769-6.613,14.769-14.769   C466.708,351.228,460.095,344.616,451.938,344.616z"
            data-original="#4F5EC6"
            className=""
            data-old_color="#4F5EC6"
          />
        </g>
        <path
          style={{
            fill: '#81B29A',
          }}
          d="M497.231,68.923H256v226.462h196.923c6.908,0,12.893-4.788,14.409-11.527L511.64,86.935  c0.986-4.378-0.073-8.965-2.876-12.469C505.96,70.962,501.718,68.923,497.231,68.923z"
          data-original="#007FDD"
          className=""
          data-old_color="#007FDD"
        />
      </g>
    </svg>
  );
};

export const AddToCartButton = () => {
  return (
    <svg viewBox="0 0 26 26">
      <path
        d="M25.856,10.641C21.673,19.5,20.312,19.5,19.5,19.5h-8c-2.802,0-4.949-1.648-5.47-4.2   c-0.016-0.078-1.6-7.853-2.005-10.025C3.826,4.21,3.32,3.5,1.5,3.5C0.671,3.5,0,2.829,0,2s0.671-1.5,1.5-1.5   c3.02,0,4.964,1.5,5.474,4.224c0.401,2.149,1.98,9.898,1.996,9.977c0.319,1.566,1.722,1.8,2.53,1.8h7.605   c0.817-0.878,2.679-4.261,4.038-7.141c0.354-0.749,1.249-1.068,1.997-0.716C25.89,8.997,26.21,9.891,25.856,10.641z M10.5,20.5   C9.119,20.5,8,21.619,8,23s1.119,2.5,2.5,2.5S13,24.381,13,23S11.881,20.5,10.5,20.5z M19.5,20.5c-1.381,0-2.5,1.119-2.5,2.5   s1.119,2.5,2.5,2.5S22,24.381,22,23S20.881,20.5,19.5,20.5z M14.663,12.344c0.1,0.081,0.223,0.12,0.346,0.12   s0.244-0.039,0.346-0.12c0.1-0.079,2.828-2.74,4.316-4.954c0.115-0.172,0.126-0.392,0.028-0.574   c-0.095-0.181-0.285-0.295-0.49-0.295h-2.226c0,0-0.217-4.291-0.359-4.49c-0.206-0.294-1.057-0.494-1.616-0.494   c-0.561,0-1.427,0.2-1.634,0.494c-0.141,0.198-0.328,4.49-0.328,4.49h-2.255c-0.206,0-0.395,0.114-0.492,0.295   c-0.097,0.182-0.086,0.403,0.028,0.574C11.816,9.605,14.564,12.265,14.663,12.344z"
        data-original="#030104"
        data-old_color="#030104"
      />
    </svg>
  );
};

export const RemoveFromCartButton = () => {
  return (
    <svg viewBox="0 0 390 390">
      <g>
        <g>
          <path
            d="M161.319,322.763c-17.201,0-31.136,13.934-31.136,31.12c0,17.189,13.935,31.124,31.136,31.124   c17.184,0,31.121-13.935,31.121-31.124C192.44,336.696,178.503,322.763,161.319,322.763z"
            data-original="#000000"
            className="active-path"
            data-old_color="#000000"
          />
          <path
            d="M275.685,322.763c-17.193,0-31.13,13.934-31.13,31.12c0,17.189,13.937,31.124,31.13,31.124   c17.192,0,31.118-13.935,31.118-31.124C306.803,336.696,292.877,322.763,275.685,322.763z"
            data-original="#000000"
            className="active-path"
            data-old_color="#000000"
          />
          <path
            d="M387.262,112.516c-2.899-4.223-7.699-6.751-12.833-6.751h-53.464c-1.198-4.189-3.082-8.227-5.667-11.932l-50.037-71.728   c-7.477-10.716-19.74-17.113-32.806-17.113c-13.066,0-25.33,6.397-32.807,17.114l-50.037,71.727   c-2.584,3.705-4.469,7.741-5.667,11.931H96.162L80.165,64.914c-2.079-5.293-5.805-9.769-10.633-12.759L40.111,33.933   C27.782,26.295,11.58,30.097,3.94,42.436C-3.699,54.773,0.107,70.97,12.442,78.61l21.976,13.611l75.851,196.541   c2.313,6.012,8.092,9.975,14.532,9.975h187.39c6.44,0,12.22-3.963,14.527-9.975l62.246-161.852   C390.803,122.129,390.168,116.742,387.262,112.516z M295.871,123.657c-2.585,4.955-7.71,8.062-13.299,8.062h-21.036v62.143   c0,8.284-6.716,15-15,15h-28c-8.284,0-15-6.716-15-15v-62.144H182.5c-5.589,0-10.714-3.107-13.299-8.063   c-2.585-4.955-2.201-10.936,0.996-15.52l50.036-71.726c2.806-4.021,7.399-6.418,12.303-6.418c4.903,0,9.497,2.396,12.303,6.418   l50.036,71.727C298.072,112.722,298.456,118.702,295.871,123.657z"
            data-original="#000000"
            className="active-path"
            data-old_color="#000000"
          />
        </g>
      </g>
    </svg>
  );
};

export const ChangePageButton = ({ type, onChangePage }) => {
  return (
    <button className={styles.changePage} type="button" onClick={onChangePage}>
      {type}
    </button>
  );
};
