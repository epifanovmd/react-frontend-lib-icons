import React, { FC, memo } from 'react';
import DoorbellVideoSvg from '../svg/doorbell-video.svg';

export interface IDoorbellVideoIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const DoorbellVideoIcon: FC<IDoorbellVideoIconProps> = memo(props => {
  return <DoorbellVideoSvg {...props} />;
});
