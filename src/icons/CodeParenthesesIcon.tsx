import React, { FC, memo } from 'react';
import CodeParenthesesSvg from '../svg/code-parentheses.svg';

export interface ICodeParenthesesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CodeParenthesesIcon: FC<ICodeParenthesesIconProps> = memo(props => {
  return <CodeParenthesesSvg {...props} />;
});
