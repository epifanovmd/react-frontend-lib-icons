import React, { FC, memo } from 'react';
import ViewSequentialSvg from '../svg/view-sequential.svg';

export interface IViewSequentialIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewSequentialIcon: FC<IViewSequentialIconProps> = memo(props => {
  return <ViewSequentialSvg {...props} />;
});
