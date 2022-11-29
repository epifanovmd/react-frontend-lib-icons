import React, { FC, memo } from 'react';
import OfferSvg from '../svg/offer.svg';

export interface IOfferIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OfferIcon: FC<IOfferIconProps> = memo(props => {
  return <OfferSvg {...props} />;
});
