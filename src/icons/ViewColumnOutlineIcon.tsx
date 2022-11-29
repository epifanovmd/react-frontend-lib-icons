import React, { FC, memo } from 'react';
import ViewColumnOutlineSvg from '../svg/view-column-outline.svg';

export interface IViewColumnOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewColumnOutlineIcon: FC<IViewColumnOutlineIconProps> = memo(props => {
  return <ViewColumnOutlineSvg {...props} />;
});
