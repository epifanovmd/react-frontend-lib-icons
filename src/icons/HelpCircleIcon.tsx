import React, { FC, memo } from 'react';
import HelpCircleSvg from '../svg/help-circle.svg';

export interface IHelpCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HelpCircleIcon: FC<IHelpCircleIconProps> = memo(props => {
  return <HelpCircleSvg {...props} />;
});
