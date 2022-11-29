import React, { FC, memo } from 'react';
import CropSquareSvg from '../svg/crop-square.svg';

export interface ICropSquareIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CropSquareIcon: FC<ICropSquareIconProps> = memo(props => {
  return <CropSquareSvg {...props} />;
});
