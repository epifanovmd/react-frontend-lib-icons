import React, { FC, memo } from 'react';
import SwitchSvg from '../svg/switch.svg';

export interface ISwitchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SwitchIcon: FC<ISwitchIconProps> = memo(props => {
  return <SwitchSvg {...props} />;
});
