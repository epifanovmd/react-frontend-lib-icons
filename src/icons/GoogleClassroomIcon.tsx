import React, { FC, memo } from 'react';
import GoogleClassroomSvg from '../svg/google-classroom.svg';

export interface IGoogleClassroomIconProps
  extends React.HTMLAttributes<HTMLOrSVGElement> {}

export const GoogleClassroomIcon: FC<IGoogleClassroomIconProps> = memo(props => {
  return <GoogleClassroomSvg {...props} />;
});
