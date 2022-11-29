import React, { FC, memo } from 'react';
import ViewCompactSvg from '../svg/view-compact.svg';

export interface IViewCompactIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewCompactIcon: FC<IViewCompactIconProps> = memo(props => {
  return <ViewCompactSvg {...props} />;
});
