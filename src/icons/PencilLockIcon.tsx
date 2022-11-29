import React, { FC, memo } from 'react';
import PencilLockSvg from '../svg/pencil-lock.svg';

export interface IPencilLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PencilLockIcon: FC<IPencilLockIconProps> = memo(props => {
  return <PencilLockSvg {...props} />;
});
