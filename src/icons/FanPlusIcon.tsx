import React, { FC, memo } from 'react';
import FanPlusSvg from '../svg/fan-plus.svg';

export interface IFanPlusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FanPlusIcon: FC<IFanPlusIconProps> = memo(props => {
  return <FanPlusSvg {...props} />;
});
