import React, { FC, memo } from 'react';
import HelpRhombusSvg from '../svg/help-rhombus.svg';

export interface IHelpRhombusIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HelpRhombusIcon: FC<IHelpRhombusIconProps> = memo(props => {
  return <HelpRhombusSvg {...props} />;
});
