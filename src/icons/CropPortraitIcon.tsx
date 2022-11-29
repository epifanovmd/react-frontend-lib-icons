import React, { FC, memo } from 'react';
import CropPortraitSvg from '../svg/crop-portrait.svg';

export interface ICropPortraitIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CropPortraitIcon: FC<ICropPortraitIconProps> = memo(props => {
  return <CropPortraitSvg {...props} />;
});
