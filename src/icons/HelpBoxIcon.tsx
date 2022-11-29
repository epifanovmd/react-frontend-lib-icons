import React, { FC, memo } from 'react';
import HelpBoxSvg from '../svg/help-box.svg';

export interface IHelpBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HelpBoxIcon: FC<IHelpBoxIconProps> = memo(props => {
  return <HelpBoxSvg {...props} />;
});
