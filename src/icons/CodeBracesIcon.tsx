import React, { FC, memo } from 'react';
import CodeBracesSvg from '../svg/code-braces.svg';

export interface ICodeBracesIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CodeBracesIcon: FC<ICodeBracesIconProps> = memo(props => {
  return <CodeBracesSvg {...props} />;
});
