import React, { FC, memo } from 'react';
import ToggleSwitchVariantSvg from '../svg/toggle-switch-variant.svg';

export interface IToggleSwitchVariantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ToggleSwitchVariantIcon: FC<IToggleSwitchVariantIconProps> = memo(props => {
  return <ToggleSwitchVariantSvg {...props} />;
});
