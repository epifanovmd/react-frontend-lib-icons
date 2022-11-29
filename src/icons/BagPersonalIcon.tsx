import React, { FC, memo } from 'react';
import BagPersonalSvg from '../svg/bag-personal.svg';

export interface IBagPersonalIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BagPersonalIcon: FC<IBagPersonalIconProps> = memo(props => {
  return <BagPersonalSvg {...props} />;
});
