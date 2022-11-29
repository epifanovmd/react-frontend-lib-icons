import React, { FC, memo } from 'react';
import PencilCircleSvg from '../svg/pencil-circle.svg';

export interface IPencilCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PencilCircleIcon: FC<IPencilCircleIconProps> = memo(props => {
  return <PencilCircleSvg {...props} />;
});
