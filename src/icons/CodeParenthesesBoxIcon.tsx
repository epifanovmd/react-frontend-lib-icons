import React, { FC, memo } from 'react';
import CodeParenthesesBoxSvg from '../svg/code-parentheses-box.svg';

export interface ICodeParenthesesBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CodeParenthesesBoxIcon: FC<ICodeParenthesesBoxIconProps> = memo(props => {
  return <CodeParenthesesBoxSvg {...props} />;
});
