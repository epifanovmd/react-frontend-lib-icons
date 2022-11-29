import React, { FC, memo } from 'react';
import HelpRhombusOutlineSvg from '../svg/help-rhombus-outline.svg';

export interface IHelpRhombusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HelpRhombusOutlineIcon: FC<IHelpRhombusOutlineIconProps> = memo(props => {
  return <HelpRhombusOutlineSvg {...props} />;
});
