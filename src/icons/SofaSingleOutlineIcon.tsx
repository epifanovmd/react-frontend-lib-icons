import React, { FC, memo } from 'react';
import SofaSingleOutlineSvg from '../svg/sofa-single-outline.svg';

export interface ISofaSingleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const SofaSingleOutlineIcon: FC<ISofaSingleOutlineIconProps> = memo(props => {
  return <SofaSingleOutlineSvg {...props} />;
});
