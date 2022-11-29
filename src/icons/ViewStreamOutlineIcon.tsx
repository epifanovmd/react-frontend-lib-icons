import React, { FC, memo } from 'react';
import ViewStreamOutlineSvg from '../svg/view-stream-outline.svg';

export interface IViewStreamOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewStreamOutlineIcon: FC<IViewStreamOutlineIconProps> = memo(props => {
  return <ViewStreamOutlineSvg {...props} />;
});
