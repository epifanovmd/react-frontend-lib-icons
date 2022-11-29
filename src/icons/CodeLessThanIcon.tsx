import React, { FC, memo } from 'react';
import CodeLessThanSvg from '../svg/code-less-than.svg';

export interface ICodeLessThanIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CodeLessThanIcon: FC<ICodeLessThanIconProps> = memo(props => {
  return <CodeLessThanSvg {...props} />;
});
