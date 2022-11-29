import React, { FC, memo } from 'react';
import StackpathSvg from '../svg/stackpath.svg';

export interface IStackpathIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const StackpathIcon: FC<IStackpathIconProps> = memo(props => {
  return <StackpathSvg {...props} />;
});
