import React, { FC, memo } from 'react';
import LockOpenPlusOutlineSvg from '../svg/lock-open-plus-outline.svg';

export interface ILockOpenPlusOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const LockOpenPlusOutlineIcon: FC<ILockOpenPlusOutlineIconProps> = memo(props => {
  return <LockOpenPlusOutlineSvg {...props} />;
});
