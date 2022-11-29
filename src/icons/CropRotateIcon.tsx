import React, { FC, memo } from 'react';
import CropRotateSvg from '../svg/crop-rotate.svg';

export interface ICropRotateIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CropRotateIcon: FC<ICropRotateIconProps> = memo(props => {
  return <CropRotateSvg {...props} />;
});
