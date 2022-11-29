import React, { FC, memo } from 'react';
import CodeBracketsSvg from '../svg/code-brackets.svg';

export interface ICodeBracketsIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CodeBracketsIcon: FC<ICodeBracketsIconProps> = memo(props => {
  return <CodeBracketsSvg {...props} />;
});
