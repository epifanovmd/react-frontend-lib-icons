import React, { FC, memo } from 'react';
import CloseCircleMultipleSvg from '../svg/close-circle-multiple.svg';

export interface ICloseCircleMultipleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloseCircleMultipleIcon: FC<ICloseCircleMultipleIconProps> = memo(props => {
  return <CloseCircleMultipleSvg {...props} />;
});
