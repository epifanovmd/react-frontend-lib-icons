import React, { FC, memo } from 'react';
import CodeNotEqualSvg from '../svg/code-not-equal.svg';

export interface ICodeNotEqualIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CodeNotEqualIcon: FC<ICodeNotEqualIconProps> = memo(props => {
  return <CodeNotEqualSvg {...props} />;
});
