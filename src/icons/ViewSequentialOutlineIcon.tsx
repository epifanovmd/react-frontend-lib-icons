import React, { FC, memo } from 'react';
import ViewSequentialOutlineSvg from '../svg/view-sequential-outline.svg';

export interface IViewSequentialOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewSequentialOutlineIcon: FC<IViewSequentialOutlineIconProps> = memo(props => {
  return <ViewSequentialOutlineSvg {...props} />;
});
