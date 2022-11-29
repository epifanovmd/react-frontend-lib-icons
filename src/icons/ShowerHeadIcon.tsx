import React, { FC, memo } from 'react';
import ShowerHeadSvg from '../svg/shower-head.svg';

export interface IShowerHeadIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ShowerHeadIcon: FC<IShowerHeadIconProps> = memo(props => {
  return <ShowerHeadSvg {...props} />;
});
