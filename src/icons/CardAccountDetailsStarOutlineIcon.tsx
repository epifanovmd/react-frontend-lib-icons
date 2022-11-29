import React, { FC, memo } from 'react';
import CardAccountDetailsStarOutlineSvg from '../svg/card-account-details-star-outline.svg';

export interface ICardAccountDetailsStarOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CardAccountDetailsStarOutlineIcon: FC<ICardAccountDetailsStarOutlineIconProps> = memo(props => {
  return <CardAccountDetailsStarOutlineSvg {...props} />;
});
