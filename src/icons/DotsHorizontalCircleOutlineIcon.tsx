import React, { FC, memo } from 'react';
import DotsHorizontalCircleOutlineSvg from '../svg/dots-horizontal-circle-outline.svg';

export interface IDotsHorizontalCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DotsHorizontalCircleOutlineIcon: FC<IDotsHorizontalCircleOutlineIconProps> = memo(props => {
  return <DotsHorizontalCircleOutlineSvg {...props} />;
});
