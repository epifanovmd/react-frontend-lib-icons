import React, { FC, memo } from 'react';
import ForestSvg from '../svg/forest.svg';

export interface IForestIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ForestIcon: FC<IForestIconProps> = memo(props => {
  return <ForestSvg {...props} />;
});
