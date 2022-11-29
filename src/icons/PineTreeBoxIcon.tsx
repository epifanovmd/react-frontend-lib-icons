import React, { FC, memo } from 'react';
import PineTreeBoxSvg from '../svg/pine-tree-box.svg';

export interface IPineTreeBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PineTreeBoxIcon: FC<IPineTreeBoxIconProps> = memo(props => {
  return <PineTreeBoxSvg {...props} />;
});
