import React, { FC, memo } from 'react';
import CodeEqualSvg from '../svg/code-equal.svg';

export interface ICodeEqualIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CodeEqualIcon: FC<ICodeEqualIconProps> = memo(props => {
  return <CodeEqualSvg {...props} />;
});
