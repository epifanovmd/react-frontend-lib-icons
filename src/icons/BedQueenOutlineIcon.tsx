import React, { FC, memo } from 'react';
import BedQueenOutlineSvg from '../svg/bed-queen-outline.svg';

export interface IBedQueenOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BedQueenOutlineIcon: FC<IBedQueenOutlineIconProps> = memo(props => {
  return <BedQueenOutlineSvg {...props} />;
});
