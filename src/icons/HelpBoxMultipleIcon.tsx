import React, { FC, memo } from 'react';
import HelpBoxMultipleSvg from '../svg/help-box-multiple.svg';

export interface IHelpBoxMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HelpBoxMultipleIcon: FC<IHelpBoxMultipleIconProps> = memo(props => {
  return <HelpBoxMultipleSvg {...props} />;
});
