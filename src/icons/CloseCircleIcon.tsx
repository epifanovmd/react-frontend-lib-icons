import React, { FC, memo } from 'react';
import CloseCircleSvg from '../svg/close-circle.svg';

export interface ICloseCircleIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloseCircleIcon: FC<ICloseCircleIconProps> = memo(props => {
  return <CloseCircleSvg {...props} />;
});
