import React from 'react';
import PropTypes from 'prop-types';
import { getPriceWithCurrency } from '../../utils/getPriceWithCurrency';
import cn from 'classnames';

const Listing = ({ items = [] }) => {
  return (
    <div className="item-list">
      {items.map(item => {
        const { listing_id, url, MainImage, title, currency_code, price, quantity, state } = item;

        if (state !== 'active') {
          return null;
        }

        const currentTitle = title.length > 50 ? `${title.substr(0, 50)}...` : title;

        return (
          <div key={listing_id} className="item">
            <div className="item-image">
              <a href={url}>
                <img src={MainImage.url_570xN} alt={currentTitle} />
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{currentTitle}</p>
              <p className="item-price">{getPriceWithCurrency(price, currency_code)}</p>
              <p className={cn('item-quantity', {
                'level-low': quantity <= 10,
                'level-medium': quantity > 10 && quantity <= 20,
                'level-high': quantity > 20,
              })}>
                {quantity} left</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

Listing.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
      listing_id: PropTypes.number,
      url: PropTypes.string,
      MainImage: PropTypes.shape({
        url_570xN: PropTypes.string,
      }),
      title: PropTypes.string,
      currency_code: PropTypes.string,
      price: PropTypes.string,
      quantity: PropTypes.number,
      state: PropTypes.string,
    }),
  ).isRequired,
};

export default Listing;
