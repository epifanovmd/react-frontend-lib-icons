import React, { FC, memo } from 'react';
import DotsVerticalCircleOutlineSvg from '../svg/dots-vertical-circle-outline.svg';

export interface IDotsVerticalCircleOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DotsVerticalCircleOutlineIcon: FC<IDotsVerticalCircleOutlineIconProps> = memo(props => {
  return <DotsVerticalCircleOutlineSvg {...props} />;
});
