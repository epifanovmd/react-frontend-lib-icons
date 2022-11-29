import React, { FC, memo } from 'react';
import CropFreeSvg from '../svg/crop-free.svg';

export interface ICropFreeIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CropFreeIcon: FC<ICropFreeIconProps> = memo(props => {
  return <CropFreeSvg {...props} />;
});
