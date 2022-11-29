import React, { FC, memo } from 'react';
import CircleEditOutlineSvg from '../svg/circle-edit-outline.svg';

export interface ICircleEditOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const CircleEditOutlineIcon: FC<ICircleEditOutlineIconProps> = memo(props => {
  return <CircleEditOutlineSvg {...props} />;
});
