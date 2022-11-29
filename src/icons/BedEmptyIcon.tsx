import React, { FC, memo } from 'react';
import BedEmptySvg from '../svg/bed-empty.svg';

export interface IBedEmptyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BedEmptyIcon: FC<IBedEmptyIconProps> = memo(props => {
  return <BedEmptySvg {...props} />;
});
