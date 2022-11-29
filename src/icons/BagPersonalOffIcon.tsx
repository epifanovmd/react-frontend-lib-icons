import React, { FC, memo } from 'react';
import BagPersonalOffSvg from '../svg/bag-personal-off.svg';

export interface IBagPersonalOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BagPersonalOffIcon: FC<IBagPersonalOffIconProps> = memo(props => {
  return <BagPersonalOffSvg {...props} />;
});
