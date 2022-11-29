import React, { FC, memo } from 'react';
import HelpSvg from '../svg/help.svg';

export interface IHelpIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const HelpIcon: FC<IHelpIconProps> = memo(props => {
  return <HelpSvg {...props} />;
});
