import React, { FC, memo } from 'react';
import CodeArraySvg from '../svg/code-array.svg';

export interface ICodeArrayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CodeArrayIcon: FC<ICodeArrayIconProps> = memo(props => {
  return <CodeArraySvg {...props} />;
});
