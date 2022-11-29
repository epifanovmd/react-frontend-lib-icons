import React, { FC, memo } from 'react';
import ViewGridSvg from '../svg/view-grid.svg';

export interface IViewGridIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewGridIcon: FC<IViewGridIconProps> = memo(props => {
  return <ViewGridSvg {...props} />;
});
