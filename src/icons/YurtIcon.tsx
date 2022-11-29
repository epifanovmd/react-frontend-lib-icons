import React, { FC, memo } from 'react';
import YurtSvg from '../svg/yurt.svg';

export interface IYurtIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const YurtIcon: FC<IYurtIconProps> = memo(props => {
  return <YurtSvg {...props} />;
});
