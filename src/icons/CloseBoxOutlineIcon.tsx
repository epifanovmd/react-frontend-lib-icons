import React, { FC, memo } from 'react';
import CloseBoxOutlineSvg from '../svg/close-box-outline.svg';

export interface ICloseBoxOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloseBoxOutlineIcon: FC<ICloseBoxOutlineIconProps> = memo(props => {
  return <CloseBoxOutlineSvg {...props} />;
});
