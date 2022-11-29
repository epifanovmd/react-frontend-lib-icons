import React, { FC, memo } from 'react';
import PineTreeFireSvg from '../svg/pine-tree-fire.svg';

export interface IPineTreeFireIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PineTreeFireIcon: FC<IPineTreeFireIconProps> = memo(props => {
  return <PineTreeFireSvg {...props} />;
});
