import React, { FC, memo } from 'react';
import PencilRemoveOutlineSvg from '../svg/pencil-remove-outline.svg';

export interface IPencilRemoveOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PencilRemoveOutlineIcon: FC<IPencilRemoveOutlineIconProps> = memo(props => {
  return <PencilRemoveOutlineSvg {...props} />;
});
