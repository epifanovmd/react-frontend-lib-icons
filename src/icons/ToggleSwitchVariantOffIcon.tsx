import React, { FC, memo } from 'react';
import ToggleSwitchVariantOffSvg from '../svg/toggle-switch-variant-off.svg';

export interface IToggleSwitchVariantOffIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToggleSwitchVariantOffIcon: FC<IToggleSwitchVariantOffIconProps> = memo(props => {
  return <ToggleSwitchVariantOffSvg {...props} />;
});
