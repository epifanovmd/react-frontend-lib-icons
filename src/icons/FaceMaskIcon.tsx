import React, { FC, memo } from 'react';
import FaceMaskSvg from '../svg/face-mask.svg';

export interface IFaceMaskIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FaceMaskIcon: FC<IFaceMaskIconProps> = memo(props => {
  return <FaceMaskSvg {...props} />;
});
