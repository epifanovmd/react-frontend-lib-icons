import React, { FC, memo } from 'react';
import PalmTreeSvg from '../svg/palm-tree.svg';

export interface IPalmTreeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PalmTreeIcon: FC<IPalmTreeIconProps> = memo(props => {
  return <PalmTreeSvg {...props} />;
});
