import React, { FC, memo } from 'react';
import BedKingSvg from '../svg/bed-king.svg';

export interface IBedKingIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BedKingIcon: FC<IBedKingIconProps> = memo(props => {
  return <BedKingSvg {...props} />;
});
