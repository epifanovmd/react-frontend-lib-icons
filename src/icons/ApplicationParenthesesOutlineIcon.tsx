import React, { FC, memo } from 'react';
import ApplicationParenthesesOutlineSvg from '../svg/application-parentheses-outline.svg';

export interface IApplicationParenthesesOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ApplicationParenthesesOutlineIcon: FC<IApplicationParenthesesOutlineIconProps> = memo(props => {
  return <ApplicationParenthesesOutlineSvg {...props} />;
});
