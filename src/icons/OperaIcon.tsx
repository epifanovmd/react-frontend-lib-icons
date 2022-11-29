import React, { FC, memo } from 'react';
import OperaSvg from '../svg/opera.svg';

export interface IOperaIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const OperaIcon: FC<IOperaIconProps> = memo(props => {
  return <OperaSvg {...props} />;
});
