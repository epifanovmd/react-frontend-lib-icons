import React, { FC, memo } from 'react';
import ApplicationParenthesesSvg from '../svg/application-parentheses.svg';

export interface IApplicationParenthesesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ApplicationParenthesesIcon: FC<IApplicationParenthesesIconProps> = memo(props => {
  return <ApplicationParenthesesSvg {...props} />;
});
