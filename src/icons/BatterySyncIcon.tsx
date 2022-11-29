import React, { FC, memo } from 'react';
import BatterySyncSvg from '../svg/battery-sync.svg';

export interface IBatterySyncIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatterySyncIcon: FC<IBatterySyncIconProps> = memo(props => {
  return <BatterySyncSvg {...props} />;
});
