import React, { FC, memo } from 'react';
import ViewGridOutlineSvg from '../svg/view-grid-outline.svg';

export interface IViewGridOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewGridOutlineIcon: FC<IViewGridOutlineIconProps> = memo(props => {
  return <ViewGridOutlineSvg {...props} />;
});
