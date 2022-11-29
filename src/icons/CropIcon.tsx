import React, { FC, memo } from 'react';
import CropSvg from '../svg/crop.svg';

export interface ICropIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CropIcon: FC<ICropIconProps> = memo(props => {
  return <CropSvg {...props} />;
});
