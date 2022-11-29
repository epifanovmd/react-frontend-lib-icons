import React, { FC, memo } from 'react';
import ApplicationBracketsSvg from '../svg/application-brackets.svg';

export interface IApplicationBracketsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ApplicationBracketsIcon: FC<IApplicationBracketsIconProps> = memo(props => {
  return <ApplicationBracketsSvg {...props} />;
});
