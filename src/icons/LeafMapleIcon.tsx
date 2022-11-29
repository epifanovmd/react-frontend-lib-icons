import React, { FC, memo } from 'react';
import LeafMapleSvg from '../svg/leaf-maple.svg';

export interface ILeafMapleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LeafMapleIcon: FC<ILeafMapleIconProps> = memo(props => {
  return <LeafMapleSvg {...props} />;
});
