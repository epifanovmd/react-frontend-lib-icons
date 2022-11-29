import React, { FC, memo } from 'react';
import PineTreeSvg from '../svg/pine-tree.svg';

export interface IPineTreeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PineTreeIcon: FC<IPineTreeIconProps> = memo(props => {
  return <PineTreeSvg {...props} />;
});
