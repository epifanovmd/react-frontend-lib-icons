import React, { FC, memo } from 'react';
import CodeGreaterThanOrEqualSvg from '../svg/code-greater-than-or-equal.svg';

export interface ICodeGreaterThanOrEqualIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CodeGreaterThanOrEqualIcon: FC<ICodeGreaterThanOrEqualIconProps> = memo(props => {
  return <CodeGreaterThanOrEqualSvg {...props} />;
});
