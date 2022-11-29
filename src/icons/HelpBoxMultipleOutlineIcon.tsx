import React, { FC, memo } from 'react';
import HelpBoxMultipleOutlineSvg from '../svg/help-box-multiple-outline.svg';

export interface IHelpBoxMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HelpBoxMultipleOutlineIcon: FC<IHelpBoxMultipleOutlineIconProps> = memo(props => {
  return <HelpBoxMultipleOutlineSvg {...props} />;
});
