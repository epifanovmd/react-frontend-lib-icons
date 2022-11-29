import React, { FC, memo } from 'react';
import CloseCircleOutlineSvg from '../svg/close-circle-outline.svg';

export interface ICloseCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CloseCircleOutlineIcon: FC<ICloseCircleOutlineIconProps> = memo(props => {
  return <CloseCircleOutlineSvg {...props} />;
});
