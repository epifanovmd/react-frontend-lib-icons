import React, { FC, memo } from 'react';
import BatterySyncOutlineSvg from '../svg/battery-sync-outline.svg';

export interface IBatterySyncOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const BatterySyncOutlineIcon: FC<IBatterySyncOutlineIconProps> = memo(props => {
  return <BatterySyncOutlineSvg {...props} />;
});
