import React, { FC, memo } from 'react';
import ElephantSvg from '../svg/elephant.svg';

export interface IElephantIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ElephantIcon: FC<IElephantIconProps> = memo(props => {
  return <ElephantSvg {...props} />;
});
