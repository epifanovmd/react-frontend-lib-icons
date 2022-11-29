import React, { FC, memo } from 'react';
import HelpBoxOutlineSvg from '../svg/help-box-outline.svg';

export interface IHelpBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HelpBoxOutlineIcon: FC<IHelpBoxOutlineIconProps> = memo(props => {
  return <HelpBoxOutlineSvg {...props} />;
});
