import React, { FC, memo } from 'react';
import CropLandscapeSvg from '../svg/crop-landscape.svg';

export interface ICropLandscapeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CropLandscapeIcon: FC<ICropLandscapeIconProps> = memo(props => {
  return <CropLandscapeSvg {...props} />;
});
