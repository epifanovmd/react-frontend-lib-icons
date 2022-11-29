import React, { FC, memo } from 'react';
import ViewArrayOutlineSvg from '../svg/view-array-outline.svg';

export interface IViewArrayOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewArrayOutlineIcon: FC<IViewArrayOutlineIconProps> = memo(props => {
  return <ViewArrayOutlineSvg {...props} />;
});
