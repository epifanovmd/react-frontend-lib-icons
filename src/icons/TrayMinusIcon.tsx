import React, { FC, memo } from 'react';
import TrayMinusSvg from '../svg/tray-minus.svg';

export interface ITrayMinusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const TrayMinusIcon: FC<ITrayMinusIconProps> = memo(props => {
  return <TrayMinusSvg {...props} />;
});
