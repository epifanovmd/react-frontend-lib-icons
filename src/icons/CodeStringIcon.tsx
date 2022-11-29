import React, { FC, memo } from 'react';
import CodeStringSvg from '../svg/code-string.svg';

export interface ICodeStringIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CodeStringIcon: FC<ICodeStringIconProps> = memo(props => {
  return <CodeStringSvg {...props} />;
});
