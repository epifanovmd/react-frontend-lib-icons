import React, { FC, memo } from 'react';
import HelpCircleOutlineSvg from '../svg/help-circle-outline.svg';

export interface IHelpCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HelpCircleOutlineIcon: FC<IHelpCircleOutlineIconProps> = memo(props => {
  return <HelpCircleOutlineSvg {...props} />;
});
