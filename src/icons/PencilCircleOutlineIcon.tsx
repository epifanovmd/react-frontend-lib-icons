import React, { FC, memo } from 'react';
import PencilCircleOutlineSvg from '../svg/pencil-circle-outline.svg';

export interface IPencilCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PencilCircleOutlineIcon: FC<IPencilCircleOutlineIconProps> = memo(props => {
  return <PencilCircleOutlineSvg {...props} />;
});
