import React, { FC, memo } from 'react';
import CloseSvg from '../svg/close.svg';

export interface ICloseIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloseIcon: FC<ICloseIconProps> = memo(props => {
  return <CloseSvg {...props} />;
});
