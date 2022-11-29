import React, { FC, memo } from 'react';
import CodeLessThanOrEqualSvg from '../svg/code-less-than-or-equal.svg';

export interface ICodeLessThanOrEqualIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CodeLessThanOrEqualIcon: FC<ICodeLessThanOrEqualIconProps> = memo(props => {
  return <CodeLessThanOrEqualSvg {...props} />;
});
