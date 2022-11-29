import React, { FC, memo } from 'react';
import ViewCompactOutlineSvg from '../svg/view-compact-outline.svg';

export interface IViewCompactOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewCompactOutlineIcon: FC<IViewCompactOutlineIconProps> = memo(props => {
  return <ViewCompactOutlineSvg {...props} />;
});
