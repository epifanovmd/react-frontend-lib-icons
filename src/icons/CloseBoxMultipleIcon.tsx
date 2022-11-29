import React, { FC, memo } from 'react';
import CloseBoxMultipleSvg from '../svg/close-box-multiple.svg';

export interface ICloseBoxMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloseBoxMultipleIcon: FC<ICloseBoxMultipleIconProps> = memo(props => {
  return <CloseBoxMultipleSvg {...props} />;
});
