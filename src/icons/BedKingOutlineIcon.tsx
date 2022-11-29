import React, { FC, memo } from 'react';
import BedKingOutlineSvg from '../svg/bed-king-outline.svg';

export interface IBedKingOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BedKingOutlineIcon: FC<IBedKingOutlineIconProps> = memo(props => {
  return <BedKingOutlineSvg {...props} />;
});
