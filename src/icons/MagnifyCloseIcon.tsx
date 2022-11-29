import React, { FC, memo } from 'react';
import MagnifyCloseSvg from '../svg/magnify-close.svg';

export interface IMagnifyCloseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const MagnifyCloseIcon: FC<IMagnifyCloseIconProps> = memo(props => {
  return <MagnifyCloseSvg {...props} />;
});
