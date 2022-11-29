import React, { FC, memo } from 'react';
import CodeBracesBoxSvg from '../svg/code-braces-box.svg';

export interface ICodeBracesBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CodeBracesBoxIcon: FC<ICodeBracesBoxIconProps> = memo(props => {
  return <CodeBracesBoxSvg {...props} />;
});
