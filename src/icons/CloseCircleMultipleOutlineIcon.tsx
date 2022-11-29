import React, { FC, memo } from 'react';
import CloseCircleMultipleOutlineSvg from '../svg/close-circle-multiple-outline.svg';

export interface ICloseCircleMultipleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloseCircleMultipleOutlineIcon: FC<ICloseCircleMultipleOutlineIconProps> = memo(props => {
  return <CloseCircleMultipleOutlineSvg {...props} />;
});
