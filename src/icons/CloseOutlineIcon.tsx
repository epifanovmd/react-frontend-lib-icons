import React, { FC, memo } from 'react';
import CloseOutlineSvg from '../svg/close-outline.svg';

export interface ICloseOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloseOutlineIcon: FC<ICloseOutlineIconProps> = memo(props => {
  return <CloseOutlineSvg {...props} />;
});
