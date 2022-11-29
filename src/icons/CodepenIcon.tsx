import React, { FC, memo } from 'react';
import CodepenSvg from '../svg/codepen.svg';

export interface ICodepenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CodepenIcon: FC<ICodepenIconProps> = memo(props => {
  return <CodepenSvg {...props} />;
});
