import React, { FC, memo } from 'react';
import StackOverflowSvg from '../svg/stack-overflow.svg';

export interface IStackOverflowIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StackOverflowIcon: FC<IStackOverflowIconProps> = memo(props => {
  return <StackOverflowSvg {...props} />;
});
