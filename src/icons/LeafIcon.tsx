import React, { FC, memo } from 'react';
import LeafSvg from '../svg/leaf.svg';

export interface ILeafIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LeafIcon: FC<ILeafIconProps> = memo(props => {
  return <LeafSvg {...props} />;
});
