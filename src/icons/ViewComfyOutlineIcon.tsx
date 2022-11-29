import React, { FC, memo } from 'react';
import ViewComfyOutlineSvg from '../svg/view-comfy-outline.svg';

export interface IViewComfyOutlineIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const ViewComfyOutlineIcon: FC<IViewComfyOutlineIconProps> = memo(props => {
  return <ViewComfyOutlineSvg {...props} />;
});
