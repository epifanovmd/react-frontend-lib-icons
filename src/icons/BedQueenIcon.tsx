import React, { FC, memo } from 'react';
import BedQueenSvg from '../svg/bed-queen.svg';

export interface IBedQueenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BedQueenIcon: FC<IBedQueenIconProps> = memo(props => {
  return <BedQueenSvg {...props} />;
});
