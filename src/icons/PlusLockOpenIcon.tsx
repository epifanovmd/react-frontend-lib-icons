import React, { FC, memo } from 'react';
import PlusLockOpenSvg from '../svg/plus-lock-open.svg';

export interface IPlusLockOpenIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const PlusLockOpenIcon: FC<IPlusLockOpenIconProps> = memo(props => {
  return <PlusLockOpenSvg {...props} />;
});
