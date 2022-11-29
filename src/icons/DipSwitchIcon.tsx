import React, { FC, memo } from 'react';
import DipSwitchSvg from '../svg/dip-switch.svg';

export interface IDipSwitchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DipSwitchIcon: FC<IDipSwitchIconProps> = memo(props => {
  return <DipSwitchSvg {...props} />;
});
