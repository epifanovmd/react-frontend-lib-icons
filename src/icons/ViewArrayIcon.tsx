import React, { FC, memo } from 'react';
import ViewArraySvg from '../svg/view-array.svg';

export interface IViewArrayIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewArrayIcon: FC<IViewArrayIconProps> = memo(props => {
  return <ViewArraySvg {...props} />;
});
