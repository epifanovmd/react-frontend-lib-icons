import React, { FC, memo } from 'react';
import NintendoSwitchSvg from '../svg/nintendo-switch.svg';

export interface INintendoSwitchIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const NintendoSwitchIcon: FC<INintendoSwitchIconProps> = memo(props => {
  return <NintendoSwitchSvg {...props} />;
});
