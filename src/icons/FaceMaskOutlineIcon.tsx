import React, { FC, memo } from 'react';
import FaceMaskOutlineSvg from '../svg/face-mask-outline.svg';

export interface IFaceMaskOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const FaceMaskOutlineIcon: FC<IFaceMaskOutlineIconProps> = memo(props => {
  return <FaceMaskOutlineSvg {...props} />;
});
