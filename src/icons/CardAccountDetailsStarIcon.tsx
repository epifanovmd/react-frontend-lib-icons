import React, { FC, memo } from 'react';
import CardAccountDetailsStarSvg from '../svg/card-account-details-star.svg';

export interface ICardAccountDetailsStarIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardAccountDetailsStarIcon: FC<ICardAccountDetailsStarIconProps> = memo(props => {
  return <CardAccountDetailsStarSvg {...props} />;
});
