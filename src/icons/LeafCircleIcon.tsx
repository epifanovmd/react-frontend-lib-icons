import React, { FC, memo } from 'react';
import LeafCircleSvg from '../svg/leaf-circle.svg';

export interface ILeafCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LeafCircleIcon: FC<ILeafCircleIconProps> = memo(props => {
  return <LeafCircleSvg {...props} />;
});
