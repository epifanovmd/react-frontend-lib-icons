import React, { FC, memo } from 'react';
import ViewComfySvg from '../svg/view-comfy.svg';

export interface IViewComfyIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewComfyIcon: FC<IViewComfyIconProps> = memo(props => {
  return <ViewComfySvg {...props} />;
});
