import React, { FC, memo } from 'react';
import CodeGreaterThanSvg from '../svg/code-greater-than.svg';

export interface ICodeGreaterThanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CodeGreaterThanIcon: FC<ICodeGreaterThanIconProps> = memo(props => {
  return <CodeGreaterThanSvg {...props} />;
});
