import React, { FC, memo } from 'react';
import PencilLockOutlineSvg from '../svg/pencil-lock-outline.svg';

export interface IPencilLockOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PencilLockOutlineIcon: FC<IPencilLockOutlineIconProps> = memo(props => {
  return <PencilLockOutlineSvg {...props} />;
});
