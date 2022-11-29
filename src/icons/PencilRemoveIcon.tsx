import React, { FC, memo } from 'react';
import PencilRemoveSvg from '../svg/pencil-remove.svg';

export interface IPencilRemoveIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PencilRemoveIcon: FC<IPencilRemoveIconProps> = memo(props => {
  return <PencilRemoveSvg {...props} />;
});
