import React, { FC, memo } from 'react';
import CloseBoxSvg from '../svg/close-box.svg';

export interface ICloseBoxIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloseBoxIcon: FC<ICloseBoxIconProps> = memo(props => {
  return <CloseBoxSvg {...props} />;
});
