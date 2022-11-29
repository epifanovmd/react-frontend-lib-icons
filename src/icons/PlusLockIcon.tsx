import React, { FC, memo } from 'react';
import PlusLockSvg from '../svg/plus-lock.svg';

export interface IPlusLockIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlusLockIcon: FC<IPlusLockIconProps> = memo(props => {
  return <PlusLockSvg {...props} />;
});
